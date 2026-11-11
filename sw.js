/* Approdo – service worker: tiene l’app in memoria per usarla anche senza rete. */
var CACHE = 'approdo-v21';
var FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'css/style.css', 'js/version.js', 'js/contenuti.js', 'js/percorso.js', 'js/percorso_b.js', 'js/arrivo.js', 'js/tecniche.js', 'js/giornata.js', 'js/giornata_temi.js', 'js/app.js',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'
];
/* Le tracce si salvano a parte: se una manca o la rete cade, l’app si installa lo stesso. */
var TRACCE = [
  'audio/voce/base.mp3', 'audio/voce/presenza.mp3', 'audio/voce/emozioni.mp3', 'audio/voce/mentalizzare.mp3',
  'audio/voce/relazioni.mp3', 'audio/voce/disagio.mp3', 'audio/voce/valore.mp3'
];
/* Illustrazioni: facoltative come le tracce (se una non c’è ancora, l’app si installa lo stesso). */
var IMMAGINI = ['benvenuto', 'base', 'presenza', 'emozioni', 'mentalizzare', 'relazioni', 'disagio', 'valore',
  'mattina', 'pomeriggio', 'notte', 'stop', 'posto', 'amica', 'onda'].map(function (n) { return 'img/' + n + '.webp'; });
var ATTESA_RETE = 3000;

/* «reload»: scarica davvero dalla rete, senza passare dalla cache del browser (che per GitHub Pages dura 10 minuti). */
function nuova(percorso) { return new Request(percorso, { cache: 'reload' }); }

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(FILES.map(function (f) { return c.add(nuova(f)); })).then(function () {
      return Promise.all(TRACCE.concat(IMMAGINI).map(function (t) { return c.add(nuova(t)).catch(function () { /* niente */ }); }));
    });
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('approdo-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
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
  e.respondWith(rete(e, req));
});
