// store.js
import { writable } from "svelte/store";

// untuk pesan yang aktif
export const activePesan = writable(0);

// Untuk Ruang yang aktif
export const RunningTeksAktif = writable("default");
