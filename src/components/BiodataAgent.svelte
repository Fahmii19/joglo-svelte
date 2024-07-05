<script lang="ts">
  import { navigate } from "svelte-routing";
</script>

<div class="h-[62.5vh] grid grid-cols-[271px,1fr] gap-2">
  <!--  -->

  <div class="flex flex-col">
    <div class="bg-white rounded-lg h-[33.5vh]">
      <div class="">
        <!--  -->
        <div class="grid grid-cols-[90px,1fr] h-full w-full mx-auto mt-4 mb-1">
          <div class="w-full h-full flex flex-col justify-center items-center">
            <div class="relative flex flex-col items-center cursor-pointer">
              <div
                class=""
                role="button"
                tabindex="0"
                on:click={() => navigate("/detail-postingan-stories")}
                on:keypress={(event) => {
                  if (event.key === "Enter" || event.key === " ")
                    navigate("/detail-postingan-stories");
                }}
              >
                <div
                  class="w-12 h-12 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                >
                  <img
                    class="w-full h-full p-[0.15rem] bg-white rounded-full relative"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                    alt="Profile Picture"
                    aria-hidden="true"
                  />
                  <svg
                    role="button"
                    tabindex="0"
                    on:click={() => navigate("/postingan-stories")}
                    on:keypress={(event) => {
                      if (event.key === "Enter" || event.key === " ")
                        navigate("/postingan-stories");
                    }}
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute bottom-0 -right-0.5 border bg-white border-white border-2 rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.125 16C12.4742 16 16 12.4742 16 8.125C16 3.77576 12.4742 0.25 8.125 0.25C3.77576 0.25 0.25 3.77576 0.25 8.125C0.25 12.4742 3.77576 16 8.125 16Z"
                      fill="#1877F2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.61719 4.67969C8.61719 4.40786 8.39683 4.1875 8.125 4.1875C7.85317 4.1875 7.63281 4.40786 7.63281 4.67969V7.63281H4.67969C4.40786 7.63281 4.1875 7.85317 4.1875 8.125C4.1875 8.39683 4.40786 8.61719 4.67969 8.61719H7.63281V11.5703C7.63281 11.8421 7.85317 12.0625 8.125 12.0625C8.39683 12.0625 8.61719 11.8421 8.61719 11.5703V8.61719H11.5703C11.8421 8.61719 12.0625 8.39683 12.0625 8.125C12.0625 7.85317 11.8421 7.63281 11.5703 7.63281H8.61719V4.67969Z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-full grid grid-cols-2">
            <div class="flex flex-col justify-center items-center">
              <div class="text-lg font-semibold">557</div>
              <div class="text-xs">Listingn</div>
            </div>

            <div class="flex flex-col justify-center items-center px-7">
              <div class="text-lg font-semibold">5</div>
              <div class="text-xs">Terjual</div>
            </div>
          </div>
        </div>

        <div class="mx-3">
          <div class="inline-flex items-center mt-2">
            <div class="text-sm font-semibold text-black mr-2">
              Budiman Alisa
            </div>
            <!--  -->
            <div
              class="w-5 h-5 flex mt-0.5 mr-2 justify-center items-center relative"
            ></div>

            <!--  -->
          </div>

          <div class="inline-flex mt-1 hidden">
            <div class="inline-flex items-center">
              <img
                class="w-5 h-5"
                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/show.png"
                alt=""
              />

              <div class="ml-1 text-xs text-black flex items-center">25</div>
            </div>

            <div class="ml-2">
              <img
                class="w-7 h-7 object-contain"
                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/megaphone.png"
                alt=""
              />
            </div>
          </div>

          <div class="w-full flex flex-col -mt-0.5">
            <div class="text-sm text-gray-500">Kuningan, Jakarta Selatan</div>

            <!--  -->

            <div class="font-semibold text-sm pt-2">Afiliasi</div>
            <!--  -->
            <div class="text-sm text-gray-500 -mt-0.5">RayWhite Kuningan</div>
            <!--  -->
            <div class="pt-2">
              <span class="text-sm text-[#2074d8] cursor-pointer">
                linktr.ee/budimanali</span
              >
            </div>
            <!--  -->
          </div>

          <div class="w-full flex justify-center mt-3">
            <button
              on:click={(event) => {
                navigate("/pengaturan");
              }}
              type="button"
              class="h-4 p-3 text-xs font-medium text-center inline-flex items-center text-white bg-[#0394F7] hover:bg-[#1877F2] rounded-md"
            >
              Edit Profil
            </button>

            <button
              on:click={(event) => {
                navigate("/chat");
              }}
              type="button"
              class="h-4 p-3 text-xs font-medium text-center inline-flex items-center text-white bg-[#0394F7] hover:bg-[#1877F2] rounded-md mx-2"
            >
              Kirim Pesannn
            </button>
          </div>
        </div>

        <!--  -->
      </div>
    </div>

    <div class="bg-white rounded-lg h-[14vh] mt-2">
      <div class="flex flex-col mx-3 mt-2.5">
        <div class="font text-sm font-semibold mb-1">Spesialisasi Area</div>
        <div class="flex flex-wrap">
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Kelapa Gading
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Pluit
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Senayan
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Cilandak
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Senayan
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Cilandak
            </button>
          </div>
        </div>
      </div>

      <!--  -->
    </div>

    <div class="bg-white rounded-lg h-[14vh] mt-2">
      <div class="flex flex-col mx-3 mt-2.5">
        <div class="font text-sm font-semibold mb-1">Spesialisasi Aset</div>
        <div class="flex flex-wrap">
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Rumah Baru
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Rumah Seken
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Apt. Baru
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Apt. Seken
            </button>
          </div>
          <div class="mr-2 mb-1.5">
            <button
              type="button"
              class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
            >
              Ruko
            </button>
          </div>
        </div>
      </div>

      <!--  -->
    </div>
  </div>

  <div class="bg-white rounded-lg px-3 py-1 flex flex-col">
    <div class="text-sm font-semibold mt-1 mb-1">Deskripsi</div>

    <div class="text-sm text-black pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem ipsum
      dolor sit amet consectetur adipisicing
    </div>

    <div class="text-sm text-black pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem ipsum
      dolor sit amet consectetur adipisicing
    </div>
    <div class="text-sm text-black pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem ipsum
      dolor sit amet consectetur adipisicing
    </div>

    <div class="text-sm text-black pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem ipsum
      dolor sit amet consectetur adipisicing
    </div>
    <div class="text-sm text-black pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem ipsum
      dolor sit amet consectetur adipisicing
    </div>
    <div class="text-sm text-black pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem ipsum
      dolor sit amet consectetur adipisicing
    </div>
    <div class="text-sm text-black pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupidit Lorem ipsum
    </div>
  </div>

  <!--  -->
</div>
