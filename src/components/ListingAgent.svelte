<script lang="ts">
  import Stories from "../components/Stories.svelte";
  import ListIcon from "../assets/images/list.png";
  import Dropdown from "../components/Dropdown.svelte";
  import { v4 as uuidv4 } from "uuid";
  import Card from "../components/Card.svelte";
  import CardNew from "../components/CardNew.svelte";
  import CardMiniNew from "../components/CardMiniNew.svelte";
  import { property_count, property_list } from "../store/property";
  import type { Feature } from "../service/list_property/type";
  import { markerStore } from "../store/map";
  import CardListingInput from "./CardListingInput.svelte";

  //
  import { navigate } from "svelte-routing";

  let property_lists: Feature[] = [];

  property_list.subscribe((value) => {
    property_lists = value;
  });

  let item_list: string[] = [
    "Terfavorit",
    "Populer",
    "Random",
    "Suprise Me !",
    "Termahal",
    "Termurah",
  ];

  $: property_counts = 0;

  $: {
    property_count.subscribe((value) => {
      property_counts = value;
    });
  }

  // Remove Marker
  $markerStore?.remove();

  // State untuk mode tampilan
  let isCardMode = true;

  function toggleMode() {
    isCardMode = !isCardMode;
  }
</script>

<div class="h-full w-full flex flex-col -mt-3">
  <div class="h-[65.2vh] story-galeri-off">
    <div class="h-full px-0 flex flex-col">
      <!-- Menu Button -->
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
              <button
                class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-slate-200 hover:rounded-lg mode-card"
                on:click={toggleMode}
                aria-label="Toggle view mode"
              >
                <img
                  class="w-7 h-7 object-contain cursor-pointer"
                  src={ListIcon}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="pt-5 h-[59.5vh] overflow-y-auto hide-scrollbar">
        <!--  -->
        <div
          class="grid grid-cols-2 gap-2 card_default"
          class:hidden={!isCardMode}
        >
          <!--  -->
          <button on:click={() => navigate("/listing-baru")}>
            <CardListingInput />
          </button>
          <!--  -->
          <CardNew />
          <CardNew />
          <CardNew />
        </div>
        <!--  -->
        <!-- MiniCard -->
        <div
          class="px-3 pt-3 grid grid-cols-3 gap-2 card_mini"
          class:hidden={isCardMode}
        >
          <CardMiniNew />
          <CardMiniNew />
          <CardMiniNew />
        </div>
        <!--  -->
      </div>

      <!--  -->
    </div>
  </div>
</div>
