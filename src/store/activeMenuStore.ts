import { writable } from "svelte/store";

// Store untuk menyimpan ID tombol yang aktif
export const activeMenu = writable<string>("menu_galeri"); // Default aktif di 'Galeri'
