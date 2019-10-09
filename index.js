/*Source: https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/css/style.css',
          '/css/main.css',
          '/js/main.js',
          '/js/dbhelper.js',
          '/js/restaurant_info.js',
          '/index.html',
          '/restaurant.html'
        ]
      );
    })
  );
});
