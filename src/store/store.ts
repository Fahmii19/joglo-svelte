// store.js
import { writable } from "svelte/store";

// untuk pesan yang aktif
export const activePesan = writable(0);

// Untuk Ruang yang aktif
// Untuk teks yang berjalan
export const RunningTeksAktif = writable("");

// Untuk komponen yang aktif
export const activeComponents = writable({
  searchBar: true,
  buttonChip: true,
  ButtonCari: true,
  runningTeks: false,
});

// untuk login
export const loggedIn = writable(false);

// untuk user
export const activeUser = writable(null);

// untuk chat yang aktif
export const activeChatId = writable(null);

// untuk lupa password
export const formState = writable({
  state: "lupaKataSandi",
  title: "Verifikasi Akun",
});
