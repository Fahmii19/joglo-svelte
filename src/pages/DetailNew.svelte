<script lang="ts">
  import ModelIcon from "../assets/images/model.jpg";
  import VerifIcon from "../assets/images/verif.png";
  import NextPropertyIcon from "../assets/images/right-arrow.png";
  import BackIcon from "../assets/images/back.png";
  import { link, navigate } from "svelte-routing";
  import { property_like_list, property_list } from "../store/property";
  import type { Feature } from "../service/list_property/type";
  import { Tabs, TabItem } from "flowbite-svelte";
  import { triggerClick } from "../utils/layers";
  import DetailFoto from "../components/DetailFoto.svelte";
  import DetailLokasi from "../components/DetailLokasi.svelte";
  import DetailMetriks from "../components/DetailMetriks.svelte";
  import DetailHarga from "../components/DetailHarga.svelte";
  import { page } from "../store/page";
  import { ExtractToken } from "../utils/auth";
  import { io } from "../utils/socket";
  import { detailChat } from "../store/chat";
  import { markerStore } from "../store/map";

  //   Props
  export let id: string;

  //  Set Property Clicked
  triggerClick(Number(id));

  //   Filter Property by list_id
  $: property = {} as Feature | undefined;

  if ($page.includes("favorite")) {
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

  // Trigger Click
  triggerClick(Number(id));

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
</script>

<div class="flex flex-col w-full h-full card-detail-beranda">
  <!-- neww1 -->

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
                    onclick="showCardAgent(this)"
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
              <div
                onclick="closeTab()"
                class="menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 flex justify-center items-center"
              >
                <div class="w-5 h-5 flex justify-center items-center">
                  <img
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/back.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- TabMenuDetail -->
    <div class="w-full flex flex-row px-3.5 py-[1rem] border">
      <div id="" class="w-[32vw] flex flex-row menu_pengaturaan_detail_dua">
        <div
          id=""
          class="btn_default_tab_menu_pengaturan_dua_dua px-4 pb-1 pt-1 text-sm text-black cursor-pointer bg_aktif_detail hover:bg-slate-200 hover:rounded-lg mr-1 hover:mr-1 font-bold"
          data-target="#menu_detail_duasatu"
        >
          Foto
        </div>
        <div
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer"
          data-target="#menu_detail_duadua"
        >
          Detil
        </div>
        <div
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer"
          data-target="#menu_detail_duatiga"
        >
          Metriks
        </div>
        <div
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer"
          data-target="#menu_detail_duaempat"
        >
          Valuasi
        </div>
        <div
          class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer"
          data-target="#menu_detail_duaempat"
        >
          Simulasi KPR
        </div>
      </div>
      <!--  -->
    </div>
    <!-- KontenTabMenuDetail -->
  </div>

  <!--  -->
</div>
