'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d28d0a2304f023b73dec2b34bfd60663",
"assets/assets/adana.png": "d8b3bec45a555347afa7c9b130168991",
"assets/assets/akdeniz.png": "4ddfc15b982d2d2e20824dacf9cfcb25",
"assets/assets/akdenizil.png": "6d43206728fd2ae40506dca583bfed13",
"assets/assets/ankara.png": "a5cb66a809d9ffc225336e9d52335c96",
"assets/assets/antalya.png": "886e1afbf473055533daa808fd7f5e05",
"assets/assets/armut.jpg": "d07430db49957648d02a1205bd5c6a39",
"assets/assets/bitlis.png": "2fbe927242c991a57b18504b085f53b8",
"assets/assets/bugday.jpg": "0177220d0d55e0d35434ca005677eb5f",
"assets/assets/bursa.png": "cc156403a704d4355af2fb328aeaa1ad",
"assets/assets/camfistigi.jpeg": "76547d47ca9ff646ea03528131e3426f",
"assets/assets/canakkale.png": "d84c0f84704de075be90507d5b8c93bf",
"assets/assets/cilek.jpg": "fe0b3b62fdbc3996b133f23ab4bdd467",
"assets/assets/denizli.png": "30369562f7ea0a9886a53433fb423e44",
"assets/assets/diyarbakir.png": "e478e56976423e810cafcd93de27db04",
"assets/assets/doguanadolu.png": "b3eca5840c71d65309bc23f935e41244",
"assets/assets/doguanadoluil.jpg": "8a041e9c3089c57336217762905c8821",
"assets/assets/dut.jpg": "f25ef79424cb7a330cee7de4b4b228e1",
"assets/assets/ege.png": "190255a9746593bc1173a936b1329695",
"assets/assets/egeil.jpg": "bb747a809cb54627e4efa9121b32c296",
"assets/assets/erik.jpg": "38d0bf129300729273470fc0289ce157",
"assets/assets/erzurum.png": "34d2c26b0688fa2dd0fec835c3c92b3d",
"assets/assets/f%25C4%25B1nd%25C4%25B1k.jpg": "561d8608021dda8d0841343c304f0416",
"assets/assets/fasulye.jpg": "377041955325ac2e32d35acb900b8994",
"assets/assets/guneydogu.png": "c9f6664375b2bf847c881e70477ebf4b",
"assets/assets/guneydoguil.jpg": "ce37b7c9efac4ca1812b30303a867d07",
"assets/assets/havuc.jpg": "08c79afcde737d7219e73d818e01b9da",
"assets/assets/icanadolu.png": "6f4fee26b78ed718e81c8443ac7d0b9d",
"assets/assets/icanadoluil.png": "4da7075799ff975484f8f8a6233ea8f5",
"assets/assets/istanbul.png": "314d42114d51c147ccac589ed007b19a",
"assets/assets/izmir.png": "ff381d29943e4530675558b0c8e8ce62",
"assets/assets/karadeniz.png": "0f6e370e79e7b62e5897c7a89ff62a6b",
"assets/assets/karadenizil.png": "e1ab42db1a09afefd105c8b55838a12a",
"assets/assets/karpuz.jpg": "ed96dec65e240ca10e94cdf18acb4929",
"assets/assets/kars.png": "87014624c26c999a0f775b87fef2a73a",
"assets/assets/kavun.jpg": "11d0b10c1788dfeabfc4b9943e41d8c7",
"assets/assets/kayisi.jpg": "4fdf950963b1c43fa8ca3c551d0ddebb",
"assets/assets/konya.png": "74af6fc32811783c4f740567f5066fb7",
"assets/assets/limon.jpg": "556447f255e4901d14d543c58acf982c",
"assets/assets/m%25C4%25B1s%25C4%25B1r.jpg": "725892656ae82d497a23ad310e70a79f",
"assets/assets/manisa.png": "db3a52fc154d9e609309ce236ce41f96",
"assets/assets/mardin.png": "2b712baf6c11dc416778fedf8eb35eff",
"assets/assets/marmara.png": "be8f54662a09b09f6b2bb01bfeb596bf",
"assets/assets/marmarail.jpg": "adb00107a8808dcaa8f3cf970935fb02",
"assets/assets/mercimek.jpg": "dc49447109b7aa0e032b2d58abedf574",
"assets/assets/mersin.png": "bec8b09917da342077d0a6cefa45b9e2",
"assets/assets/meyve.jpg": "4ffcc36dc4f41e88337425ef896d841a",
"assets/assets/meyve2.jpg": "3b110c4e5508ffe08e8834b3b20d0818",
"assets/assets/meyve3.jpg": "5ad119bacf05573bf696b6e6ff6e1114",
"assets/assets/nohut.jpg": "abb4235d27a95da26e1e72e70c135106",
"assets/assets/pancar.jpg": "22824817a28ec2fc60a3cc1dda031d36",
"assets/assets/patates.jpg": "4b9cba04e6c2a05a24cd5fcdc1ceaf25",
"assets/assets/rize.png": "176ad96ac55b584a5bd28eb665537017",
"assets/assets/samsun.png": "05320398f7781d16c5f53c4810bb4f73",
"assets/assets/sanliurfa.png": "b722c820469720f347b41c22389e4587",
"assets/assets/sivas.png": "a33eee719b2b64d9097e9f5eaa1395f2",
"assets/assets/siyahzeytin.jpg": "f2edfa2952e76a7e06ae835b950f2705",
"assets/assets/sogan.jpg": "dffa9c151a2c58a2e9cef1dc00fe593f",
"assets/assets/trabzon.png": "b5776025bb571e21e2d6ca3c8a41e1a2",
"assets/assets/turuncgil.jpg": "1187eab3d4b07b6d3fbf97ca377a5b92",
"assets/assets/uzum.jpg": "5c6eaa347f4bdf5324a7cd84434560aa",
"assets/assets/visne.jpg": "d04fd3ca9f9093cd82ecac7b9cad9c8c",
"assets/assets/zeytin.jpg": "4ef3a0d490f1b24fb999adbb263005cb",
"assets/assets/zeytin.webp": "a8ad0e3ff16254e680911124c567999f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9bf346cbe7a4b6acb7ed2468b39c1e04",
"/": "9bf346cbe7a4b6acb7ed2468b39c1e04",
"main.dart.js": "4835156f1f35cef58598e384284a3730",
"manifest.json": "be952885636d97e10655b80ce1dc78ce",
"version.json": "5271c7301fd1b1baa6cfd26da21e0d10"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
