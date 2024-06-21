<script>
  import { onMount } from "svelte";

  let buttons1;
  let buttons2;

  onMount(() => {
    buttons1 = document.querySelectorAll(".btn_chip_header1");
    buttons2 = document.querySelectorAll(".btn_chip_header2");

    buttons1.forEach((button) => {
      button.addEventListener("click", function () {
        if (this.classList.contains("active_btn_peta")) {
          // Remove the 'active_btn_peta' class and add 'bg-white' if the button is already active
          this.classList.remove("active_btn_peta");
          this.classList.add("bg-white");
        } else {
          // Remove the 'active_btn_peta' class and 'bg-white' class from all buttons in group 1
          buttons1.forEach((btn) => {
            btn.classList.remove("active_btn_peta");
            btn.classList.add("bg-white");
          });
          // Add the 'active_btn_peta' class to the clicked button and remove 'bg-white'
          this.classList.add("active_btn_peta");
          this.classList.remove("bg-white");
        }
      });
    });

    buttons2.forEach((button) => {
      button.addEventListener("click", function () {
        if (this.classList.contains("active_btn_peta")) {
          // Remove the 'active_btn_peta' class and add 'bg-white' if the button is already active
          this.classList.remove("active_btn_peta");
          this.classList.add("bg-white");
        } else {
          // Remove the 'active_btn_peta' class and 'bg-white' class from all buttons in group 2
          buttons2.forEach((btn) => {
            btn.classList.remove("active_btn_peta");
            btn.classList.add("bg-white");
          });
          // Add the 'active_btn_peta' class to the clicked button and remove 'bg-white'
          this.classList.add("active_btn_peta");
          this.classList.remove("bg-white");
        }
      });
    });
  });
</script>

<div>
  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >&lt; Rp 1 M</button
  >
  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >Rp 1 - 3 M</button
  >
  <button
    class="btn_chip_header1 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >&gt; Rp 3 M</button
  >
</div>

<div>
  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT &lt; 100 m²
  </button>
  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT 100 - 300 m²</button
  >
  <button
    class="btn_chip_header2 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
    >LT &gt; 300 m²</button
  >
</div>
