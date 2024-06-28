<script lang="ts">
  import AgentCard from "../components/AgentCard.svelte";
  import AgentCardNew from "../components/AgentCardNew.svelte";
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

<div class="h-full w-full">
  <div class="h-full flex flex-col">
    <div class="w-full flex justify-between border-b border-gray-300">
      <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory">
        Agen
      </div>
    </div>

    <div class="h-[76.2vh] story-galeri-off">
      <div class="h-full px-3 flex flex-col">
        <!-- Menu Button -->
        <div
          class="flex flex-row items-stretch justify-between mt-1 judul-dijual-kedua"
        >
          <div class="font-normal text-sm self-end text-gray-700 -mb-0.5">
            Menampilkan {count_users} data
          </div>

          <div class="">
            <div class="relative flex flex-row">
              <!-- Mode Card -->
              <div class="flex items-center mr-2">
                <div
                  class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-slate-200 hover:rounded-lg"
                >
                  <!-- <img
                    class="w-7 h-7 object-contain cursor-pointer"
                    src={ListIcon}
                    alt=""
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-row pt-5">
          <div class="basis-11/12">
            <div class="grid grid-cols-2 gap-2">
              <AgentCardNew />
              <AgentCardNew />
            </div>
          </div>
          <div class="basis-1/12">
            <AgentFilter />
          </div>
        </div>

        <!--  -->
      </div>
    </div>
  </div>
</div>
