/* Marsa – il ciclo. Funzioni pure (nessun accesso a localStorage né al documento): le date sono testi «AAAA-MM-GG».
   I dati stanno in «marsa.ciclo» = { attivo, durata, inizi: [...] }, solo su questo telefono. Le previsioni sono probabilità,
   non certezze: servono a ricordare che i giorni prima del ciclo possono abbassare la soglia (l’onda si alza prima). */
(function () {
  'use strict';

  var A = typeof window !== 'undefined' ? (window.Marsa = window.Marsa || {}) : {};

  var LUNG_MIN = 15, LUNG_MAX = 60;   /* le lunghezze fuori da questi limiti non sono cicli normali: si scartano */
  var ULTIMI = 6;                     /* la media guarda gli ultimi sei cicli */
  var DURATA_DI_PARTENZA = 28;
  var GIORNO_MAX = 60;                /* oltre il giorno 60 non si mostra più «Giorno N» */
  var MAX_INIZI = 36;

  /* le cinque voci della sera (0 = per niente … 3 = molto) */
  var VOCI = [
    'Irritabile o arrabbiata',
    'Ferita da un rifiuto, anche piccolo',
    'Sopraffatta, fuori controllo',
    'Giù, senza speranza',
    'Corpo: dolore, gonfiore, mal di testa'
  ];
  var VALORI = ['per niente', 'poco', 'abbastanza', 'molto'];

  var TESTI = {
    prima: 'Probabilmente sono i giorni prima del ciclo: nel modello GET rientrano nella «malattia fisica», un fattore di vulnerabilità. L’onda può alzarsi prima e più in fretta. Oggi conta di più la cura del corpo: mangiare, dormire, muoversi un po’.',
    personale: 'Probabilmente sono i giorni prima del ciclo. Negli ultimi cicli, in questi giorni stavi più in difficoltà: se l’onda sale, non è solo colpa tua né di chi hai intorno.',
    inizio: function (n) { return 'Giorno ' + n + ' del ciclo: per il modello GET è «malattia fisica». Dolore e stanchezza abbassano la soglia: oggi trattati con più gentilezza.'; },
    duraPrima: 'Potrebbe pesare anche il ciclo: sei nei giorni prima del ciclo. Non cambia cosa senti, ma spiega perché arriva più forte.',
    duraInizio: 'Potrebbe pesare anche il ciclo: sei nei primi giorni del ciclo. Non cambia cosa senti, ma spiega perché arriva più forte.',
    notificaPrima: 'Sono probabilmente i giorni prima del ciclo: oggi l’onda può alzarsi prima.',
    notificaInizio: 'Primi giorni del ciclo: oggi trattati con gentilezza.'
  };

  /* ---------- date ---------- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  /* «AAAA-MM-GG» → numero di giorni (calendario, senza ora legale di mezzo); data non valida → null */
  function gg(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(typeof s === 'string' ? s : '');
    if (!m) return null;
    var y = +m[1], mo = +m[2], d = +m[3], t = Date.UTC(y, mo - 1, d), x = new Date(t);
    if (x.getUTCFullYear() !== y || x.getUTCMonth() !== mo - 1 || x.getUTCDate() !== d) return null;
    return Math.round(t / 86400000);
  }
  function data(n) {
    var x = new Date(n * 86400000);
    return x.getUTCFullYear() + '-' + pad(x.getUTCMonth() + 1) + '-' + pad(x.getUTCDate());
  }

  /* ---------- dati ---------- */
  /* ripulisce quello che arriva da localStorage: tipi sbagliati, date false, doppioni */
  /* gli inizi nel futuro rispetto a «oggi» (data del telefono sbagliata, digitazione sbagliata) non contano */
  function utili(c, oggi) {
    var o = gg(oggi);
    return o === null ? c.inizi : c.inizi.filter(function (s) { return gg(s) <= o; });
  }
  function pulisci(raw, oggi) {
    var o = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
    var d = typeof o.durata === 'number' && isFinite(o.durata) && o.durata >= 20 && o.durata <= 45 ? Math.round(o.durata) : DURATA_DI_PARTENZA;
    var visti = {}, inizi = [];
    (Array.isArray(o.inizi) ? o.inizi : []).forEach(function (s) {
      if (gg(s) === null || visti[s]) return;
      visti[s] = 1; inizi.push(s);
    });
    inizi.sort();
    var c = { attivo: o.attivo === true, durata: d, inizi: inizi.slice(-MAX_INIZI) };
    if (gg(oggi) !== null) c.inizi = utili(c, oggi);
    return c;
  }
  /* un inizio a meno di 15 giorni da un altro non è un ciclo nuovo: l’interfaccia chiede se sostituire quello vicino */
  function inizioVicino(c, s) {
    var n = gg(s), best = null, bd = LUNG_MIN;
    if (n === null) return null;
    c.inizi.forEach(function (x) { var d = Math.abs(gg(x) - n); if (d > 0 && d < bd) { best = x; bd = d; } });
    return best;
  }
  function sostituisciInizio(c, vecchio, nuovo) {
    if (gg(nuovo) === null) return c.inizi;
    return c.inizi.filter(function (x) { return x !== vecchio && x !== nuovo; }).concat([nuovo]).sort().slice(-MAX_INIZI);
  }
  function aggiungiInizio(c, s) {
    if (gg(s) === null || c.inizi.indexOf(s) >= 0) return c.inizi;
    return c.inizi.concat([s]).sort().slice(-MAX_INIZI);
  }

  /* lunghezze dei cicli: differenze tra inizi consecutivi, senza quelle fuori misura */
  function lunghezze(inizi) {
    var out = [];
    for (var i = 1; i < inizi.length; i++) {
      var n = gg(inizi[i]) - gg(inizi[i - 1]);
      if (n >= LUNG_MIN && n <= LUNG_MAX) out.push(n);
    }
    return out;
  }
  function media(a) { return a.reduce(function (s, x) { return s + x; }, 0) / a.length; }
  function devStd(a) {
    if (a.length < 2) return 0;
    var m = media(a);
    return Math.sqrt(a.reduce(function (s, x) { return s + (x - m) * (x - m); }, 0) / (a.length - 1));
  }

  /* durata prevista del ciclo e ampiezza della fascia (± giorni) */
  function stima(c, oggi) {
    var l = lunghezze(utili(c, oggi));
    if (l.length >= 3) {
      var u = l.slice(-ULTIMI), sd = devStd(u);
      return { durata: Math.round(media(u)), sd: sd, fascia: sd < 1.5 ? 1 : 2, base: 'storia', n: l.length };
    }
    return { durata: c.durata, sd: null, fascia: 2, base: 'abituale', n: l.length };
  }

  /* inizio previsto del prossimo ciclo, con la fascia di giorni probabili */
  function previsione(c, oggi) {
    var inizi = utili(c, oggi);
    if (!inizi.length) return null;
    var ult = inizi[inizi.length - 1], s = stima(c, oggi), p = gg(ult) + s.durata;
    return { ultimo: ult, durata: s.durata, fascia: s.fascia, base: s.base, previsto: data(p), primo: data(p - s.fascia), ultimoGiorno: data(p + s.fascia) };
  }

  /* giorno del ciclo di una data (1 = primo giorno); nessun inizio prima di quella data, o oltre il giorno 60 → null */
  function giornoDelCiclo(inizi, d) {
    var n = gg(d), best = null;
    if (n === null) return null;
    inizi.forEach(function (s) { var x = gg(s); if (x !== null && x <= n && (best === null || x > best)) best = x; });
    if (best === null) return null;
    var g = n - best + 1;
    return g > GIORNO_MAX ? null : g;
  }

  /* i giorni dell’avviso: da 7 giorni prima del primo giorno probabile fino al terzo giorno del ciclo vero.
     Se il ciclo non viene segnato, l’avviso «prima» smette 3 giorni dopo l’ultimo giorno probabile. */
  /* il numero del giorno si mostra solo fino a durata stimata + fascia + 3: oltre, il ciclo non è stato segnato e il numero direbbe il falso */
  function giornoCiclo(c, d) {
    var inizi = utili(c, d), n = giornoDelCiclo(inizi, d);
    if (n === null) return null;
    var s = stima({ attivo: c.attivo, durata: c.durata, inizi: inizi }, d);
    return n <= s.durata + s.fascia + 3 ? n : null;
  }
  function finestre(c, oggi) {
    var p = previsione(c, oggi);
    if (!p) return null;
    var L = gg(p.ultimo);
    var da = Math.max(L + 3, gg(p.primo) - 7), a = gg(p.ultimoGiorno) + 3;
    return { prima: da <= a ? [data(da), data(a)] : null, inizio: [data(L), data(L + 2)] };
  }
  /* { tipo: 'inizio' | 'prima' | null, giorno: N o null } per la data di oggi */
  function avviso(c, oggi) {
    if (!c || !c.attivo || gg(oggi) === null) return { tipo: null, giorno: null };
    var inizi = utili(c, oggi);
    if (!inizi.length) return { tipo: null, giorno: null };
    var N = giornoDelCiclo(inizi, oggi), f = finestre(c, oggi), o = gg(oggi), g = giornoCiclo(c, oggi);
    if (N !== null && N <= 3) return { tipo: 'inizio', giorno: N };
    if (f.prima && o >= gg(f.prima[0]) && o <= gg(f.prima[1]) && o > gg(inizi[inizi.length - 1])) return { tipo: 'prima', giorno: g };
    return { tipo: null, giorno: g };
  }
  /* giorni da oggi al primo e all’ultimo giorno probabile del prossimo ciclo (null se la fascia è già cominciata) */
  function prossimo(c, oggi) {
    var p = previsione(c, oggi), o = gg(oggi);
    if (!p || o === null) return null;
    var da = gg(p.primo) - o, a = gg(p.ultimoGiorno) - o;
    return da >= 1 ? { da: da, a: a } : null;
  }

  /* ---------- le voci della sera ---------- */
  function vociSicure(v) {
    if (!Array.isArray(v)) return null;
    var out = [], tutte = false;
    for (var i = 0; i < VOCI.length; i++) {
      var x = v[i];
      var ok = typeof x === 'number' && x >= 0 && x <= 3 && x % 1 === 0;
      out.push(ok ? x : null);
      if (ok) tutte = true;
    }
    return tutte ? out : null;
  }
  /* media delle voci risposte, riportata a cinque voci (0–15): così una sera con poche risposte pesa quanto le altre */
  function sommaVoci(v) {
    var r = (v || []).filter(function (x) { return typeof x === 'number'; });
    return r.length ? media(r) * VOCI.length : null;
  }

  /* ---------- la frase personale ----------
     dati = { tensione: { 'AAAA-MM-GG': 0|1|2 }, voci: { 'AAAA-MM-GG': [cinque voti o null] } }
     Per ogni ciclo completo (inizio e inizio successivo, lunghezza ammessa) si confrontano i giorni dell’avviso
     (da 7 giorni prima della fascia al terzo giorno del ciclo successivo) con gli altri giorni (dal giorno 6 a 8 giorni
     prima dell’inizio successivo). Con almeno 2 cicli che hanno dati in tutti e due i gruppi, se la media dell’avviso supera
     quella degli altri giorni di almeno il 30% dell’ampiezza della scala (tensione 0–2, voci 0–15), vale la frase personale. */
  function frasePersonale(c, dati) {
    var out = { personale: false, cicli: 0, tensione: null, voci: null };
    if (!c || !dati) return out;
    var f = stima(c).fascia, inizi = c.inizi;
    var T = { av: [], al: [] }, V = { av: [], al: [] };
    function metti(gruppo, d) {
      var s = data(d), t = dati.tensione && dati.tensione[s], v = dati.voci && sommaVoci(dati.voci[s]), preso = false;
      if (typeof t === 'number') { T[gruppo].push(t); preso = true; }
      if (typeof v === 'number') { V[gruppo].push(v); preso = true; }
      return preso;
    }
    for (var i = 1; i < inizi.length; i++) {
      var s0 = gg(inizi[i - 1]), S = gg(inizi[i]), lung = S - s0;
      if (lung < LUNG_MIN || lung > LUNG_MAX) continue;
      var avDa = S - 7 - f, avA = S + 2, alDa = s0 + 5, alA = Math.min(S - 8, avDa - 1), haAv = false, haAl = false, d;
      for (d = avDa; d <= avA; d++) if (metti('av', d)) haAv = true;
      for (d = alDa; d <= alA; d++) if (metti('al', d)) haAl = true;
      if (haAv && haAl) out.cicli++;
    }
    if (out.cicli < 2) return out;
    if (T.av.length && T.al.length) out.tensione = media(T.av) - media(T.al);
    if (V.av.length && V.al.length) out.voci = media(V.av) - media(V.al);
    out.personale = (out.tensione !== null && out.tensione >= 0.3 * 2) || (out.voci !== null && out.voci >= 0.3 * 15);
    return out;
  }

  var Ciclo = {
    VOCI: VOCI, VALORI: VALORI, TESTI: TESTI,
    gg: gg, data: data, pulisci: pulisci, aggiungiInizio: aggiungiInizio, inizioVicino: inizioVicino, sostituisciInizio: sostituisciInizio,
    lunghezze: lunghezze, stima: stima, previsione: previsione, giornoDelCiclo: giornoDelCiclo, giornoCiclo: giornoCiclo,
    finestre: finestre, avviso: avviso, prossimo: prossimo,
    vociSicure: vociSicure, sommaVoci: sommaVoci, frasePersonale: frasePersonale
  };
  A.Ciclo = Ciclo;
  if (typeof module !== 'undefined' && module.exports) module.exports = Ciclo;
})();
