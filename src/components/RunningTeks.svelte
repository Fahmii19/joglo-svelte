<script>
  import { onMount } from "svelte";

  function teksBerjalan() {
    const marqueeElement = document.querySelector(".teks-berjalan-pencarian");

    if (!marqueeElement) return;

    if (marqueeElement.marqueeInstance) {
      marqueeElement.marqueeInstance.stop();
    }

    marqueeElement.style.animation = "marquee 17500ms linear infinite";
    marqueeElement.marqueeInstance = {
      stop: () => {
        marqueeElement.style.animation = "";
      },
    };
  }

  onMount(() => {
    teksBerjalan();
  });
</script>

<div class="h-8 flex items-center w-full bg-white">
  <div
    class="teks-berjalan-pencarian w-full text-sm text-black whitespace-nowrap"
  >
    <div class="inline-flex items-center">
      Rumah murah dijual masa promo di wilayah Kebayoran Lama. Hanya sampai
      dengan 1 November 2023.
      <span class="text-blue-500 cursor-pointer ml-1" data-active-tab="1"
        >Iklan rumah #1</span
      >
      . Terbaru dari Agung Sedayu - rumah 2 lantai DP hanya Rp 100 juta. Iklan rumah
    </div>

    <div class="inline-flex items-center">
      #2
      <div class="mx-1">
        <img
          class="w-6 h-6 rounded-full"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
          alt=""
        />
      </div>
      Agen
      <span class="text-blue-500 cursor-pointer mx-1">terpercaya</span>
      untuk mencari rumah siap huni di Jakarta Selatan
    </div>

    <div class="inline-flex items-center text-black">
      #3
      <div class="mx-1">
        <img
          class="w-6 h-6 rounded-full"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
          alt=""
        />
      </div>
      Agen
      <span class="text-blue-500 cursor-pointer mx-1">terpercaya</span>
      untuk mencari rumah siap huni di Jakarta Selatan
    </div>
  </div>
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .teks-berjalan-pencarian {
    display: inline-block;
    white-space: nowrap;
    will-change: transform;
  }
</style>
