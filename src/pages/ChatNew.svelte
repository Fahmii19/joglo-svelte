<script lang="ts">
  import AgentCard from "../components/AgentCard.svelte";
  import AgentCardNew from "../components/AgentCardNew.svelte";
  import AgentFilter from "../components/AgentFilter.svelte";
  import ChatDefault from "../components/ChatDefault.svelte";
  import ChatMessage from "../components/ChatMessage.svelte";
  import UserKontakChat from "../components/UserKontakChat.svelte";
  import ChatCoBroking from "../components/ChatCoBroking.svelte";
  import type { AuthUser } from "../service/auth/type";
  import UserService from "../service/users/users";
  import { agentList } from "../store/agent";
  import { markerStore } from "../store/map";
  import { page } from "../store/page";
  import { activePesan, activeUser } from "../store/store";
  import { get } from "svelte/store";

  let users = [] as AuthUser[];
  let count_users = 0;

  // Get List of Agent
  const userService = new UserService();

  userService.getListAgent().then((res) => {
    users = res.data;
    count_users = res.data.length;
  });

  // Set Agent List
  agentList.subscribe((value) => {
    users = value;
    count_users = value.length;
  });

  // Set Page
  page.set("agent");

  // Remove Marker
  $markerStore?.remove();
</script>

<div class="h-full w-full">
  <div class="h-full flex flex-col">
    <div class="w-full grid grid-cols-[210px,1fr]">
      <div
        class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory border-b border-gray-300"
      >
        Pesan
      </div>
      <div class="p-2 border-b border-gray-300">
        {#if $activeUser && $activePesan !== 1}
          <div class="flex items-center avatar_username_pengguna_chat_aktif">
            <div class="relative">
              <img
                class="object-cover w-8 h-8 rounded-full"
                src={$activeUser.image}
                alt=""
              />
              <span
                class="-bottom-0.5 left-6 absolute w-2.5 h-2.5 {$activeUser.status} dark:border-gray-800 rounded-full"
              ></span>
            </div>
            <div class="ml-2 text-black text-sm">{$activeUser.name}</div>
          </div>
        {/if}
      </div>
    </div>
    <div class="h-[76.2vh] w-full">
      <div
        class="flex justify-between w-full h-full grid grid-cols-[210px,1fr]"
      >
        <!-- Menu Pesan -->
        <ul
          class="overflow-y-auto scrollbar h-[35rem] overflow-y-auto overflow-x-hidden hide-scrollbar border-r border-gray-300"
        >
          <UserKontakChat />
        </ul>
        <!--  -->
        <!-- Isi Pesan -->
        {#if $activePesan === 0}
          <ChatDefault />
        {:else if $activePesan === 1}
          <ChatCoBroking />
        {:else if $activePesan === 2}
          <ChatMessage />
        {/if}
        <!--  -->
      </div>
    </div>
  </div>
</div>
