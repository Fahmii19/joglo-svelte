<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export const activeTab = writable(0);

  // Button Groups
  export function setupButtonGroups() {
    const buttons1 = document.querySelectorAll(".btn_chip_header1");
    const buttons2 = document.querySelectorAll(".btn_chip_header2");

    function setupButtons(buttons) {
      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          if (this.classList.contains("active_btn_peta")) {
            this.classList.remove("active_btn_peta");
            this.classList.add("bg-white");
          } else {
            buttons.forEach((btn) => {
              btn.classList.remove("active_btn_peta");
              btn.classList.add("bg-white");
            });
            this.classList.add("active_btn_peta");
            this.classList.remove("bg-white");
          }
        });
      });
    }

    setupButtons(buttons1);
    setupButtons(buttons2);
  }

  // Ensure the DOM is ready before running setupButtonGroups
  onMount(() => {
    setupButtonGroups();
  });
</script>

<div class="ml-3">
  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 h-8 mx-1 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >&lt; Rp 1 M</button
  >

  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 h-8 mx-1 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >Rp 1 - 3 M</button
  >

  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 h-8 mx-1 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >&gt; Rp 3 M</button
  >

  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 h-8 mx-1 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT &lt; 100 m²
  </button>

  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 h-8 mx-1 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT 100 - 300 m²</button
  >
  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 h-8 mx-1 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT &gt; 300 m²</button
  >
</div>
