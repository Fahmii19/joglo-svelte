<script lang="ts">
  import SearchBar from "./SearchBar.svelte";
  import ButtonChip from "./ButtonChip.svelte";
  import ButtonCari from "./ButtonCari.svelte";
  import ButtonFilter from "./ButtonFilter.svelte";
  import RunningTeks from "./RunningTeks.svelte";
  import { v4 as uuidv4 } from "uuid";
  import SaveButton from "../assets/images/save-instagram-on.png";

  //
  import { RunningTeksAktif, activeComponents } from "../store/store";

  let componentsVisible = {
    searchBar: true,
    buttonChip: true,
    buttonCari: true,
  };

  activeComponents.subscribe((value) => {
    componentsVisible = value;
  });

  // Filter Harga
  interface ListFilterHarga {
    label: string;
    min: number;
    max: number;
  }

  const listHarga: ListFilterHarga[] = [
    { label: "< Rp 1M", min: 0, max: 1000000 },
    { label: "Rp 1-2M", min: 1000000, max: 2000000 },
    { label: "Rp 2-3M", min: 2000000, max: 3000000 },
    { label: "> Rp 3M", min: 3000000, max: 9999999999 },
  ];

  $: minPrice = 0;
  $: maxPrice = 0;

  const FilterHarga = (min: number, max: number): void => {
    // add class active
    const allBtnPrice = document.querySelectorAll(
      "[id^='btnPrice_']"
    ) as NodeListOf<HTMLDivElement>;

    allBtnPrice.forEach((btn) => {
      btn.classList.remove("active_btn_tag");
    });

    const btnPrice = document.getElementById(
      "btnPrice_" + min + "_" + max
    ) as HTMLDivElement;

    if (minPrice === min && maxPrice === max) {
      btnPrice.classList.remove("active_btn_tag");
      minPrice = 0;
      maxPrice = 0;

      return;
    }

    // add class active and set min max price
    btnPrice.classList.add("active_btn_tag");
    minPrice = min;
    maxPrice = max;
  };

  // Filter Spek
  interface ListFilterSpek {
    label: string;
    min: number;
    max: number;
  }

  const listSpek: ListFilterSpek[] = [
    { label: "< 100", min: 0, max: 100 },
    { label: "100-200", min: 100, max: 200 },
    { label: "200-300", min: 200, max: 300 },
    { label: "> 300", min: 300, max: 9999999999 },
  ];

  $: minLuasTanah = 0;
  $: maxLuasTanah = 0;

  const FilterLuasTanah = (
    min: number,
    max: number,
    category: string
  ): void => {
    // add class active
    const allBtnArea = document.querySelectorAll(
      `[id^='${category}_']`
    ) as NodeListOf<HTMLDivElement>;

    allBtnArea.forEach((btn) => {
      btn.classList.remove("active_btn_tag");
    });

    const btnArea = document.querySelector(
      `#${category}_${min}_${max} span`
    ) as HTMLDivElement;

    if (minLuasTanah === min && maxLuasTanah === max) {
      btnArea.classList.remove("active_btn_tag");
      minLuasTanah = 0;
      maxLuasTanah = 0;

      return;
    }

    btnArea.classList.add("active_btn_tag");
    minLuasTanah = min;
    maxLuasTanah = max;
  };
</script>

<div
  id="tagSearchAll"
  class="w-full h-[7vh] flex items-center flex-row border border-gray-300"
>
  <!-- Input Searching Default -->

  {#if $activeComponents.searchBar}
    <SearchBar />
  {/if}
  {#if $activeComponents.buttonChip}
    <ButtonChip />
  {/if}
  {#if $activeComponents.ButtonCari}
    <ButtonCari />
  {/if}
  {#if $activeComponents.runningTeks}
    <RunningTeks teks={$RunningTeksAktif} />
  {/if}

  <!--  -->
</div>
