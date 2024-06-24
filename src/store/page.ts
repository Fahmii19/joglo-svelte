import { writable } from "svelte/store";

let page = writable<string>("");

export { page };
