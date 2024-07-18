const cacheName = "my-pwa-shell-v1.0";
const filesToCache = [
  //
  "/",
  "/index.html",
  "/global.css",
  "/build/bundle.js",
  "/src/app.pcss",
  "/src/App.svelte",
  "/src/main.ts",
  "/src/pages/Agent.svelte",
  "/src/pages/AgentNew.svelte",
  "/src/pages/Chat.svelte",
  "/src/pages/ChatNew.svelte",
  "/src/pages/Detail.svelte",
  "/src/pages/DetailAgentNew.svelte",
  "/src/pages/DetailNew.svelte",
  "/src/pages/DetailPostinganStories.svelte",
  "/src/pages/Login.svelte",
  "/src/pages/Posting.svelte",
  "/src/pages/PostinganStoriesBaru.svelte",
  "/src/pages/Register.svelte",
  "/src/pages/Setting.svelte",
];

self.addEventListener("install", (e) => {
  console.log("[ServiceWorker] - Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[ServiceWorker] - Caching app shell");
      await cache.addAll(filesToCache);
    })()
  );
});
