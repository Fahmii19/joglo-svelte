import { writable } from "svelte/store";

export const activeMenu = writable<string>("menu_galeri"); // Default aktif di 'Galeri'
