<script lang="ts">
  import DetailFoto from "../components/DetailFoto.svelte";
  import DetailFotoNew from "../components/DetailFotoNew.svelte";
  import DetailLokasi from "../components/DetailLokasi.svelte";
  import DetailMetriks from "../components/DetailMetriks.svelte";
  import DetailHarga from "../components/DetailHarga.svelte";
  import { navigate } from "svelte-routing";
  import { property_like_list, property_list } from "../store/property";
  import { ExtractToken } from "../utils/auth";
  import { io } from "../utils/socket";
  import { detailChat } from "../store/chat";
  import { markerStore } from "../store/map";

  // Props
  export let id: string;

  //  Set Property Clicked
  const triggerClick = (id: number) => {
    // Logic to handle property click
  };
  triggerClick(Number(id));

  //   Filter Property by list_id
  $: property = {} as any; // Assume the type here for simplicity

  if (window.location.href.includes("favorite")) {
    property_like_list.subscribe((value) => {
      property = value.find((item) => item.properties.list_id === Number(id));
    });
  } else {
    property_list.subscribe((value) => {
      property = value.find((item) => item.properties.list_id === Number(id));
    });
  }

  //   Destruct property
  const { properties } = property || {};
  const { coordinates } = property?.geometry || {};

  // Get Available Room Chat
  const { user_id } = ExtractToken();

  //   Send Message
  const SendMessage = () => {
    $io?.emit(
      "chat_available_room",
      Number(user_id),
      Number(properties?.user?.user_id),
      (room_id: string) => {
        const room_id_available = room_id
          ? room_id
          : "ROOM-" + Number(user_id) + Number(properties?.user?.user_id);
        detailChat.set({
          name: `${properties?.user?.first_name ?? ""} ${
            properties?.user?.last_name ?? ""
          }`,
          to_user_id: Number(properties?.user?.user_id),
          room_id: room_id_available,
        });

        navigate("/chat");
      }
    );
  };

  // Remove Marker
  $markerStore?.remove();

  let activeTab = 0;
</script>

<div class="flex flex-col w-full h-full card-detail-beranda">
  <div class="flex flex-col h-[83vh]">
    <!-- HeaderDetail -->
    <div class="flex flex-col">
      <div
        class="w-full h-[3.3rem] grid grid-cols-[46px,1fr] px-3 border-b border-gray-300"
      >
        <div class="w-full h-full flex items-center justify-start">
          <img
            class="w-9 h-9 rounded-full"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
            alt=""
          />
        </div>
        <div class="grid grid-cols-2">
          <div class="w-full grid grid-cols-[125px,1fr]">
            <div class="w-full flex items-center justify-start">
              <div class="flex flex-col">
                <div class="inline-flex">
                  <div
                    class="text-sm font-semibold text-black cursor-pointer tracking-[0.070em]"
                    role="button"
                    tabindex="0"
                  >
                    Budiman Alisya
                  </div>
                  <div class="flex items-center justify-center ml-1"></div>
                </div>
              </div>
            </div>
            <div class="w-full grid items-center">
              <div class="inline-flex items-center justify-start">
                <button
                  data-pesan="Mochtar Riady"
                  onclick="showMessage(this)"
                  type="button"
                  class="ml-5 h-6 w-24 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3 tracking-[0.070em]"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
          <div
            class="w-full h-full grid justify-items-end items-center relative"
          >
            <div class="inline-flex">
              <button
                type="button"
                onclick="closeTab()"
                class="menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 flex justify-center items-center"
              >
                <div class="w-5 h-5 flex justify-center items-center">
                  <img
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/back.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- TabMenuDetail -->
    <div class="w-full mt-[3vh] mb-[1.5vh] px-0">
      <div id="" class="w-[49vw] flex flex-row px-2 menu_pengaturaan_detail">
        <button
          type="button"
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-1 font-bold"
          class:bg_aktif_detail={activeTab === 0}
          on:click={() => (activeTab = 0)}
        >
          Foto
        </button>
        <button
          type="button"
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-1 font-bold"
          class:bg_aktif_detail={activeTab === 1}
          on:click={() => (activeTab = 1)}
        >
          Detil
        </button>
        <button
          type="button"
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-1 font-bold"
          class:bg_aktif_detail={activeTab === 2}
          on:click={() => (activeTab = 2)}
        >
          Metriks
        </button>
        <button
          type="button"
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-1 font-bold"
          class:bg_aktif_detail={activeTab === 3}
          on:click={() => (activeTab = 3)}
        >
          Valuasi
        </button>
        <button
          type="button"
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-1 font-bold"
          class:bg_aktif_detail={activeTab === 4}
          on:click={() => (activeTab = 4)}
        >
          Simulasi KPR
        </button>
      </div>
    </div>

    {#if activeTab === 0}
      <DetailFotoNew />
    {:else if activeTab === 1}
      <DetailLokasi {properties} {coordinates} />
    {:else if activeTab === 2}
      <DetailMetriks {properties} />
    {:else if activeTab === 3}
      <DetailHarga
        harga={properties?.harga ?? 0}
        luas_bangunan={properties?.luas_bangunan ?? 0}
        luas_tanah={properties?.luas_bangunan ?? 0}
        njop={properties?.njop ?? 0}
      />
    {:else if activeTab === 4}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Disabled:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    {/if}
    <!-- KontenTabMenuDetail -->
  </div>

  <!--  -->
</div>

<style>
  .bg_aktif_detail {
    background-color: #e2e8f0; /* Adjust to your desired active background color */
  }
</style>
