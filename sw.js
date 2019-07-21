/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/favicons/android-icon-144x144.png",
    "revision": "91083db4aecc01c6eb1360cdfb6d0ad4"
  },
  {
    "url": "images/favicons/android-icon-192x192.png",
    "revision": "ee7ebd4559133d7d463c8d4809f3db12"
  },
  {
    "url": "images/favicons/android-icon-36x36.png",
    "revision": "1a332aec7365494d8dd306ffbb35bac5"
  },
  {
    "url": "images/favicons/android-icon-48x48.png",
    "revision": "f8bead9aca349d28ff2022ef8af02ed3"
  },
  {
    "url": "images/favicons/android-icon-72x72.png",
    "revision": "44b7f7ac90aae36f4304428d00ee2dbc"
  },
  {
    "url": "images/favicons/android-icon-96x96.png",
    "revision": "5ad36f1b2742709cfea97c82fc1a170d"
  },
  {
    "url": "images/favicons/apple-icon-114x114.png",
    "revision": "f4d3013bf7afdaf4f90cf75a4e931f9e"
  },
  {
    "url": "images/favicons/apple-icon-120x120.png",
    "revision": "cb637aa41c7bdbf5c37c10dd1304c165"
  },
  {
    "url": "images/favicons/apple-icon-144x144.png",
    "revision": "91083db4aecc01c6eb1360cdfb6d0ad4"
  },
  {
    "url": "images/favicons/apple-icon-152x152.png",
    "revision": "ed14519b7d0c16ac2eea5bd0c5fae84f"
  },
  {
    "url": "images/favicons/apple-icon-180x180.png",
    "revision": "3663cc530a460e0c5dafad51b701887d"
  },
  {
    "url": "images/favicons/apple-icon-57x57.png",
    "revision": "101f4916137b6ab46e4e4c40d7fccc88"
  },
  {
    "url": "images/favicons/apple-icon-60x60.png",
    "revision": "6f27bbf978da7e2fd8bce96b68197aa7"
  },
  {
    "url": "images/favicons/apple-icon-72x72.png",
    "revision": "44b7f7ac90aae36f4304428d00ee2dbc"
  },
  {
    "url": "images/favicons/apple-icon-76x76.png",
    "revision": "07743424ff6b093a38785328a59a2b7f"
  },
  {
    "url": "images/favicons/apple-icon-precomposed.png",
    "revision": "cda3a831242d9893193dd1b8987d746e"
  },
  {
    "url": "images/favicons/apple-icon.png",
    "revision": "cda3a831242d9893193dd1b8987d746e"
  },
  {
    "url": "images/favicons/favicon-16x16.png",
    "revision": "23d796e7e8899812746eb487457d7d42"
  },
  {
    "url": "images/favicons/favicon-32x32.png",
    "revision": "08a283e270a82e7cd4857fb53dda8992"
  },
  {
    "url": "images/favicons/favicon-96x96.png",
    "revision": "5ad36f1b2742709cfea97c82fc1a170d"
  },
  {
    "url": "images/favicons/favicon.ico",
    "revision": "626b4d1ac0113e6361feb233d25e52df"
  },
  {
    "url": "images/favicons/ms-icon-144x144.png",
    "revision": "91083db4aecc01c6eb1360cdfb6d0ad4"
  },
  {
    "url": "images/favicons/ms-icon-150x150.png",
    "revision": "4e7ca082c5326adc7326adefbfa8d0eb"
  },
  {
    "url": "images/favicons/ms-icon-310x310.png",
    "revision": "1e72926ac7f898897bb6d6b9c1fa8be3"
  },
  {
    "url": "images/favicons/ms-icon-70x70.png",
    "revision": "c6459517ebaa6ede05371efa0da6a371"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "57724984c64db04840e31352f5b7c8b8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "4b89e6303a85753c6a8103087bfac3f2"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "cdd4f31a7a147b4475fa265ed6e858f5"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "cf7dfa0b25ef440484527e3abd8facbc"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "12e73e9850749f3a426a83a3c1ab64c2"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "e7601b096df357b61394446fac04efd9"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "c289bf4f7e2c9f3723b17669c47daab1"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "df6a648e95b342adefb81e663c6701f6"
  },
  {
    "url": "images/icons/icon.svg",
    "revision": "0483f2b648dcc986d01385062052ae1c"
  },
  {
    "url": "index.html",
    "revision": "e062dc17834387e081146844306e89bc"
  },
  {
    "url": "kokosuki.wav",
    "revision": "12cbd94e7cbbc8cd02e709f419a47240"
  },
  {
    "url": "script.js",
    "revision": "e3b0b8b3dba6fed4011a53cf18511778"
  },
  {
    "url": "style.css",
    "revision": "10f5d0a683e2f99f6ec51f28ba6bbadd"
  },
  {
    "url": "workbox-config.js",
    "revision": "484a709a64b5fabf0be31a2c76274810"
  },
  {
    "url": "manifest.json",
    "revision": "6f67434b389c18594525aca19e205e54"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
