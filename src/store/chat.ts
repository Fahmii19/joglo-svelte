import { writable } from "svelte/store";
import type { DetailChat } from "../service/chat/type";

const unreadMessages = writable(0);
const detailChat = writable<DetailChat | null>(null);

export { unreadMessages, detailChat };
