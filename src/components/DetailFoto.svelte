<script lang="ts">
  import Carousel from "svelte-carousel";
  import NextIcon from "../assets/images/next.png";
  import PrevIcon from "../assets/images/prev.png";
  import type { Media } from "../service/list_property/type";

  // Props
  export let media: Media[];

  // Carousel
  let carousel: any;

  const goToPrevPage = () => {
    carousel.goToPrev();
  };

  const goToNextPage = () => {
    carousel.goToNext();
  };

  // Play Video if mouse enter and pause if mouse leave
  const PlayVideo = (id: string) => {
    const video = document.getElementById(id) as HTMLVideoElement;
    video.play();

    video.onmouseleave = () => {
      video.pause();
    };
  };
</script>

<Carousel infinite={false} bind:this={carousel}>
  <!--  -->

  <button
    slot="prev"
    on:click={goToPrevPage}
    style="position: absolute; top:25dvh; left:13px; z-index: 1;"
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

  <!-- Carousel Items -->
  {#each media ?? [] as m}
    <div class="slider-card-galeri w-[100%] h-[60dvh]">
      <div class="relative h-full bg-black z-index-10">
        {#if m.path.includes("video")}
          <!-- svelte-ignore a11y-media-has-caption -->
          <video
            class="w-full h-full object-cover"
            src="https://www.joglopro.com/bucket/soaraja/{m.path}"
            id="video-{m.media_id}"
            controls
            on:mouseenter={() => PlayVideo(`video-${m.media_id}`)}
          ></video>
        {:else}
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            class="w-full h-full object-cover"
            src="https://www.joglopro.com/bucket/soaraja/{m.path}"
          />
        {/if}
        <div class="badge-card">
          <span class="badge-text">NEW</span>
        </div>
      </div>
    </div>
  {/each}

  <button
    slot="next"
    on:click={goToNextPage}
    style="position: absolute; top:25dvh; right:13px; z-index: 1;"
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
</Carousel>
