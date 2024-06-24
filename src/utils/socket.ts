import { writable } from "svelte/store";
import { ExtractToken } from "./auth";
import { unreadMessages } from "../store/chat";

let io = writable<any>(null);

const socketConnect = (url: string) => {
  // add socket.io
  const script = document.createElement("script");
  script.src = "https://cdn.socket.io/socket.io-1.4.0.js";
  script.async = true;
  script.onload = () => {
    // The library has been loaded, you can now use it
    const socket_io = (window as any).io;
    const socket = socket_io(url, {
      transports: ["websocket"],
    });
    io.set(socket); // Assuming the library adds itself to the window object

    socket.on("connect", () => {
      // Get UserID from localstorage
      const { user_id } = ExtractToken();

      // Send UserID to the server
      if (!user_id) return;
      JoinRoomUser(socket, user_id);
      GetUnreadMessages(socket, user_id);
    });

    socket.on("chat_received", () => {
      const { user_id } = ExtractToken();
      setTimeout(() => {
        socket.emit("chat_unread", user_id, (count: number) => {
          unreadMessages.set(count);
        });
      }, 1000);
    });
  };
  document.body.appendChild(script);

  // Cleanup function
  return () => {
    // Remove the script element if the component is unmounted
    document.body.removeChild(script);
  };
};

// Connect to room user
const JoinRoomUser = (socket: any, user_id: string) => {
  socket?.emit("join_room_user", user_id);

  socket?.emit("join_all_room", user_id);
};

// Get unread messages
const GetUnreadMessages = (socket: any, user_id: string) => {
  // socket?.on("chat_received", () => {
  socket?.emit("chat_unread", user_id, (data: any) => {
    unreadMessages.set(data);
  });
  // });
};

export { io, socketConnect, JoinRoomUser, GetUnreadMessages };
