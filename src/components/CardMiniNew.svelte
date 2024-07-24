<script lang="ts">
  import { navigate } from "svelte-routing";
  import Carousel from "svelte-carousel";

  let carousel: any;
  let currentIndex = 0;

  import NextIcon from "../assets/images/next.png";
  import PrevIcon from "../assets/images/prev.png";
  import Sold from "../assets/images/sold2.png";

  const goToPrevPage = (event) => {
    event.stopPropagation(); // Menghentikan propagasi event
    if (carousel) {
      carousel.goToPrev();
      currentIndex = Math.max(currentIndex - 1, 0);
    }
  };

  const goToNextPage = (event) => {
    event.stopPropagation(); // Menghentikan propagasi event
    if (carousel) {
      carousel.goToNext();
      currentIndex = Math.min(currentIndex + 1, 2); // Asumsi ada 3 gambar (index 0, 1, 2)
    }
  };

  const handleAfterChange = (event) => {
    currentIndex = event.detail.currentSlide;
  };

  function showMessage(element) {
    alert(`You clicked on ${element.innerText}`);
  }
</script>

<div
  class="max-w-sm bg-white cursor-pointer border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  role="button"
  tabindex="0"
  on:click={() => navigate("/detail-new")}
  on:keydown={(e) => {
    if (e.key === "Enter") {
      navigate("/detail-new");
    }
  }}
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

      <!-- Bagian Tengah: Teks 'Budiman Teguh' -->
      <div class="flex-grow flex items-center justify-start ml-1">
        <div class="flex flex-col">
          <div class="inline-flex">
            <div
              class="text-xs font-semibold text-black cursor-pointer"
              role="button"
              tabindex="0"
              on:click={(event) => showMessage(event.target)}
              on:keydown={(e) => {
                if (e.key === "Enter") {
                  showMessage(e.target);
                }
              }}
            >
              Budiman Teguh
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full h-[19vh] relative">
    <div class="slider-card-mode-ketiga mode-mini-video w-full h-full">
      <div class="relative h-[19vh] bg-black z-index-10">
        <Carousel
          bind:this={carousel}
          particlesToShow={1}
          particlesToScroll={1}
          infinite={false}
          dots={false}
          arrows={false}
          on:afterChange={handleAfterChange}
        >
          <div class="w-full h-full relative">
            <img
              class="w-full h-full rounded-lg object-contain"
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh1/rumaha1.jpg"
              alt="Gambar Pertama"
            />
          </div>

          <div class="w-full h-full relative">
            <img
              class="w-full h-full rounded-lg object-contain"
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh1/rumaha1.jpg"
              alt="Gambar Kedua"
            />
          </div>

          <div class="w-full h-full relative">
            <img
              class="w-full h-full rounded-lg object-contain"
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh1/rumaha1.jpg"
              alt="Gambar Ketiga"
            />
          </div>
        </Carousel>

        <!-- Tombol Sebelumnya -->
        {#if currentIndex > 0}
          <button
            on:click={goToPrevPage}
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-3"
          >
            <div class="img-wrapper">
              <img
                style="margin-right: 1px;"
                class="custom-img-slick"
                src={PrevIcon}
                alt="Previous"
              />
            </div>
          </button>
        {/if}

        <!-- Tombol Berikutnya -->
        {#if currentIndex < 2}
          <button
            on:click={goToNextPage}
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-3"
          >
            <div class="img-wrapper">
              <img
                style="margin-left: 1px;"
                class="custom-img-slick"
                src={NextIcon}
                alt="Next"
              />
            </div>
          </button>
        {/if}
      </div>
    </div>
  </div>

  <div class="flex flex-col p-1 w-full">
    <div class="w-full text-gray-500 text-xs flex justify-end">
      <div>ID 78AC66</div>
    </div>
    <div class="flex flex-row justify-between -mt-1.5">
      <div>
        <div class="inline-flex items-center">
          <h5 class="text-md font-bold tracking-tight text-black">
            Rp 11.300.000.000
          </h5>
        </div>
      </div>
    </div>
    <div class="flex flex-col mb-0.5 font-normal">
      <div class="flex items-center text-xs text-black">
        <span class="mr-1">LT 80 m² |</span>
        <span class="mr-1">LB 276 m² |</span>
        <span class="mr-1">2 KT |</span>
        <span class="mr-1">5 KM</span>
      </div>
      <div class="text-xs text-black">Sunter, Tanjung Priok, Jakarta</div>
    </div>
  </div>
</div>
