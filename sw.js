/* Marsa – service worker: tiene l’app in memoria per usarla anche senza rete. */
var CACHE = 'marsa-v41';
var FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'css/style.css', 'js/version.js', 'js/contenuti.js', 'js/percorso.js', 'js/percorso_b.js', 'js/arrivo.js', 'js/tecniche.js', 'js/giornata.js', 'js/giornata_temi.js', 'js/accettare.js', 'js/litigi.js', 'js/coppia.js', 'js/ciclo.js', 'js/notifiche.js', 'js/app.js',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'
];
/* Le tracce si salvano a parte: se una manca o la rete cade, l’app si installa lo stesso. */
var TRACCE = [
  'audio/voce/base.mp3', 'audio/voce/presenza.mp3', 'audio/voce/emozioni.mp3', 'audio/voce/mentalizzare.mp3',
  'audio/voce/relazioni.mp3', 'audio/voce/disagio.mp3', 'audio/voce/valore.mp3'
];
/* Illustrazioni: facoltative come le tracce (se una non c’è ancora, l’app si installa lo stesso). */
var IMMAGINI = ['benvenuto', 'base', 'presenza', 'emozioni', 'mentalizzare', 'relazioni', 'disagio', 'valore',
  'mattina', 'pomeriggio', 'notte', 'stop', 'posto', 'amica', 'onda', 'linehan', 'linehan_scena',
  'coppia', 'litigi', 'accettare', 'parole', 'ciclo', 'emo-tristezza', 'emo-ansia', 'emo-rabbia', 'emo-vergogna', 'emo-colpa', 'emo-solitudine', 'emo-vuoto', 'emo-delusione', 'emo-gelosia', 'emo-stanca', 'emo-sollievo', 'emo-gratitudine'].map(function (n) { return 'img/' + n + '.webp'; });
/* Illustrazioni nuove (testate, fine-*, sc-*, acc-*, lit-*): per accenderne una si aggiunge il nome qui e in IMMAGINI_EXTRA / TESTATE di js/app.js. Facoltative come sopra. */
var IMMAGINI_EXTRA = ['diario', 'perte', 'sere', 'su-marsa',
    'sc-base-1', 'sc-base-2', 'sc-base-3', 'sc-base-4', 'sc-base-b1', 'sc-base-b2', 'sc-base-b3', 'sc-base-b4',
    'sc-coppia-1', 'sc-coppia-2', 'sc-coppia-3', 'sc-coppia-4', 'sc-coppia-5', 'sc-disagio-1', 'sc-disagio-2', 'sc-disagio-3',
    'sc-disagio-4', 'sc-disagio-5', 'sc-disagio-b1', 'sc-disagio-b2', 'sc-disagio-b3', 'sc-disagio-b4', 'sc-emozioni-1', 'sc-emozioni-2',
    'sc-emozioni-3', 'sc-emozioni-4', 'sc-emozioni-b1', 'sc-emozioni-b2', 'sc-emozioni-b3', 'sc-emozioni-b4', 'sc-mentalizzare-1', 'sc-mentalizzare-2',
    'sc-mentalizzare-3', 'sc-mentalizzare-4', 'sc-mentalizzare-b1', 'sc-mentalizzare-b2', 'sc-mentalizzare-b3', 'sc-mentalizzare-b4', 'sc-presenza-1', 'sc-presenza-2',
    'sc-presenza-3', 'sc-presenza-4', 'sc-presenza-b1', 'sc-presenza-b2', 'sc-presenza-b3', 'sc-presenza-b4', 'sc-relazioni-1', 'sc-relazioni-2',
    'sc-relazioni-3', 'sc-relazioni-4', 'sc-relazioni-b1', 'sc-relazioni-b2', 'sc-relazioni-b3', 'sc-relazioni-b4', 'sc-valore-1', 'sc-valore-2',
    'sc-valore-3', 'sc-valore-4', 'sc-valore-b1', 'sc-valore-b2', 'sc-valore-b3', 'sc-valore-b4', 'fine-base', 'fine-presenza', 'fine-emozioni', 'fine-mentalizzare', 'fine-relazioni', 'fine-disagio', 'fine-valore', 'fine-coppia', 'acc-esempio', 'acc-serve', 'acc-fatti', 'acc-come', 'acc-male', 'lit-esempio', 'lit-onda', 'lit-pausa', 'lit-giro', 'lit-riparare', 'lit-accettare'].map(function (n) { return 'img/' + n + '.webp'; });
var ATTESA_RETE = 3000;

/* «reload»: scarica davvero dalla rete, senza passare dalla cache del browser (che per GitHub Pages dura 10 minuti). */
function nuova(percorso) { return new Request(percorso, { cache: 'reload' }); }

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(FILES.map(function (f) { return c.add(nuova(f)); })).then(function () {
      return Promise.all(TRACCE.concat(IMMAGINI, IMMAGINI_EXTRA).map(function (t) { return c.add(nuova(t)).catch(function () { /* niente */ }); }));
    });
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('marsa-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Salva una copia, senza mai far fallire la risposta (memoria piena, ecc.). */
function salva(e, chiave, risposta) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.put(chiave, risposta); }).catch(function () { /* niente */ }));
}

/* Safari chiede l’audio a pezzi (Range): dalla copia intera si ritaglia il pezzo richiesto. */
function pezzo(req, res) {
  var m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.get('range') || '');
  if (!m || (m[1] === '' && m[2] === '')) return Promise.resolve(res);
  return res.arrayBuffer().then(function (buf) {
    var tot = buf.byteLength, ini, fin;
    if (m[1] === '') { ini = Math.max(0, tot - parseInt(m[2], 10)); fin = tot - 1; }
    else { ini = parseInt(m[1], 10); fin = m[2] === '' ? tot - 1 : Math.min(parseInt(m[2], 10), tot - 1); }
    if (ini >= tot || ini > fin) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + tot } });
    return new Response(buf.slice(ini, fin + 1), {
      status: 206,
      headers: { 'Content-Type': 'audio/mpeg', 'Content-Length': String(fin - ini + 1), 'Content-Range': 'bytes ' + ini + '-' + fin + '/' + tot, 'Accept-Ranges': 'bytes' }
    });
  });
}

function audio(e, req) {
  var piano = new Request(req.url); /* senza intestazione Range: serve la traccia intera */
  return caches.open(CACHE).then(function (c) {
    return c.match(piano).then(function (m) {
      if (m) return m;
      return fetch(piano).then(function (res) {
        if (res.ok) salva(e, piano, res.clone());
        return res;
      });
    });
  }).then(function (res) { return res.ok ? pezzo(req, res) : res; });
}

/* Illustrazioni: subito dalla copia salvata (si rinnovano a ogni versione della cache); se manca, dalla rete. */
function immagine(e, req) {
  return caches.match(req).then(function (m) {
    if (m) return m;
    return fetch(req).then(function (res) {
      if (res.ok) salva(e, req, res.clone());
      return res;
    });
  });
}

/* Prima la rete (gli aggiornamenti arrivano), ma al massimo per 3 secondi: poi la copia salvata.
   Se la rete risponde con un errore e c’è una copia buona, vale la copia. */
function rete(e, req) {
  var url = new URL(req.url);
  var navigazione = req.mode === 'navigate';
  /* le pagine si salvano sotto l’indirizzo senza parametri (?fbclid=… non crea copie in più) */
  var chiave = navigazione ? new Request(url.origin + url.pathname) : req;
  return new Promise(function (resolve) {
    var fatto = false;
    function copia() {
      return caches.match(chiave).then(function (m) { return m || (navigazione ? caches.match('index.html') : undefined); });
    }
    function chiudi(r) { if (!fatto) { fatto = true; clearTimeout(timer); resolve(r); } }
    var timer = setTimeout(function () {
      copia().then(function (m) { if (m) chiudi(m); });
    }, ATTESA_RETE);
    fetch(req).then(function (res) {
      if (res.ok) { salva(e, chiave, res.clone()); chiudi(res); return; }
      copia().then(function (m) { chiudi(m || res); });
    }).catch(function () {
      copia().then(function (m) { chiudi(m || Response.error()); });
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (/\.mp3$/.test(url.pathname)) { e.respondWith(audio(e, req)); return; }
  if (/\/img\/[^/]+\.webp$/.test(url.pathname)) { e.respondWith(immagine(e, req)); return; }
  e.respondWith(rete(e, req));
});

/* Il ciclo (facoltativo): il service worker non legge localStorage. La pagina lascia nella Cache Storage («ciclo-avviso»,
   un nome che l’aggiornamento della cache non tocca) un piccolo record con le sole date dell’avviso: { v, prima: [da, a], inizio: [da, a] }.
   Alla notifica del mattino, se oggi è dentro, il testo cambia. Il server non riceve niente. */
var CACHE_CICLO = 'ciclo-avviso';
function dataDi(d) {
  var m = d.getMonth() + 1, g = d.getDate();
  return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (g < 10 ? '0' : '') + g;
}
function dentro(f, g) { return Array.isArray(f) && typeof f[0] === 'string' && typeof f[1] === 'string' && f[0] <= g && g <= f[1]; }
function leggiAvviso() {
  /* match con cacheName: non crea la cache se non c’è */
  return caches.match(new URL('ciclo-avviso.json', self.registration.scope).href, { cacheName: CACHE_CICLO })
    .then(function (r) { return r ? r.json() : null; }).catch(function () { return null; });
}

/* Notifiche push: arrivano senza contenuto, il testo lo sceglie l’ora del telefono (stesse fasce di «Oggi»). */
function testoNotifica(d, avviso) {
  var o = d.getHours();
  if (avviso && o >= 5 && o < 12) {
    var g = dataDi(d);
    if (dentro(avviso.inizio, g)) return 'Primi giorni del ciclo: oggi trattati con gentilezza.';
    if (dentro(avviso.prima, g)) return 'Sono probabilmente i giorni prima del ciclo: oggi l’onda può alzarsi prima.';
  }
  if (o < 5) return 'Marsa è qui, quando vuoi.';
  if (o < 12) return 'Buongiorno. L’avvio della giornata è pronto, quando vuoi.';
  if (o < 18) return 'Una pausa a metà giornata: bastano pochi minuti.';
  return 'La serata di oggi ti aspetta, con calma.';
}

self.addEventListener('push', function (e) {
  /* una push deve sempre mostrare una notifica (iOS lo pretende): anche se qualcosa va storto, un testo c’è */
  var url = new URL('./#stasera', self.registration.scope).href;
  e.waitUntil(leggiAvviso().then(function (avviso) {
    return self.registration.showNotification('Marsa', {
      body: testoNotifica(new Date(), avviso),
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-192.png',
      tag: 'marsa-momento',
      data: { url: url }
    });
  }));
});

/* Il tocco porta a «Oggi»: l’app sceglie da sola il momento in corso (mattina, pomeriggio, serata di oggi o notte). */
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || new URL('./#stasera', self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (lista) {
    var finestra = lista.filter(function (c) { return c.url.indexOf(self.registration.scope) === 0; })[0];
    if (!finestra) return self.clients.openWindow(url);
    return finestra.focus().then(function (c) { return (c || finestra).navigate(url); }).catch(function () { return self.clients.openWindow(url); });
  }));
});
