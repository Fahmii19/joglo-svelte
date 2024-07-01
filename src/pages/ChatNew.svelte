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
  import { activePesan } from "../store/store";

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
    <div class="w-full flex justify-between border-b border-gray-300">
      <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory">
        Pesan
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
          <!-- <ChatCoBroking /> -->
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
