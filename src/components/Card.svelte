<script lang="ts">
  import ModelImage from "../assets/images/model.jpg";
  import VerifIcon from "../assets/images/verif.png";

  import HeartOn from "../assets/images/heart.png";
  import HeartOff from "../assets/images/favorite.png";
  import ShareIcon from "../assets/images/share.png";
  import Badge3D from "../assets/images/3d.png";
  import AgenPropertyIcon from "../assets/images/agen-property.png";
  import AdIcon from "../assets/images/ad-iklan.png";
  import { link, navigate } from "svelte-routing";
  import { page } from "../store/page";

  //   Slider
  import Carousel from "svelte-carousel";

  let carousel: any;
  export let item: Feature | null = null;
  export let previous_page: string = "";

  // Set Previous Page in store
  page.set(previous_page);

  import NextIcon from "../assets/images/next.png";
  import PrevIcon from "../assets/images/prev.png";
  import type { Feature } from "../service/list_property/type";
  import { isLogged } from "../store/auth";
  import ListPropertyService from "../service/list_property/list_property";
  import { property_liked } from "../store/property";

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

  // Like Property
  const LikeProperty = (id: string) => {
    // Check is Logged
    if (!$isLogged) {
      navigate("/login");
      return;
    }

    // Get Like Element
    const like = document.getElementById(id) as HTMLImageElement;

    // Check if the property is liked
    if (like.src.includes("favorit")) {
      like.src = HeartOn;
      $property_liked = [...$property_liked, item?.properties?.list_id ?? 0];
    } else {
      like.src = HeartOff;
      $property_liked = $property_liked.filter(
        (id) => id !== (item?.properties?.list_id ?? 0)
      );
    }

    // Set Like
    const PropertyService = new ListPropertyService();
    PropertyService.setLikeProperty(item?.properties?.list_id ?? 0);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="w-full flex flex-col cursor-pointer bg-white rounded-lg"
  id="card-property-{item?.properties?.list_id}"
  on:click
>
  <!--  -->
  <div class="py-1 px-2 h-[7vh]">
    <div class="flex items-center justify-beetwen w-full h-full">
      <div class="flex flex-row w-full">
        <div class="">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img class="w-8 h-8 rounded-full" src={ModelImage} />
        </div>
        <div class="flex flex-col ml-2">
          <div class="inline-flex">
            <div class="text-sm font-semibold text-black cursor-pointer">
              {item?.properties?.user?.first_name +
                " " +
                item?.properties?.user?.last_name}
            </div>
            <div class="flex items-center justify-center ml-1">
              <div class="w-4 h-4 flex justify-center items-center relative">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src={VerifIcon} />
              </div>
            </div>
          </div>
          <!--  -->
          <div class="">
            <label
              for="star-agent-utama"
              class="flex flex-row text-xs font-medium cursor-pointer text-black"
            >
              <div>
                <label
                  for="star-agent-utama"
                  class="flex flex-row text-xs font-medium cursor-pointer text-black"
                >
                  <svg
                    class="w-3 h-3 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    ></path>
                  </svg>
                  <svg
                    class="w-3 h-3 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    ></path>
                  </svg>
                  <svg
                    class="w-3 h-3 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    ></path>
                  </svg>
                  <svg
                    class="w-3 h-3 text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    ></path>
                  </svg>
                  <svg
                    class="w-2.5 h-2.5 text-gray-300 hidden"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    ></path>
                  </svg>
                </label>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end relative">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="w-8 h-8 object-contain -mr-1" src={AgenPropertyIcon} />
      </div>
    </div>
  </div>
  <!--  -->
  <div class="w-full h-[27vh] relative">
    <Carousel infinite={false} bind:this={carousel}>
      <!--  -->

      <button
        slot="prev"
        on:click={goToPrevPage}
        style="position: absolute; top:80px; left:13px; z-index: 1;"
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
      {#each item?.properties?.media ?? [] as m}
        <div class="slider-card-galeri w-full h-full">
          <div class="relative h-[27vh] bg-black z-index-10">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="/detail/{item?.properties?.list_id}" use:link>
              {#if m.path.includes("video")}
                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                  class="w-full h-full object-contain"
                  id="video-{m.media_id}"
                  on:mouseenter={() => PlayVideo("video-" + m.media_id)}
                >
                  <source
                    src="https://www.joglopro.com/bucket/soaraja/{m.path}"
                  />
                </video>
              {:else}
                <img
                  class="w-full h-full object-contain"
                  src="https://www.joglopro.com/bucket/soaraja/{m.path}"
                />
              {/if}
            </a>
            <div class="badge-card">
              <span class="badge-text">NEW</span>
            </div>
          </div>
        </div>
      {/each}
      <button
        slot="next"
        on:click={goToNextPage}
        style="position: absolute; top:80px; right:13px; z-index: 1;"
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
  </div>

  <!--  -->
  <div class="px-2 pt-[0.3rem] h-[11.3vh]" style="user-select: none">
    <div class="w-full text-gray-500 text-xs flex justify-end">
      <div>ID 78AC66</div>
    </div>
    <div class="flex flex-row justify-between -mt-1">
      <div>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <div>
          <div class="inline-flex items-center w-full">
            <h5 class="text-lg font-bold tracking-tight text-black">
              Rp {item?.properties?.harga.toLocaleString()}
            </h5>

            <div class="flex flex-row items-center justify-center">
              <div class="flex items-center ml-2">
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img
                  class="w-5 h-5 object-cover"
                  src={$property_liked.includes(item?.properties.list_id || 0)
                    ? HeartOn
                    : HeartOff}
                  id="like-{item?.properties.list_id}"
                  on:click={() =>
                    LikeProperty("like-" + item?.properties.list_id)}
                  alt=""
                />
                <div class="text-sm ml-1">{item?.properties.like_count}</div>
              </div>

              <img class="w-4 h-4 object-cover ml-2" src={ShareIcon} alt="" />

              <img class="w-5 h-5 object-cover ml-3" src={Badge3D} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <img class="w-5 h-5 object-cover ml-3" src={AdIcon} alt="" />
      </div>
    </div>
    <div class="grid grid-cols-[1fr,74px]">
      <div class="flex flex-col mb-2 font-normal">
        <div class="flex items-center text-xs text-black">
          <span class="mr-1"
            >LT {item?.properties?.luas_tanah.toLocaleString()} m² |</span
          >
          <span class="mr-1"
            >LB {item?.properties?.luas_bangunan.toLocaleString()} m² |</span
          >
          <span class="mr-1">{item?.properties?.kamar_tidur} KT |</span>
          <span class="mr-1">{item?.properties?.kamar_mandi} KM</span>
        </div>
        <div class="text-xs text-black">
          {item?.properties.kelurahan}, {item?.properties.kecamatan}, {item
            ?.properties?.kota}
        </div>
      </div>
      <!--  -->
    </div>
  </div>
  <!--  -->
</div>
