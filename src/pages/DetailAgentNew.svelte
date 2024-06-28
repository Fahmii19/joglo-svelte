<script lang="ts">
  import DetailFoto from "../components/DetailFoto.svelte";
  //
  import BiodataAgent from "../components/BiodataAgent.svelte";
  import StatisikAgent from "../components/StatisikAgent.svelte";
  import ListingAgent from "../components/ListingAgent.svelte";
  //
  import DetailFotoNew from "../components/DetailFotoNew.svelte";
  import DetailLokasi from "../components/DetailLokasi.svelte";
  import DetailLokasiNew from "../components/DetailLokasiNew.svelte";
  import DetailMetriks from "../components/DetailMetriks.svelte";
  import DetailMetriksNew from "../components/DetailMetriksNew.svelte";
  import DetailHarga from "../components/DetailHarga.svelte";
  import DetailHargaNew from "../components/DetailHargaNew.svelte";
  import SimulasiKprNew from "../components/SimulasiKprNew.svelte";
  import { navigate } from "svelte-routing";
  import { property_like_list, property_list } from "../store/property";
  import { ExtractToken } from "../utils/auth";
  import { io } from "../utils/socket";
  import { detailChat } from "../store/chat";
  import { markerStore } from "../store/map";
  import { removeEditListingClass } from "../store/agent";

  // Props
  export let id: string;

  //  Set Property Clicked
  const triggerClick = (id: number) => {
    // Logic to handle property click
  };
  triggerClick(Number(id));

  //   Filter Property by list_id
  $: property = {} as any; // Assume the type here for simplicity

  if (window.location.href.includes("favorit")) {
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
  //

  let activeTab = 0;

  import { Link } from "svelte-routing";

  const handleListingClick = () => {
    activeTab = 2;
    removeEditListingClass.set(true);
  };

  //

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
</script>

<div class="flex flex-col w-full h-full card-detail-beranda">
  <div class="flex flex-col h-[83vh]">
    <!-- HeaderDetail -->
    <!-- HeaderInti -->
    <div
      class="w-full flex justify-between items-center border-b px-3 py-1.5 border-gray-300"
    >
      <div class="font-sf_pro_bold_judul text-2xl judulStory">Agenn</div>
      <!--  -->
      <Link
        to="/agen"
        class="menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 border-blue-600 flex justify-center items-center btnBackEditListingg"
      >
        <div class="w-5 h-5 flex justify-center items-center">
          <img
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/back.png"
            alt="Back"
          />
        </div>
      </Link>
      <!--  -->
    </div>

    <!-- TabMenuDetail -->
    <div class="px-3">
      <div class="w-full h-[11vh] flex items-center">
        <div id="" class="w-[49vw] flex flex-row menu_pengaturaan_detail">
          <button
            type="button"
            class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-2.5"
            class:bg_aktif_detail={activeTab === 0}
            on:click={() => (activeTab = 0)}
          >
            Biodata
          </button>
          <button
            type="button"
            class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-2.5"
            class:bg_aktif_detail={activeTab === 1}
            on:click={() => (activeTab = 1)}
          >
            Statistik
          </button>
          <button
            type="button"
            class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-2.5"
            class:bg_aktif_detail={activeTab === 2}
            on:click={handleListingClick}
            >Listing
          </button>
        </div>
      </div>

      {#if activeTab === 0}
        <BiodataAgent />
      {:else if activeTab === 1}
        <StatisikAgent />
      {:else if activeTab === 2}
        <ListingAgent {removeEditListingClass} />
      {/if}
      <!-- KontenTabMenuDetail -->
    </div>
  </div>

  <!--  -->
</div>
