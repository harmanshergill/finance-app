
const CACHE="bankieren-v1";
const ASSETS=["./","./index.html","./loading.html","./overzicht.html","./rekening.html","./style.css","./logo.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
