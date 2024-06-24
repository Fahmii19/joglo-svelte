import mapbox from "mapbox-gl";
import { writable } from "svelte/store";

// https://docs.mapbox.com/help/glossary/access-token/
mapbox.accessToken =
  "pk.eyJ1IjoibWVudGhvZWxzciIsImEiOiJja3M0MDZiMHMwZW83MnVwaDZ6Z2NhY2JxIn0.vQFxEZsM7Vvr-PX3FMOGiQ";

const key = {};
let mapStore = writable<mapbox.Map>(undefined);
let markerStore = writable<mapbox.Marker>(undefined);

export { mapbox, key, mapStore, markerStore };
