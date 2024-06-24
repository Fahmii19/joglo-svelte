import { writable } from "svelte/store";
import type { AuthUser } from "../service/auth/type";

const isLogged = writable(false);
const authUser = writable<AuthUser>({} as AuthUser);
const authUserTemp = writable<AuthUser>({} as AuthUser);

export { isLogged, authUser, authUserTemp };
