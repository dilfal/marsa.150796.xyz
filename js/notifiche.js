/* Marsa – notifiche push. Il server (promemoria.150796.xyz) conserva solo un indirizzo anonimo di questo telefono e gli orari scelti:
   le push arrivano senza contenuto e il testo lo sceglie il service worker. Le preferenze stanno in localStorage («marsa.notifiche»);
   l’indirizzo non si salva (si legge sempre da pushManager.getSubscription()). Niente di ciò che scrivi in Marsa viene inviato. */
(function () {
  'use strict';

  var A = window.Marsa = window.Marsa || {};
  var SERVER = 'https://promemoria.150796.xyz';
  var CHIAVE = 'marsa.notifiche';
  var MOMENTI = ['mattina', 'pomeriggio', 'sera'];
  var ORE_DI_PARTENZA = { mattina: '08:00', pomeriggio: '14:30', sera: '21:00' };
  var ATTESA = 10000;
  var ATTESA_RETE = 8000;

  function $(s) { return document.querySelector(s); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function oggi() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  /* «HH:MM» con i minuti arrotondati ai 5; testo non valido → l’ora di riserva */
  function ora5(testo, riserva) {
    var m = /^(\d{1,2}):(\d{2})/.exec(String(testo || ''));
    if (!m) return riserva;
    var o = parseInt(m[1], 10), mi = parseInt(m[2], 10);
    if (o > 23 || mi > 59) return riserva;
    mi = Math.round(mi / 5) * 5;
    if (mi === 60) { mi = 0; o = (o + 1) % 24; }
    return pad(o) + ':' + pad(mi);
  }

  function leggi() {
    var v = null;
    try { v = JSON.parse(localStorage.getItem(CHIAVE)); } catch (e) { v = null; }
    if (!v || typeof v !== 'object' || Array.isArray(v)) v = {};
    var out = { attive: v.attive === true, orari: {}, inviato: typeof v.inviato === 'string' ? v.inviato : '' };
    MOMENTI.forEach(function (m) {
      var x = v.orari && typeof v.orari === 'object' ? v.orari[m] : null;
      out.orari[m] = {
        on: x && typeof x === 'object' ? x.on !== false : true,
        ora: ora5(x && typeof x === 'object' ? x.ora : '', ORE_DI_PARTENZA[m])
      };
    });
    return out;
  }
  function scrivi(p) { try { localStorage.setItem(CHIAVE, JSON.stringify(p)); } catch (e) { /* niente */ } }
  function orariAccesi(p) {
    /* senza doppioni: due momenti arrotondati alla stessa ora contano una volta sola (il server rifiuta le liste con orari ripetuti) */
    return MOMENTI.filter(function (m) { return p.orari[m].on; }).map(function (m) { return p.orari[m].ora; })
      .filter(function (x, i, a) { return a.indexOf(x) === i; });
  }

  function supportato() {
    return typeof navigator !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  }

  /* ---------- schermo ---------- */
  var PREF = leggi();
  var occupato = false;
  function statoAttive() { return orariAccesi(PREF).length ? 'Le notifiche sono attive.' : 'Le notifiche sono attive, ma nessun orario è acceso.'; }
  function stato(testo) { var el = $('#notif-stato'); if (el) el.textContent = testo || ''; }
  function disegna() {
    MOMENTI.forEach(function (m) {
      var c = $('#notif-' + m + '-on'), o = $('#notif-' + m + '-ora');
      if (c) c.checked = PREF.orari[m].on;
      if (o) o.value = PREF.orari[m].ora;
    });
    var t = $('#notif-tasto');
    if (t) { t.textContent = PREF.attive ? 'Disattiva le notifiche' : 'Attiva le notifiche'; t.disabled = occupato; }
  }
  function mostraSupporto() {
    var ok = supportato();
    var box = $('#notif-box'), no = $('#notif-nosupporto');
    if (box) box.hidden = !ok;
    if (no) no.hidden = ok;
    return ok;
  }

  /* ---------- rete e iscrizione ---------- */
  /* ogni chiamata al server ha un tempo massimo: il tasto non resta mai bloccato */
  function chiama(url, opz) {
    var ac = typeof AbortController === 'function' ? new AbortController() : null;
    var t = setTimeout(function () { if (ac) ac.abort(); }, ATTESA_RETE);
    var o = opz || {};
    if (ac) o.signal = ac.signal;
    return fetch(url, o).then(function (r) { clearTimeout(t); return r; }, function (e) { clearTimeout(t); throw e; });
  }
  function pronto() {
    return new Promise(function (resolve, reject) {
      var t = setTimeout(function () { reject(new Error('attesa')); }, ATTESA);
      navigator.serviceWorker.ready.then(function (r) { clearTimeout(t); resolve(r); }, function (e) { clearTimeout(t); reject(e); });
    });
  }
  function chiaveServer() {
    return chiama(SERVER + '/chiave').then(function (r) {
      if (!r.ok) throw new Error('chiave');
      return r.text();
    }).then(function (t) {
      var b = t.trim().replace(/-/g, '+').replace(/_/g, '/');
      while (b.length % 4) b += '=';
      var s = atob(b), u = new Uint8Array(s.length);
      for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
      return u;
    });
  }
  function manda(sub) {
    return chiama(SERVER + '/iscrizione', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ app: 'marsa', endpoint: sub.endpoint, orari: orariAccesi(PREF), fuso: Intl.DateTimeFormat().resolvedOptions().timeZone })
    }).then(function (r) {
      if (!r.ok) throw new Error('iscrizione');
      PREF.inviato = oggi();
      scrivi(PREF);
    });
  }
  function iscriviti(reg) {
    return reg.pushManager.getSubscription().then(function (sub) {
      if (sub) return sub;
      return chiaveServer().then(function (k) { return reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: k }); });
    });
  }

  function attiva() {
    if (Notification.permission === 'denied') { stato('Le notifiche sono bloccate nelle impostazioni del telefono.'); return Promise.resolve(false); }
    return Notification.requestPermission().then(function (p) {
      if (p === 'default') { stato('Non hai scelto: puoi riprovare quando vuoi.'); return false; }
      if (p !== 'granted') { stato('Le notifiche sono bloccate nelle impostazioni del telefono.'); return false; }
      return pronto().then(iscriviti).then(function (sub) { return manda(sub); }).then(function () {
        PREF.attive = true; scrivi(PREF);
        stato(statoAttive());
        return true;
      });
    }).catch(function () {
      stato('Non è stato possibile attivare le notifiche. Riprova più tardi.');
      return false;
    });
  }

  /* true se il server e il telefono sono a posto; con «forza» («Cancella tutto») la cancellazione locale va comunque fino in fondo */
  function disattiva(forza) {
    function fatto(ok) {
      if (ok || forza) { PREF.attive = false; PREF.inviato = ''; scrivi(PREF); }
      return ok || !!forza;
    }
    if (!supportato()) return Promise.resolve(fatto(true));
    return pronto().then(function (reg) { return reg.pushManager.getSubscription(); }).then(function (sub) {
      if (!sub) return true;
      return chiama(SERVER + '/iscrizione', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endpoint: sub.endpoint })
      }).then(function (r) {
        if (!r.ok) throw new Error('cancellazione');
        return sub.unsubscribe();
      }).then(function () { return true; });
    }).catch(function () { return false; }).then(fatto);
  }

  /* orari o interruttori cambiati con le notifiche attive: nuovo invio, solo gli orari accesi */
  function aggiorna() {
    scrivi(PREF);
    if (!PREF.attive) return Promise.resolve();
    return pronto().then(function (reg) { return reg.pushManager.getSubscription(); }).then(function (sub) {
      if (!sub) throw new Error('senza iscrizione');
      return manda(sub);
    }).then(function () { stato(orariAccesi(PREF).length ? 'Orari aggiornati.' : statoAttive()); }, function () {
      PREF.inviato = ''; scrivi(PREF);   /* all’avvio successivo l’invio riparte, senza aspettare domani */
      stato('Non è stato possibile aggiornare gli orari. Riprova più tardi.');
    });
  }

  /* all’avvio: se le notifiche sono attive, l’iscrizione si rimette in ordine senza far rumore e il server riceve gli orari al massimo una volta al giorno */
  function riallinea() {
    if (!PREF.attive || !supportato()) return;
    if (Notification.permission !== 'granted') { PREF.attive = false; scrivi(PREF); disegna(); return; }
    pronto().then(function (reg) {
      return reg.pushManager.getSubscription().then(function (sub) {
        if (sub) return PREF.inviato === oggi() ? null : manda(sub);
        return iscriviti(reg).then(manda);
      });
    }).catch(function () { /* niente: nessun errore all’avvio */ });
  }

  /* ---------- collegamenti ---------- */
  function avvia() {
    if (!mostraSupporto()) return;
    disegna();
    stato(PREF.attive ? statoAttive() : 'Le notifiche non sono attive.');
    MOMENTI.forEach(function (m) {
      var c = $('#notif-' + m + '-on'), o = $('#notif-' + m + '-ora');
      if (c) c.addEventListener('change', function () { PREF.orari[m].on = c.checked; aggiorna(); });
      if (o) o.addEventListener('change', function () {
        PREF.orari[m].ora = ora5(o.value, PREF.orari[m].ora);
        o.value = PREF.orari[m].ora;
        aggiorna();
      });
    });
    var t = $('#notif-tasto');
    if (t) t.addEventListener('click', function () {
      if (occupato) return;
      occupato = true; disegna();
      var lavoro = PREF.attive
        ? disattiva().then(function (ok) { stato(ok ? 'Le notifiche sono state disattivate.' : 'Non è stato possibile disattivare le notifiche. Riprova più tardi.'); })
        : attiva();
      lavoro.then(function () { occupato = false; disegna(); });
    });
    riallinea();
  }

  A.Notifiche = { disattiva: disattiva, attive: function () { return PREF.attive; }, ora5: ora5 };
  avvia();
})();
