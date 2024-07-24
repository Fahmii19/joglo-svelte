<script lang="ts">
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
</script>

<div class="h-[65vh] overflow-hidden hide-scrollbar">
  <div class="flex justify-center items-center h-full">
    <div class="relative w-full h-full flex items-center justify-center">
      <Carousel
        bind:this={carousel}
        particlesToShow={1}
        particlesToScroll={1}
        infinite={false}
        dots={false}
        arrows={false}
        on:afterChange={handleAfterChange}
      >
        <!-- Slide Pertama -->
        <div class="w-full h-full relative">
          <img
            class="w-full h-full rounded-lg object-contain"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh1/rumaha1.jpg"
            alt="Gambar Pertama"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <img class="w-[12vw] h-auto rotate-[30deg]" src={Sold} alt="Sold" />
          </div>
        </div>

        <!-- Slide Kedua -->
        <div class="w-full h-full relative">
          <img
            class="w-full h-full rounded-lg object-contain"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh1/rumaha1.jpg"
            alt="Gambar Kedua"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <img class="w-[12vw] h-auto rotate-[30deg]" src={Sold} alt="Sold" />
          </div>
        </div>

        <!-- Slide Ketiga -->
        <div class="w-full h-full relative">
          <img
            class="w-full h-full rounded-lg object-contain"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh1/rumaha1.jpg"
            alt="Gambar Ketiga"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <img class="w-[12vw] h-auto rotate-[30deg]" src={Sold} alt="Sold" />
          </div>
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
