<script lang="ts">
  import PengunjungChart from "./pengunjungChart.svelte";
  import PendapatanChart from "./pendapatanChart.svelte";
  import RadarChart from "./RadarChart.svelte";
</script>

<div class="h-[63.5vh] overflow-hidden">
  <!--  -->
  <div
    class="grid grid-row-3 pb-5 px-5 pt-4 gap-4 mode-card-kedua bg-white cursor-pointer rounded-lg shadow w-full mb-3"
  >
    <div class="w-full grid grid-cols-3">
      <div class="w-full flex flex-col">
        <div class="w-full flex ml-1 font-sf_pro_bold_judul text-lg">
          7 Unit
        </div>
        <div class="w-full flex text-sm ml-1">Listing Aktif</div>
      </div>
      <div class="w-full flex flex-col">
        <div class="w-full flex ml-1 font-sf_pro_bold_judul text-lg">
          30 Unit
        </div>
        <div class="w-full flex text-sm ml-1">Terjual Bulan ini</div>
      </div>
      <div class="w-full flex flex-col">
        <div class="w-full flex ml-1 font-sf_pro_bold_judul text-lg">
          33 Unit
        </div>
        <div class="w-full flex text-sm ml-1">Total Terjual</div>
      </div>
    </div>
    <div class="w-full grid grid-cols-3">
      <div class="w-full flex flex-col">
        <div class="w-full flex ml-1 font-sf_pro_bold_judul text-lg">
          Rp 758.000.000
        </div>
        <div class="w-full flex text-sm ml-1">Potensi Penjualan</div>
      </div>
      <div class="w-full flex flex-col">
        <div class="w-full flex ml-1 font-sf_pro_bold_judul text-lg">
          Rp 66.000.000.000
        </div>
        <div class="w-full flex text-sm ml-1">Penjualan Bulan ini</div>
      </div>
      <div class="w-full flex flex-col">
        <div class="w-full flex ml-1 font-sf_pro_bold_judul text-lg">
          Rp 30.000.000.000
        </div>
        <div class="w-full flex text-sm ml-1">Total Penjualan</div>
      </div>
    </div>
  </div>

  <!--  -->

  <div class="!h-[41.5vh] w-full grid grid-cols-2 gap-x-3">
    <div class="h-full w-full bg-white rounded-lg px-3">
      <PengunjungChart />
    </div>
    <div class="h-full w-full bg-white rounded-lg px-3">
      <PendapatanChart />
    </div>
  </div>

  <!--  -->
</div>
