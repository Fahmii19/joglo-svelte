<script lang="ts">
  import { Link } from "svelte-routing";
  import Stories from "../components/Stories.svelte";
</script>

<div class="h-full w-full">
  <div class="h-full flex flex-col">
    <!-- HeaderInti -->
    <div
      class="w-full flex justify-between items-center border-b px-3 py-1.5 border-gray-300"
    >
      <div class="font-sf_pro_bold_judul text-2xl judulStory">
        Postingan Stories
      </div>
      <!--  -->
      <Link
        to="/"
        class="menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 border-blue-600 flex justify-center items-center btnBackEditListingg"
      >
        <div class="w-5 h-5 flex justify-center items-center">
          <img
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/back.png"
            alt="Back"
          />
        </div>
      </Link>
      <!--  -->
    </div>

    <!--  -->
    <div class="">
      <Stories />
    </div>
    <!--  -->

    <div
      class="w-full h-[63.5vh] px-3 grid grid-cols-4 relative stories_pertama"
    >
      <div
        class="absolute self-center flex item-populer justify-between w-full"
      >
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
            <div class="w-[24.2vw] h-[63.5vh]">
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
                alt=""
              />
            </div>
            <div class="h-full flex flex-col items-center ml-2">
              <div
                class="h-full flex items-center text-sm font-semibold text-black cursor-pointer"
                onclick="showCardAgent(this)"
              >
                Steven R K s
              </div>

              <div class="inline-flex">
                <div
                  class="flex items-center justify-center ml-1 -mt-1.5"
                ></div>
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

            <!--  <img
                              class="w-8 h-8 object-contain"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                            /> -->
          </div>
          <!--  -->
        </div>
        <!--  -->

        <!-- <div
                          class="text-gray-500 text-sm pt-2 pb-2.5 w-full grid grid-cols-2"
                        >
                          <div class="">1 jam yang lalu</div>
                        </div> -->

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
            <!-- <div
                              class="grid grid-cols-5 items-center justify-start -ml-1.5 mt-1 gap-2"
                              >
                              <div class="flex flex-col items-center">
                                <img
                                  class="w-5 h-5 object-cover cursor-pointer"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                  alt="Love"
                                />
                              </div>

                              <div
                                class="flex h-full flex-col items-start mr-2 ml-1"
                                >
                                <img
                                  class="w-[1.20rem] h-[1.20rem] object-cover cursor-pointer"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                  alt="Love"
                                />
                              </div>

                              <div
                                class="flex h-full flex-col items-start -mt-1.5"
                                >
                                <img
                                  onclick="showMessage(this)"
                                  class="w-6 h-6 object-cover cursor-pointer"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                  alt="Love"
                                />
                              </div>
                              <div
                                class="flex h-full flex-col items-start -mt-1.5"
                                >
                                <img
                                  onclick="EditStoriesPosting(this)"
                                  class="w-6 h-6 object-cover cursor-pointer"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/threedots.png"
                                  alt="Love"
                                />
                              </div>
                            </div> -->
          </div>
        </div>
        <!--  -->
      </div>
      <!--  -->
    </div>
  </div>
</div>
