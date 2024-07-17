<script>
  import { navigate } from "svelte-routing";
</script>

<div
  class="max-w-sm bg-white cursor-pointer border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  on:click={() => navigate("/detail-new")}
>
  <div class="p-1 h-[5vh] bg-white my-1 rounded-t-lg select-none">
    <div class="flex items-center justify-between w-full h-full">
      <!-- Bagian Kiri: Gambar -->
      <div class="flex items-center">
        <img
          class="w-7 h-7 rounded-full"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
          alt="Model"
        />
      </div>

      <!-- Bagian Tengah: Teks 'aa' -->
      <div class="flex-grow flex items-center justify-start ml-1">
        <div class="flex flex-col">
          <div class="inline-flex">
            <div
              class="text-xs font-semibold text-black cursor-pointer"
              onclick="showMessage(this)"
            >
              Budiman Teguhhh
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>

  <div class="w-full h-[19vh] relative">
    <div class="slider-card-mode-ketiga mode-mini-video w-full h-full">
      <div class="relative h-[19vh] bg-black z-index-10">
        <img
          class="w-full h-full object-fill"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh3/rumahc1.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col p-1 w-full">
    <!--  -->
    <div class="w-full text-gray-500 text-xs flex justify-end">
      <div>ID 78AC66</div>
    </div>
    <!--  -->
    <div class="flex flex-row justify-between -mt-1.5">
      <div>
        <div class="inline-flex items-center">
          <h5 class="text-md font-bold tracking-tight text-black">
            Rp 11.300.000.000
          </h5>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="flex flex-col mb-0.5 font-normal">
      <div class="flex items-center text-xs text-black">
        <span class="mr-1">LT 80 m² |</span>
        <span class="mr-1">LB 276 m² |</span>
        <span class="mr-1">2 KT |</span>
        <span class="mr-1">5 KM</span>
      </div>
      <div class="text-xs text-black">Sunter, Tanjung Priok, Jakarta</div>
    </div>
    <!--  -->
  </div>
</div>
