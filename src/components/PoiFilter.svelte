<script lang="ts">
  import ChipButton from "./ChipButton.svelte";
  import { getContext } from "svelte";
  import { key } from "../store/map";

  const { getMap } = getContext<any>(key);
  const map = getMap();

  const filterPoi = (category: string, id: string) => {
    map.setFilter("poi", ["==", ["get", "kategori"], category]);

    const chipClicked = document.getElementById(
      "chip_" + id
    ) as HTMLButtonElement;

    // Remove Class if clicked chip already active
    if (chipClicked.classList.contains("active_btn_peta")) {
      chipClicked.classList.remove("active_btn_peta");
      // Remove Filter
      map.setFilter("poi", ["==", ["get", "kategori"], ""]);
      return;
    }

    // All Button Chip
    const allChip = document.querySelectorAll(
      "[id^='chip_']"
    ) as NodeListOf<HTMLButtonElement>;

    allChip.forEach((chip) => {
      chip.classList.remove("active_btn_peta");
    });

    // Add Class
    chipClicked.classList.add("active_btn_peta");
  };

  let listChip = [
    "Ibadah",
    "Belanja",
    "Sekolah",
    "Restoran",
    "Transportasi",
    "Faskes",
  ];
</script>

<div class="absolute flex justify-center place-items-center top-3 w-full">
  {#each listChip as chip}
    <ChipButton
      name={chip}
      id={chip}
      on:click={() => filterPoi(chip.toLocaleUpperCase(), chip)}
    />
  {/each}
</div>
