<script lang="ts">
  import Carousel from "svelte-carousel";
  import Story from "./Story.svelte";
  let carousel: any;

  import NextIcon from "../assets/images/next.png";
  import PrevIcon from "../assets/images/prev.png";

  const goToPrevPage = () => {
    carousel.goToPrev();
  };

  const goToNextPage = () => {
    carousel.goToNext();
  };
</script>

<div class="px-2 py-2">
  <!--  -->
  <div class="flex justify-center">
    <div class="w-[47vw]">
      <div class="grid grid-cols-12 items-center justify-center">
        <div class="w-full col-span-full">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <Carousel
            bind:this={carousel}
            particlesToShow={9}
            particlesToScroll={5}
            infinite={false}
            dots={false}
          >
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <button slot="prev" on:click={goToPrevPage}>
              <div class="img-wrapper">
                <img
                  style="margin-right: 1px;"
                  class="custom-img-slick"
                  src={PrevIcon}
                  alt="Previous"
                />
              </div>
            </button>
            <!--  -->
            <Story self_story={true} />
            <!--  -->
            <Story />
            <!--  -->
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />

            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <button slot="next" on:click={goToNextPage}>
              <div class="img-wrapper">
                <img
                  style="margin-left: 1px;"
                  class="custom-img-slick"
                  src={NextIcon}
                  alt="Next"
                />
              </div>
            </button>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</div>
