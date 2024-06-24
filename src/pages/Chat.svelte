<script lang="ts">
  import { onMount } from "svelte";
  import UserIcon from "../assets/images/user_model.jpg";
  import VerfiIcon from "../assets/images/verif.png";
  import ChatMessage from "../components/ChatMessage.svelte";
  import ChatPerson from "../components/ChatPerson.svelte";
  import { JoinRoomUser, io } from "../utils/socket";

  //   Check is Logged
  import { isLogged } from "../store/auth";
  import { navigate } from "svelte-routing";
  import { ExtractToken } from "../utils/auth";
  import type { Chat, ListChat } from "../service/chat/type";
  import { detailChat, unreadMessages } from "../store/chat";
  import ChatHome from "../components/ChatHome.svelte";
  import { markerStore } from "../store/map";

  // Redirect to Login if not logged in
  if (!$isLogged) {
    navigate("/login");
  }

  // Get UserID And Join Room
  const { user_id } = ExtractToken();
  JoinRoomUser($io, user_id || "");

  // Get List of Chat
  $: list_chat = [] as ListChat[];
  $io?.emit("chat_list", Number(user_id), (chat_list: ListChat[]) => {
    list_chat = chat_list;
  });

  const sendMessage = () => {
    const message = document.querySelector(
      "input[name=message]"
    ) as HTMLInputElement;

    let chat: Chat = {
      from_user_id: Number(user_id),
      to_user_id: detail_chat.to_user_id,
      message: message.value,
      room_id: detail_chat.room_id,
    };

    $io?.emit("chat", chat, () => {
      $io?.emit("chat_list", Number(user_id), (chat_list: ListChat[]) => {
        list_chat = chat_list;
      });
    });
  };

  onMount(() => {
    // Send Message on Enter Key and

    const input = document.querySelector(
      "input[name=message]"
    ) as HTMLInputElement;

    input?.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  });

  // Detail Chat
  $: detail_chat = {
    name: "" as string,
    room_id: "" as string,
    to_user_id: 0,
    detail: [] as Chat[],
  };

  const DetailChat = (name: string, room_id: string, to_user_id: number) => {
    // Set State Detail Chat
    detailChat.set({
      name,
      room_id,
      to_user_id,
    });

    // Join Room User
    JoinRoomUser($io, user_id || "");
    $io?.emit("chat_detail", room_id, user_id, (chat: Chat[]) => {
      detail_chat = {
        name,
        room_id,
        to_user_id,
        detail: chat,
      };
    });

    // Emit Unread Message
    $io?.emit("chat_unread", user_id, (numb: number) => {
      unreadMessages.set(numb);
    });

    // Scroll to bottom
    const messages = document.getElementById("messages-container");
    messages?.scrollTo(0, messages.scrollHeight);
  };

  // Get Message Received
  $io?.on("chat_received", (message: Chat) => {
    // Check if the message is for this room
    if (message.room_id !== detail_chat.room_id) return;
    detail_chat.detail = [...detail_chat.detail, message];

    // Scroll to bottom
    const messages = document.getElementById("messages-container");
    messages?.scrollTo(0, messages.scrollHeight);

    // Clear Input
    const input = document.querySelector(
      "input[name=message]"
    ) as HTMLInputElement;
    input!.value = "";
  });

  // Get Detail Chat
  if ($detailChat !== null) {
    DetailChat(
      $detailChat.name,
      $detailChat.room_id,
      $detailChat.to_user_id as number
    );
  }

  // Remove Marker
  $markerStore?.remove();
</script>

<div class="flex flex-col w-full h-full">
  <!-- <div>asdsa</div> -->

  <div class="justify-between w-full h-full grid grid-cols-[210px,1fr]">
    <div class="flex-1 h-full">
      <div class="h-full flex-col">
        <div class="h-12 border-b border-gray-300">
          <div class="sf_pro_bold_judul text-2xl py-2 px-3">Pesan</div>
        </div>
        <div class="h-full border-r border-gray-300">
          <ul class="overflow-auto h-[35rem]">
            <li>
              <!-- List of Message -->
              {#each list_chat as lc}
                <ChatPerson
                  last_message={lc.last_message}
                  name="{lc.user.first_name} {lc.user.last_name}"
                  image={UserIcon}
                  on:click={() =>
                    DetailChat(
                      lc.user.first_name + " " + lc.user.last_name,
                      lc.room_id,
                      Number(lc.user.user_id)
                    )}
                />
              {/each}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-1 h-full w-full flex-col">
      <div class="h-12 border-b border-gray-300 flex items-end pb-0.5 pl-1.5">
        <!--  -->
        <div class="h-full w-full flex justify-between">
          <div class="inline-flex items-end cursor-pointer">
            <!-- Teks -->
            <div class="text-gray-700 mr-1 inline-flex items-center">
              <span>{detail_chat.name}</span>
              <div class="w-4 h-4 ml-1">
                <img src={VerfiIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <div class="h-full">
        {#if $detailChat == null}
          <ChatHome />
        {:else}
          <!-- pesandefault -->
          <div class="w-full h-full">
            <!-- pesanmodekedua -->
            <div class="lg:col-span-2 default_pesan_dua_aktif">
              <div class="w-full">
                <div
                  id="messages-container"
                  class="relative w-full pt-2.5 px-2 py-2 overflow-y-auto hide-scrollbar lg:h-[55rem] xl:h-[32rem]"
                >
                  <div
                    id="messages"
                    class="flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                  >
                    {#each detail_chat.detail as message}
                      <ChatMessage
                        message={message.message}
                        self={Number(user_id) === message.from_user_id}
                        image={UserIcon}
                      />
                    {/each}

                    <!--  -->
                  </div>
                </div>

                <div
                  class="flex items-center justify-between w-full p-2 relative"
                >
                  <input
                    type="text"
                    placeholder="Pesan ..."
                    class="block w-full py-2 border border-gray-300 pl-4 mx-0 text-sm bg-gray-100 rounded-full outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
                    name="message"
                  />

                  <div
                    class="absolute right-4 items-center inset-y-0 hidden sm:flex"
                  >
                    <input
                      type="file"
                      id="fileUpload"
                      class="hidden"
                      accept="image/*"
                    />

                    <!-- Button -->
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 focus:outline-none"
                    >
                      <img
                        class="h-5 w-5"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPHSURBVHic7Zu7axVBFMZ/pridCJKHMYWFjVVMJcR0VoIkRs1DkxjIH2ARLNL7KET8D2wtBR8hAQ3aCeIDUZGACIIgXmzUkGtMbhKLycLNuTO7M7uzd+fq/WCK3T1n5nzfnjP7moUWWmjhf8YeB9sB4CxwAugGunKJKD3KwFfgKXAXeOar4z7gCbDdZG0JOJqV/DhQCYBM2rYGTKclPwpsBUAia9sCJlzJ9wG/NZ09AAYJr/5BxTQEzFMfdwXodelM1nwFGPEYbN7Qle5jW+cB6hVsJvIRzlPPo9/G8ZZwephTgI3AAru53LRxei2cBvOKzgEHgOvAO+AX8B14AcztHDNhmN1cXtoMVhZOHWmj9oQxFGnTLP8TVfM6dAnbbzYDbgqntvSxZ8YpYAMz+dpL3ZjGv03YbdoMKjsvCt3En3nZfqC/PMfyKfLsJuESsLdmex1V8z1AOzCLyo4I+8hw11eLUDLgrYhjTmMzK2x0k5wzn1AEkDcyBzU27cJmVWPTtCVQFdt/NDaZT1DIAnwS2xc1NjNi+6OPgUMpgasijnVUze9Hpf5lVFbU2lzT9NO0c0AnDbgM6uDiMAx82WnDNp07YgS7dxLrqNd1OuQmwCi779KqwJTNAI4YQd3uxt0Kn4zxz0UAST5vETqAK8ArYAV1uXuzs68zwde7ACbyeYuQFl4FGKee/IZhn+kJrdHwJoDuzFeBSVSd6o6FkAleBIgjHyFUETILYEM+QogiZBbAtb5N80RRc0JmAdIQyUuEEnAbdSl8hN33CW8CmNLeBN/lUALui/6W0T8m18KLAK7kI/gSQUfeVoTMAqQlHyGrCHHkbUTILICPySvtnFBCfZiRMa1p9n2ggKdBF7hmgunMLwOHgHuGYzITghEA7EWII99dY2MjQlACQLIINuSpsU0SITgBwDwnTKOveVN9g3meiHyCFAD0IuhaHPkIcSIEKwDoyyEp7U0wlUPQAoA5Ez7jvhTHlAlBCwB+b5uTMiERRQgAjRMhEUUJAI0RIRFFCgB+H6VLNKEA4DcTnPmEskTGRyakWiIT0iKprCJ0Ct+yjZNcJjfkFLJ/ZBHhtPCzWiYnF0rOO4fsH2lFWBQ+N2wGOy6cti0GagRcRZiknscx28GWhGMFtfa2aNiKMEX94olFl4F60f8osYBaB3AAt99tfMIkwgxwDvW6XMa9AhxxHWiCf+OHiSrq61YqXKC5f5lZRV0JMqEX9bNB0WRc2zxwOImcSx33A2dQv831oJ7Vi5oHdCgD74HnwB3U26AWWmihhVj8BRjLV7Snmu/nAAAAAElFTkSuQmCC"
                        alt="File"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
