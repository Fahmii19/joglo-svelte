<script>
  export let chat;
  import { activePesan, activeUser } from "../store/store";
</script>

<div
  class="menu-pesan-area flex items-center px-3 py-1 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none hover:bg-slate-200"
  on:click={() => {
    activePesan.set(2);
    activeUser.set(chat);
  }}
  role="button"
  tabindex="0"
  on:keydown={(e) => {
    if (e.key === "Enter") {
      activePesan.set(2);
      activeUser.set(chat);
    }
  }}
>
  <div class="relative">
    <img class="object-cover w-10 h-10 rounded-full" src={chat.image} alt="" />
    <span
      class="-bottom-0.5 left-7 absolute w-2.5 h-2.5 {chat.status} border-2 border-white dark:border-gray-800 rounded-full"
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
