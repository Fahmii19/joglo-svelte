<script>
  import { onMount } from "svelte";
  import { setupButtonGroups } from "../assets/js/index.js";

  onMount(() => {
    setupButtonGroups();
  });
</script>

<div class="ml-3">
  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 h-8 mx-0.5 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >&lt; Rp 1 M</button
  >
  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 h-8 mx-0.5 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >Rp 1 - 3 M</button
  >
  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 h-8 mx-0.5 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >&gt; Rp 3 M</button
  >

  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 h-8 mx-0.5 ml-3 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT &lt; 100 m²
  </button>

  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 h-8 mx-0.5 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT 100 - 300 m²</button
  >
  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 h-8 mx-0.5 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT &gt; 300 m²</button
  >
</div>
