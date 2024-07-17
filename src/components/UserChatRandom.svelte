<script>
  export let chat;
  import { activePesan, activeUser, activeChatId } from "../store/store";
  import { get } from "svelte/store";

  function handleChatClick(chatId) {
    activePesan.set(2);
    activeUser.set(chat);
    activeChatId.set(chatId);
  }
</script>

<div
  class="menu-pesan-area flex items-center px-3 py-1 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-200 focus:outline-none"
  class:bg-slate-200={$activeChatId === chat.id}
  on:click={() => handleChatClick(chat.id)}
  role="button"
  tabindex="0"
  on:keydown={(e) => {
    if (e.key === "Enter") {
      handleChatClick(chat.id);
    }
  }}
>
  <div class="relative">
    <img class="object-cover w-10 h-10 rounded-full" src={chat.image} alt="" />
    <span
      class="-bottom-0.5 left-7 absolute w-2.5 h-2.5 {chat.status} dark:border-gray-800 rounded-full"
    ></span>
  </div>
  <div class="py-2">
    <div class="flex justify-between">
      <div class="flex flex-row w-full justify-between items-center">
        <div>
          <span class="block ml-3 aktif-judul-pesan text-black text-sm"
            >{chat.name}</span
          >
        </div>
      </div>
    </div>
    <span class="block ml-3 text-xs text-black text-start">{chat.message}</span>
  </div>
</div>
