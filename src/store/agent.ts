import { writable } from "svelte/store";
import type { AuthUser } from "../service/auth/type";

const agentList = writable<AuthUser[]>([] as AuthUser[]);

export const removeEditListingClass = writable(false);

export const buttonEditListing = writable(false);

export { agentList };
