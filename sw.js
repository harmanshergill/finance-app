
self.addEventListener('install',e=>{
 e.waitUntil(caches.open('bankieren-v3').then(c=>c.addAll([
  './','./index.html','./overzicht.html','./rekening.html','./style.css','./logo.png'
 ])));
});
self.addEventListener('fetch',e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
