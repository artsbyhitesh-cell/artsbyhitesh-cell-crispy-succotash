const cacheName = "hitesh-portfolio-v2";

const assets = [
  "./",
  "./index.html",
  "./cv.html",
  "./manifest.json",
  "./HITESH.jpeg",
  "./Hitu.png",
  "./Signature.png",
  "./logo.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(async (cache) => {
      for (const asset of assets) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn("Failed to cache:", asset);
        }
      }
    })
  );
});
