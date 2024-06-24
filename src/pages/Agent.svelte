<script lang="ts">
  import AgentCard from "../components/AgentCard.svelte";
  import AgentFilter from "../components/AgentFilter.svelte";
  import type { AuthUser } from "../service/auth/type";
  import UserService from "../service/users/users";
  import { agentList } from "../store/agent";
  import { markerStore } from "../store/map";
  import { page } from "../store/page";

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

<div class="flex flex-col card-info-pencarian card-agent">
  <!--  -->

  <div class="w-full flex justify-between border-b border-gray-300">
    <div class="sf_pro_bold_judul text-2xl px-3 py-2">Agen</div>
  </div>

  <div class="px-3 pt-5">
    <!--  judul-dijual-kedua -->
    <div
      class="flex flex-row items-stretch justify-between mt-1 judul-dijual-kedua"
    >
      <div class="font-normal text-sm self-end text-black -mb-0.5">
        Menampilkan {count_users} data
      </div>
    </div>
    <!--  -->
    <div class="py-2 w-full"></div>
  </div>

  <!-- ModesCard 1.1. -->
  <div class="h-full px-3 grid grid-cols-[1fr,29px]">
    <div class="h-[66.5vh] overflow-y-auto hide-scrollbar">
      <div class="grid grid-cols-2 gap-2">
        <!-- Card Agent -->
        {#each users as user}
          <AgentCard {user} />
        {/each}
      </div>
    </div>

    <!-- Agent Filter -->
    <AgentFilter />
  </div>
</div>
