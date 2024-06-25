<script lang="ts">
  import ListIcon from "../assets/images/list.png";
  import Dropdown from "../components/Dropdown.svelte";
  import Card from "../components/Card.svelte";
  import type { Feature } from "../service/list_property/type";
  import { v4 as uuidv4 } from "uuid";
  import { triggerClick } from "../utils/layers";
  import ListPropertyService from "../service/list_property/list_property";
  import { property_like_list } from "../store/property";
  import { beforeUpdate } from "svelte";
  import { isExpired } from "../utils/auth";

  // Log out if the token is expired
  beforeUpdate(() => {
    isExpired();
  });

  //   Check is Logged
  import { isLogged } from "../store/auth";
  import { navigate } from "svelte-routing";
  import { markerStore } from "../store/map";

  if (!$isLogged) {
    navigate("/login");
  }

  $: property_counts = 0;
  $: property_lists = [] as Feature[];
  let item_list: string[] = [
    "Terfavorit",
    "Populer",
    "Random",
    "Suprise Me !",
    "Termahal",
    "Termurah",
  ];

  // List Property Service
  const listPropertyService = new ListPropertyService();

  listPropertyService.getLikeProperty().then((res) => {
    // Mapping to Feature
    property_lists = res.data.map((item) => {
      item.listing.like_count = item.like_count;
      return {
        properties: item.listing,
        geometry: {
          type: "Point",
          coordinates: [item.listing.geom[0], item.listing.geom[1]],
        },
      } as Feature;
    });

    // Set Property to Store
    property_like_list.set(property_lists);

    // Set Property Counts
    property_counts = res.data.length;
  });

  // Remove Marker
  $markerStore?.remove();
</script>

<div class="h-full w-full">
  <div class="h-full flex flex-col">
    <div class="w-full flex justify-between border-b border-gray-300">
      <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory">
        Favorit
      </div>
    </div>
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
        {#each property_lists ?? [] as item}
          <Card
            previous_page="/favorite"
            {item}
            on:click={() => triggerClick(item.properties.list_id ?? 0)}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
