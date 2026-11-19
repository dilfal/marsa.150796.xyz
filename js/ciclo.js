/* Marsa – il ciclo. Funzioni pure (nessun accesso a localStorage né al documento): le date sono testi «AAAA-MM-GG».
   I dati stanno in «marsa.ciclo» = { attivo, durata, inizi: [...], fini: { inizio: fine }, giorni }, solo su questo telefono. Le previsioni sono probabilità,
   non certezze: servono a ricordare che i giorni prima del ciclo possono abbassare la soglia (l’onda si alza prima). */
(function () {
  'use strict';

  var A = typeof window !== 'undefined' ? (window.Marsa = window.Marsa || {}) : {};

  var LUNG_MIN = 15, LUNG_MAX = 60;   /* le lunghezze fuori da questi limiti non sono cicli normali: si scartano */
  var ULTIMI = 6;                     /* la media guarda gli ultimi sei cicli */
  var DURATA_DI_PARTENZA = 28;
  var GIORNO_MAX = 60;                /* oltre il giorno 60 non si mostra più «Giorno N» */
  var MAX_INIZI = 36;
  var GIORNI_MIN = 3, GIORNI_MAX = 10, GIORNI_DI_PARTENZA = 5;   /* durata dei giorni di flusso dichiarata */
  var DURATA_MIN = 2, DURATA_MAX = 10;                           /* durate misurate fuori da questi limiti si scartano */
  var FINESTRA_FINE = 14;                                        /* un ciclo è «in corso» fino a inizio + 14 */
  var ALFABETO_CODICE = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

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
  /* «fini»: solo le fini di inizi che esistono, non prima dell’inizio, prima dell’inizio successivo e (se si sa «oggi») non nel futuro */
  function finiValide(inizi, fini, oggi) {
    var out = {}, o = gg(oggi);
    if (!fini || typeof fini !== 'object' || Array.isArray(fini)) return out;
    var ord = inizi.slice().sort();
    ord.forEach(function (s, i) {
      var f = fini[s], n = gg(f), a = gg(s);
      if (typeof f !== 'string' || n === null || n < a) return;
      if (i + 1 < ord.length && n >= gg(ord[i + 1])) return;
      if (o !== null && n > o) return;
      out[s] = f;
    });
    return out;
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
    var gs = typeof o.giorni === 'number' && isFinite(o.giorni) && o.giorni >= GIORNI_MIN && o.giorni <= GIORNI_MAX;
    var c = { attivo: o.attivo === true, durata: d, inizi: inizi.slice(-MAX_INIZI), fini: {}, giorni: gs ? Math.round(o.giorni) : GIORNI_DI_PARTENZA, giorniScelti: gs };
    if (gg(oggi) !== null) c.inizi = utili(c, oggi);
    c.fini = finiValide(c.inizi, o.fini, oggi);
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

  /* un inizio tolto porta via anche la sua fine */
  function togliInizio(c, s) {
    var fini = {};
    Object.keys(c.fini || {}).forEach(function (k) { if (k !== s) fini[k] = c.fini[k]; });
    return { inizi: c.inizi.filter(function (x) { return x !== s; }), fini: fini };
  }
  /* la fine di un ciclo (inclusa): non prima dell’inizio; data non valida → fini invariate */
  function aggiungiFine(c, inizio, fine) {
    var fini = {};
    Object.keys(c.fini || {}).forEach(function (k) { fini[k] = c.fini[k]; });
    if (c.inizi.indexOf(inizio) < 0 || gg(fine) === null || gg(fine) < gg(inizio)) return fini;
    fini[inizio] = fine;
    return fini;
  }
  /* durata media dei giorni del ciclo: media arrotondata di (fine − inizio + 1) sugli ultimi 6 cicli con la fine,
     senza i valori fuori misura (< 2 o > 10); se non ce n’è nessuno, i giorni dichiarati */
  function giorniMedi(c) {
    var fini = c.fini || {}, ds = [];
    c.inizi.slice().sort().forEach(function (s) { if (fini[s] && gg(fini[s]) !== null) ds.push(gg(fini[s]) - gg(s) + 1); });
    ds = ds.slice(-ULTIMI).filter(function (n) { return n >= DURATA_MIN && n <= DURATA_MAX; });
    if (!ds.length) return typeof c.giorni === 'number' && c.giorni >= GIORNI_MIN && c.giorni <= GIORNI_MAX ? Math.round(c.giorni) : GIORNI_DI_PARTENZA;
    return Math.round(ds.reduce(function (a, x) { return a + x; }, 0) / ds.length);
  }
  /* l’inizio del ciclo in corso: l’ultimo inizio, senza fine, degli ultimi 15 giorni (oggi compreso); altrimenti null */
  function inCorso(c, oggi) {
    var o = gg(oggi);
    if (!c || o === null) return null;
    var inizi = utili(c, oggi), u = inizi[inizi.length - 1];
    if (!u || (c.fini && c.fini[u])) return null;
    var g = o - gg(u);
    return g >= 0 && g <= FINESTRA_FINE ? u : null;
  }
  /* la domanda «Il ciclo è finito?»: dal giorno inizio + media − 1 fino a inizio + 14, solo con un ciclo in corso senza fine.
     Restituisce l’inizio da chiudere o null. */
  function domandaFine(c, oggi) {
    var u = inCorso(c, oggi);
    if (!u) return null;
    return gg(oggi) - gg(u) >= giorniMedi(c) - 1 ? u : null;
  }
  /* codice di collegamento con Maladh: 26 caratteri base32 Crockford; senza spazi e trattini, maiuscolo; non valido → null */
  function normalizzaCodice(t) {
    var s = String(t === null || t === undefined ? '' : t).replace(/[\s-]+/g, '').toUpperCase();
    if (s.length !== 26) return null;
    for (var i = 0; i < s.length; i++) if (ALFABETO_CODICE.indexOf(s.charAt(i)) < 0) return null;
    return s;
  }
  function mostraCodice(s) { return String(s).replace(/(.{4})(?=.)/g, '$1-'); }

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

  /* ---------- le frasi del giorno ----------
     110 frasi, una al giorno: g1…g7 = giorni 1-7 del ciclo (certi), «dopo» = dopo il ciclo, «meta» = metà ciclo, «luteale» = seconda metà,
     m7…m1 = giorni prima della data probabile (stimati: «probabilmente», «può darsi»). Parafrasi originali, mai citazioni. */
  var FRASI = {
    g1: [
      { id: 'g1a', testo: 'Primo giorno del ciclo. Per il modello GET è una «malattia fisica»: oggi la soglia è più bassa. Trattati come tratteresti qualcuna che ha la febbre.' },
      { id: 'g1b', testo: 'Oggi puoi fare meno, e va bene. Un tè caldo, una coperta, il minimo indispensabile: il corpo ti chiede tempo, non prestazioni.' },
      { id: 'g1c', testo: 'Se c’è dolore, dagli un posto nella giornata invece di ignorarlo: «Questo fa male, ed è reale». È autoconvalida, e alleggerisce un po’ tutto il resto.' },
      { id: 'g1d', testo: 'Se un’emozione ti sembra più grande del motivo che l’ha accesa, può essere la soglia bassa di oggi. Ci sta. Lascia passare l’onda prima di decidere.' },
      { id: 'g1e', testo: 'Un gesto da due minuti: una mano dove duole, l’altra sul petto, tre respiri lenti. Niente da correggere, solo compagnia al tuo corpo.' },
      { id: 'g1f', testo: 'Se puoi, rimanda le conversazioni difficili. Non perché tu non sappia farle, ma perché oggi la soglia è bassa e le parole pesano di più.' }
    ],
    g2: [
      { id: 'g2a', testo: 'Secondo giorno. Stanchezza e irritabilità non sono un difetto di carattere: sono un corpo che spende energie. Prova a spenderne meno altrove.' },
      { id: 'g2b', testo: 'Mangia qualcosa a orari regolari, anche poco. Pasti saltati e ciclo insieme alzano l’onda più in fretta: il cibo, oggi, è già una cura.' },
      { id: 'g2c', testo: 'Se oggi una risposta ti sembra brusca, controlla i fatti: cosa è stato detto davvero? Con la soglia bassa, il tono può colorarsi di più.' },
      { id: 'g2d', testo: 'Auto-consolazione con i cinque sensi: una luce soffusa, una musica piano, un profumo che ti piace, qualcosa di morbido addosso. Scegline due.' },
      { id: 'g2e', testo: 'Giorno 2. Non devi essere produttiva per meritare riposo. Oggi la cosa utile può essere anche solo arrivare a sera.' },
      { id: 'g2f', testo: 'Muoviti piano, se ti va: due minuti di stiramenti dolci o qualche passo fino alla finestra. Niente sforzo, solo far circolare un po’ il corpo.' }
    ],
    g3: [
      { id: 'g3a', testo: 'Terzo giorno. Magari il peggio sta passando, magari no: oggi puoi andare a mezza velocità. Il tuo ritmo è quello giusto.' },
      { id: 'g3b', testo: 'Prima di dormire prepara un piccolo rito: luci basse, schermo lontano, qualcosa di caldo. Il sonno è una delle cose che più alzano o abbassano la soglia.' },
      { id: 'g3c', testo: 'Se ti accorgi di giudicarti («dovrei farcela meglio»), prova a dirti: «Sto attraversando un giorno di ciclo, ed è difficile». Una frase vera e gentile.' },
      { id: 'g3d', testo: 'Un mezzo sorriso appena accennato, spalle sciolte. Non cancella la stanchezza, ma dice al corpo che c’è un po’ di sicurezza.' },
      { id: 'g3e', testo: 'Se ti viene voglia di isolarti, concediti quiete, ma tieni un filo: un messaggio breve a una persona di fiducia, senza dover spiegare tutto.' },
      { id: 'g3f', testo: 'Il corpo ti dice una cosa semplice: ho bisogno di cura. Rispondi con una sola cosa oggi: acqua, cibo, riposo o calore. Una basta.' }
    ],
    g4: [
      { id: 'g4a', testo: 'Quarto giorno. Il corpo allenta piano piano, ma non c’è fretta di tornare al ritmo di sempre. Rientra a piccoli passi.' },
      { id: 'g4b', testo: 'Oggi puoi riprendere una cosa lasciata indietro, una sola e piccola. Il resto può aspettare ancora un po’.' },
      { id: 'g4c', testo: 'Se l’umore sale e scende, guardalo come un’onda: sale, arriva, scende. Sul picco non devi decidere niente.' }
    ],
    g5: [
      { id: 'g5a', testo: 'Giorno 5. Ricorda come hai attraversato i primi giorni: ce l’hai fatta con le tue forze. Prenditene il merito, anche piccolo.' },
      { id: 'g5b', testo: 'Un po’ di luce naturale oggi: cinque minuti vicino a una finestra o fuori, se puoi. Aiuta il corpo a ritrovare il suo ritmo.' },
      { id: 'g5c', testo: 'Se la stanchezza resta, è comprensibile: un ciclo è un lavoro per il corpo. Meno cose in lista, più cura nel mezzo.' }
    ],
    g6: [
      { id: 'g6a', testo: 'Sesto giorno. Come stai mangiando, come stai dormendo? Anche solo notarlo è utile: sono due leve piccole che pesano molto.' },
      { id: 'g6b', testo: 'Fai una piccola cosa che ti piace, senza obiettivi: disegnare, ascoltare un brano, sfogliare un libro. Ritrovare il piacere è già un passo.' },
      { id: 'g6c', testo: 'Se il corpo ti sembra ancora un po’ estraneo, tocca qualcosa di concreto: la stoffa del maglione, la tazza calda. Ti riporta qui, dentro il giorno.' }
    ],
    g7: [
      { id: 'g7a', testo: 'Settimo giorno. Se il peso si sta alleggerendo, bene; se non ancora, nessun problema: il tempo di ognuna non è uguale a quello di un’altra.' },
      { id: 'g7b', testo: 'Oggi puoi segnarti cosa ti ha aiutata in questi giorni. Ti servirà il prossimo mese, quando il ciclo si riavvicinerà.' },
      { id: 'g7c', testo: 'Un favore al te di domani: prepara qualcosa di semplice (un pasto, un vestito, un orario). Meno decisioni, più energia.' }
    ],
    dopo: [
      { id: 'dopo01', testo: 'In questi giorni il corpo spesso è più leggero. Se lo senti anche tu, usa un po’ di quell’energia per una cosa che ti sta a cuore. Se no, va bene lo stesso.' },
      { id: 'dopo02', testo: 'Può darsi che oggi la giornata ti sembri più chiara. Approfittane per fare scorta: un pasto in più cucinato, un messaggio a qualcuna, un po’ d’ordine.' },
      { id: 'dopo03', testo: 'Giorni così possono essere buoni per iniziare qualcosa di piccolo. Una cosa sola, abbastanza semplice da poterla finire.' },
      { id: 'dopo04', testo: 'Scrivi su un biglietto una frase gentile da rileggere nei giorni duri. Oggi probabilmente hai la testa per farlo bene.' },
      { id: 'dopo05', testo: 'Muoverti un po’ può fare bene in questi giorni: una camminata tranquilla, qualche stiramento. Ascolta il corpo e fermati quando vuoi.' },
      { id: 'dopo06', testo: 'Le abitudini regolari tengono la soglia più alta. Oggi guarda tre fili: pasti, sonno, un po’ d’aria. Sono piccoli e reggono molto.' },
      { id: 'dopo07', testo: 'Probabilmente oggi hai più margine per le conversazioni importanti. Se ce n’è una che aspetti, puoi sceglierla adesso, con calma.' },
      { id: 'dopo08', testo: 'Se oggi stai meglio, non pretendere che duri per sempre e non temerne il ritorno. Le onde vanno e vengono: questa, per ora, è una salita.' },
      { id: 'dopo09', testo: 'Mindfulness di due minuti: nota cinque cose che vedi, quattro che senti con le mani, tre suoni. Allenare l’attenzione è più facile quando il giorno è lieve.' },
      { id: 'dopo10', testo: 'In questi giorni può esserci più voglia di stare con gli altri. Ascoltala, senza esagerare: il sonno resta una priorità.' },
      { id: 'dopo11', testo: 'Pensa a cosa ti ha dato sollievo nell’ultimo ciclo e provalo oggi in versione leggera: così diventa un’abitudine e non solo un’emergenza.' },
      { id: 'dopo12', testo: 'Una gentilezza per te: cosa faresti oggi se fossi la tua migliore amica? Dillo, poi fallo, anche solo a metà.' },
      { id: 'dopo13', testo: 'Può darsi che questa fase sia più serena. Prenditi il tempo di notare cosa funziona e scrivilo nel diario: servirà nei giorni più difficili.' },
      { id: 'dopo14', testo: 'Se hai energia, falla lavorare per te: sistema una cosa che di solito ti pesa (una cartella, un cassetto, un appuntamento).' },
      { id: 'dopo15', testo: 'Anche nei giorni migliori il corpo lavora e merita regolarità: un pasto vero, un po’ d’acqua, un’ora decente per andare a letto.' }
    ],
    meta: [
      { id: 'meta01', testo: 'Probabilmente sei a metà ciclo: umore ed energia possono cambiare un po’ anche qui. Se senti qualcosa di diverso, può avere un motivo.' },
      { id: 'meta02', testo: 'In questi giorni può esserci più voglia di compagnia, o più sensibilità. Qualunque cosa senti, ha un posto. Un ritmo regolare ti fa bene.' },
      { id: 'meta03', testo: 'Se la stima è giusta, il corpo può farsi sentire in modi piccoli: un po’ di pesantezza, un po’ di agitazione. Accoglila come un’informazione, non come un allarme.' },
      { id: 'meta04', testo: 'Può darsi che oggi sia una giornata di buon umore o di sbalzi. Entrambe sono possibili: tieni a portata di mano le cose che di solito ti aiutano.' },
      { id: 'meta05', testo: 'Se noti qualcosa di strano nel corpo o nell’umore, scrivilo senza interpretare. Su più cicli le tue note ti mostreranno il tuo disegno.' },
      { id: 'meta06', testo: 'Giorni di passaggio: il ciclo cambia direzione piano piano. Proteggi i soliti punti fermi: pasti, sonno, un po’ d’aria.' },
      { id: 'meta07', testo: 'Probabilmente sei a circa metà strada. È un buon momento per lasciare un piccolo promemoria alla te di tra qualche giorno.' },
      { id: 'meta08', testo: 'Potresti sentirti un po’ più sensibile al tono degli altri. Prima di rispondere a un messaggio che punge, controlla i fatti: cosa c’è scritto, davvero?' }
    ],
    luteale: [
      { id: 'luteale01', testo: 'In questi giorni la soglia può iniziare ad abbassarsi poco a poco. Una regola gentile: meno promesse nuove, più abitudini che già reggono.' },
      { id: 'luteale02', testo: 'Può darsi che adesso ti stanchi prima. Non è pigrizia: è un corpo che si prepara a qualcosa. Dosa le energie come una riserva.' },
      { id: 'luteale03', testo: 'Buon momento per ricordare PLEASE: pasti regolari, sonno sufficiente, un po’ di movimento dolce. Tre cose, tutte piccole.' },
      { id: 'luteale04', testo: 'Se qualcosa ti irrita più del solito, fermati un momento: è il fatto o è il giorno? Non serve rispondere subito, l’onda aspetta anche te.' },
      { id: 'luteale05', testo: 'Probabilmente stai entrando nella parte del mese in cui serve più cura. Prepara qualcosa di facile per i giorni a venire: un pasto pronto, un’ora libera.' },
      { id: 'luteale06', testo: 'Scrivi due o tre cose che ti calmano davvero: un suono, un profumo, un posto. Se arriverà un giorno duro, non dovrai inventarle sul momento.' },
      { id: 'luteale07', testo: 'In questi giorni può essere più facile sentirsi fraintese. Prima di concludere, chiediti: cosa so con certezza e cosa sto immaginando?' },
      { id: 'luteale08', testo: 'In questa parte del mese il sonno conta in modo speciale: orari regolari, luci basse, schermo lontano. Una notte decente protegge il giorno dopo.' },
      { id: 'luteale09', testo: 'Può darsi che cresca la voglia di dolci o di cibi comodi. Mangiare regolare e senza giudizio vale più che saltare i pasti e poi stare male.' },
      { id: 'luteale10', testo: 'Un rituale ogni sera in questi giorni: tè caldo, tre respiri, una pagina. Funziona perché è sempre lo stesso.' },
      { id: 'luteale11', testo: 'Se negli ultimi cicli la tensione saliva in questi giorni, fai spazio: meno impegni sociali pesanti, più tempi morti.' },
      { id: 'luteale12', testo: 'Una gentilezza anticipata: scegli oggi cosa ti servirà domani, così nei giorni difficili non dovrai decidere tutto con la mente già stanca.' },
      { id: 'luteale13', testo: 'Azione opposta in piccolo: se chiuderti non ti sta aiutando, fai un passo minuscolo verso qualcuno, un saluto o un vocale breve.' },
      { id: 'luteale14', testo: 'Se ti senti più sensibile o più sola, può avere a che fare con questa fase. Non cambia ciò che senti, spiega perché arriva forte. Rispetta la tua sensibilità.' },
      { id: 'luteale15', testo: 'Può darsi che da qui in avanti l’onda sia più ripida. Muoviti un po’ ogni giorno, in modo dolce: la camminata più semplice vale già.' }
    ],
    m7: [
      { id: 'm7a', testo: 'Mancano probabilmente circa sette giorni al ciclo: la soglia può cominciare ad abbassarsi. Oggi è un buon momento per organizzare il sostegno, prima che serva.' },
      { id: 'm7b', testo: 'Può darsi che da oggi l’onda salga più in fretta. Non è un tuo difetto: nel modello GET è la «malattia fisica», un fattore di vulnerabilità.' },
      { id: 'm7c', testo: 'Una cosa per la te di tra pochi giorni: scrivi una lista breve di «cose che mi aiutano». Ora sei lucida, e servirà a lei.' },
      { id: 'm7d', testo: 'In questi giorni pasti regolari e sonno valgono doppio. Sono le due cose più semplici da proteggere, e tengono la soglia più in alto.' },
      { id: 'm7e', testo: 'Conviene alleggerire l’agenda, se puoi: una scadenza in meno, un invito rimandato. Non è ritirarsi, è fare spazio.' },
      { id: 'm7f', testo: 'Può darsi che l’umore cambi, ma non è detto. Resta curiosa e gentile: osserva, senza aspettarti il peggio.' }
    ],
    m6: [
      { id: 'm6a', testo: 'Sei probabilmente a una settimana scarsa dal ciclo. Se oggi qualcosa pesa di più, concediti il beneficio del dubbio: forse la soglia è più bassa.' },
      { id: 'm6b', testo: 'Parola d’ordine di questi giorni: regolarità. Gli stessi orari per mangiare e andare a letto danno al corpo un punto fermo.' },
      { id: 'm6c', testo: 'Prova l’autoconvalida: «Ha senso che mi senta così, con il corpo che si prepara a un cambiamento». Non serve spiegare di più.' },
      { id: 'm6d', testo: 'Una camminata lenta, anche di dieci minuti, a passo comodo. Il movimento dolce aiuta l’umore senza chiederti sforzo.' },
      { id: 'm6e', testo: 'Se qualcuno ti scrive qualcosa che ti ferisce, prenditi un’ora prima di rispondere. In questi giorni un rifiuto può sembrare più grande di com’è.' },
      { id: 'm6f', testo: 'Può servire più calma in serata. Prepara una piccola routine: luci morbide, qualcosa di caldo, un brano che conosci a memoria.' }
    ],
    m5: [
      { id: 'm5a', testo: 'Probabilmente mancano circa cinque giorni. L’onda può essere più alta e veloce: se la senti arrivare, espira più piano di come inspiri, per qualche respiro.' },
      { id: 'm5b', testo: 'Controlla i fatti quando una sensazione brucia: cosa è successo davvero, cosa ho aggiunto io? In questi giorni l’interpretazione corre più del fatto.' },
      { id: 'm5c', testo: 'Auto-consolazione con i cinque sensi: una luce calda, un profumo caro, qualcosa di morbido, un suono lento, un sorso caldo. Anche solo due.' },
      { id: 'm5d', testo: 'Non è il momento per le decisioni grandi su una relazione, sul lavoro, su di te. Segnatele e riprendile fra qualche giorno, a testa più leggera.' },
      { id: 'm5e', testo: 'Se la stanchezza è più forte, riposare non è arrendersi: è il modo per continuare a camminare. Una pausa vera, anche di quindici minuti.' },
      { id: 'm5f', testo: 'Può darsi che in questi giorni ti senta più sola. Non è una verità sul mondo: è il modo in cui l’onda colora le cose, oggi.' }
    ],
    m4: [
      { id: 'm4a', testo: 'Probabilmente mancano circa quattro giorni. Se senti irritazione, dalle un nome, «ecco l’irritazione», e fai un respiro. Nominare toglie un po’ di forza.' },
      { id: 'm4b', testo: 'Gonfiore, mal di testa, dolori possono farsi sentire. Sono reali e fanno parte della «malattia fisica»: trattali con attenzione, non con rimproveri.' },
      { id: 'm4c', testo: 'Un mezzo sorriso, spalle morbide, mani aperte per qualche respiro. È piccolissimo, ma dice al corpo che sei al sicuro.' },
      { id: 'm4d', testo: 'Se hai voglia di dire qualcosa di tagliente a qualcuno, concediti una pausa: scrivilo altrove, non inviarlo. Domani lo rileggerai con più calma.' },
      { id: 'm4e', testo: 'Oggi possono servire frasi corte: «Ora è difficile. Passa.» Non devi crederci del tutto, basta che stia nella stanza con te.' },
      { id: 'm4f', testo: 'Meno schermi la sera, se riesci. Un sonno più leggero amplifica tutto il resto: proteggerlo è una delle cure più concrete.' }
    ],
    m3: [
      { id: 'm3a', testo: 'Il ciclo probabilmente è vicino. Può darsi che oggi tutto abbia più rumore: non devi sistemarlo, devi solo attraversarlo con dolcezza.' },
      { id: 'm3b', testo: 'Se le emozioni salgono in fretta, scegli una cosa tra respiro lento, tè caldo e una pausa da seduta. Una sola, fatta bene.' },
      { id: 'm3c', testo: 'Metti da parte la regola «devo gestire tutto». In questi giorni la regola è: faccio il necessario, il resto può attendere.' },
      { id: 'm3d', testo: 'Può darsi che ti senta rifiutata per cose piccole. Prima di credere al pensiero, chiediti: cosa direi a un’amica che mi racconta la stessa scena?' },
      { id: 'm3e', testo: 'Un gesto da due minuti: una mano sul petto, una sulla pancia, tre respiri. Dentro di te di’: «Sono qui, ci sono io».' },
      { id: 'm3f', testo: 'Mangiare poco o a orari strani rende tutto più ripido. Se hai poca fame, scegli qualcosa di piccolo e caldo: una zuppa, una fetta di pane.' }
    ],
    m2: [
      { id: 'm2a', testo: 'Probabilmente sono giorni in cui il corpo sente il ciclo avvicinarsi. Se oggi è dura, è dura davvero. Non devi dimostrare niente a nessuno.' },
      { id: 'm2b', testo: 'L’onda può essere alta oggi. Non devi fermarla: puoi solo non farti trascinare. Respiri lunghi, una finestra aperta, una cosa semplice tra le mani.' },
      { id: 'm2c', testo: 'Se un pensiero dice «non cambierà mai», ricorda che a parlare è anche il giorno. Fra qualche giorno quella stessa frase suonerà diversa.' },
      { id: 'm2d', testo: 'Se non ti senti capita, resta con una frase vera: «Mi sento sola, e questo fa male». Dilla a te stessa, o a una persona di cui ti fidi, senza spiegazioni.' },
      { id: 'm2e', testo: 'Se puoi, evita oggi le grandi discussioni. La soglia è bassa e ogni parola pesa di più: «Ne parliamo domani» protegge te e la relazione.' },
      { id: 'm2f', testo: 'Conforto immediato con i cinque sensi: qualcosa di morbido addosso, una luce bassa, un profumo che conosci, una musica lenta, un sorso caldo. Anche solo due.' }
    ],
    m1: [
      { id: 'm1a', testo: 'Il ciclo, probabilmente, arriva a breve. Questi sono tra i giorni più duri: sii morbida con te. Fare meno oggi non è fallire.' },
      { id: 'm1b', testo: 'Se tutto ti sembra troppo, riduci la giornata a tre cose: mangiare, un po’ di riposo, una cosa che ti consola. Il resto è un di più.' },
      { id: 'm1c', testo: 'Se hai la tentazione di fare qualcosa che poi ti peserebbe, fermati: respira lungo e aspetta quindici minuti. L’impulso è un’onda e passa, anche se ora non sembra.' },
      { id: 'm1d', testo: 'Può darsi che le lacrime vengano senza un motivo preciso. Lasciale venire, se arrivano: sono un modo del corpo di scaricare. Poi un tè caldo e una coperta.' },
      { id: 'm1e', testo: 'Ricorda cosa hai già superato: altri giorni così, e sei arrivata fino a qui. Anche oggi puoi arrivare a stasera.' },
      { id: 'm1f', testo: 'Se senti il bisogno di essere ascoltata, chiedilo in modo semplice: «Ho una giornata pesante, posso stare un po’ con te?». Non devi spiegare niente.' }
    ]
  };

  /* la frase del giorno: { id, testo } o null (funzione spenta, data non valida, nessun inizio, oppure un giorno senza fase).
     Ordine: giorni 1-7 del ciclo segnato → giorni prima della data probabile (m7…m1) → fascia cominciata e ciclo non segnato (m1, ogni giorno una variante)
     → dopo il ciclo / metà ciclo / seconda metà, secondo la durata stimata. La variante ruota da un ciclo all’altro (k = numero di inizi). */
  function fraseDelGiorno(c, oggi) {
    if (!c || !c.attivo || gg(oggi) === null) return null;
    var k = utili(c, oggi).length;
    if (!k) return null;
    var N = giornoCiclo(c, oggi), p = previsione(c, oggi);
    if (!p) return null;
    var dP = gg(p.primo) - gg(oggi), g = null, v = 0;
    if (N !== null && N >= 1 && N <= 7) { g = 'g' + N; v = k - 1; }
    else if (dP >= 1 && dP <= 7) { g = 'm' + dP; v = k - 1; }
    else if (avviso(c, oggi).tipo === 'prima') { g = 'm1'; v = k - 1 + 1 - dP; }
    else if (N !== null && N >= 8) {
      var ov = stima(c, oggi).durata - 14;
      g = Math.abs(N - ov) <= 2 ? 'meta' : N < ov - 2 ? 'dopo' : 'luteale';
      v = N + 3 * (k - 1);
    }
    if (!g || !FRASI[g]) return null;
    var f = FRASI[g][v % FRASI[g].length];
    return { id: f.id, testo: f.testo };
  }

  var Ciclo = {
    VOCI: VOCI, VALORI: VALORI, TESTI: TESTI, FRASI: FRASI,
    gg: gg, data: data, pulisci: pulisci, aggiungiInizio: aggiungiInizio, inizioVicino: inizioVicino, sostituisciInizio: sostituisciInizio,
    togliInizio: togliInizio, aggiungiFine: aggiungiFine, finiValide: finiValide, giorniMedi: giorniMedi, inCorso: inCorso, domandaFine: domandaFine,
    normalizzaCodice: normalizzaCodice, mostraCodice: mostraCodice,
    lunghezze: lunghezze, stima: stima, previsione: previsione, giornoDelCiclo: giornoDelCiclo, giornoCiclo: giornoCiclo,
    finestre: finestre, avviso: avviso, prossimo: prossimo, fraseDelGiorno: fraseDelGiorno,
    vociSicure: vociSicure, sommaVoci: sommaVoci, frasePersonale: frasePersonale
  };
  A.Ciclo = Ciclo;
  if (typeof module !== 'undefined' && module.exports) module.exports = Ciclo;
})();
