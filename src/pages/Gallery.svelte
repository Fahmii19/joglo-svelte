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
  import { onMount } from "svelte";
  import FourDotsLoader from "../components/FourDotsLoader.svelte"; // Import FourDotsLoader

  let property_lists: Feature[] = [];
  let cardNews: number[] = Array(10).fill(0); // Inisialisasi dengan 10 elemen
  let isLoading = false;
  let maxCards = 60;

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

  // Function untuk menambah lebih banyak CardNew
  function loadMoreCards() {
    if (cardNews.length < maxCards) {
      isLoading = true;
      setTimeout(() => {
        cardNews = [...cardNews, ...Array(10).fill(0)];
        isLoading = false;
      }, 1000);
    }
  }

  // Event listener untuk scroll
  function handleScroll(event) {
    const element = event.target;
    if (
      element.scrollHeight - element.scrollTop <= element.clientHeight * 1.5 &&
      !isLoading &&
      cardNews.length < maxCards
    ) {
      loadMoreCards();
    }
  }

  onMount(() => {
    const element = document.querySelector(".story-galeri-off");
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  });
</script>

<div class="h-full w-full">
  <div class="h-full flex flex-col">
    <div class="w-full flex justify-between border-b border-gray-300">
      <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory">
        Galeri
      </div>
    </div>

    <div
      class="h-[76vh] overflow-y-auto overflow-x-hidden hide-scrollbar story-galeri-off"
    >
      <div class="px-3">
        <Stories />

        <div
          class="flex flex-row items-stretch justify-between mt-1 judul-dijual-kedua"
        >
          <div class="font-normal text-sm self-end text-gray-700 -mb-0.5">
            Menampilkan {property_counts} data
          </div>

          <div>
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
      </div>

      <!-- Default Card -->
      <div
        class="px-3 pt-3 grid grid-cols-2 gap-2 card_default {cardNews.length <
        maxCards
          ? 'mb-5'
          : ''}"
        class:hidden={!isCardMode}
      >
        {#each property_lists ?? [] as item}
          <Card previous_page="/" {item} />
        {/each}
        {#each cardNews as _}
          <CardNew />
        {/each}
      </div>

      <!-- MiniCard -->
      <div
        class="px-3 pt-3 grid grid-cols-3 gap-2 card_mini"
        class:hidden={isCardMode}
      >
        {#each cardNews as _}
          <CardMiniNew />
        {/each}
      </div>

      {#if isLoading}
        <div
          class="flex justify-center items-center {cardNews.length < maxCards
            ? 'mb-5'
            : ''}"
        >
          <FourDotsLoader color="#888" size="10px" margin="5px" speed="0.6s" />
        </div>
      {/if}
    </div>
  </div>
</div>
