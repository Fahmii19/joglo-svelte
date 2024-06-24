import type { AuthUser } from "../auth/type";

interface Chat {
  id?: Number;
  room_id: string;
  from_user_id: Number;
  to_user_id: Number;
  from_user?: AuthUser;
  to_user?: AuthUser;
  message: string;
}

interface ListChat {
  room_id: string;
  user_id: Number;
  user: AuthUser;
  last_message: string;
  timestamp: string;
}

interface DetailChat {
  room_id: string;
  name: string;
  to_user_id: Number;
}

export type { Chat, ListChat, DetailChat };
