import { writable, type Writable } from "svelte/store";

export const tooltip: Writable<string> = writable("");
