<script lang="ts">
  import SearchBar from "./SearchBar.svelte";
  import ButtonChip from "./ButtonChip.svelte";
  import ButtonFilter from "./ButtonFilter.svelte";
  import { v4 as uuidv4 } from "uuid";
  import SaveButton from "../assets/images/save-instagram-on.png";

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
  class="w-full h-[7vh] flex items-center flex-row px-1.5 border border-gray-300"
>
  <!-- Input Searching Default -->
  <SearchBar />

  <ButtonChip />

  <!-- Button Cari -->
  <div class="px-1">
    <button
      type="button"
      class="h-6 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs tracking-[0.04em] w-[5vw] mx-3 flex flex-row justify-center items-center"
    >
      Cari

      <span class="ml-3">
        <svg
          class="text-white h-3 w-3 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          ></path>
        </svg>
      </span>
    </button>
  </div>
  <!--  -->
</div>
