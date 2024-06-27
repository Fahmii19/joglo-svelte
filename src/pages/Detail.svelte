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

  if ($page.includes("favorit")) {
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
  <div class="h-[83vh] px-3">
    <!-- neww2 -->
    <!-- Judul Card Detail Beranda -->
    <div class="h-[17.5vh]">
      <div class="flex flex-col">
        <div class="w-full h-[3.5rem] grid grid-cols-[48px,1fr]">
          <div class="w-full h-full flex items-center justify-start">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="w-9 h-9 rounded-full" src={ModelIcon} />
          </div>
          <div class="grid grid-cols-2">
            <div class="w-full grid grid-cols-[125px,1fr]">
              <div class="w-full flex items-center justify-center">
                <div class="flex flex-col">
                  <div class="inline-flex">
                    <div
                      class="text-sm font-semibold text-gray-700 cursor-pointer"
                    >
                      {properties?.user?.first_name}
                      {properties?.user?.last_name}
                    </div>
                    <div class="flex items-center justify-center ml-1">
                      <div
                        class="w-4 h-4 mt-1 ml-0.5 flex justify-center items-center relative"
                      >
                        <img src={VerifIcon} alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <label
                      for="star-agent-utama"
                      class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                    >
                      <div>
                        <label
                          for="star-agent-utama"
                          class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                        >
                          <svg
                            class="w-3.5 h-3.5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            ></path>
                          </svg>
                          <svg
                            class="w-3.5 h-3.5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            ></path>
                          </svg>
                          <svg
                            class="w-3.5 h-3.5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            ></path>
                          </svg>
                          <svg
                            class="w-3.5 h-3.5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            ></path>
                          </svg>
                          <svg
                            class="w-3.5 h-3.5 text-gray-300 hidden"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full grid items-center">
                <div class="inline-flex items-center justify-start">
                  <button
                    type="button"
                    class="h-4 p-3 ml-2 text-xs font-medium text-center inline-flex items-center text-gray-700 border border-gray-700 bg-gray-100 hover:bg-slate-200 rounded-md"
                    on:click={SendMessage}
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
                  class="menus w-9 h-9 mr-1 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 flex justify-center items-center"
                >
                  <div class="w-5 h-5 flex justify-center items-center">
                    <a href={$page} use:link>
                      <img src={BackIcon} alt="" />
                    </a>
                  </div>
                </div>
                <div
                  class="menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 flex justify-center items-center"
                >
                  <div class="w-5 h-5 flex justify-center items-center">
                    <img src={NextPropertyIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between w-full py-2">
          <div class="text-md font-bold flex items-center">
            {properties?.deskripsi}
          </div>
        </div>
      </div>

      <!-- Menu Tab -->
      <Tabs
        class="flex flex-wrap -mb-px text-sm font-medium text-center pr-4"
        inactiveClasses="inline-block pr-4 pb-1 pt-1 border-b-2 rounded-t-lg hover:text-gray-700 hover:border-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 dark:hover:text-gray-300 hover:text-gray-600"
        activeClasses="inline-block pr-4 pb-1 pt-1 border-b-2 rounded-t-lg text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500"
        contentClass="pt-3"
      >
        <TabItem open title="Foto">
          <DetailFoto media={properties?.media || []} />
        </TabItem>
        <TabItem title="Detail">
          <DetailLokasi {properties} {coordinates} />
        </TabItem>
        <TabItem title="Metriks">
          <DetailMetriks {properties} />
        </TabItem>
        <TabItem title="Harga">
          <DetailHarga
            harga={properties?.harga ?? 0}
            luas_bangunan={properties?.luas_bangunan ?? 0}
            luas_tanah={properties?.luas_bangunan ?? 0}
            njop={properties?.njop ?? 0}
          />
        </TabItem>
        <TabItem title="Simulasi KPR" disabled>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Disabled:</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TabItem>
      </Tabs>
    </div>
  </div>
</div>
