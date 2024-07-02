<script>
  import MarqueeTextWidget from "svelte-marquee-text-widget";
</script>

<div class="h-8 w-[100vw] overflow-hidden flex items-center w-full bg-white">
  <MarqueeTextWidget duration={23}>
    <div
      class="teks-berjalan-pencarian w-full text-sm text-black whitespace-nowrap"
    >
      <div class="inline-flex items-center">
        <!--   Rumah murah dijual masa promo di wilayah Kebayoran Lama. Hanya
              sampai dengan 1 -->
        November 2023.
        <span class="text-blue-500 cursor-pointer ml-1" data-active-tab="1">
          Iklan rumah #1</span
        >. Terbaru dari Agung Sedayu - rumah 2 lantai DP hanya Rp 100 juta.
        Iklan rumah
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
        <span class="text-blue-500 cursor-pointer mx-1"> terpercaya</span>untuk
        mencari rumah siap huni dijakarta selatan
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
        <span
          class="text-blue-500 cursor-pointer mx-1"
          onclick="showCardAgent(this)"
        >
          terpercaya</span
        >untuk mencari rumah siap huni dijakarta selatan
      </div>

      <!--  -->
    </div>
  </MarqueeTextWidget>
</div>
