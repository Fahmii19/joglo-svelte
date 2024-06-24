import { navigate } from "svelte-routing";
import { isLogged } from "../store/auth";
import type { AuthUser } from "../service/auth/type";

const LogOut = () => {
  localStorage.removeItem("active_token");
  localStorage.removeItem("user");

  //   Set the isLogged store to false
  isLogged.set(false);
  navigate("/login");
};

const ExtractToken = (): AuthUser => {
  const token = atob(localStorage.getItem("active_token")?.split(".")[1] ?? "");
  const tokenData = JSON.parse(token ? token : "{}") as AuthUser;

  return tokenData;
};

const isExpired = () => {
  const token = ExtractToken();
  const currentTime = new Date().getTime() / 1000;
  const expired_time = token?.exp ?? 0;

  if (expired_time < currentTime) {
    return LogOut();
  }

  return;
};

export { LogOut, ExtractToken, isExpired };
