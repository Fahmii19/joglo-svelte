import "./app.pcss";
import App from "./App.svelte";

const targetElement = document.getElementById("app");

const app = new App({
  target: targetElement ? targetElement : document.body,
});

//

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => {
      console.log("Service Worker registered");
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

//

export default app;
