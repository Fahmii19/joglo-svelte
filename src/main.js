// Custom CSS
import "./app.postcss";
// Flowbite CSS
import "flowbite/dist/flowbite.css";

// Mapbox
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// Svelte
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
