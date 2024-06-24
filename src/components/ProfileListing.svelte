<script lang="ts">
  import Dropdown from "./Dropdown.svelte";
  import { v4 as uuidv4 } from "uuid";
  import ListIcon from "../assets/images/list.png";
  import PlusPropertyIcon from "../assets/images/plus-property.png";
  import Card from "./Card.svelte";
  import type { Feature } from "../service/list_property/type";
  import { onMount } from "svelte";
  import ListPropertyService from "../service/list_property/list_property";
  import { authUser } from "../store/auth";
  import { link } from "svelte-routing";

  export let user_id: number = 0;

  const PropertyService = new ListPropertyService();

  $: property_lists = [] as Feature[];
  $: property_counts = 0;

  let item_list: string[] = [
    "Terfavorit",
    "Populer",
    "Random",
    "Suprise Me !",
    "Termahal",
    "Termurah",
  ];

  onMount(async () => {
    // Get ID User from state
    const UserID = user_id == 0 ? $authUser.user_id : user_id;

    const { features } = await PropertyService.listPropertyGeoJSON({
      "tl.user_id": UserID,
    } as any);

    property_lists = features;
  });
</script>

<div class="h-full w-full">
  <div class="h-full flex flex-col">
    <div
      class="h-[76vh] overflow-y-auto overflow-x-hidden hide-scrollbar story-galeri-off"
    >
      <div class="px-3">
        <div
          class="flex flex-row items-stretch justify-between mt-1 judul-dijual-kedua"
        >
          <div class="font-normal text-sm self-end text-gray-700 -mb-0.5">
            Menampilkan {property_counts} data
          </div>

          <div class="">
            <div class="relative flex flex-row">
              <!-- Mode Card -->
              <div class="flex items-center mr-2">
                <div
                  class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-slate-200 hover:rounded-lg"
                >
                  <img
                    class="w-7 h-7 object-contain cursor-pointer"
                    src={ListIcon}
                    alt=""
                  />
                </div>
              </div>

              <!-- Dropdown Filter -->
              <div class="flex items-center">
                <Dropdown {item_list} id={uuidv4()} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-3 pt-3 grid grid-cols-2 gap-2">
        {#if Number($authUser?.user_id) == user_id}
          <a
            href="/posting"
            use:link
            class="w-full h-[45vh] flex flex-col items-center justify-center bg-transparent rounded-lg konten-dijual"
          >
            <img
              class="w-16 h-16 object-contain cursor-pointer"
              src={PlusPropertyIcon}
              alt="tambah listing agent"
            />
          </a>
        {/if}
        {#each property_lists ?? [] as item}
          <Card previous_page="agent" {item} />
        {/each}
      </div>
    </div>
  </div>
</div>
