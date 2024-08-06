<script lang="ts">
  import ModelImage from "../assets/images/model.jpg";
  import RumahContoh1 from "../assets/images/rumaha1.jpg";
  import { navigate } from "svelte-routing";
  import Menu from "./Menu.svelte";
  import { removeEditListingClass, buttonEditListing } from "../store/agent";

  let isVisible = false;
  removeEditListingClass.subscribe((value) => {
    isVisible = value;
  });

  const handleEditListingClick = () => {
    buttonEditListing.set(true);
  };

  import Carousel from "svelte-carousel";
  let carousel: any;
  let currentIndex = 0;

  import NextIcon from "../assets/images/next.png";
  import PrevIcon from "../assets/images/prev.png";

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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="w-full flex flex-col cursor-pointer bg-white rounded-lg"
  id="card-property-1"
  on:click={() => navigate("/detail-new")}
>
  <div class="py-1 px-2 h-[7vh]">
    <div class="w-full h-full grid grid-cols-[1fr,40px]">
      <div class="w-full grid grid-cols-[33px,1fr] items-center">
        <div class="w-full">
          <img
            class="w-8 h-8 rounded-full"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
            alt=""
          />
        </div>
        <div class="w-full flex flex-col ml-2">
          <div class="h-full flex items-center inline-flex mt-0.5">
            <div class="text-sm font-semibold text-black cursor-pointer">
              <div class="tracking-[0.060em]">Gunawan Budi Ardivaa23</div>
            </div>
            <div class="flex items-center justify-center ml-1"></div>
          </div>
        </div>
      </div>
      {#if isVisible}
        <button
          on:click={(event) => {
            event.stopPropagation(); // Menghentikan propagasi event
            handleEditListingClick();
            navigate("/listing-baru");
          }}
        >
          <div class="w-full flex justify-end items-center relative">
            <img
              class="w-5 h-5 mb-0.5 -mr-1 cursor-pointer rotate-[90deg] mr-2"
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/threedots.png"
              alt=""
            />
          </div>
        </button>
      {/if}
    </div>
  </div>
  <div class="w-full h-[29vh] relative">
    <div class="grid grid-cols-1 items-center justify-center">
      <div class="w-full col-span-full relative">
        <Carousel
          bind:this={carousel}
          particlesToShow={1}
          particlesToScroll={1}
          infinite={false}
          dots={false}
          arrows={false}
          on:afterChange={handleAfterChange}
        >
          <!-- Gambar di Carousel -->
          <div>
            <img
              class="w-full h-full object-fill"
              src={RumahContoh1}
              alt="Rumah Contoh 1"
            />
          </div>
          <div>
            <img
              class="w-full h-full object-fill"
              src={RumahContoh1}
              alt="Rumah Contoh 2"
            />
          </div>
          <div>
            <img
              class="w-full h-full object-fill"
              src={RumahContoh1}
              alt="Rumah Contoh 3"
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
  <div class="px-2 pt-[0.4rem] h-[11.3vh]">
    <div class="w-full text-gray-500 text-xs flex justify-end">
      <div>ID 78AC66</div>
    </div>
    <div class="flex flex-row justify-between -mt-1">
      <div>
        <div>
          <div class="inline-flex items-center w-full">
            <h5 class="text-lg font-bold tracking-tight text-black">
              Rp 11.300.000.000
            </h5>
            <div class="flex flex-row items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-[1fr,74px]">
      <div class="flex flex-col mb-2 font-normal">
        <div class="flex items-center text-xs text-black">
          <span class="mr-1">LT 80 m² |</span>
          <span class="mr-1">LB 250 m² |</span>
          <span class="mr-1">2 KT |</span>
          <span class="mr-1">1 KM</span>
        </div>
        <div class="text-xs text-black">
          Sunter, Tanjung Priok, Jakarta Utara
        </div>
      </div>
    </div>
  </div>
</div>
