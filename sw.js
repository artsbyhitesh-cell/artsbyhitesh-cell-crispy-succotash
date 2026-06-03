const cacheName = "hitesh-portfolio-v1";

const assets = [
  "./",
  "./index.html",
  "./cv.html",
  "./manifest.json",
  "./HITESH.jpeg",
  "./Hitu.jpg",
  "./Signature.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});