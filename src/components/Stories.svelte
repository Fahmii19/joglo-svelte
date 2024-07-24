<script lang="ts">
  import Carousel from "svelte-carousel";
  import Story from "./Story.svelte";
  import StoryDilihat from "./StoryDilihat.svelte";
  import StoryBelumDilihat from "./StoryBelumDilihat.svelte";
  import StoryTidakAda from "./StoryTidakAda.svelte";

  let carousel: any;
  let currentIndex = 0;
  let totalItems = 18; // Jumlah total story yang ada

  import NextIcon from "../assets/images/next.png";
  import PrevIcon from "../assets/images/prev.png";

  const goToPrevPage = () => {
    if (carousel) {
      carousel.goToPrev();
      currentIndex = Math.max(currentIndex - 5, 0);
    }
  };

  const goToNextPage = () => {
    if (carousel) {
      carousel.goToNext();
      currentIndex = Math.min(currentIndex + 5, totalItems - 9);
    }
  };

  const handleAfterChange = (event) => {
    currentIndex = event.detail.currentSlide;
  };
</script>

<div class="px-2 py-2">
  <div class="flex justify-center">
    <div class="w-[44vw]">
      <div class="grid grid-cols-12 items-center justify-center">
        <div class="w-full col-span-full relative">
          <!-- Tombol Sebelumnya -->
          {#if currentIndex > 0}
            <button
              on:click={goToPrevPage}
              class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -ml-7"
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

          <!-- Carousel -->
          <Carousel
            bind:this={carousel}
            particlesToShow={9}
            particlesToScroll={5}
            infinite={false}
            dots={false}
            arrows={false}
            on:afterChange={handleAfterChange}
          >
            <Story self_story={true} />
            <StoryDilihat />
            <StoryTidakAda />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
            <StoryBelumDilihat />
          </Carousel>

          <!-- Tombol Berikutnya -->
          {#if currentIndex < totalItems - 9}
            <button
              on:click={goToNextPage}
              class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 -mr-7"
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
  </div>
</div>
