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
        Pesan
      </div>
    </div>
    <div class="h-[76.2vh] story-galeri-off">
      <div
        class="flex justify-between w-full h-full grid grid-cols-[210px,1fr]"
      >
        <!-- Menu Pesan -->
        <ul class="overflow-y-auto scrollbar h-[35rem]">
          <ul class="overflow-y-auto scrollbar h-[35rem]">
            <li>
              <a
                class="menu-pesan-area flex items-center px-3 py-2.5 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none hover:bg-slate-200"
                data-attribut="co-broking"
                onclick="showMessage(this)"
              >
                <div
                  class="w-10 h-10 flex justify-center items-center relative"
                >
                  <img
                    class="object-cover w-7 h-7"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/workgroup.png"
                    alt=""
                  />
                </div>
                <div class="py-2">
                  <div class="flex justify-between">
                    <div
                      class="flex flex-row w-full justify-between items-center"
                    >
                      <div>
                        <span
                          class="block ml-3 aktif-judul-pesan text-black text-sm"
                          >Co-Broking</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                data-attribut="pesan-orang-1"
                class="menu-pesan-area flex items-center px-3 py-1 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none hover:bg-slate-200"
                onclick="showMessage(this)"
              >
                <div class="relative">
                  <img
                    class="object-cover w-10 h-10 rounded-full"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                    alt=""
                  />
                  <span
                    class="-bottom-0.5 left-7 absolute w-2.5 h-2.5 bg-[#ffb500] border-2 border-white dark:border-gray-800 rounded-full"
                  ></span>
                </div>
                <div class="py-2">
                  <div class="flex justify-between">
                    <div
                      class="flex flex-row w-full justify-between items-center"
                    >
                      <div>
                        <span
                          class="block ml-3 aktif-judul-pesan text-black text-sm"
                          >Delia Amanda</span
                        >
                      </div>
                    </div>
                  </div>
                  <span class="block ml-3 text-xs text-black">bye</span>
                </div>
              </a>

              <a
                data-attribut="pesan-orang-2"
                class="bg-aktif-pesan menu-pesan-area flex items-center px-3 py-1 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none hover:bg-slate-200"
                onclick="showMessage(this)"
              >
                <div class="relative">
                  <img
                    class="object-cover w-10 h-10 rounded-full"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                    alt=""
                  />
                  <span
                    class="-bottom-0.5 left-7 absolute w-2.5 h-2.5 bg-gray-300 border-2 border-white dark:border-gray-800 rounded-full"
                  ></span>
                </div>
                <div class="py-2">
                  <div class="flex justify-between">
                    <div
                      class="flex flex-row w-full justify-between items-center"
                    >
                      <div class="inline-flex">
                        <span
                          class="block ml-3 aktif-judul-pesan text-black text-sm"
                          >Fadil Akmal</span
                        >
                        <div class="flex items-center justify-center ml-1">
                          <div
                            class="w-4 h-4 flex justify-center items-center relative"
                          >
                            <img
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="block ml-3 text-xs text-black">Hai</span>
                </div>
              </a>
            </li>
          </ul>
        </ul>
        <!--  -->
        <!-- Isi Pesan -->
        <div
          class="w-full h-[76.5vh] flex flex-col items-center justify-center konten-default-pesan"
        >
          <div class="flex flex-col items-center !-mt-14">
            <img
              class="w-16 h-16 object-cover"
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/home-menu-pesan.png"
              alt="Soaraja Icon"
            />
            <div class="text-gray-500 text-sm mt-3">
              Kirim foto dan bertukar pesan disini
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</div>
