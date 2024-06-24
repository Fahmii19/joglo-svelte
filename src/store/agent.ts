import { writable } from "svelte/store";
import type { AuthUser } from "../service/auth/type";

const agentList = writable<AuthUser[]>([] as AuthUser[]);

export { agentList };
