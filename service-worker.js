self.__ADDITIONAL_ASSETS__ = [
  "./assets/main-7CYJHQW2.js",
  "./assets/main-RP5YYTMB.css",
  "./assets/slide-01-UVTCZKXP.svg",
  "./assets/slide-02-SQ7RPXKS.svg",
  "./assets/slide-03-G25MZTKS.svg",
  "./assets/slide-04-BIY54GRM.svg",
  "./assets/slide-05-Q3LOQKNC.svg",
  "./assets/slide-06-YUXSEDFH.svg",
  "./assets/slide-07-ZEDLLX2J.svg",
  "./assets/slide-08-DKUKZEUW.svg",
  "./assets/slide-09-YCDCHYGO.svg",
  "./assets/slide-10-V6AUM6JT.svg",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./manifest.webmanifest",
  "./story-images/cover.png",
  "./story-images/slide_01.png",
  "./story-images/slide_02.png",
  "./story-images/slide_03.png",
  "./story-images/slide_04.png",
  "./story-images/slide_05.png",
  "./story-images/slide_06.png",
  "./story-images/slide_07.png",
  "./story-images/slide_08.png",
  "./story-images/slide_09.png",
  "./story-images/slide_10.png"
];
const CACHE_NAME = "maxi-story-v7";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
];
const ADDITIONAL_ASSETS = self.__ADDITIONAL_ASSETS__ || [];
const PRECACHE_ASSETS = [...CORE_ASSETS, ...ADDITIONAL_ASSETS];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const shouldUseNetworkFirst =
    event.request.mode === "navigate" ||
    event.request.destination === "document" ||
    event.request.destination === "script" ||
    event.request.destination === "style" ||
    requestUrl.pathname.endsWith("/service-worker.js");

  if (shouldUseNetworkFirst) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const responseCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
          return networkResponse;
        })
        .catch(() => caches.match(event.request).then((cachedResponse) => cachedResponse || caches.match("./index.html"))),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const responseCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
          return networkResponse;
        })
        .catch(() => caches.match("./index.html"));
    }),
  );
});
