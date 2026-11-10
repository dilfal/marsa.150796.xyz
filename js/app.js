/* Approdo – app. Nessuna dipendenza: tutto resta nel telefono (localStorage). */
(function () {
  'use strict';

  var A = window.Approdo;
  var TEMI = A.Temi;
  var K = { nome: 'approdo.nome', visto: 'approdo.visto', vista: 'approdo.vista', note: 'approdo.note', contatti: 'approdo.contatti', piano: 'approdo.piano', profilo: 'approdo.profilo' };

  /* ---------- utilità ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function load(k, def) {
    try { var v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch (e) { return def; }
  }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (a) {
      if (a === 'text') el.textContent = attrs[a];
      else if (a === 'class') el.className = attrs[a];
      else if (a.slice(0, 2) === 'on') el.addEventListener(a.slice(2), attrs[a]);
      else if (attrs[a] !== null && attrs[a] !== undefined && attrs[a] !== false) el.setAttribute(a, attrs[a] === true ? '' : attrs[a]);
    });
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c === null || c === undefined || c === false) continue;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return el;
  }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* La «sera» finisce alle 5 del mattino: dopo mezzanotte conta ancora la serata di ieri. */
  function seraDi(d) {
    var x = new Date(d.getTime());
    if (x.getHours() < 5) x.setDate(x.getDate() - 1);
    return x;
  }
  function chiaveData(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function temaDelGiorno(giorno) {
    for (var i = 0; i < TEMI.length; i++) if (TEMI[i].giorno === giorno) return TEMI[i];
    return TEMI[0];
  }
  function temaPerId(id) {
    for (var i = 0; i < TEMI.length; i++) if (TEMI[i].id === id) return TEMI[i];
    return null;
  }
  function dataLunga(chiave) {
    var p = chiave.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return A.Giorni[d.getDay()] + ' ' + d.getDate() + ' ' + ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'][d.getMonth()] + ' ' + d.getFullYear();
  }
  function saluto() {
    var o = new Date().getHours();
    var s = o >= 5 && o < 13 ? 'Buongiorno' : o >= 13 && o < 18 ? 'Buon pomeriggio' : o >= 18 && o < 23 ? 'Buonasera' : 'Buonanotte';
    var n = load(K.nome, '');
    return n ? s + ', ' + n : s;
  }

  /* ---------- finestre ---------- */
  function apri(dlg) {
    if (dlg.open) return;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function chiudi(dlg) {
    if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
    fermaRespiri();
  }
  document.querySelectorAll('dialog').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d && d.id !== 'dlg-benvenuto' && d.id !== 'dlg-dura') chiudi(d); });
    d.addEventListener('close', fermaRespiri);
  });
  document.querySelectorAll('[data-close]').forEach(function (b) {
    b.addEventListener('click', function () { chiudi(b.closest('dialog')); });
  });

  /* ---------- respiro guidato: dentro 4, fuori 6 ---------- */
  var respiriAttivi = [];
  function fermaRespiri() { respiriAttivi.slice().forEach(function (f) { f(); }); }

  function respiro(radice, durata) {
    var FASI = [{ nome: 'Inspira', sec: 4, scala: 1.5 }, { nome: 'Espira piano', sec: 6, scala: 1 }];
    var fase = 1, rem = 0, trascorsi = 0, timer = null, attivo = false;
    var num = h('span', { text: '' });
    var cerchio = h('div', { class: 'breath-circle' }, num);
    var etichetta = h('div', { class: 'breath-label', 'aria-live': 'polite', text: 'Quando vuoi, comincia.' });
    var tempo = h('div', { class: 'breath-time', text: '' });
    var bottone = h('button', { class: 'btn', type: 'button', text: 'Respira con me' });

    function ferma(finito) {
      attivo = false;
      clearTimeout(timer);
      var i = respiriAttivi.indexOf(ferma);
      if (i >= 0) respiriAttivi.splice(i, 1);
      cerchio.style.transition = 'transform 1.2s ease-out';
      cerchio.style.transform = 'scale(1)';
      num.textContent = '';
      tempo.textContent = '';
      etichetta.textContent = finito ? 'Bene così. Resta ancora un momento.' : 'Quando vuoi, ricomincia.';
      bottone.textContent = finito ? 'Ancora' : 'Respira con me';
    }
    function passo() {
      if (!attivo) return;
      if (rem === 0) {
        fase = (fase + 1) % 2;
        if (fase === 0 && trascorsi >= durata) { ferma(true); return; }
        rem = FASI[fase].sec;
        etichetta.textContent = FASI[fase].nome;
        cerchio.style.transition = 'transform ' + FASI[fase].sec + 's ease-in-out';
        cerchio.style.transform = 'scale(' + FASI[fase].scala + ')';
      }
      num.textContent = String(rem);
      rem--;
      trascorsi++;
      var r = Math.max(0, durata - trascorsi);
      tempo.textContent = 'ancora circa ' + Math.ceil(r / 60) + ' min';
      timer = setTimeout(passo, 1000);
    }
    bottone.addEventListener('click', function () {
      if (attivo) { ferma(false); return; }
      fermaRespiri();
      attivo = true; fase = 1; rem = 0; trascorsi = 0;
      respiriAttivi.push(ferma);
      bottone.textContent = 'Ferma';
      cerchio.getBoundingClientRect();
      passo();
    });
    radice.appendChild(h('div', { class: 'breath-stage' }, cerchio));
    radice.appendChild(etichetta);
    radice.appendChild(tempo);
    radice.appendChild(bottone);
  }

  /* ---------- note salvate ---------- */
  /* I dati salvati si ripuliscono sempre: tengono solo oggetti e stringhe del tipo giusto. */
  function stringhe(o) {
    var out = {};
    if (o && typeof o === 'object' && !Array.isArray(o)) Object.keys(o).forEach(function (k) { if (typeof o[k] === 'string') out[k] = o[k].slice(0, 4000); });
    return out;
  }
  function numero(v) { return typeof v === 'number' && isFinite(v) && v >= 0 && v <= 10 ? Math.round(v) : null; }
  /* Le scelte a risposta multipla: { idDomanda: [indici] }. Si tengono solo interi 0-9, senza doppioni. */
  function scelteSicure(o) {
    var out = {};
    if (!o || typeof o !== 'object' || Array.isArray(o)) return out;
    Object.keys(o).slice(0, 60).forEach(function (k) {
      if (k.length > 40 || !Array.isArray(o[k])) return;
      var v = o[k].filter(function (i, p, a) { return typeof i === 'number' && i >= 0 && i < 20 && i % 1 === 0 && a.indexOf(i) === p; }).slice(0, 10);
      if (v.length) out[k] = v;
    });
    return out;
  }
  /* ---------- profilo personale: PRIVATO, importato dall’utente sul proprio telefono ----------
     Non fa parte del sito: i testi personali non stanno mai nel repository pubblico. Qui c’è solo il codice
     generico che li legge, li ripulisce e li mostra; tutto resta nella memoria di questo telefono. */
  function txt(v, max) { return typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : ''; }
  function mappaTesti(o, max, maxChiavi) {
    var out = {};
    if (o && typeof o === 'object' && !Array.isArray(o)) Object.keys(o).slice(0, maxChiavi).forEach(function (k) {
      var t = txt(o[k], max);
      if (t && k.length <= 40) out[k] = t;
    });
    return out;
  }
  function elencoTesti(a, max, n) { return (Array.isArray(a) ? a : []).slice(0, n).map(function (x) { return txt(x, max); }).filter(Boolean); }
  function elencoPersone(a, n) {
    return (Array.isArray(a) ? a : []).slice(0, n).map(function (c) {
      if (!c || typeof c !== 'object') return null;
      var num = txt(c.num, 24);
      return { nome: txt(c.nome, 60), num: /[0-9]/.test(num) ? num : '', nota: txt(c.nota, 140) };
    }).filter(function (c) { return c && c.nome; });
  }
  function profiloSicuro(raw) {
    if (!raw || typeof raw !== 'object' || raw.formato !== 'approdo-profilo-1') return null;
    var P = { formato: 'approdo-profilo-1', creato: txt(raw.creato, 20) };
    P.aree = (Array.isArray(raw.aree) ? raw.aree : []).slice(0, 14).map(function (a) {
      if (!a || typeof a !== 'object') return null;
      var o = { id: txt(a.id, 30), titolo: txt(a.titolo, 100), scala: txt(a.scala, 90), tecnico: txt(a.tecnico, 800), spiegato: txt(a.spiegato, 800), pratica: txt(a.pratica, 600) };
      return o.titolo && (o.tecnico || o.spiegato) ? o : null;
    }).filter(Boolean);
    P.risorse = (Array.isArray(raw.risorse) ? raw.risorse : []).slice(0, 8).map(function (r) {
      return r && typeof r === 'object' ? { titolo: txt(r.titolo, 80), testo: txt(r.testo, 500) } : null;
    }).filter(function (r) { return r && r.titolo && r.testo; });
    P.tecniche = {};
    if (raw.tecniche && typeof raw.tecniche === 'object' && !Array.isArray(raw.tecniche)) Object.keys(raw.tecniche).slice(0, 20).forEach(function (k) {
      var x = raw.tecniche[k];
      if (k.length <= 30 && x && typeof x === 'object') P.tecniche[k] = { nota: txt(x.nota, 600), nascondi: x.nascondi === true };
    });
    var ar = raw.arrivo && typeof raw.arrivo === 'object' ? raw.arrivo : {};
    P.arrivo = {};
    ['tensione', 'emozioni', 'corpo', 'bisogni', 'giornata', 'sonno', 'ieri'].forEach(function (g) { P.arrivo[g] = mappaTesti(ar[g], 500, 40); });
    P.scene = {};
    if (raw.scene && typeof raw.scene === 'object' && !Array.isArray(raw.scene)) Object.keys(raw.scene).slice(0, 80).forEach(function (q) {
      if (q.length <= 40) P.scene[q] = mappaTesti(raw.scene[q], 500, 12);
    });
    var s = raw.sicurezza && typeof raw.sicurezza === 'object' ? raw.sicurezza : null;
    P.sicurezza = null;
    if (s) {
      var S2 = { titolo: txt(s.titolo, 90) || 'Il mio piano per le sere più dure', intro: txt(s.intro, 500), segnali: elencoTesti(s.segnali, 240, 10), passi: elencoTesti(s.passi, 280, 10), persone: elencoPersone(s.persone, 10), servizi: elencoPersone(s.servizi, 8), chiusura: txt(s.chiusura, 320) };
      if (S2.intro || S2.segnali.length || S2.passi.length || S2.persone.length || S2.servizi.length) P.sicurezza = S2;
    }
    return P.aree.length || P.risorse.length || P.sicurezza || Object.keys(P.tecniche).length ? P : null;
  }
  var PROF = profiloSicuro(load(K.profilo, null));
  function perTe(gruppo, id) { return (PROF && PROF.arrivo[gruppo] && PROF.arrivo[gruppo][id]) || ''; }

  function tutteLeNote() {
    var n = load(K.note, {}), out = {};
    if (!n || typeof n !== 'object' || Array.isArray(n)) return out;
    Object.keys(n).forEach(function (k) {
      var x = n[k];
      if (!x || typeof x !== 'object' || typeof x.tema !== 'string' || !temaPerId(x.tema)) return;
      out[k] = { tema: x.tema, prima: numero(x.prima), dopo: numero(x.dopo), campi: stringhe(x.campi), scelte: scelteSicure(x.scelte), nota: typeof x.nota === 'string' ? x.nota.slice(0, 4000) : '', completa: x.completa === true, t: typeof x.t === 'number' ? x.t : 0 };
    });
    return out;
  }
  function listaContatti() {
    var l = load(K.contatti, []);
    if (!Array.isArray(l)) return [];
    return l.filter(function (c) { return c && typeof c === 'object' && typeof c.num === 'string' && numeroPulito(c.num); })
      .map(function (c) { return { nome: typeof c.nome === 'string' ? c.nome.slice(0, 40) : '', num: c.num.slice(0, 20) }; }).slice(0, 8);
  }
  function chiaveNota(data, id) { return data + '|' + id; }
  function leggiNota(data, id) { return tutteLeNote()[chiaveNota(data, id)] || null; }
  function scriviNota(data, id, nota) {
    var n = tutteLeNote();
    n[chiaveNota(data, id)] = nota;
    return save(K.note, n);
  }

  /* ---------- STASERA ---------- */
  var S = null; /* stato della serata in corso */
  var radice = $('#stasera-root');

  function avviaSerata(tema) {
    var oggi = seraDi(new Date());
    var data = chiaveData(oggi);
    var salvata = leggiNota(data, tema.id);
    S = {
      tema: tema, data: data, oggi: temaDelGiorno(oggi.getDay()).id === tema.id,
      passo: salvata && salvata.completa ? 4 : 0,
      prima: salvata && typeof salvata.prima === 'number' ? salvata.prima : null,
      dopo: salvata && typeof salvata.dopo === 'number' ? salvata.dopo : null,
      campi: salvata && salvata.campi ? salvata.campi : {},
      scelte: salvata && salvata.scelte ? salvata.scelte : {},
      nota: salvata && salvata.nota ? salvata.nota : '',
      completa: !!(salvata && salvata.completa),
      sub: 0, ieri: domaniPrecedente(data)
    };
    segnaPasso(true);
    disegnaSerata();
  }
  function salvaSerata() {
    if (!S) return;
    scriviNota(S.data, S.tema.id, {
      tema: S.tema.id, prima: S.prima, dopo: S.dopo, campi: S.campi, scelte: S.scelte, nota: S.nota,
      completa: S.completa, t: Date.now()
    });
  }
  function vaiPasso(n) {
    salvaSerata();
    S.passo = n;
    disegnaSerata();
    window.scrollTo(0, 0);
    focusTitolo();
    segnaPasso(false);
  }
  /* Il gesto «indietro» dell’iPhone (e il tasto indietro) riporta alla schermata precedente della serata:
     ogni passo e ogni domanda dell’Arrivo è una voce della cronologia, e `popstate` la ridisegna. */
  function segnaPasso(sostituisci) {
    if (!S) return;
    var st = { approdo: 1, p: S.passo, s: S.sub || 0 };
    try { if (sostituisci) history.replaceState(st, ''); else history.pushState(st, ''); } catch (e) { /* niente */ }
  }

  function intestazione() {
    var t = S.tema;
    var oggi = seraDi(new Date());
    return [
      h('div', { class: 'hero' },
        h('p', { class: 'quando', text: A.Giorni[oggi.getDay()] + ' sera' }),
        h('h1', { text: saluto() })),
      h('div', { class: 'card tema-card', 'data-colore': t.colore },
        h('p', { class: 'sotto', text: S.oggi ? 'Il tema di stasera' : 'Un altro tema, per stasera' }),
        h('p', { class: 'nome', text: t.nome }),
        h('p', { class: 'sotto', text: t.sotto }),
        h('p', { class: 'fonte', text: t.fonte }))
    ];
  }
  function punti(passo) {
    var p = h('div', { class: 'punti', role: 'img', 'aria-label': 'Passo ' + (passo + 1) + ' di 4' });
    for (var i = 0; i < 4; i++) p.appendChild(h('i', { class: i <= passo ? 'on' : '' }));
    return p;
  }
  /* La tensione ha tre livelli, quanti sono i feedback che riceve (una scala 0-10 darebbe sempre lo stesso risultato).
     Si salva comunque un numero 0-10 (2, 5 o 9), così restano valide le note già salvate con la vecchia scala. */
  var LIVELLI = [
    { nome: 'abbastanza calma', breve: 'bassa', valore: 2 },
    { nome: 'un po’ tesa', breve: 'media', valore: 5 },
    { nome: 'molto tesa', breve: 'alta', valore: 9 }
  ];
  function livello(v) { return typeof v !== 'number' ? null : v <= 3 ? 0 : v <= 7 ? 1 : 2; }
  function breveLiv(v) { var l = livello(v); return l === null ? '' : LIVELLI[l].breve; }
  function scalaUmore(valore, onChange, id, labelId) {
    var corrente = livello(valore);
    var gruppo = h('div', { class: 'scala-liv', id: id, role: 'group', 'aria-labelledby': labelId || null });
    var tasti = [];
    function aggiorna() { tasti.forEach(function (b, i) { b.setAttribute('aria-pressed', corrente === i ? 'true' : 'false'); }); }
    LIVELLI.forEach(function (L, i) {
      var b = h('button', { class: 'liv', type: 'button', text: L.nome.charAt(0).toUpperCase() + L.nome.slice(1), 'aria-pressed': 'false', onclick: function () {
        corrente = corrente === i ? null : i;   /* un secondo tocco toglie la scelta */
        aggiorna();
        onChange(corrente === null ? null : L.valore);
      } });
      tasti.push(b);
      gruppo.appendChild(b);
    });
    aggiorna();
    return gruppo;
  }

  /* ---------- domande a scelta multipla con spiegazione ---------- */
  function percorso(t) { return (A.Percorso && A.Percorso[t.id]) || null; }
  function tutteLeDomande(P) { return P.scene.concat([P.chiusura]); }

  /* Una domanda: si tocca una risposta e compare subito la spiegazione. Nessuna risposta è «giusta».
     Le domande 'kit' (multi) si spuntano più volte. Ogni scelta si salva subito nella serata. */
  var ETICHETTE_DOMANDA = { riconosci: 'Ti riconosci?', mito: 'Mito o realtà?', kit: 'Scegli quelle che fanno per te' };
  function cartaDomanda(q) {
    var scelte = (S.scelte[q.id] || []).filter(function (i) { return q.opzioni[i]; });
    var pq = PROF && PROF.scene && PROF.scene[q.id];   /* note «Per te» del profilo personale, se importato */
    var gruppo = h('div', { class: 'quiz-opz', role: 'group', 'aria-labelledby': 'qd-' + q.id });
    var spieg = h('div', { class: 'quiz-spieg' });
    /* il lettore di schermo legge solo l’ultima spiegazione, non tutte a ogni tocco */
    var annuncio = h('div', { class: 'sr', role: 'status', 'aria-live': 'polite' });
    var bottoni = [];
    function mostra() {
      if (q.extra) fermaRespiri();   /* un respiro tolto dalla pagina non deve restare attivo nascosto */
      clear(spieg);
      scelte.slice().sort().forEach(function (i) {
        var o = q.opzioni[i];
        spieg.appendChild(h('div', { class: 'quiz-sp' },
          q.multi ? h('b', { text: o.testo }) : null,
          h('p', { text: o.spiegazione }),
          o.passo ? h('p', { class: 'quiz-passo' }, h('b', { text: 'Un piccolo passo: ' }), o.passo) : null,
          o.fonte ? h('p', { class: 'fonte', text: o.fonte }) : null,
          (o.perte || (pq && pq[String(i)])) ? h('p', { class: 'quiz-perte' }, h('b', { text: 'Per te: ' }), o.perte || pq[String(i)]) : null,
          q.extra ? q.extra(o) : null));
        if (o.crisi) spieg.appendChild(h('button', { class: 'chip', type: 'button', text: 'Stasera è dura', onclick: function () { apriDura(); } }));
      });
      bottoni.forEach(function (b, i) { b.setAttribute('aria-pressed', scelte.indexOf(i) >= 0 ? 'true' : 'false'); });
    }
    q.opzioni.forEach(function (o, i) {
      var b = h('button', { class: 'quiz-o', type: 'button', text: o.testo, 'aria-pressed': 'false', onclick: function () {
        var p = scelte.indexOf(i);
        if (p >= 0) scelte.splice(p, 1);          /* un secondo tocco toglie la risposta */
        else { if (!q.multi) scelte.length = 0; else if (q.max && scelte.length >= q.max) scelte.shift(); scelte.push(i); }
        if (scelte.length) S.scelte[q.id] = scelte.slice(); else delete S.scelte[q.id];
        salvaSerata();
        mostra();
        annuncio.textContent = p >= 0 ? '' : o.testo + '. ' + o.spiegazione + (o.passo ? ' Un piccolo passo: ' + o.passo : '');
      } });
      bottoni.push(b);
      gruppo.appendChild(b);
    });
    mostra();
    return h('div', { class: 'quiz-q' },
      q.tipo && ETICHETTE_DOMANDA[q.tipo] ? h('p', { class: 'sotto', text: ETICHETTE_DOMANDA[q.tipo] + (q.multi ? ' (anche più di una)' : '') }) : null,
      h('p', { class: 'quiz-dom', id: 'qd-' + q.id, text: q.domanda }),
      gruppo, spieg, annuncio);
  }

  /* Che cosa è emerso stasera: il tag più scelto fra tutte le risposte dà la frase e la piccola cosa per domani. */
  function riepilogoSerata() { return riepilogoPer(S.tema, S.scelte); }
  function riepilogoPer(tema, scelte) {
    var P = tema && percorso(tema);
    if (!P || !P.riepilogo || !scelte) return null;
    var conta = {}, ordine = [];
    /* Contano solo le scene «Ti riconosci?», dove si descrive com’è. Le abilità del kit, i miti e la chiusura
       portano il tag del problema che curano: attribuirli alla persona sarebbe sbagliato. */
    P.scene.filter(function (q) { return q.tipo === 'riconosci'; }).forEach(function (q) {
      (scelte[q.id] || []).forEach(function (i) {
        var o = q.opzioni[i];
        if (!o || !o.tag || !P.riepilogo[o.tag]) return;
        if (!(o.tag in conta)) { conta[o.tag] = 0; ordine.push(o.tag); }
        conta[o.tag]++;
      });
    });
    if (!ordine.length) return null;
    ordine.sort(function (a, b) { return conta[b] - conta[a]; });
    return P.riepilogo[ordine[0]];
  }

  /* ---------- ARRIVO: una domanda alla volta, ogni risposta riceve subito il suo feedback ---------- */
  function dateDa(chiave) { var p = chiave.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  /* La «piccola cosa per domani» dell’ultima serata finita (al massimo due sere fa), per chiedere com’è andata. */
  function domaniPrecedente(dataSera) {
    var note = tutteLeNote();
    var chiavi = Object.keys(note).filter(function (k) { return k.split('|')[0] < dataSera && note[k].completa; }).sort();
    if (!chiavi.length) return null;
    var k = chiavi[chiavi.length - 1], n = note[k];
    var giorni = Math.round((dateDa(dataSera) - dateDa(k.split('|')[0])) / 86400000);
    if (giorni > 2) return null;
    var r = riepilogoPer(temaPerId(n.tema), n.scelte);
    if (!r || !r.domani) return null;
    return { etichetta: giorni === 1 ? 'Ieri sera' : 'Due sere fa', domani: r.domani };
  }
  function cinqueSensi() {
    var voci = [['5', 'cose che vedi'], ['4', 'cose che senti con il tatto (i vestiti, il letto, le mani)'], ['3', 'cose che senti con le orecchie'], ['2', 'cose che riesci a odorare'], ['1', 'cosa che puoi assaggiare, o un respiro che ti piace']];
    var ol = h('ol', { class: 'five' });
    voci.forEach(function (v) { ol.appendChild(h('li', null, h('b', { text: v[0] }), ' ' + v[1])); });
    return ol;
  }
  function domandaArrivo(id, domanda, lista, opz) {
    opz = opz || {};
    return cartaDomanda({
      id: 'ar-' + id, domanda: domanda, multi: !!opz.multi, max: opz.max || 0, extra: opz.extra || null,
      opzioni: lista.map(function (o) { return { testo: o.testo, spiegazione: o.spiegazione, passo: o.passo || '', fonte: o.fonte || '', azione: o.azione || '', perte: perTe(opz.gruppo, o.id) }; })
    });
  }
  /* Ciò che l’app propone nella pagina stessa, in base al bisogno scelto. */
  function extraBisogno(o) {
    if (o.azione === 'respiro') { var rb = h('div', { class: 'breath' }); respiro(rb, 60); return rb; }
    if (o.azione === 'sensi') return h('div', null, h('p', { class: 'small', text: 'Guardati intorno e nomina, piano:' }), cinqueSensi());
    if (o.azione === 'persone') return h('button', { class: 'btn btn-ghost', type: 'button', text: 'Apri «Le mie persone»', onclick: function () {
      apriDura();
      var a = $('#acc-contatti'); if (a) { a.setAttribute('open', ''); a.scrollIntoView({ block: 'center' }); }
    } });
    if (o.azione === 'buonanotte') return h('button', { class: 'btn', type: 'button', text: 'Vai alla buonanotte', onclick: function () { vaiPasso(3); } });
    return null;
  }
  function passiArrivo() { return (S.ieri ? ['ieri'] : []).concat(['tensione', 'emozioni', 'bisogno', 'giornata']); }
  /* dopo il cambio di schermata il tasto premuto sparisce: il focus passa al titolo (utile con la tastiera e il lettore di schermo) */
  function focusTitolo() {
    var t1 = radice.querySelector('.passo-titolo, h1');
    if (t1) { t1.setAttribute('tabindex', '-1'); t1.focus({ preventScroll: true }); }
  }
  function vaiArrivo(n) { salvaSerata(); S.sub = n; disegnaSerata(); window.scrollTo(0, 0); focusTitolo(); segnaPasso(false); }

  function disegnaArrivo() {
    var AR = A.Arrivo;
    if (!AR) { /* senza i testi: solo la scala e si continua */
      intestazione().forEach(function (e) { radice.appendChild(e); });
      radice.appendChild(punti(0));
      radice.appendChild(h('div', { class: 'card' }, h('h2', { class: 'passo-titolo', text: 'Arrivo' }),
        h('p', { id: 'q-prima', text: 'Quanto sei tesa o agitata, adesso? Tocca una risposta, oppure salta.' }),
        scalaUmore(S.prima, function (v) { S.prima = v; }, 'sc-prima', 'q-prima')));
      radice.appendChild(h('div', { class: 'nav-passi' }, h('button', { class: 'btn btn-block', type: 'button', text: 'Cominciamo', onclick: function () { vaiPasso(1); } })));
      return;
    }
    var L = passiArrivo(), i = Math.max(0, Math.min(S.sub || 0, L.length - 1)), id = L[i];
    if (i === 0) intestazione().forEach(function (e) { radice.appendChild(e); });
    radice.appendChild(punti(0));
    var card = h('div', { class: 'card quiz' }, h('p', { class: 'sotto', text: 'Arrivo · ' + (i + 1) + ' di ' + L.length }));

    if (id === 'ieri') {
      card.appendChild(h('h2', { class: 'passo-titolo', text: S.ieri.etichetta }));
      card.appendChild(h('p', { class: 'intro', text: 'Ti avevo proposto una piccola cosa:' }));
      card.appendChild(h('p', { class: 'quiz-dom', text: S.ieri.domani }));
      card.appendChild(domandaArrivo('ieri', 'Com’è andata?', AR.ieri, { gruppo: 'ieri' }));
    }
    if (id === 'tensione') {
      card.appendChild(h('h2', { class: 'passo-titolo', text: 'Come stai adesso?' }));
      card.appendChild(h('p', { id: 'q-prima', text: 'Quanto sei tesa o agitata, in questo momento?' }));
      var fb = h('div', { class: 'quiz-spieg', role: 'status', 'aria-live': 'polite' });
      var mostraTensione = function (v) {
        fermaRespiri();
        clear(fb);
        if (v === null) return;
        var f = AR.tensione.filter(function (d) { return v >= d.da && v <= d.a; })[0];
        if (!f) return;
        var blocco = h('div', { class: 'quiz-sp' }, h('b', { text: f.titolo }), h('p', { text: f.frase }));
        if (f.passo) blocco.appendChild(h('p', { class: 'quiz-passo' }, h('b', { text: 'Un piccolo passo: ' }), f.passo));
        if (f.passi) {
          var ol = h('ol', { class: 'passi-lista' });
          f.passi.forEach(function (x) { ol.appendChild(h('li', { text: x })); });
          blocco.appendChild(ol);
        }
        var pt = perTe('tensione', String(AR.tensione.indexOf(f)));
        if (pt) blocco.appendChild(h('p', { class: 'quiz-perte' }, h('b', { text: 'Per te: ' }), pt));
        if (f.fonte) blocco.appendChild(h('p', { class: 'fonte', text: f.fonte }));
        if (f.passi) {
          var rb = h('div', { class: 'breath' });
          blocco.appendChild(rb);
          respiro(rb, 60);
          blocco.appendChild(h('button', { class: 'chip', type: 'button', text: 'Stasera è dura: altre tecniche', onclick: function () { apriDura(); } }));
        }
        fb.appendChild(blocco);
      };
      card.appendChild(scalaUmore(S.prima, function (v) { S.prima = v; salvaSerata(); mostraTensione(v); }, 'sc-prima', 'q-prima'));
      card.appendChild(fb);
      mostraTensione(S.prima);
    }
    if (id === 'emozioni') {
      card.appendChild(h('h2', { class: 'passo-titolo', text: 'Che cosa senti?' }));
      card.appendChild(h('p', { class: 'intro', text: 'Non ci sono emozioni giuste o sbagliate. Scegli fino a tre parole.' }));
      card.appendChild(domandaArrivo('emo', 'Che emozioni ci sono, adesso?', AR.emozioni, { multi: true, max: 3, gruppo: 'emozioni' }));
      card.appendChild(domandaArrivo('corpo', 'E dove le senti nel corpo?', AR.corpo, { gruppo: 'corpo' }));
    }
    if (id === 'bisogno') {
      card.appendChild(h('h2', { class: 'passo-titolo', text: 'Di che cosa hai bisogno?' }));
      card.appendChild(domandaArrivo('bisogno', 'Stasera, per te, che cosa conta di più?', AR.bisogni, { extra: extraBisogno, gruppo: 'bisogni' }));
    }
    if (id === 'giornata') {
      card.appendChild(h('h2', { class: 'passo-titolo', text: 'La giornata e la notte' }));
      card.appendChild(domandaArrivo('giornata', 'Com’è andata la giornata?', AR.giornata, { gruppo: 'giornata' }));
      card.appendChild(domandaArrivo('sonno', 'E come hai dormito stanotte?', AR.sonno, { gruppo: 'sonno' }));
    }
    radice.appendChild(card);
    var ultimo = i === L.length - 1;
    radice.appendChild(h('div', { class: 'nav-passi' },
      i > 0 ? h('button', { class: 'btn btn-ghost', type: 'button', text: 'Indietro', onclick: function () { vaiArrivo(i - 1); } })
        : (!S.oggi ? h('a', { class: 'btn btn-ghost', href: '#sere', text: 'Le sere' }) : null),
      h('button', { class: 'btn', type: 'button', text: ultimo ? 'Cominciamo' : 'Avanti', onclick: function () { if (ultimo) vaiPasso(1); else vaiArrivo(i + 1); } })));
  }
  function disegnaSerata() {
    fermaRespiri();
    clear(radice);
    var t = S.tema;

    if (S.passo === 4) { disegnaFatto(); return; }

    /* ---- 0 · arrivo ---- */
    if (S.passo === 0) { disegnaArrivo(); return; }

    radice.appendChild(punti(S.passo));

    /* ---- 1 · lettura ---- */
    if (S.passo === 1) {
      var testo = h('div', { class: 'testo' });
      t.lettura.forEach(function (p) { testo.appendChild(h('p', { text: p })); });
      radice.appendChild(h('div', { class: 'card tema-card', 'data-colore': t.colore },
        h('p', { class: 'sotto', text: 'Lettura · ' + t.nome }),
        h('h2', { class: 'passo-titolo', text: t.sotto }),
        testo,
        t.avviso ? h('div', { class: 'avviso', text: t.avviso }) : null));
      radice.appendChild(navPassi(0, 2, 'Avanti, l’esercizio'));
      return;
    }

    /* ---- 2 · esercizio ---- */
    if (S.passo === 2) {
      var e = t.esercizio;
      var lista = h('ol', { class: 'passi-lista' });
      e.passi.forEach(function (p) { lista.appendChild(h('li', { text: p })); });
      var card = h('div', { class: 'card' },
        h('p', { class: 'sotto', text: 'Esercizio' }),
        h('h2', { class: 'passo-titolo', text: e.titolo }),
        h('p', { class: 'intro', text: e.intro }),
        lista);
      if (e.respiro) {
        var rb = h('div', { class: 'breath' });
        card.appendChild(rb);
        respiro(rb, 180);
      }
      var P2 = percorso(t);
      if (P2) {
        card.appendChild(h('p', { class: 'small', text: 'Qui sotto ci sono alcune domande. Non ci sono risposte giuste o sbagliate: tocca quella che ti somiglia di più e leggi cosa c’è dietro. Puoi saltare quelle che non ti vanno.' }));
      } else if (e.campi && e.campi.length) {
        card.appendChild(h('h3', { text: 'Se ti va, scrivi' }));
        e.campi.forEach(function (c) {
          var id = 'campo-' + c.id;
          var ta = h('textarea', { id: id, rows: '2', placeholder: c.aiuto || '' });
          ta.value = S.campi[c.id] || '';
          ta.addEventListener('input', function () { S.campi[c.id] = ta.value; });
          ta.addEventListener('blur', salvaSerata);
          card.appendChild(h('label', { class: 'campo', for: id, text: c.etichetta }));
          card.appendChild(ta);
        });
        card.appendChild(h('p', { class: 'small', text: 'Quello che scrivi resta solo sul tuo telefono. Puoi lasciare vuoto qualsiasi campo.' }));
      }
      radice.appendChild(card);
      if (P2) P2.scene.forEach(function (q) { radice.appendChild(h('div', { class: 'card quiz' }, cartaDomanda(q))); });
      radice.appendChild(navPassi(1, 3, 'Avanti, la buonanotte'));
      return;
    }

    /* ---- 3 · buonanotte ---- */
    if (S.passo === 3) {
      var P3 = percorso(t), domandaFine;
      if (P3) {
        domandaFine = cartaDomanda(P3.chiusura);
      } else {
        var ta2 = h('textarea', { id: 'nota-fin', rows: '3', placeholder: 'Anche una riga sola.' });
        ta2.value = S.nota;
        ta2.addEventListener('input', function () { S.nota = ta2.value; });
        ta2.addEventListener('blur', salvaSerata);
        domandaFine = h('div', null, h('label', { class: 'campo', for: 'nota-fin', text: t.domanda }), ta2);
      }
      var card3 = h('div', { class: 'card' },
        h('p', { class: 'sotto', text: 'Buonanotte' }),
        h('h2', { class: 'passo-titolo', text: 'Per chiudere la serata' }),
        domandaFine,
        h('p', { class: 'campo-t', id: 'q-dopo', text: 'Adesso, quanto sei tesa o agitata?' }),
        scalaUmore(S.dopo, function (v) { S.dopo = v; }, 'sc-dopo', 'q-dopo'));
      radice.appendChild(card3);

      if (t.file) {
        radice.appendChild(h('div', { class: 'card audio-box' },
          h('h3', { text: 'Ascolta mentre ti addormenti' }),
          h('audio', { controls: true, preload: 'none', src: t.file })));
      }
      radice.appendChild(h('div', { class: 'chiusura-frase', text: t.frase }));
      radice.appendChild(h('div', { class: 'nav-passi' },
        h('button', { class: 'btn btn-ghost', type: 'button', text: 'Indietro', onclick: function () { vaiPasso(2); } }),
        h('button', { class: 'btn', type: 'button', text: 'Ho finito', onclick: function () {
          S.completa = true; salvaSerata(); S.passo = 4; disegnaSerata(); window.scrollTo(0, 0); segnaPasso(false);
        } })));
    }
  }

  function navPassi(indietro, avanti, testoAvanti) {
    return h('div', { class: 'nav-passi' },
      h('button', { class: 'btn btn-ghost', type: 'button', text: 'Indietro', onclick: function () { vaiPasso(indietro); } }),
      h('button', { class: 'btn', type: 'button', text: testoAvanti, onclick: function () { vaiPasso(avanti); } }));
  }

  function disegnaFatto() {
    var t = S.tema;
    var entrambi = S.dopo !== null && S.prima !== null;
    var lp = livello(S.prima), ld = livello(S.dopo);
    var diff = entrambi ? lp - ld : 0;   /* > 0: più calma; < 0: la tensione è salita */
    var Pf = percorso(t);
    /* una risposta sensibile (es. un impulso che fa male) conta quanto una tensione alta */
    var crisiScelta = !!Pf && tutteLeDomande(Pf).some(function (q) {
      return (S.scelte[q.id] || []).some(function (i) { return q.opzioni[i] && q.opzioni[i].crisi; });
    });
    var alta = crisiScelta || ld === 2 || (entrambi && diff < 0);
    var riga = !entrambi ? 'Anche essere venuta qui conta.'
      : diff > 0 ? 'Prima eri ' + LIVELLI[lp].nome + ', adesso ' + LIVELLI[ld].nome + '. Un po’ più di calma.'
        : diff < 0 ? 'Stasera la tensione è salita: da «' + LIVELLI[lp].nome + '» a «' + LIVELLI[ld].nome + '». Capita, e non vuol dire che hai sbagliato qualcosa.'
          : 'La tensione è rimasta uguale (' + LIVELLI[lp].nome + '). Anche essere venuta qui conta.';
    var ri = riepilogoSerata();
    radice.appendChild(h('div', { class: 'card fatto' },
      h('h1', { text: 'Serata fatta' }),
      h('p', { class: 'lede', text: riga }),
      ri ? h('div', { class: 'riepilogo' },
        h('p', { class: 'sotto', text: 'Quello che è emerso stasera' }),
        h('p', { text: ri.frase }),
        h('p', null, h('b', { text: 'Una piccola cosa per domani: ' }), ri.domani)) : null,
      h('div', { class: 'chiusura-frase', text: t.frase }),
      alta
        ? h('div', null,
          h('p', { text: 'Se la tensione è ancora alta, non restare sola con questa sera: qui sotto trovi una strada breve per calmarti.' }),
          h('button', { class: 'btn btn-alert', type: 'button', text: 'Stasera è dura', onclick: function () { apriDura(); } }))
        : h('p', { text: 'Puoi posare il telefono. Buonanotte.' })));
    radice.appendChild(h('div', { class: 'nav-passi' },
      h('button', { class: 'btn btn-ghost', type: 'button', text: 'Rileggi la serata', onclick: function () { vaiPasso(1); } }),
      h('a', { class: 'btn', href: '#diario', text: 'Il mio diario' })));
  }

  /* ---------- LE SETTE SERE ---------- */
  function disegnaSere() {
    var el = $('#sere-lista');
    clear(el);
    var oggiG = seraDi(new Date()).getDay();
    [1, 2, 3, 4, 5, 6, 0].forEach(function (g) {
      var t = temaDelGiorno(g);
      var b = h('button', { class: 'sera-item' + (g === oggiG ? ' oggi' : ''), type: 'button', onclick: function () { location.hash = '#tema=' + t.id; } },
        h('span', { class: 'gg', text: g === oggiG ? 'Stasera' : A.Giorni[g] }),
        h('span', null, h('span', { class: 'nm', text: t.nome }), h('span', { class: 'st', text: t.sotto })));
      el.appendChild(b);
    });
  }

  /* ---------- DIARIO ---------- */
  /* Le risposte dell’arrivo (emozioni, corpo, bisogno, giornata, sonno) come righe leggibili. */
  function righeArrivo(n) {
    var AR = A.Arrivo, out = [];
    if (!AR || !n.scelte) return out;
    [['La piccola cosa di ieri', 'ieri', AR.ieri], ['Come mi sentivo', 'emo', AR.emozioni], ['Nel corpo', 'corpo', AR.corpo], ['Avevo bisogno di', 'bisogno', AR.bisogni], ['La giornata', 'giornata', AR.giornata], ['Il sonno', 'sonno', AR.sonno]].forEach(function (r) {
      var v = (n.scelte['ar-' + r[1]] || []).filter(function (i) { return r[2][i]; }).map(function (i) { return r[2][i].testo; });
      if (v.length) out.push([r[0], v.join(' · ')]);
    });
    return out;
  }
  function righeNota(n) {
    var t = temaPerId(n.tema);
    var out = [];
    if (!t) return out;
    righeArrivo(n).forEach(function (r) { out.push(r); });
    t.esercizio.campi.forEach(function (c) {
      var v = n.campi && n.campi[c.id];
      if (v && String(v).trim()) out.push([c.etichetta, String(v).trim()]);
    });
    var P = percorso(t);
    if (P && n.scelte) tutteLeDomande(P).forEach(function (q) {
      var sel = (n.scelte[q.id] || []).filter(function (i) { return q.opzioni[i]; }).map(function (i) { return q.opzioni[i].testo; });
      if (sel.length) out.push([q.domanda, sel.join(' · ')]);
    });
    if (n.nota && String(n.nota).trim()) out.push([t.domanda, String(n.nota).trim()]);
    return out;
  }
  function disegnaDiario() {
    var el = $('#diario-lista');
    clear(el);
    var note = tutteLeNote();
    var chiavi = Object.keys(note).sort().reverse();
    if (!chiavi.length) {
      el.appendChild(h('p', { class: 'vuoto', text: 'Qui compariranno le tue serate. Cominciamo da stasera.' }));
      return;
    }
    chiavi.forEach(function (k) {
      var n = note[k];
      var t = temaPerId(n.tema);
      if (!t) return;
      var data = k.split('|')[0];
      var dl = h('dl', null);
      var righe = righeNota(n);
      righe.forEach(function (r) { dl.appendChild(h('dt', { text: r[0] })); dl.appendChild(h('dd', { text: r[1] })); });
      if (!righe.length) dl.appendChild(h('dd', { text: 'Nessuna risposta salvata in questa serata.' }));
      var umore = n.prima !== null ? (breveLiv(n.prima) + (n.dopo !== null ? ' → ' + breveLiv(n.dopo) : '')) : '';
      var cancella = h('button', { class: 'btn btn-ghost', type: 'button', text: 'Elimina questa serata', onclick: function () {
        if (!confirm('Eliminare questa serata dal diario?')) return;
        var tutte = tutteLeNote(); delete tutte[k]; save(K.note, tutte); disegnaDiario();
      } });
      el.appendChild(h('details', { class: 'nota' },
        h('summary', null,
          h('span', null, h('span', { class: 'n-data', text: dataLunga(data) }), h('br'), h('span', { class: 'n-tema', text: t.nome + (n.completa ? '' : ' (incompleta)') })),
          h('span', { class: 'n-umore', text: umore })),
        h('div', { class: 'n-corpo' }, dl, h('div', { class: 'row-btns' }, cancella))));
    });
  }
  $('#btn-esporta').addEventListener('click', function () {
    var note = tutteLeNote();
    var chiavi = Object.keys(note).sort();
    var hint = $('#diario-hint');
    if (!chiavi.length) { hint.textContent = 'Non c’è ancora niente da salvare.'; return; }
    var righe = ['APPRODO – le mie note', ''];
    chiavi.forEach(function (k) {
      var n = note[k], t = temaPerId(n.tema);
      if (!t) return;
      righe.push(dataLunga(k.split('|')[0]) + ' · ' + t.nome + (n.prima !== null ? ' · tensione ' + breveLiv(n.prima) + (n.dopo !== null ? ' → ' + breveLiv(n.dopo) : '') : ''));
      righeNota(n).forEach(function (r) { righe.push('  ' + r[0] + ': ' + r[1].replace(/\n/g, ' ')); });
      righe.push('');
    });
    try {
      var blob = new Blob([righe.join('\n')], { type: 'text/plain;charset=utf-8' });
      var a = h('a', { href: URL.createObjectURL(blob), download: 'approdo-note.txt' });
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      hint.textContent = 'File salvato. Condividilo solo con chi vuoi tu.';
    } catch (e) { hint.textContent = 'Non sono riuscita a creare il file su questo telefono.'; }
  });

  /* Riepilogo da condividere con chi mi segue: solo date, tensione e scelte (mai i testi liberi), e solo se lo decido io. */
  $('#btn-riepilogo').addEventListener('click', function () {
    var note = tutteLeNote();
    var hint = $('#diario-hint');
    var chiavi = Object.keys(note).filter(function (k) { return note[k].completa; }).sort().slice(-30);
    if (!chiavi.length) { hint.textContent = 'Il riepilogo si crea dopo almeno una serata finita.'; return; }
    var righe = ['APPRODO – riepilogo delle mie ultime serate', 'Lo condivido io, perché ho scelto di farlo. Le risposte sono scelte fra opzioni date: non sono una valutazione clinica. La tensione ha tre livelli: bassa (abbastanza calma), media (un po’ tesa), alta (molto tesa).', ''];
    var altaPrima = 0, altaDopo = 0, nPrima = 0, nDopo = 0;
    chiavi.forEach(function (k) {
      var n = note[k], t = temaPerId(n.tema);
      if (!t) return;
      righe.push(dataLunga(k.split('|')[0]) + ' · ' + t.nome + (n.prima !== null ? ' · tensione ' + breveLiv(n.prima) + (n.dopo !== null ? ' → ' + breveLiv(n.dopo) : '') : ''));
      if (n.prima !== null) { nPrima++; if (livello(n.prima) === 2) altaPrima++; }
      if (n.dopo !== null) { nDopo++; if (livello(n.dopo) === 2) altaDopo++; }
      righeArrivo(n).forEach(function (r) { righe.push('  – ' + r[0] + ': ' + r[1]); });
      var P = percorso(t);
      if (P) tutteLeDomande(P).forEach(function (q) {
        var sel = (n.scelte[q.id] || []).filter(function (i) { return q.opzioni[i]; }).map(function (i) { return q.opzioni[i].testo; });
        if (sel.length) righe.push('  – ' + (q.domanda.length > 80 ? q.domanda.slice(0, 77) + '…' : q.domanda) + ' → ' + sel.join(' · '));
      });
      righe.push('');
    });
    if (nPrima || nDopo) righe.push('Tensione alta a inizio serata: ' + altaPrima + ' su ' + nPrima + '; a fine serata: ' + altaDopo + ' su ' + nDopo + '.');
    var testo = righe.join('\n');
    function scarica() {
      try {
        var blob = new Blob([testo], { type: 'text/plain;charset=utf-8' });
        var a = h('a', { href: URL.createObjectURL(blob), download: 'approdo-riepilogo.txt' });
        document.body.appendChild(a); a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
        hint.textContent = 'File salvato. Condividilo solo con chi vuoi tu.';
      } catch (e) { hint.textContent = 'Non sono riuscita a creare il file su questo telefono.'; }
    }
    if (navigator.share) {
      navigator.share({ title: 'Approdo – riepilogo', text: testo }).then(function () { hint.textContent = 'Fatto.'; }).catch(function (e) { if (!e || e.name !== 'AbortError') scarica(); });
    } else scarica();
  });

  /* ---------- PER TE: il profilo personale (solo se importato) ---------- */
  function disegnaPerTe() {
    var el = $('#perte-lista');
    clear(el);
    if (!PROF) return;
    el.appendChild(h('p', { class: 'lede', text: 'Questo profilo è solo tuo e resta su questo telefono. Spiega come lavorano le tue difficoltà e le tue risorse, con i termini tecnici e le parole semplici accanto.' }));
    PROF.aree.forEach(function (a) {
      var corpo = h('div', { class: 'acc-body' });
      if (a.tecnico) { corpo.appendChild(h('h3', { text: 'In termini tecnici' })); corpo.appendChild(h('p', { text: a.tecnico })); }
      if (a.spiegato) { corpo.appendChild(h('h3', { text: 'In parole semplici' })); corpo.appendChild(h('p', { text: a.spiegato })); }
      if (a.pratica) { corpo.appendChild(h('h3', { text: 'Una pratica da due minuti' })); corpo.appendChild(h('p', { text: a.pratica })); }
      el.appendChild(h('details', { class: 'acc' }, h('summary', { class: 'perte-sum' }, h('span', { text: a.titolo }), a.scala ? h('small', { text: a.scala }) : null), corpo));
    });
    if (PROF.risorse.length) {
      el.appendChild(h('h2', { class: 'perte-h', text: 'Le tue risorse' }));
      PROF.risorse.forEach(function (r) { el.appendChild(h('div', { class: 'card' }, h('h3', { text: r.titolo }), h('p', { text: r.testo }))); });
    }
    if (PROF.sicurezza) {
      el.appendChild(h('div', { class: 'row-btns' },
        h('button', { class: 'btn btn-ghost', type: 'button', text: PROF.sicurezza.titolo, onclick: function () { apriDura(); } })));
    }
  }

  /* ---------- STASERA È DURA ---------- */
  var duraPronta = false;
  function apriDura() {
    var d = $('#dlg-dura');
    if (!duraPronta) preparaDura();
    apri(d);
    var rb = $('#breath-dura');
    if (!rb.firstChild) respiro(rb, 120);
    var pi = stringhe(load(K.piano, {})), compilato = Object.keys(pi).some(function (k) { return pi[k].trim(); });
    var acc = $('#acc-piano');
    if (compilato && acc && !acc.dataset.spostato) {
      acc.dataset.spostato = '1';
      acc.setAttribute('open', '');
      var primo = $('#dlg-dura .acc');
      primo.parentNode.insertBefore(acc, primo);
    }
  }
  function numeroPulito(s) { return String(s).replace(/[^0-9+]/g, ''); }

  function disegnaContatti() {
    var el = $('#contatti-lista');
    clear(el);
    var lista = listaContatti();
    lista.forEach(function (c, i) {
      el.appendChild(h('div', { class: 'contatto' },
        h('a', { class: 'chiama', href: 'tel:' + numeroPulito(c.num) }, h('b', { text: String(c.nome || 'Senza nome') }), h('span', { text: String(c.num) })),
        h('button', { class: 'icon-btn del', type: 'button', 'aria-label': 'Togli ' + String(c.nome || ''), text: '✕', onclick: function () {
          var l = listaContatti(); l.splice(i, 1); save(K.contatti, l); disegnaContatti();
        } })));
    });
    if (!el.firstChild) el.appendChild(h('p', { class: 'small', text: 'Ancora nessuno. Aggiungi una o due persone di cui ti fidi.' }));
  }
  /* Le parti della finestra che dipendono dal profilo personale (tecniche con le note «Per te», piano di sicurezza
     personale): si ricostruiscono quando il profilo viene importato o tolto. */
  function costruisciDuraProfilo() {
    var extra = $('#tecniche-extra');
    clear(extra);
    (A.Tecniche || []).forEach(function (tc) {
      var pn = PROF && PROF.tecniche[tc.id];
      if (pn && pn.nascondi) return;
      var ol = h('ol', null);
      tc.passi.forEach(function (x) { ol.appendChild(h('li', { text: x })); });
      extra.appendChild(h('details', { class: 'acc' }, h('summary', { text: tc.titolo }),
        h('div', { class: 'acc-body' }, h('p', { text: tc.intro }), ol,
          pn && pn.nota ? h('p', { class: 'quiz-perte' }, h('b', { text: 'Per te: ' }), pn.nota) : null)));
    });
    var vecchio = $('#acc-sicurezza');
    if (vecchio) vecchio.remove();
    if (!PROF || !PROF.sicurezza) return;
    var s = PROF.sicurezza, corpo = h('div', { class: 'acc-body' });
    if (s.intro) corpo.appendChild(h('p', { text: s.intro }));
    if (s.segnali.length) {
      var ul = h('ul', null);
      s.segnali.forEach(function (x) { ul.appendChild(h('li', { text: x })); });
      corpo.appendChild(h('h3', { text: 'Segnali che sta arrivando' }));
      corpo.appendChild(ul);
    }
    if (s.passi.length) {
      var ol2 = h('ol', null);
      s.passi.forEach(function (x) { ol2.appendChild(h('li', { text: x })); });
      corpo.appendChild(h('h3', { text: 'Che cosa faccio, nell’ordine' }));
      corpo.appendChild(ol2);
    }
    function elenco(titolo, arr) {
      if (!arr.length) return;
      corpo.appendChild(h('h3', { text: titolo }));
      arr.forEach(function (c) {
        var dettaglio = (c.num || '') + (c.num && c.nota ? ' · ' : '') + (c.nota || '');
        corpo.appendChild(h('div', { class: 'contatto' }, c.num
          ? h('a', { class: 'chiama', href: 'tel:' + numeroPulito(c.num) }, h('b', { text: c.nome }), h('span', { text: dettaglio }))
          : h('div', { class: 'chiama' }, h('b', { text: c.nome }), dettaglio ? h('span', { text: dettaglio }) : null)));
      });
    }
    elenco('Chi posso cercare', s.persone);
    if (!s.persone.length) {   /* lista vuota: si rimanda a «Le mie persone», che riempie lei sul telefono */
      corpo.appendChild(h('h3', { text: 'Chi posso cercare' }));
      corpo.appendChild(h('p', { class: 'small', text: 'Questa lista la scrivi tu, in un momento calmo, con le persone di cui ti fidi.' }));
      corpo.appendChild(h('button', { class: 'btn btn-ghost', type: 'button', text: 'Apri «Le mie persone»', onclick: function () {
        var a = $('#acc-contatti'); if (a) { a.setAttribute('open', ''); a.scrollIntoView({ block: 'center' }); }
      } }));
    }
    elenco('Servizi a cui posso rivolgermi', s.servizi);
    if (!s.servizi.length) {
      corpo.appendChild(h('h3', { text: 'Servizi a cui posso rivolgermi' }));
      corpo.appendChild(h('p', { class: 'small', text: 'Da scrivere insieme a chi ti segue (terapeuta, gruppo, centro di salute mentale): finché non c’è, parlane alla prossima seduta.' }));
    }
    if (s.chiusura) corpo.appendChild(h('p', { class: 'small', text: s.chiusura }));
    var acc = h('details', { class: 'acc', id: 'acc-sicurezza', open: true }, h('summary', { text: s.titolo }), corpo);
    var primo = $('#dlg-dura .acc');
    primo.parentNode.insertBefore(acc, primo);
  }
  function preparaDura() {
    duraPronta = true;
    costruisciDuraProfilo();
    disegnaContatti();
    $('#contatti-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = $('#c-nome').value.trim(), num = $('#c-num').value.trim();
      if (!numeroPulito(num)) return;
      var l = listaContatti();
      if (l.length >= 8) return;
      l.push({ nome: nome, num: num });
      save(K.contatti, l);
      $('#c-nome').value = ''; $('#c-num').value = '';
      disegnaContatti();
    });
    var piano = stringhe(load(K.piano, {}));
    var campi = [
      ['segnali', 'Come capisco che sta arrivando una sera dura'],
      ['aiuta', 'Che cosa mi aiuta di solito'],
      ['posto', 'Un posto, in casa, dove mi sento più al sicuro'],
      ['ragioni', 'Che cosa conta per me, le mie ragioni per restare'],
      ['casa', 'Che cosa posso fare per rendere più sicuro l’ambiente stasera (anche con l’aiuto di qualcuno)'],
      ['chi', 'Chi mi segue, e come lo contatto'],
      ['servizi', 'Servizi a cui posso rivolgermi (centro di salute mentale, pronto soccorso)']
    ];
    var box = $('#piano-campi');
    campi.forEach(function (c) {
      var ta = h('textarea', { id: 'piano-' + c[0], rows: '2' });
      ta.value = piano[c[0]] || '';
      ta.addEventListener('input', function () { piano[c[0]] = ta.value; save(K.piano, piano); });
      box.appendChild(h('label', { class: 'campo', for: 'piano-' + c[0], text: c[1] }));
      box.appendChild(ta);
    });
  }
  /* Non c’è più un tasto fisso: «Stasera è dura» si apre dal benvenuto, dal suggerimento con tensione alta,
     dalle risposte sensibili e dalla schermata finale. `Approdo.apriDura` serve alle prove automatiche. */
  A.apriDura = apriDura;

  /* ---------- tema chiaro / notte ---------- */
  function applicaTema(t) {
    document.documentElement.setAttribute('data-theme', t);
    var b = $('#btn-theme');
    b.setAttribute('aria-pressed', t === 'giorno' ? 'true' : 'false');
    b.setAttribute('aria-label', t === 'giorno' ? 'Passa al tema notte' : 'Passa al tema chiaro');
    var m = $('#meta-theme'); if (m) m.setAttribute('content', t === 'giorno' ? '#f6f1e8' : '#14131c');
  }
  $('#btn-theme').addEventListener('click', function () {
    var nuovo = document.documentElement.getAttribute('data-theme') === 'giorno' ? 'notte' : 'giorno';
    applicaTema(nuovo);
    save(K.vista, nuovo);
  });
  applicaTema(load(K.vista, 'notte') === 'giorno' ? 'giorno' : 'notte');

  /* ---------- su Approdo e benvenuto ---------- */
  $('#btn-info').addEventListener('click', function () {
    $('#info-nome').value = load(K.nome, '');
    var v = A.Version;
    $('#info-versione').textContent = v ? 'Versione ' + v.v + ' · ' + v.date : '';
    apri($('#dlg-info'));
  });
  $('#info-nome-salva').addEventListener('click', function () {
    save(K.nome, $('#info-nome').value.trim());
    chiudi($('#dlg-info'));
    route();
  });
  $('#info-cancella').addEventListener('click', function () {
    if (!confirm('Cancellare tutte le tue note? Non si può annullare.')) return;
    try { localStorage.removeItem(K.note); } catch (e) { /* niente */ }
    chiudi($('#dlg-info'));
    S = null;
    route();
  });
  $('#info-cancella-tutto').addEventListener('click', function () {
    if (!confirm('Cancellare tutto: note, nome, persone, piano e preferenze? Non si può annullare.')) return;
    Object.keys(K).forEach(function (k) { try { localStorage.removeItem(K[k]); } catch (e) { /* niente */ } });
    location.hash = '#stasera';
    location.reload();
  });
  /* ---------- importazione del profilo personale (resta solo su questo telefono) ---------- */
  function aggiornaProfiloUI() {
    $('#tab-perte').hidden = !PROF;
    $('#profilo-rimuovi').hidden = !PROF;
    $('#profilo-stato').textContent = PROF
      ? 'Profilo importato' + (PROF.creato ? ' (' + PROF.creato + ')' : '') + ': ' + PROF.aree.length + (PROF.aree.length === 1 ? ' scheda' : ' schede') + ' in «Per te»' + (PROF.sicurezza ? ' e il tuo piano per le sere più dure.' : '.')
      : 'Nessun profilo importato.';
  }
  function importaProfilo(testo) {
    var hint = $('#profilo-hint'), raw = null;
    try { raw = JSON.parse(String(testo)); } catch (e) { hint.textContent = 'Questo testo non è un profilo di Approdo.'; return false; }
    var P = profiloSicuro(raw);
    if (!P) { hint.textContent = 'Questo non sembra un profilo di Approdo (formato non riconosciuto).'; return false; }
    if (!save(K.profilo, P)) { hint.textContent = 'Non sono riuscita a salvarlo su questo telefono.'; return false; }
    PROF = P;
    if (duraPronta) costruisciDuraProfilo();
    aggiornaProfiloUI();
    $('#profilo-box').hidden = true;
    $('#profilo-testo').value = '';
    S = null;   /* le note «Per te» entrano subito nelle risposte */
    route();
    hint.textContent = 'Profilo importato. Lo trovi nella scheda «Per te».';
    return true;
  }
  $('#profilo-incolla').addEventListener('click', function () {
    var b = $('#profilo-box');
    b.hidden = !b.hidden;
    if (!b.hidden) $('#profilo-testo').focus();
  });
  $('#profilo-conferma').addEventListener('click', function () { importaProfilo($('#profilo-testo').value); });
  $('#profilo-file').addEventListener('change', function () {
    var f = this.files && this.files[0];
    if (!f) return;
    if (f.size > 300000) { $('#profilo-hint').textContent = 'Il file è troppo grande per essere un profilo.'; return; }
    var r = new FileReader();
    r.onload = function () { importaProfilo(r.result); };
    r.onerror = function () { $('#profilo-hint').textContent = 'Non sono riuscita a leggere il file.'; };
    r.readAsText(f);
    this.value = '';
  });
  $('#profilo-rimuovi').addEventListener('click', function () {
    if (!confirm('Rimuovere il profilo personale da questo telefono? Le tue note restano.')) return;
    try { localStorage.removeItem(K.profilo); } catch (e) { /* niente */ }
    PROF = null;
    if (duraPronta) costruisciDuraProfilo();
    aggiornaProfiloUI();
    S = null;
    $('#profilo-hint').textContent = 'Profilo rimosso.';
    if (location.hash === '#perte') location.hash = '#stasera'; else route();
  });
  A.importaProfilo = importaProfilo;
  aggiornaProfiloUI();

  $('#ben-dura').addEventListener('click', function () { apriDura(); });
  $('#ben-form').addEventListener('submit', function (e) {
    e.preventDefault();
    save(K.nome, $('#ben-nome').value.trim());
    save(K.visto, 1);
    chiudi($('#dlg-benvenuto'));
    route();
  });
  $('#dlg-benvenuto').addEventListener('cancel', function (e) { e.preventDefault(); });

  /* ---------- navigazione ---------- */
  var VISTE = ['stasera', 'sere', 'diario', 'perte'];
  function route() {
    fermaRespiri();
    var hash = location.hash.replace(/^#/, '');
    var vista = 'stasera', tema = null;
    if (hash.indexOf('tema=') === 0) { tema = temaPerId(hash.slice(5)); vista = 'stasera'; }
    else if (VISTE.indexOf(hash) >= 0) vista = hash;
    if (vista === 'perte' && !PROF) vista = 'stasera';   /* «Per te» esiste solo con un profilo importato */

    VISTE.forEach(function (v) { $('#v-' + v).hidden = v !== vista; });
    document.querySelectorAll('.tabs a').forEach(function (a) {
      if (a.getAttribute('data-tab') === vista) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    if (vista === 'stasera') {
      var voluto = tema || temaDelGiorno(seraDi(new Date()).getDay());
      if (!S || S.tema.id !== voluto.id || S.data !== chiaveData(seraDi(new Date()))) avviaSerata(voluto);
      else disegnaSerata();
    }
    if (vista === 'sere') disegnaSere();
    if (vista === 'diario') disegnaDiario();
    if (vista === 'perte') disegnaPerTe();
    var titoli = { stasera: 'Stasera', sere: 'Le sette sere', diario: 'Il mio diario', perte: 'Per te' };
    document.title = titoli[vista] + ' · Approdo';
    window.scrollTo(0, 0);
    var t1 = $('#v-' + vista + ' h1');
    if (t1) { t1.setAttribute('tabindex', '-1'); t1.focus({ preventScroll: true }); }
  }
  window.addEventListener('hashchange', route);
  window.addEventListener('popstate', function (e) {
    var st = e.state, vista = $('#v-stasera');
    if (!S || !st || !st.approdo || !vista || vista.hidden) return;
    S.passo = st.p; S.sub = st.s;
    disegnaSerata();
    window.scrollTo(0, 0);
    focusTitolo();
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden) fermaRespiri(); });

  route();
  if (!load(K.visto, 0)) apri($('#dlg-benvenuto'));

  /* ---------- uso senza rete ---------- */
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    navigator.serviceWorker.register('sw.js').catch(function () { /* niente: l’app funziona lo stesso */ });
  }
})();
