<div class="w-full h-[64vh] grid grid-cols-4 relative stories_pertama">
  <div class="absolute self-center flex item-populer justify-between w-full">
    <div class="ml-2 z-10">
      <svg
        onclick="storiesPrevious()"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        class="w-[2.5vw] h-[4vh] text-gray-300 hover:text-gray-100 cursor-pointer relative z-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>

    <div class="mr-2 z-10">
      <svg
        onclick="storiesNext()"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        class="w-[2.5vw] h-[4vh] text-gray-300 hover:text-gray-400 cursor-pointer relative z-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </div>
  <!--  -->
  <div class="col-span-2 w-full h-full bg-[#807a78]">
    <div class="w-[25vw] h-[63vh] absolute">
      <div class="absolute top-2 left-2 z-10">
        <svg
          onclick="CloseAllStories()"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer close-stories-galeri text-gray-300 hover:text-gray-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div class="slider-card-stories-persegi w-full h-full z-index-10">
        <div class="w-[15vw] h-[62.5vh]">
          <video
            autoplay
            muted
            class="w-full !h-full"
            id="video-detail-beranda"
            src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
          ></video>
        </div>
      </div>
    </div>
  </div>

  <div class="col-span-2 w-full h-full flex flex-col px-3 pt-3">
    <!--  -->
    <!--  -->
    <div class="w-full flex justify-between">
      <div class="flex flex-row w-full">
        <div class="w-8 h-8">
          <img
            class="w-8 h-8 rounded-full"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model10.jpg"
          />
        </div>
        <div class="h-full flex flex-col items-center ml-2 border">
          <div
            class="h-full flex items-center text-sm font-semibold text-black cursor-pointer"
            onclick="showCardAgent(this)"
          >
            Steven R K s
          </div>

          <div class="inline-flex">
            <div class="flex items-center justify-center ml-1 -mt-1.5"></div>
          </div>
          <!--  -->

          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="w-full h-full flex items-center justify-end">
        <div class="rotate-[90deg] mt-2 mr-2">
          <img
            onclick="EditStoriesPosting(this)"
            class="w-5 h-5 object-cover cursor-pointer"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/threedots.png"
            alt="Love"
          />
        </div>
      </div>
      <!--  -->
    </div>
    <!--  -->

    <div class="inline-flex justify-start w-full py-2.5">
      <div>
        <h5 class="text-lg font-bold tracking-tight text-black">
          Rp 5.300.000.000
        </h5>
      </div>
    </div>

    <!--  -->

    <!--  -->
    <div class="grid grid-cols-1">
      <div class="flex flex-col mb-0 font-normal text-sm text-black">
        <div class="flex items-center">
          <span class="mr-1">LT 80 m² |</span>
          <span class="mr-1">LB 276 m² |</span>
          <span class="mr-1">2 KT |</span>
          <span class="mr-1">5 KM</span>
        </div>
        <div class="pb-1">Sunter, Tanjung Priok, Jakarta Utara</div>
        <!--  -->
        <div class="mx-1.5">
          <ul class="list-disc">
            <ol class="ps-3 list-decimal list-outside">
              <li class="">Lingkungan bagus, asri dan nyaman</li>
              <li>Akses jalan raya utama</li>
              <li>Perumahan TOWNHOUSE mewah</li>
              <li>Row jalan 6.5 meter (2mobil)</li>
              <li>One gate security</li>
            </ol>
          </ul>
        </div>
        <!--  -->
      </div>
      <!--  -->
      <!--  -->
      <div class="flex items-end pt-3 pb-4">
        <div class="w-full flex justify-between">
          <div class="text-xs text-gray-400">1 jam yang lalu</div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
  <!--  -->
</div>
