<script>
  import { activePesan } from "../store/store";
</script>

<div
  class="w-full h-[79.5vh] overflow-y-auto scrollbar hide-scrollbar flex flex-col konten-co-broking p-2"
>
  <!--  -->

  <!--  -->
  <form class="w-full mb-3">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        id="default-search"
        name="headerbtn"
        title=""
        class="block w-full p-3 ps-10 text-sm text-gray-900 border-none bg-white focus:outline-none focus:ring-0 rounded-lg tracking-[0.060em]"
        placeholder="Pencarian Utas"
        type="search"
        required
      />
      <button
        type="submit"
        class="text-white absolute end-[0.625rem] bottom-[0.6rem] bg-[#0394F7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-xs px-2 py-1"
      >
        Utas Baru
      </button>
    </div>
  </form>

  <!--  -->
  <!--  -->
  <div class="w-full flex flex-col mb-3">
    <!--  -->

    <!--  -->
    <div
      class="w-[34.9vw] bg-white px-2.5 pt-2.5 pb-2.5 cursor-pointer mb-3 rounded-lg hover:shadow-xl"
    >
      <div class="w-full inline-flex items-center">
        <img
          class="w-6 h-6 mr-2 rounded-full"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
          alt="Jese"
        />
        <div class="w-full flex justify-between">
          <div class="flex flex-row items-start">
            <div class="w-[7vw]">
              <h5 class="text-sm tracking-[0.030em] text-black truncate mt-1">
                Riyan Fahrezi Y
              </h5>
            </div>

            <div class="ml-1.5">
              <button
                on:click={() => activePesan.set(2)}
                tabindex="0"
                on:keydown={(e) => e.key === "Enter" && activePesan.set(2)}
                type="button"
                class="h-5 w-22 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3 tracking-[0.060em]"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
          <div class="text-xs text-gray-500">13/05/2024</div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-md font-bold tracking-[0.030em] text-black truncate">
          Pembeli mencari rumah min. 500 m2 maks. 5 milyar segera!!
        </div>

        <div class="text-sm text-black pt-0.5 pb-2">
          <p class="line-clamp-2">
            izin meminta bagi yang ada referensi untuk golang yang microservice
            izin meminta bagi yang ada referensi untuk golang microservice izin
            meminta bagi yang ada referensi untuk golang yang microservice izin
            meminta bagi yang ada referensi untuk golang microservice
          </p>
        </div>

        <div class="w-full">
          <div class="star_pesan_thread">
            <!-- SVG default di bawah ini akan dimuat pertama kali -->
            <svg
              class="w-4 h-4 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="w-[34.9vw] bg-white px-2.5 pt-2.5 pb-2.5 cursor-pointer mb-3 rounded-lg hover:shadow-xl"
    >
      <div class="w-full inline-flex items-center">
        <img
          class="w-6 h-6 mr-2 rounded-full"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
          alt="Jese"
        />
        <div class="w-full flex justify-between">
          <div class="flex flex-row items-start">
            <div class="w-[7vw]">
              <h5 class="text-sm tracking-[0.030em] text-black truncate mt-1">
                Riyan Fahrezi Y
              </h5>
            </div>

            <div class="ml-1.5">
              <button
                on:click={() => activePesan.set(2)}
                tabindex="0"
                on:keydown={(e) => e.key === "Enter" && activePesan.set(2)}
                type="button"
                class="h-5 w-22 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3 tracking-[0.060em]"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
          <div class="text-xs text-gray-500">13/05/2024</div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-md font-bold tracking-[0.030em] text-black truncate">
          Pembeli mencari rumah min. 500 m2 maks. 5 milyar segera!!
        </div>

        <div class="text-sm text-black pt-0.5 pb-2">
          <p class="line-clamp-2">
            izin meminta bagi yang ada referensi untuk golang yang microservice
            izin meminta bagi yang ada referensi untuk golang microservice izin
            meminta bagi yang ada referensi untuk golang yang microservice izin
            meminta bagi yang ada referensi untuk golang microservice
          </p>
        </div>

        <div class="w-full">
          <div class="star_pesan_thread">
            <!-- SVG default di bawah ini akan dimuat pertama kali -->
            <svg
              class="w-4 h-4 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="w-[34.9vw] bg-white px-2.5 pt-2.5 pb-2.5 cursor-pointer mb-3 rounded-lg hover:shadow-xl"
    >
      <div class="w-full inline-flex items-center">
        <img
          class="w-6 h-6 mr-2 rounded-full"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
          alt="Jese"
        />
        <div class="w-full flex justify-between">
          <div class="flex flex-row items-start">
            <div class="w-[7vw]">
              <h5 class="text-sm tracking-[0.030em] text-black truncate mt-1">
                Riyan Fahrezi Y
              </h5>
            </div>

            <div class="ml-1.5">
              <button
                on:click={() => activePesan.set(2)}
                tabindex="0"
                on:keydown={(e) => e.key === "Enter" && activePesan.set(2)}
                type="button"
                class="h-5 w-22 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3 tracking-[0.060em]"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
          <div class="text-xs text-gray-500">13/05/2024</div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-md font-bold tracking-[0.030em] text-black truncate">
          Pembeli mencari rumah min. 500 m2 maks. 5 milyar segera!!
        </div>

        <div class="text-sm text-black pt-0.5 pb-2">
          <p class="line-clamp-2">
            izin meminta bagi yang ada referensi untuk golang yang microservice
            izin meminta bagi yang ada referensi untuk golang microservice izin
            meminta bagi yang ada referensi untuk golang yang microservice izin
            meminta bagi yang ada referensi untuk golang microservice
          </p>
        </div>

        <div class="w-full">
          <div class="star_pesan_thread">
            <!-- SVG default di bawah ini akan dimuat pertama kali -->
            <svg
              class="w-4 h-4 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>

  <!--  -->

  <!--  -->
</div>
