// SMG si è spostata in /app/: questo service worker si rimuove da solo
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.registration.unregister()));
