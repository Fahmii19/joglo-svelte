<script>
  function FormLupaPassword(event) {}
  function FormRegistration(event) {}
  function MasukAkunLogin(event) {}
  function showCardInfoDetail(event) {}
  function showCardAgent(event) {}
  function formatNumber(event) {}
  function CloseAllStories(event) {}
  function showMessage(event) {}
  function KeluarAkun(event) {}
  function ShowProfil(event) {}
  function ShowRegistrasi(event) {}
  function MenuTabList(event) {}
  function EditStoriesPosting(event) {}
  function CloseTabPengaturan(event) {}
  function toggleAgenNonAgen(event) {}
  function showPostingStories(event) {}
  function storiesPrevious(event) {}
  function CloseStoriesDua(event) {}
  function closeTab(event) {}
  function handleKeyPress(event) {
    if (event.key === "Enter" || event.key === " ") {
      // Ketika pengguna menekan tombol Enter atau spasi
      showCardAgent();
    }
  }

  function previewFilePengaturan(event) {
    // Logic untuk menghandle perubahan file
  }
</script>

<main>
  <div class="h-screen bg-gray-100 flex flex-col overflow-y-hidden">
    <!-- Start Header rev.1 -->
    <div class="header border border-red-500">
      <div class="flex items-center">
        <img
          class="w-12 h-12 object-cover mt-1"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/home.png"
          alt="Soaraja Icon"
        />
        <div
          class="ml-2 text-3xl font-bold font-sf_pro_bold_new text-[#1877F2]"
        >
          JogloProo
        </div>
      </div>

      <!-- Start Dropdown Menu Keluar -->
      <div class="flex hidden akun-login-soaraja">
        <!-- data-dropdown-toggle="DropdownMenuKeluar" -->
        <div
          tabindex="0"
          on:click={showMessage}
          on:keypress={handleKeyPress}
          role="button"
          class="flex cursor-pointer items-center"
        >
          <span class="sr-only">Open user menu</span>

          <span class="text-sm font-medium text-black mr-2"
            >Heri Sukmatjaya</span
          >

          <img
            class="w-8 h-8 object-cover mr-2"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model6.png"
            alt=""
          />
        </div>

        <div
          id="DropdownMenuKeluar"
          class="z-10 hidden bg-white rounded-lg shadow w-44"
        >
          <div class="p-2">
            <div class="flex flex-row w-full hover:bg-gray-100 cursor-pointer">
              <div class="w-full h-8 flex items-center justify-start mx-3">
                <button
                  on:click={ShowProfil}
                  on:keypress={handleKeyPress}
                  tabindex="0"
                  class="cursor-pointer text-sm text-black">Profil</button
                >
              </div>
            </div>

            <div class="flex flex-row w-full hover:bg-gray-100 cursor-pointer">
              <div class="w-full h-8 flex items-center justify-start mx-3">
                <button
                  tabindex="0"
                  on:click={KeluarAkun}
                  on:keypress={handleKeyPress}
                  class="cursor-pointer text-sm text-black">Keluar</button
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Login -->
      <div
        tabindex="0"
        on:click={ShowRegistrasi}
        on:keypress={handleKeyPress}
        role="button"
        class="flex justify-end text-sm text-black cursor-pointer user-login-soaraja"
      >
        Login
      </div>

      <!-- End Dropdown Menu Keluarr -->
    </div>
    <!-- End Header -->

    <!-- Start Button Chip rev.1 -->
    <div>
      <!-- Running Text Marque -->
      <div
        id="tagTeksBerjalan"
        class="w-full h-[7vh] flex items-center flex-row overflow-hidden border border-gray-300 hidden"
      >
        <!-- Running Text -->
        <div class="h-8 flex items-center w-full bg-white">
          <div
            class="teks-berjalan-pencarian w-full text-sm text-black whitespace-nowrap"
          >
            <div class="inline-flex items-center">
              <!--   Rumah murah dijual masa promo di wilayah Kebayoran Lama. Hanya
              sampai dengan 1 -->
              November 2023.
              <span
                class="text-blue-500 cursor-pointer ml-1"
                data-active-tab="1"
                tabindex="0"
                on:click={showCardInfoDetail}
                on:keypress={handleKeyPress}
                role="button"
              >
                Iklan rumah #1</span
              >. Terbaru dari Agung Sedayu - rumah 2 lantai DP hanya Rp 100
              juta. Iklan rumah
            </div>

            <div class="inline-flex items-center">
              #2
              <div class="mx-1">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                  alt=""
                />
              </div>
              Agen
              <span
                class="text-blue-500 cursor-pointer mx-1"
                tabindex="0"
                on:click={showCardAgent}
                on:keypress={handleKeyPress}
                role="button"
              >
                terpercaya</span
              >untuk mencari rumah siap huni dijakarta selatan
            </div>

            <div class="inline-flex items-center text-black">
              #3
              <div class="mx-1">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                  alt=""
                />
              </div>
              Agen
              <span
                class="text-blue-500 cursor-pointer mx-1"
                tabindex="0"
                on:click={showCardAgent}
                on:keypress={handleKeyPress}
                role="button"
              >
                terpercaya</span
              >untuk mencari rumah siap huni dijakarta selatan
            </div>

            <!--  -->
          </div>
          <!--  -->
          <!--  -->
        </div>
      </div>
      <!-- Search Agen -->
      <div
        id="tagSearchAgen"
        class="w-full h-[7vh] flex items-center flex-row px-1.5 border border-gray-300 hidden"
      >
        <!-- Input Searching Agent -->
        <div class="pr-1">
          <div class="relative">
            <input
              id="InputanSearchAgen"
              class="border-none bg-white text-black w-96 pr-6 h-8 px-2 rounded-[5px] text-xs focus:outline-none focus:ring-0 focus:border-blue-500 outline-none"
              type="search"
              name="search"
              placeholder="Nama agen / Area"
            />
            <button
              id="IconInputanSearchAgen"
              type="submit"
              class="absolute right-0 top-0 mt-2.5 mr-2"
            >
              <svg
                class="text-gray-400 h-3.5 w-3.5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Button JScore Agent -->
        <div class="flex items-center px-1">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnJscoreAgent"
                class="inline-flex justify-center items-center pl-1 w-[5.5rem] h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white text-gray-500"
              >
                <span class="pl-2">Rating</span>

                <svg
                  id="arrow-icon-jscore-agent"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2 transition-transform duration-200 transform text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnJscoreAgent"
              class="hidden absolute top-8 z-20 w-32 rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div class="flex flex-col">
                <!-- Jscore -->
                <div>
                  <!--  -->
                  <div class="p-2">
                    <div class="flex items-center mb-2">
                      <input
                        id="star-satu-agen"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-satu-agen"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-dua-agen"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-dua-agen"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-tiga-agen"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-tiga-agen"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-empat-agen"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-empat-agen"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-lima-agen"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-lima-agen"
                        class="flex flex-rowflex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>

                <!--  -->
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>

      <!-- Default Searching -->
      <div
        id="tagSearchAll"
        class="w-full h-[7vh] flex items-center flex-row px-1.5 border border-gray-300"
      >
        <!-- Input Searching Default -->
        <div class="pr-1">
          <div class="relative">
            <input
              id="InputanSearch"
              class="search_default"
              type="search"
              name="search"
              placeholder="Nama jalan, kelurahan, gedung, mall ..."
            />
          </div>
        </div>

        <!-- Button Harga -->
        <div class="flex items-center px-1 hidden">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnHarga"
                class="inline-flex justify-center items-center pl-1 w-[5.5rem] h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white"
              >
                <span class="pl-2 text-gray-600 tracking-[0.08em]">Harga</span>

                <svg
                  id="arrow-icon-harga"
                  class="w-4 h-4 text-gray-400 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnHarga"
              class="hidden absolute top-8 z-20 w-[17rem] rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div
                class="w-full bg-slate-200 py-1 px-2 text-xs font-semibold text-gray-500 hidden"
              >
                Kisaran Harga (Rp)
              </div>

              <!--  -->

              <div class="flex flex-col px-3">
                <div class="text-xs pt-5 pb-3 grid grid-cols-4 items-center">
                  <div>
                    <span
                      id="btn1M"
                      class="border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                    >
                      &lt; Rp 1M</span
                    >
                  </div>
                  <div>
                    <span
                      id="btn2M"
                      class="border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                    >
                      Rp 1-2M</span
                    >
                  </div>
                  <div>
                    <span
                      id="btn3M"
                      class="border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                    >
                      Rp 2-3M</span
                    >
                  </div>
                  <div>
                    <span
                      id="btnMore3M"
                      class="border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                    >
                      > Rp 3M</span
                    >
                  </div>
                </div>
                <div class="grid grid-cols-[90px,1fr] gap-y-3 pb-3">
                  <!--  -->
                  <div class="flex items-end text-xs font-medium text-gray-900">
                    Minimum (Rp)
                  </div>
                  <div>
                    <input
                      id="minInput"
                      type="number"
                      class="block w-full p-0 text-xs text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
                      style="border: none; border-bottom: 1px solid"
                      required
                    />
                  </div>

                  <!--  -->
                  <div
                    class="flex items-center text-xs font-medium text-gray-900"
                  >
                    Maksimum (Rp)
                  </div>
                  <div>
                    <input
                      id="maxInput"
                      type="number"
                      class="max-input block p-0 w-full text-xs text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                      required
                      style="border: none; border-bottom: 1px solid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Button Cicilan Calculator -->
        <div class="flex items-center px-1 hidden">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnCicilan"
                class="inline-flex justify-center items-center pl-1 w-20 h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white text-black placeholder-gray-700"
              >
                <span class="pl-2">Cicilan</span>

                <svg
                  id="arrow-icon-harga"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2 transition-transform duration-200 transform text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnCicilan"
              class="hidden absolute top-8 z-20 w-[17rem] rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div
                class="w-full bg-slate-200 py-1 px-2 text-xs font-semibold text-gray-500 hidden"
              >
                Kisaran Harga (Rp)
              </div>

              <!--  -->

              <div class="flex flex-col px-3">
                <div class="grid grid-cols-[90px,1fr] gap-y-3 py-3">
                  <!--  -->
                  <div class="flex items-end text-xs font-medium text-gray-900">
                    Minimum (Rp)
                  </div>
                  <div>
                    <input
                      id="minInputCicilan"
                      type="number"
                      class="block w-full p-0 text-xs text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
                      style="border: none; border-bottom: 1px solid"
                      required
                    />
                  </div>

                  <!--  -->
                  <div
                    class="flex items-center text-xs font-medium text-gray-900"
                  >
                    Maksimum (Rp)
                  </div>
                  <div>
                    <input
                      id="maxInputCicilan"
                      type="number"
                      class="max-input block p-0 w-full text-xs text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                      required
                      style="border: none; border-bottom: 1px solid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Button Kamar -->
        <div class="flex items-center px-1 hidden">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnKamar"
                class="inline-flex justify-center items-center pl-1 w-[7rem] h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white"
              >
                <span class="pl-2 text-gray-600 tracking-[0.08em]"
                  >Spesifikasi</span
                >

                <svg
                  id="arrow-icon-kamar"
                  class="w-4 h-4 text-gray-400 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnKamar"
              class="hidden absolute top-8 z-20 w-72 rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div class="flex flex-col">
                <!-- Luas Tanah -->
                <div>
                  <div
                    class="w-full bg-slate-200 py-1 px-2 text-xs font-semibold text-gray-500"
                  >
                    Luas Tanah (m²)
                  </div>

                  <!--  -->
                  <div class="py-3 flex justify-center">
                    <div class="grid grid-cols-4 text-xs items-center gap-x-1">
                      <!--  -->
                      <div class="text-center flex justify-end">
                        <span
                          id="luas1"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          <!-- inner html karna < membuat vite tidak bisa compile -->
                        </span>
                      </div>
                      <!--  -->
                      <div class="text-center">
                        <span
                          id="luas2"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          100-200
                        </span>
                      </div>
                      <!--  -->
                      <div class="text-center">
                        <span
                          id="luas3"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          200-300
                        </span>
                      </div>
                      <!--  -->
                      <div class="text-center flex justify-start">
                        <span
                          id="luas4"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          > 300
                        </span>
                      </div>
                      <!--  -->
                    </div>
                  </div>
                </div>
                <!-- Luas Bangunan -->
                <div>
                  <div
                    class="w-full bg-slate-200 py-1 px-2 text-xs font-semibold text-gray-500"
                  >
                    Luas Bangunan (m²)
                  </div>

                  <!--  -->
                  <div class="py-3 flex justify-center">
                    <div class="grid grid-cols-4 text-xs items-center gap-x-1">
                      <div class="text-center flex justify-end">
                        <span
                          id="btn1"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          <!-- inner html karna < membuat vite tidak bisa compile -->
                        </span>
                      </div>
                      <div class="text-center">
                        <span
                          id="btn2"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          100-200
                        </span>
                      </div>
                      <div class="text-center">
                        <span
                          id="btn1"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          200-300
                        </span>
                      </div>
                      <div class="text-center flex justify-start">
                        <span
                          id="btn2"
                          class="btn-price border-[1px] bg-white border-black text-black text-[11px] font-medium px-1.5 py-0.5 rounded-full cursor-pointer"
                        >
                          > 300
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <button
          class="btn_chip_header1 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
        >
          <span class="inline-flex tracking-[0.04em]">
            <div>&lt;&nbsp;</div>
            Rp 1 M
          </span>
        </button>

        <button
          class="btn_chip_header1 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
        >
          <span class="inline-flex tracking-[0.04em]"> Rp 1 - 3 M </span>
        </button>

        <button
          class="btn_chip_header1 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
        >
          <span class="inline-flex tracking-[0.04em]">
            <div>&gt;&nbsp;</div>
            Rp 3 M
          </span>
        </button>

        <!--  -->
        <button
          class="btn_chip_header2 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
        >
          <span class="inline-flex tracking-[0.04em]">
            <div>LT &lt;&nbsp;</div>
            100 m²
          </span>
        </button>

        <button
          class="btn_chip_header2 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
        >
          <span class="inline-flex tracking-[0.04em]"> LT 100 - 300 m² </span>
        </button>

        <button
          class="btn_chip_header2 inline-flex justify-center items-center px-4 mx-1 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white"
        >
          <span class="inline-flex tracking-[0.04em]">
            <div>LT &gt;&nbsp;</div>
            300 m²
          </span>
        </button>

        <button
          type="button"
          class="h-6 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs tracking-[0.04em] w-[5vw] mx-3 flex flex-row justify-center items-center"
        >
          Cari

          <span class="ml-3">
            <svg
              class="text-white h-3 w-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              ></path>
            </svg>
          </span>
        </button>

        <!-- Button Penjual -->
        <div class="flex items-center px-1 hidden">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnPenjual"
                class="inline-flex justify-center items-center pl-1 w-[5.5rem] h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white"
              >
                <span class="pl-2">Penjual</span>

                <svg
                  id="arrow-icon-penjual"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2 transition-transform duration-200 transform text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnPenjual"
              class="hidden absolute top-8 z-20 w-40 rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div class="flex flex-col">
                <!-- Penjual -->
                <div>
                  <div
                    class="w-full bg-slate-200 py-1 px-2 text-xs font-semibold text-gray-500 hidden"
                  >
                    Penjual
                  </div>

                  <!--  -->
                  <div class="p-2">
                    <div class="flex items-center mb-2">
                      <input
                        checked
                        id="pemilik-langsung"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="pemilik-langsung"
                        class="ml-2 text-xs cursor-pointer font-medium text-gray-900"
                        >Pemilik Langsung</label
                      >
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        checked
                        id="agen"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="agen"
                        class="ml-2 text-xs cursor-pointer font-medium text-gray-900"
                        >Agen</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        checked
                        id="pengembang"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="pengembang"
                        class="ml-2 text-xs cursor-pointer font-medium text-gray-900"
                        >Pengembang</label
                      >
                    </div>
                  </div>
                </div>

                <!--  -->
              </div>
            </div>
          </div>
        </div>

        <!-- Button Jenis Properti -->
        <div class="flex items-center px-1 hidden">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnJenisProperti"
                class="inline-flex justify-center items-center pl-1 w-[6rem] h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white text-black placeholder-gray-700"
              >
                <span class="pl-2">Properti</span>

                <svg
                  id="arrow-icon-jenis-properti"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2 transition-transform duration-200 transform text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnJenisProperti"
              class="hidden absolute top-8 z-20 w-40 rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div class="flex flex-col">
                <!-- Jenis Properti -->
                <div>
                  <div
                    class="w-full bg-slate-200 py-1 px-2 text-xs font-semibold text-gray-500 hidden"
                  >
                    Properti
                  </div>

                  <!--  -->
                  <div class="p-2">
                    <div class="flex items-center mb-2">
                      <input
                        id="rumah-baru"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="rumah-baru"
                        class="ml-2 text-xs cursor-pointer font-medium text-gray-900"
                        >Rumah Baru</label
                      >
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        checked
                        id="rumah-seken"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="rumah-seken"
                        class="ml-2 text-xs cursor-pointer cursor-pointer font-medium text-gray-900"
                        >Rumah Seken</label
                      >
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        checked
                        id="apart-baru"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="apart-baru"
                        class="ml-2 text-xs cursor-pointer cursor-pointer font-medium text-gray-900"
                        >Apartemen Baru</label
                      >
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        checked
                        id="apart-seken"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="apart-seken"
                        class="ml-2 text-xs cursor-pointer cursor-pointer font-medium text-gray-900"
                        >Apartemen Seken</label
                      >
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        checked
                        id="ruko"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="ruko"
                        class="ml-2 text-xs cursor-pointer cursor-pointer font-medium text-gray-900"
                        >Ruko</label
                      >
                    </div>
                  </div>
                </div>

                <!--  -->
              </div>
            </div>
          </div>
        </div>

        <!-- Button Jenis Surat -->
        <div class="flex items-center px-1 hidden">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnJenisSurat"
                class="inline-flex justify-center items-center pl-1 w-[4.5rem] h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white text-black placeholder-gray-700"
              >
                <span class="pl-2">Surat</span>

                <svg
                  id="arrow-icon-jenis-surat"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2 transition-transform duration-200 transform text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnJenisSurat"
              class="hidden absolute top-8 z-20 w-40 rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div class="flex flex-col">
                <!-- Jenis Surat -->
                <div>
                  <div
                    class="w-full bg-slate-200 py-1 px-2 text-xs font-semibold text-gray-500 hidden"
                  >
                    Jenis Surat
                  </div>

                  <!--  -->
                  <div class="p-2">
                    <div class="flex items-center mb-2">
                      <input
                        id="shm"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="shm"
                        class="ml-2 text-xs font-medium cursor-pointer text-gray-900"
                        >SHM</label
                      >
                    </div>

                    <div class="flex items-center">
                      <input
                        checked
                        id="shgb"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox"
                      />
                      <label
                        for="shgb"
                        class="ml-2 text-xs font-medium cursor-pointer text-gray-900"
                        >SHGB</label
                      >
                    </div>
                  </div>
                </div>

                <!--  -->
              </div>
            </div>
          </div>
        </div>

        <!-- Button JScore Hidden Sementara -->
        <div class="flex items-center px-1 hidden">
          <div class="grid grid-cols-1 relative">
            <div class="text-left">
              <button
                id="btnJscore"
                class="inline-flex justify-center items-center pl-1 w-28 h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white text-gray-500 placeholder-gray-700"
              >
                <span class="pl-2">JScore</span>

                <svg
                  id="arrow-icon-jscore"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2 transition-transform duration-200 transform text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="kontenBtnJscore"
              class="hidden absolute top-8 z-20 w-32 rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
            >
              <div class="flex flex-col">
                <!-- Jscore -->
                <div>
                  <div class="p-2">
                    <div class="flex items-center mb-2">
                      <input
                        id="star-satu"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-satu"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-dua"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-dua"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-tiga"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-tiga"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-empat"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-empat"
                        class="flex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div class="flex items-center mb-2">
                      <input
                        id="star-lima"
                        checked
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0"
                      />
                      <label
                        for="star-lima"
                        class="flex flex-rowflex flex-row ml-2 text-xs font-medium cursor-pointer text-gray-900"
                      >
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>

                <!--  -->
              </div>
            </div>
          </div>
        </div>

        <!-- Search Button -->
        <div class="px-1 hidden">
          <button
            id="btnTerapkan"
            type="button"
            class="h-8 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3"
          >
            Terapkan
          </button>
        </div>
        <div class="pl-1 hidden">
          <button
            id="btnSearch"
            type="button"
            class="h-8 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3"
          >
            Simpan Pencarian
          </button>
        </div>
        <!--  -->
        <div
          class="flex justify-center items-center flex-col w-11 h-11 cursor-pointer border-gray-100 hidden"
        >
          <div class="w-7 h-7 flex justify-center items-center relative">
            <!-- btnSaveInstagram -->
            <img
              id=""
              class=""
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/save-instagram-on.png"
              alt=""
            />
          </div>
        </div>
        <!--  -->
      </div>

      <!--  -->
    </div>
    <!-- End Button Chip rev.1 -->

    <!-- Start Main Konten Utama rev.1 -->
    <div class="w-full h-[82vh] grid grid-cols-2">
      <!-- Menu Navigation & Peta -->
      <div class="grid grid-cols-[55px,1fr]">
        <!-- Semua Tab Menu -->
        <div
          class="sidebar"
          id="kontenMenuTab"
          data-tabs-toggle="#kontenMenuContent"
          role="tablist"
        >
          <!-- Main Button -->
          <div>
            <!-- Menu 1 Beranda -->
            <div
              class="flex col justify-center py-1"
              data-tooltip-target="menu-beranda"
              data-tooltip-placement="right"
            >
              <button
                id="MenuSatuTab"
                data-tabs-target="#MenuSatuContent"
                aria-controls="MenuSatuContent"
                aria-selected="false"
                class="bg-aktif-menu BtntagSearchAgen BtnRemoveCard flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
                on:click={MenuTabList}
                on:keypress={handleKeyPress}
                tabindex="0"
                role="tab"
              >
                <div class="w-7 h-7 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="1"
                    src="./src/images/icon_menu_baru/aktif_galeri.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <!--  -->

            <div
              id="menu-beranda"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Galeri
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <!--  -->

            <!-- Menu 8 Video Hidden & Kontennya-->
            <div
              class="flex col justify-center py-1 hidden"
              data-tooltip-target="menu-wishes"
              data-tooltip-placement="right"
            >
              <button
                id="MenuDelapanTab"
                data-tabs-target="#MenuDelapanContent"
                type="button"
                role="tab"
                aria-controls="MenuDelapanContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/new/reels.png"
                    alt=""
                  />
                </div>
              </button>
            </div>

            <!--  -->
            <div
              id="menu-wishes"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Video
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 2 Pasang Iklan Hidden -->
            <div
              class="flex col justify-center py-2 hidden"
              data-tooltip-target="menu-pasang-iklan"
              data-tooltip-placement="right"
            >
              <button
                id="MenuDuaTab"
                data-tabs-target="#MenuDuaContent"
                type="button"
                role="tab"
                aria-controls="MenuDuaContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="2"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/more.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <!--  -->
            <div
              id="menu-pasang-iklan"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Postingan
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 18 Posting -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="menu-posting"
              data-tooltip-placement="right"
            >
              <button
                id="MenuDelapanBelasTab"
                data-tabs-target="#MenuDelapanBelasContent"
                type="button"
                role="tab"
                aria-controls="MenuDelapanBelasContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="2"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/more.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <!--  -->
            <div
              id="menu-posting"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Listing Baru
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 17 Promosi -->
            <div
              class="flex col justify-center py-2 hidden"
              data-tooltip-target="menu-promo"
              data-tooltip-placement="right"
            >
              <button
                id="MenuTujuhBelasTab"
                data-tabs-target="#MenuTujuhBelasContent"
                type="button"
                role="tab"
                aria-controls="MenuTujuhBelasContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="2"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/trend.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <!--  -->
            <div
              id="menu-promo"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Promo
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu3 Favorit -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="menu-favorit"
              data-tooltip-placement="right"
            >
              <button
                id="MenuTigaTab"
                data-tabs-target="#MenuTigaContent"
                type="button"
                role="tab"
                aria-controls="MenuTigaContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="3"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/favorite.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <!--  -->
            <div
              id="menu-favorit"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Favoritt
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 4 Agent -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="tooltip-right4"
              data-tooltip-placement="right"
            >
              <button
                id="MenuEmpatTab"
                data-tabs-target="#MenuEmpatContent"
                type="button"
                role="tab"
                aria-controls="MenuEmpatContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="4"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/real-estate-agent.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div
              id="tooltip-right4"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Agen
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 7 Pesan -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="menu-pesan"
              data-tooltip-placement="right"
            >
              <button
                id="MenuTujuhTab"
                data-tabs-target="#MenuTujuhContent"
                type="button"
                role="tab"
                aria-controls="MenuTujuhContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/messenger.png"
                    alt=""
                  />

                  <div
                    class="absolute inline-flex items-center justify-center px-1 min-w-[18px] h-[21px] text-[11px] font-bold text-white bg-red-600 border border-white rounded-full -top-[0.45rem] -right-[0.7rem]"
                  >
                    188
                  </div>
                </div>
              </button>
            </div>
            <div
              id="menu-pesan"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Pesan
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 16 Pesan -->
            <div
              class="flex col justify-center py-2 hidden"
              data-tooltip-target="menu-cobroking"
              data-tooltip-placement="right"
            >
              <button
                id="MenuEnamBelasTab"
                data-tabs-target="#MenuEnamBelasContent"
                type="button"
                role="tab"
                aria-controls="MenuEnamBelasContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-7 h-7 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/workgroup.png"
                    alt=""
                  />

                  <div
                    class="absolute inline-flex items-center justify-center px-1 min-w-[18px] h-[21px] text-[11px] font-bold text-white bg-red-600 border border-white rounded-full -top-[0.45rem] -right-[0.7rem]"
                  >
                    283
                  </div>
                </div>
              </button>
            </div>
            <div
              id="menu-cobroking"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Co Broking
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 9 Solusi Keuangan -->
            <div
              class="flex col justify-center py-1 hidden"
              data-tooltip-target="menu-solusi-keuangan"
              data-tooltip-placement="right"
            >
              <button
                id="MenuSembilanTab"
                data-tabs-target="#MenuSembilanContent"
                type="button"
                role="tab"
                aria-controls="MenuSembilanContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/wallet.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div
              id="menu-solusi-keuangan"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Solusi Keuangan
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 10 Layanan Profesional -->
            <div
              class="flex col justify-center py-1 hidden"
              data-tooltip-target="menu-layanan-profesional"
              data-tooltip-placement="right"
            >
              <button
                id="MenuSepuluhTab"
                data-tabs-target="#MenuSepuluhContent"
                type="button"
                role="tab"
                aria-controls="MenuSepuluhContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/official-store.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div
              id="menu-layanan-profesional"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Layanan Profesional
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 11 Marketplace -->
            <div
              class="flex col justify-center py-1 hidden"
              data-tooltip-target="menu-marketplace"
              data-tooltip-placement="right"
            >
              <button
                id="MenuSebelasTab"
                data-tabs-target="#MenuSebelasContent"
                type="button"
                role="tab"
                aria-controls="MenuSebelasContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/asbestos.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div
              id="menu-marketplace"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Marketplace
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 12 Rekomendasi -->
            <div
              class="flex col justify-center py-1 hidden"
              data-tooltip-target="menu-rekomendasi"
              data-tooltip-placement="right"
            >
              <button
                id="MenuDuaBelasTab"
                data-tabs-target="#MenuDuaBelasContent"
                type="button"
                role="tab"
                aria-controls="MenuDuaBelasContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/like.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div
              id="menu-rekomendasi"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Rekomendasi
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Menu 13 AI Assistant -->
            <div
              class="flex col justify-center py-1 hidden"
              data-tooltip-target="menu-ai-asisten"
              data-tooltip-placement="right"
            >
              <button
                id="MenuTigaBelasTab"
                data-tabs-target="#MenuTigaBelasContent"
                type="button"
                role="tab"
                aria-controls="MenuTigaBelasContent"
                aria-selected="false"
                class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
              >
                <div class="w-6 h-6 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="0"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/gm1/robot.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div
              id="menu-ai-asisten"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              AI Assistant
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <!-- Menu Setting -->

          <div class="akun-login-soaraja hidden">
            <!--  -->
            <div class="">
              <!-- Menu 15 profil -->
              <div
                tabindex="0"
                on:click={ShowProfil}
                on:keypress={handleKeyPress}
                role="button"
                class="flex col justify-center py-2"
                data-tooltip-target="menu-profil"
                data-tooltip-placement="right"
              >
                <div
                  aria-selected="false"
                  class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
                >
                  <div
                    class="w-6 h-6 flex justify-center items-center relative"
                  >
                    <img
                      class="menu-icon"
                      data-menu="0"
                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/settings.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                id="menu-profil"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
              >
                Pengaturan
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>

              <!-- Menu 16 Keluar -->

              <div
                tabindex="0"
                on:click={KeluarAkun}
                on:keypress={handleKeyPress}
                role="button"
                class="flex col justify-center py-2"
                data-tooltip-target="menu-keluar"
                data-tooltip-placement="right"
              >
                <div
                  aria-selected="false"
                  class="flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
                >
                  <div
                    class="w-5 h-5 flex justify-center items-center relative"
                  >
                    <img
                      class="menu-icon"
                      data-menu="0"
                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/logout3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                id="menu-keluar"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
              >
                Keluar
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>

              <!--  -->
            </div>
            <!--  -->
          </div>

          <!--  -->
        </div>

        <!-- Peta Soaraja -->
        <div class="w-full h-full">
          <nav id="menu"></nav>
          <div class="relative w-full h-screen">
            <!-- Map Container -->
            <div id="mapSoaraja" class="w-full h-full"></div>

            <!-- Map Menu Control -->
            <div
              class="absolute flex justify-center place-items-center top-3 w-full"
            >
              <!-- Start Menu Chip Peta -->
              <div class="pr-3 hidden">
                <button
                  id="chip-rumah-dijual"
                  class="btn-on-map inline-flex justify-center items-center h-8 px-4 text-xs font-medium rounded-full shadow-sm focus:outline-none focus:ring-0 bg-white text-black"
                >
                  <span class="font-semibold tracking-wider">Rumah Dijual</span>
                </button>
              </div>
              <div class="pr-3">
                <button
                  id="chip-tempat-ibadah"
                  class="btn-on-map inline-flex justify-center items-center px-4 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white text-black"
                >
                  <span class="font-semibold tracking-[0.14em]">Ibadah</span>
                </button>
              </div>
              <div class="pr-3">
                <button
                  id="chip-belanja"
                  class="btn-on-map inline-flex justify-center items-center px-4 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white text-black"
                >
                  <span class="font-semibold tracking-[0.08em]">Belanja</span>
                </button>
              </div>
              <div class="pr-3">
                <button
                  id="chip-sekolah"
                  class="btn-on-map inline-flex justify-center items-center px-4 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white text-black"
                >
                  <span class="font-semibold tracking-[0.08em]">Sekolah</span>
                </button>
              </div>
              <div class="pr-3">
                <button
                  id="chip-restoran"
                  class="btn-on-map inline-flex justify-center items-center px-4 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white text-black"
                >
                  <span class="font-semibold tracking-[0.08em]">Restoran</span>
                </button>
              </div>
              <div class="pr-3">
                <button
                  id="chip-transportasi"
                  class="btn-on-map inline-flex justify-center items-center px-4 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white text-black"
                >
                  <span class="font-semibold tracking-[0.08em]"
                    >Transportasi</span
                  >
                </button>
              </div>
              <div class="pr-3">
                <button
                  id="chip-faskes"
                  class="btn-on-map inline-flex justify-center items-center px-4 h-8 text-xs font-medium rounded-full focus:outline-none focus:ring-0 bg-white text-black"
                >
                  <span class="font-semibold tracking-[0.08em]">Faskes</span>
                </button>
              </div>
              <!-- End Menu Chip Peta -->
            </div>

            <!--Start Button Map - disable sementara -->
            <div class="absolute top-0 right-0 z-10 p-4 text-white hidden">
              <div class="grid grid-rows-1 grid-flow-col gap-4 z-10 relative">
                <div
                  class="row-span-3 z-10 relative flex items-start justify-end"
                >
                  <button
                    id=""
                    type="button"
                    class="py-1 px-3 text-xs shadow-lg text-black bg-white focus:outline-none rounded-md border border-gray-200 focus:z-10 focus:ring-0"
                  >
                    Garis Batas
                  </button>
                </div>
              </div>
            </div>
            <!-- End Button Map - disable sementara -->
          </div>
        </div>
      </div>
      <!-- End Menu Navigation & Peta -->

      <!-- Start Konten Utana -->
      <div id="kontenMenuContent" class="h-full w-full">
        <!-- Konten Main -->
        <div
          class="h-full w-full hiddenSearchRunning"
          id="MenuSatuContent"
          role="tabpanel"
          aria-labelledby="MenuSatuTab"
        >
          <!-- Menu Beranda -->
          <div class="h-full flex flex-col">
            <!--  StartCardPertama-->
            <div
              class="flex flex-col card-info-pencarian hidden-form-registrasi"
            >
              <!-- Judul Beranda -->

              <div class="w-full flex justify-between border-b border-gray-300">
                <div class="font-sf_pro_bold text-2xl px-3 py-2 judulStory">
                  Galeri
                </div>

                <!-- Stories -->
                <div
                  class="w-full grid justify-items-end items-center relative mr-1"
                >
                  <div class="inline-flex">
                    <div
                      on:click={closeTab}
                      on:keypress={handleKeyPress}
                      role="button"
                      tabindex="0"
                      class="menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 border-blue-600 flex justify-center items-center hidden stories_back"
                    >
                      <div class="w-5 h-5 flex justify-center items-center">
                        <img
                          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/back.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--  Konten Card Info -->
              <!-- Utama 1.4 -->

              <div
                class="h-[77vh] overflow-y-auto overflow-x-hidden hide-scrollbar story-galeri-off"
              >
                <!--  -->
                <!-- hrapan -->

                <!--  -->

                <!--  -->

                <div class="px-3">
                  <!--  -->
                  <div class="flex justify-center">
                    <div class="w-[44vw]">
                      <div
                        class="grid grid-cols-12 items-center justify-center"
                      >
                        <div class="w-full col-span-full">
                          <div
                            class="w-full h-full flex overflow-x-visible hide-scrollbar flex-row justify-between items-center mt-3 mb-2 justify-center slider-story-galeri"
                          >
                            <!--  -->
                            <!-- Your Story -->
                            <div
                              data-active-tab="6"
                              tabindex="0"
                              on:click={showCardInfoDetail}
                              on:keypress={handleKeyPress}
                              role="button"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition relative"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                    alt=""
                                  />

                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    on:click={showPostingStories}
                                    on:keypress={handleKeyPress}
                                    role="button"
                                    tabindex="0"
                                    class="absolute bottom-0 right-3 border bg-white border-white border-2 rounded-full"
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

                            <!-- Mode1 - 6 -->
                            <div
                              data-active-tab="stories1"
                              onclick="CloseStoriesSatu(this)"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.075rem] bg-gray-300 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model10.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="stories2"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div class="w-16 h-16 p-[0.15rem]">
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- aw -->

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model9.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model1.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model4.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- Mode1 - 77 -->
                            <div
                              data-active-tab="6"
                              on:click={CloseStoriesDua}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="relative flex flex-col items-center cursor-pointer"
                            >
                              <div class="">
                                <div
                                  class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                                >
                                  <img
                                    class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <!--  -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--  judul-dijual-pertama -->
                  <div
                    class="flex flex-row items-stretch justify-between mt-1 hidden judul-dijual-pertama"
                  >
                    <div class="font-normal text-sm self-end">
                      Menampilkan 1 data
                    </div>

                    <div class="">
                      <div class="relative flex flex-row">
                        <!-- Mode Card -->
                        <div class="flex items-center mr-2">
                          <img
                            class="w-7 h-7 object-contain cursor-pointer"
                            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/list.png"
                            alt=""
                          />
                        </div>

                        <!-- Dropdown Filter -->
                        <div class="flex items-center">
                          <div class="relative inline-block text-left">
                            <button
                              id="dropdown-button-pencarian-pertama"
                              class="inline-flex justify-between items-center pl-1 w-40 h-8 text-sm font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                            >
                              <span id="selected-item" class="pl-2"
                                >Terbaru</span
                              >

                              <svg
                                id="arrow-icon-pencarian-pertama"
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 mr-2 transition-transform duration-200 transform"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>

                            <div
                              id="dropdown-menu-pencarian-pertama"
                              class="hidden origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                            >
                              <div
                                class="py-2 p-2"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="dropdown-button-pencarian-pertama"
                              >
                                <a
                                  id="item-harga-tertinggi"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Harga Tertinggi
                                </a>
                                <a
                                  id="item-harga-terendah"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Harga Terendah
                                </a>
                                <a
                                  id="item-populer"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Populer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  judul-dijual-kedua -->
                  <!-- Utama 1.3 hiddenya dihapus -->
                  <div
                    class="flex flex-row items-stretch justify-between mt-0.5 judul-dijual-kedua StoriesGaleriKomponenHidden relative"
                  >
                    <div
                      class="font-normal text-sm self-end text-black mb-[0.3rem]"
                    >
                      Menampilkan 100 data
                      <!--  -->
                    </div>

                    <div class="">
                      <div class="relative flex flex-row">
                        <!-- Mode Card -->
                        <div class="flex items-center">
                          <div
                            class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-slate-200 hover:rounded-lg"
                          >
                            <img
                              onclick="ChangeModeCard(this)"
                              class="w-7 h-7 object-contain cursor-pointer"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/list.png"
                              alt=""
                            />
                          </div>
                        </div>

                        <!-- Dropdown Filter -->
                        <div class="flex items-center hidden">
                          <div class="relative inline-block text-left">
                            <button
                              id="dropdown-button-pencarian"
                              class="inline-flex justify-between items-center pl-1 w-40 h-8 text-sm font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                            >
                              <span id="selected-item" class="pl-2"
                                >Terfavorit</span
                              >

                              <svg
                                id="arrow-icon-pencarian"
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 mr-2 transition-transform duration-200 transform"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>

                            <div
                              id="dropdown-menu-pencarian"
                              class="hidden origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                            >
                              <div
                                class="py-2 p-2"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="dropdown-button-pencarian"
                              >
                                <a
                                  id="item-harga-tertinggi"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Populer
                                </a>
                                <a
                                  id="item-harga-terendah"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Random
                                </a>
                                <a
                                  id="item-populer"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Suprise Me!
                                </a>
                                <a
                                  id="item-populer"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Termahal
                                </a>
                                <a
                                  id="item-populer"
                                  class="flex block rounded-md px-1 py-1 text-sm text-black hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                  role="menuitem"
                                >
                                  Termurah
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!--  -->
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="pt-1 pb-2 w-full"></div>
                </div>

                <!-- Utama 1.1 -->
                <!-- Mode Pertama -->
                <div class="h-full px-3 mode-card-pertama StoriesGaleriHidden">
                  <div class="grid grid-cols-2 gap-2 pb-2">
                    <!-- Card Beranda 1 -->
                    <div class="konten-dijual">
                      <div class="card">
                        <div
                          class="card-header"
                          on:click={showCardAgent}
                          on:keypress={handleKeyPress}
                          role="button"
                          tabindex="0"
                        >
                          <div class="card-header-grid">
                            <div class="card-header-content">
                              <div class="card-header-image">
                                <img
                                  class="avatar"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="card-header-text">
                                <div class="agent-name">
                                  <div class="agent-name-text">
                                    Gunawan Budi Ardivaaa
                                  </div>
                                </div>
                                <!-- Optional Rating Section -->
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card-body"
                          data-card-map="1534"
                          data-active-tab="1"
                          tabindex="0"
                          on:click={showCardInfoDetail}
                          on:keypress={handleKeyPress}
                          role="button"
                        >
                          <!-- data-object-id="1604" -->

                          <div class="slider-favorit">
                            <div class="slider-item z-index-10">
                              <img
                                class="property-image"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh2/rumahb1.jpg"
                                alt=""
                              />
                              <div class="new-badge">
                                <span class="new-text">NEW</span>
                              </div>
                            </div>
                            <div class="slider-item z-index-10">
                              <img
                                class="property-image"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh2/rumahb1.jpg"
                                alt=""
                              />
                              <div class="new-badge">
                                <span class="new-text">NEW</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer">
                          <div class="property-id">
                            ID <span id="copy_id_iklan">78AC66</span>
                          </div>
                          <div class="property-info">
                            <h5 class="property-price">Rp 11.300.000.000</h5>
                            <div class="property-details">
                              <span>LT 80 m² |</span>
                              <span>LB 276 m² |</span>
                              <span>2 KT |</span>
                              <span>5 KM</span>
                            </div>
                            <div class="property-location">
                              Sunter, Tanjung Priok, Jakarta Utara
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--  -->
                  </div>
                </div>

                <!-- Utama 1.2 -->
                <!-- Mode Pertama -->

                <div
                  class="h-full w-full grid grid-cols-1 StoriesGaleri1 hidden"
                >
                  <!-- Stories Pertama -->
                  <div
                    class="w-full h-[64vh] grid grid-cols-4 relative stories_pertama"
                  >
                    <div
                      class="absolute self-center flex item-populer justify-between w-full"
                    >
                      <div class="ml-2 z-10">
                        <svg
                          on:click={storiesPrevious}
                          on:keypress={handleKeyPress}
                          role="button"
                          tabindex="0"
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
                    <!--  -->
                    <div class="col-span-2 w-full h-full bg-[#807a78]">
                      <div class="w-[25vw] h-[63vh] absolute">
                        <div class="absolute top-2 left-2 z-10">
                          <svg
                            on:click={CloseAllStories}
                            on:keypress={handleKeyPress}
                            role="button"
                            tabindex="0"
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

                        <div
                          class="slider-card-stories-persegi w-full h-full z-index-10"
                        >
                          <div class="w-[15vw] h-[62.5vh]">
                            <!-- <video
                              autoplay
                              muted
                              class="w-full !h-full"
                              id="video-detail-beranda"
                              src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                            ></video> -->
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-span-2 w-full h-full flex flex-col px-3 pt-3"
                    >
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
                          <div
                            class="h-full flex flex-col items-center ml-2 border"
                          >
                            <div
                              class="h-full flex items-center text-sm font-semibold text-black cursor-pointer"
                              on:click={showCardAgent}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                            >
                              Steven R K
                            </div>

                            <div class="inline-flex">
                              <!--   <div
                                  class="text-sm -mt-1 font-semibold text-black cursor-pointer"
                                  on:click="{showCardAgent}"
                                  >
                                  Steven R K
                                </div> -->
                              <div
                                class="flex items-center justify-center ml-1 -mt-1.5"
                              >
                                <!-- <div
                                    class="w-4 h-4 flex justify-center items-center relative"
                                    >
                                    <img
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                      alt=""
                                    />
                                  </div> -->
                              </div>
                            </div>
                            <!--  -->
                            <!-- <div class="mb-1 mt-0.5">
                                <label
                                  for="star-agent-utama"
                                  class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                >
                                  <div>
                                    <label
                                      for="star-agent-utama"
                                      class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
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
                                    </label>
                                  </div>
                                </label>
                              </div> -->

                            <!--  -->
                          </div>
                        </div>
                        <!--  -->
                        <div
                          class="w-full h-full flex items-center justify-end"
                        >
                          <div class="rotate-[90deg] mt-2 mr-2">
                            <div
                              on:click={EditStoriesPosting}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="w-5 h-5 cursor-pointer"
                              aria-label="Love"
                            >
                              <img
                                class="object-cover"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/threedots.png"
                                alt="Love"
                              />
                            </div>
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
                          <h5
                            class="text-lg font-bold tracking-tight text-black"
                          >
                            Rp 5.300.000.000
                          </h5>
                        </div>
                      </div>

                      <!--  -->

                      <!--  -->
                      <div class="grid grid-cols-1">
                        <div
                          class="flex flex-col mb-0 font-normal text-sm text-black"
                        >
                          <div class="flex items-center">
                            <span class="mr-1">LT 80 m² |</span>
                            <span class="mr-1">LB 276 m² |</span>
                            <span class="mr-1">2 KT |</span>
                            <span class="mr-1">5 KM</span>
                          </div>
                          <div class="pb-1">
                            Sunter, Tanjung Priok, Jakarta Utara
                          </div>
                          <!--  -->
                          <div class="mx-1.5">
                            <ul class="list-disc">
                              <ol class="ps-3 list-decimal list-outside">
                                <li class="">
                                  Lingkungan bagus, asri dan nyaman
                                </li>
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
                            <div class="text-xs text-gray-400">
                              1 jam yang lalu
                            </div>
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
                                  on:click="{showMessage}"
                                  class="w-6 h-6 object-cover cursor-pointer"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                  alt="Love"
                                />
                              </div>
                              <div
                                class="flex h-full flex-col items-start -mt-1.5"
                                >
                                <img
                                  on:click={EditStoriesPosting}
                                on:keypress={handleKeyPress}
                                role="button"
                                tabindex="0"
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

                  <!-- Stories Kedua -->
                  <div
                    class="w-full h-[64vh] grid grid-cols-4 relative stories_kedua"
                  >
                    <div
                      class="absolute self-center flex item-populer justify-between w-full"
                    >
                      <div class="ml-2 z-10">
                        <svg
                          on:click={storiesPrevious}
                          on:keypress={handleKeyPress}
                          role="button"
                          tabindex="0"
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
                        <!--cc <svg
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
                        </svg> -->
                      </div>
                    </div>
                    <!--  -->
                    <div class="col-span-2 w-full h-full bg-[#4E4741]">
                      <div class="w-[25vw] h-[63vh] absolute">
                        <div class="absolute top-2 left-2 z-10">
                          <svg
                            on:click={CloseAllStories}
                            on:keypress={handleKeyPress}
                            tabindex="0"
                            role="button"
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

                        <div
                          class="slider-card-stories-persegi w-full h-full z-index-10"
                        >
                          <div class="w-[15vw] h-[62.5vh]">
                            <!-- <video
                              autoplay
                              muted
                              class="w-full !h-full"
                              id="video-detail-beranda"
                              src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                            ></video> -->
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-span-2 w-full h-full flex flex-col px-3 pt-3"
                    >
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
                          <div class="flex flex-col ml-2">
                            <div class="inline-flex">
                              <div
                                class="text-sm -mt-1 font-semibold text-black cursor-pointer"
                                on:click={showCardAgent}
                                on:keypress={handleKeyPress}
                                role="button"
                                tabindex="0"
                              >
                                Steven R
                              </div>
                              <div
                                class="flex items-center justify-center ml-1 -mt-1.5"
                              >
                                <div
                                  class="w-4 h-4 flex justify-center items-center relative"
                                >
                                  <img
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <!--  -->
                            <div class="mb-1 mt-0.5">
                              <label
                                for="star-agent-utama"
                                class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                              >
                                <div>
                                  <label
                                    for="star-agent-utama"
                                    class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
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
                                  </label>
                                </div>
                              </label>
                            </div>

                            <!--  -->
                          </div>
                        </div>
                        <!--  -->
                        <div class="w-full h-full flex items-start justify-end">
                          <img
                            class="w-8 h-8 object-contain"
                            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                            alt=""
                          />
                        </div>
                        <!--  -->
                      </div>
                      <!--  -->

                      <div
                        class="text-gray-500 text-sm pt-2 pb-2.5 w-full grid grid-cols-2"
                      >
                        <div class="">1 jam yang lalu</div>
                      </div>

                      <!--  -->

                      <div class="inline-flex justify-start w-full pb-2.5">
                        <div>
                          <h5
                            class="text-lg font-bold tracking-tight text-black"
                          >
                            Rp 5.300.000.000
                          </h5>
                        </div>
                      </div>

                      <!--  -->

                      <!--  -->
                      <div class="grid grid-cols-1">
                        <div
                          class="flex flex-col mb-0 font-normal text-sm text-black"
                        >
                          <div class="flex items-center">
                            <span class="mr-1">LT 80 m² |</span>
                            <span class="mr-1">LB 276 m² |</span>
                            <span class="mr-1">2 KT |</span>
                            <span class="mr-1">5 KM</span>
                          </div>
                          <div class="pb-1">
                            Sunter, Tanjung Priok, Jakarta Utara
                          </div>
                          <!--  -->
                          <div class="mx-1.5">
                            <ul class="list-disc">
                              <ol class="ps-3 list-decimal list-outside">
                                <li class="">
                                  Lingkungan bagus, asri dan nyaman
                                </li>
                                <li>Akses jalan raya utama</li>
                                <li>Perumahan TOWNHOUSE mewah</li>
                                <li>Row jalan 6.5 meter (2mobil)</li>
                                <li>One gate security</li>
                                <li>One gate security</li>
                                <li>One gate security</li>
                                <li>One gate security</li>
                                <li>One gate security</li>
                              </ol>
                            </ul>
                          </div>
                          <!--  -->
                        </div>
                        <!--  -->
                        <!--  -->
                        <div class="flex items-end pt-3 pb-4">
                          <div
                            class="grid grid-cols-5 items-center justify-start -ml-1.5 mt-1 gap-2"
                          >
                            <!-- Existing heart icon -->
                            <div class="flex flex-col items-center">
                              <img
                                class="w-5 h-5 object-cover cursor-pointer"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                alt="Love"
                              />
                            </div>

                            <!-- Existing share icon -->
                            <div
                              class="flex h-full flex-col items-start mr-2 ml-1"
                            >
                              <img
                                class="w-[1.20rem] h-[1.20rem] object-cover cursor-pointer"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                alt="Love"
                              />
                            </div>

                            <!-- Existing chat bubble icon -->
                            <div
                              class="flex h-full flex-col items-start -mt-1.5"
                            >
                              <div
                                on:click={showMessage}
                                on:keypress={handleKeyPress}
                                tabindex="0"
                                role="button"
                                class="cursor-pointer"
                              >
                                <img
                                  class="w-6 h-6 object-cover"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                  alt="Love"
                                />
                              </div>
                            </div>
                            <!--  -->
                            <div
                              class="flex h-full flex-col items-start -mt-1.5"
                            >
                              <div
                                on:click={EditStoriesPosting}
                                on:keypress={handleKeyPress}
                                role="button"
                                tabindex="0"
                                class="w-5 h-5 cursor-pointer"
                                aria-label="Love"
                              >
                                <img
                                  class="object-cover"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/threedots.png"
                                  alt="Love"
                                />
                              </div>
                            </div>
                            <!--  -->
                          </div>
                        </div>
                      </div>
                      <!--  -->
                    </div>
                    <!--  -->
                  </div>
                </div>

                <!-- Utama 1.4 -->
                <!-- Mode Pertama -->
                <div
                  class="h-full w-full grid grid-cols-1 StoriesGaleri2 hidden"
                >
                  <div class="w-full h-[64vh] grid grid-cols-4 relative">
                    <div
                      class="absolute self-center flex item-populer justify-between w-full"
                    >
                      <div class="ml-2 z-10">
                        <svg
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
                    <div class="col-span-2 w-full h-full bg-[#CDC8C8]">
                      <div class="w-[25vw] h-[63vh] absolute">
                        <div class="absolute top-2 left-2 z-10">
                          <!--cc <svg
                            on:click={CloseAllStories}
                                on:keypress={handleKeyPress}
                                role="button"
                                tabindex="0"
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
                          </svg> -->
                        </div>

                        <div
                          class="slider-card-stories-persegi w-full h-full z-index-10"
                        >
                          <div class="w-[15vw] h-[63vh]">
                            <!-- <video
                              autoplay
                              muted
                              class="w-full !h-full"
                              id="video-detail-beranda"
                              src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                            ></video> -->
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-span-2 w-full h-full flex flex-col px-3 pt-3"
                    >
                      <!--  -->
                      <!--  -->
                      <div class="w-full flex justify-between">
                        <div class="flex flex-row w-full">
                          <div class="w-8 h-8">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model7.jpg"
                              alt=""
                            />
                          </div>
                          <div
                            class="h-full flex flex-col items-center ml-2 border"
                          >
                            <div
                              class="h-full flex items-center text-sm font-semibold text-black cursor-pointer"
                              tabindex="0"
                              on:click={showCardAgent}
                              on:keypress={handleKeyPress}
                              role="button"
                            >
                              Mega Aulia R
                            </div>

                            <div class="inline-flex">
                              <!--   <div
                                  class="text-sm -mt-1 font-semibold text-black cursor-pointer"
                                  on:click="{showCardAgent}"
                                  >
                                  Steven R K
                                </div> -->
                              <div
                                class="flex items-center justify-center ml-1 -mt-1.5"
                              >
                                <!-- <div
                                    class="w-4 h-4 flex justify-center items-center relative"
                                    >
                                    <img
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                      alt=""
                                    />
                                  </div> -->
                              </div>
                            </div>
                            <!--  -->
                            <!-- <div class="mb-1 mt-0.5">
                                <label
                                  for="star-agent-utama"
                                  class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                >
                                  <div>
                                    <label
                                      for="star-agent-utama"
                                      class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
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
                                    </label>
                                  </div>
                                </label>
                              </div> -->

                            <!--  -->
                          </div>
                        </div>
                        <!--  -->
                        <div
                          class="w-full h-full flex items-center justify-end"
                        >
                          <div class="rotate-[90deg] mt-2 mr-2">
                            <div
                              on:click={EditStoriesPosting}
                              on:keypress={handleKeyPress}
                              role="button"
                              tabindex="0"
                              class="w-5 h-5 cursor-pointer"
                              aria-label="Love"
                            >
                              <img
                                class="object-cover"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/threedots.png"
                                alt="Love"
                              />
                            </div>
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
                          <h5
                            class="text-lg font-bold tracking-tight text-black"
                          >
                            Rp 5.300.000.000
                          </h5>
                        </div>
                      </div>

                      <!--  -->

                      <!--  -->
                      <div class="grid grid-cols-1">
                        <div
                          class="flex flex-col mb-0 font-normal text-sm text-black"
                        >
                          <div class="flex items-center">
                            <span class="mr-1">LT 80 m² |</span>
                            <span class="mr-1">LB 276 m² |</span>
                            <span class="mr-1">2 KT |</span>
                            <span class="mr-1">5 KM</span>
                          </div>
                          <div class="pb-1">
                            Sunter, Tanjung Priok, Jakarta Utara
                          </div>
                          <!--  -->
                          <div class="mx-1.5">
                            <ul class="list-disc">
                              <ol class="ps-3 list-decimal list-outside">
                                <li class="">
                                  Lingkungan bagus, asri dan nyaman
                                </li>
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
                            <div class="text-xs text-gray-400">
                              1 jam yang lalu
                            </div>
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
                                  tabindex="0"
on:click={showMessage}
on:keypress={handleKeyPress}
role="button"
                                  class="w-6 h-6 object-cover cursor-pointer"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                  alt="Love"
                                />
                              </div>
                              <div
                                class="flex h-full flex-col items-start -mt-1.5"
                                >
                                <img
                                  on:click={EditStoriesPosting}
                                on:keypress={handleKeyPress}
                                role="button"
                                tabindex="0"
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

                <!-- Mode Ketiga -->
                <div class="h-full px-3 mode-card-kedua hidden">
                  <div class="grid grid-cols-3 gap-2">
                    <!--  Cards 1 -->
                    <div
                      class="max-w-sm bg-white cursor-pointer border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                      data-active-tab="1"
                      data-object-id="1604"
                      tabindex="0"
                      on:click={showCardInfoDetail}
                      on:keypress={handleKeyPress}
                      role="button"
                    >
                      <div
                        class="p-1 h-[5vh] bg-white my-1 rounded-t-lg select-none"
                      >
                        <div
                          class="flex items-center justify-between w-full h-full"
                        >
                          <!-- Bagian Kiri: Gambar -->
                          <div class="flex items-center">
                            <img
                              class="w-7 h-7 rounded-full"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                              alt=""
                            />
                          </div>

                          <!-- Bagian Tengah: Teks 'aa' -->
                          <div
                            class="flex-grow flex items-center justify-start ml-1"
                          >
                            <div class="flex flex-col">
                              <div class="inline-flex">
                                <div
                                  class="text-xs font-semibold text-black cursor-pointer"
                                  tabindex="0"
                                  on:click={showMessage}
                                  on:keypress={handleKeyPress}
                                  role="button"
                                >
                                  Budiman Teguhhh
                                </div>
                                <!-- <div
                                    class="flex items-center justify-center ml-1"
                                    >
                                    <div
                                      class="w-3 h-3 flex justify-center items-center relative"
                                    >
                                      <img
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                        alt=""
                                      />
                                    </div>
                                  </div> -->
                              </div>
                              <!--  -->
                              <!-- <div class="">
                                  <label
                                    for="star-agent-utama"
                                    class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                  >
                                    <div>
                                      <label
                                        for="star-agent-utama"
                                        class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                      >
                                        <svg
                                          class="w-2.5 h-2.5 text-yellow-300"
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
                                          class="w-2.5 h-2.5 text-yellow-300"
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
                                          class="w-2.5 h-2.5 text-yellow-300"
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
                                          class="w-2.5 h-2.5 text-gray-300"
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
                                </div> -->
                            </div>
                          </div>

                          <!-- Bagian Kanan: Gambar lainnya -->
                          <!--    <div class="flex items-center">
                              <img
                                class="w-7 h-7 object-contain"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                              />
                            </div> -->
                        </div>
                      </div>

                      <div class="w-full h-[19vh] relative">
                        <div
                          class="slider-card-mode-ketiga mode-mini-video w-full h-full"
                        >
                          <div class="relative h-[19vh] bg-black z-index-10">
                            <img
                              class="w-full h-full object-fill"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh3/rumahc1.jpg"
                              alt=""
                            />
                            <div class="arrow-right-custom-mini">
                              <span class="font-semibold">NEW</span>
                            </div>
                          </div>
                          <div class="relative h-[19vh] bg-black z-index-10">
                            <img
                              class="w-full h-full object-fill"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh4/rumahd1.jpg"
                              alt=""
                            />
                            <div class="arrow-right-custom-mini">
                              <span class="font-semibold">NEW</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col p-1 w-full">
                        <!--  -->
                        <div
                          class="w-full text-gray-500 text-xs flex justify-end"
                        >
                          <div>ID 78AC66</div>
                        </div>
                        <!--  -->
                        <div class="flex flex-row justify-between -mt-1.5">
                          <div>
                            <div class="inline-flex items-center">
                              <h5
                                class="text-md font-bold tracking-tight text-black"
                              >
                                Rp 11.300.000.000
                              </h5>
                            </div>
                          </div>
                          <!-- <div class="mr-1 mt-1">
                                    <img
                                      class="w-6 h-6 rounded-full"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                    />
                                  </div> -->
                        </div>
                        <!--  -->
                        <div class="flex flex-col mb-0.5 font-normal">
                          <div class="flex items-center text-xs text-black">
                            <span class="mr-1">LT 80 m² |</span>
                            <span class="mr-1">LB 276 m² |</span>
                            <span class="mr-1">2 KT |</span>
                            <span class="mr-1">5 KM</span>
                          </div>
                          <div class="text-xs text-black">
                            Sunter, Tanjung Priok, Jakarta
                          </div>
                        </div>
                        <!--  -->
                        <!-- <div class="flex flex-row justify-between w-full">
                            <div class="inline-flex">
                              <img
                                class="w-5 h-5 object-cover mr-2"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-on.png"
                                alt=""
                              />

                              <img
                                class="w-4 h-4 object-cover mr-3 mt-0.5"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                alt=""
                              />

                              <img
                                class="w-5 h-5 object-cover mr-2"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/badge3d.svg"
                                alt=""
                              />
                            </div>
                          </div> -->
                      </div>
                    </div>

                    <!--  HIDDEN SEMENTARA JGN DIHAPUS2 -->
                    <div
                      class="max-w-sm bg-yellow-50 border-2 border-yellow-200 cursor-pointer rounded-lg shadow hidden"
                      data-active-tab="1"
                      data-object-id="1604"
                      tabindex="0"
                      on:click={showCardInfoDetail}
                      on:keypress={handleKeyPress}
                      role="button"
                    >
                      <div class="p-1 h-[5vh] my-1 rounded-t-lg select-none">
                        <div
                          class="flex items-center justify-between w-full h-full"
                        >
                          <!-- Bagian Kiri: Gambar -->
                          <div class="flex items-center">
                            <img
                              class="w-7 h-7 rounded-full"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                              alt=""
                            />
                          </div>

                          <!-- Bagian Tengah: Teks 'aa' -->
                          <div
                            class="flex-grow flex items-center justify-start ml-1"
                          >
                            <div class="flex flex-col">
                              <div class="inline-flex">
                                <div
                                  class="text-xs font-semibold text-black cursor-pointer"
                                  tabindex="0"
                                  on:click={showMessage}
                                  on:keypress={handleKeyPress}
                                  role="button"
                                >
                                  Budiman Teguh
                                </div>
                                <div
                                  class="flex items-center justify-center ml-1"
                                >
                                  <div
                                    class="w-3 h-3 flex justify-center items-center relative"
                                  >
                                    <img
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                              <div class="">
                                <label
                                  for="star-agent-utama"
                                  class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                >
                                  <div>
                                    <label
                                      for="star-agent-utama"
                                      class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                    >
                                      <svg
                                        class="w-2.5 h-2.5 text-yellow-300"
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
                                        class="w-2.5 h-2.5 text-yellow-300"
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
                                        class="w-2.5 h-2.5 text-yellow-300"
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
                                        class="w-2.5 h-2.5 text-gray-300"
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

                          <!-- Bagian Kanan: Gambar lainnya -->
                          <div class="flex items-center">
                            <img
                              class="w-7 h-7 object-contain"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="w-full h-[19vh] relative">
                        <div
                          class="slider-card-mode-ketiga mode-mini-video w-full h-full"
                        >
                          <div class="relative h-[19vh] bg-black z-index-10">
                            <img
                              class="w-full h-full object-fill"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh3/rumahc1.jpg"
                              alt=""
                            />
                            <div class="arrow-right-custom-mini">
                              <span class="font-semibold">NEW</span>
                            </div>
                          </div>
                          <div class="relative h-[19vh] bg-black z-index-10">
                            <img
                              class="w-full h-full object-fill"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/Hunian/Rmh4/rumahd1.jpg"
                              alt=""
                            />
                            <div class="arrow-right-custom-mini">
                              <span class="font-semibold">NEW</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col p-1 w-full">
                        <!--  -->
                        <div
                          class="w-full text-gray-500 text-xs flex justify-end"
                        >
                          <div>ID 78AC66</div>
                        </div>
                        <!--  -->
                        <div class="flex flex-row justify-between -mt-1.5">
                          <div>
                            <div class="inline-flex items-center">
                              <h5
                                class="text-md font-bold tracking-tight text-black"
                              >
                                Rp 11.300.000.000
                              </h5>
                            </div>
                          </div>
                          <!-- <div class="mr-1 mt-1">
                                    <img
                                      class="w-6 h-6 rounded-full"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                    />
                                  </div> -->
                        </div>
                        <!--  -->
                        <div class="flex flex-col mb-2 font-normal">
                          <div class="flex items-center text-xs text-black">
                            <span class="mr-1">LT 80 m² |</span>
                            <span class="mr-1">LB 276 m² |</span>
                            <span class="mr-1">2 KT |</span>
                            <span class="mr-1">5 KM</span>
                          </div>
                          <div class="text-xs text-black">
                            Sunter, Tanjung Priok, Jakarta
                          </div>
                        </div>
                        <!--  -->
                        <div class="flex flex-row justify-between w-full">
                          <div class="inline-flex">
                            <img
                              class="w-5 h-5 object-cover mr-2"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-on.png"
                              alt=""
                            />

                            <img
                              class="w-4 h-4 object-cover mr-3 mt-0.5"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                              alt=""
                            />

                            <img
                              class="w-5 h-5 object-cover mr-2"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/badge3d.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--  -->
              </div>

              <div class="story-galeri-on hidden">
                <!--  -->
                <div
                  class="h-[76.4vh] overflow-y-auto overflow-x-hidden hide-scrollbar bg-white"
                >
                  <!-- Mode Pertama -->
                  <div class="h-full mode-card-pertama grid grid-cols-1">
                    <!-- galeri stories kedua -->
                    <div class="w-full h-full bg-gray-100 flex flex-col">
                      <!--  card judul -->
                      <div class="w-full">
                        <!--  -->
                        <div class="mx-0 mt-0 mb-0">
                          <div class="grid grid-cols-5">
                            <div class="col-span-3">
                              <!--  -->

                              <!--  -->
                            </div>
                            <!--  -->
                            <div
                              class="col-span-2 px-3 pt-2.5 pb-1.5 border-l border-gray-300"
                            >
                              <div class="w-full h-full flex justify-between">
                                <div class="flex flex-row w-full h-full">
                                  <div class="w-8 h-8">
                                    <img
                                      class="w-8 h-8 rounded-full"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="flex flex-col ml-2">
                                    <div class="inline-flex">
                                      <div
                                        class="text-sm -mt-1 font-semibold text-black cursor-pointer"
                                        tabindex="0"
                                        on:click={showCardAgent}
                                        on:keypress={handleKeyPress}
                                        role="button"
                                      >
                                        Budiman
                                      </div>
                                      <div
                                        class="flex items-center justify-center ml-1 -mt-1.5"
                                      >
                                        <div
                                          class="w-4 h-4 flex justify-center items-center relative"
                                        >
                                          <img
                                            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <!--  -->
                                    <div class="mb-1 mt-0.5">
                                      <label
                                        for="star-agent-utama"
                                        class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                      >
                                        <div>
                                          <label
                                            for="star-agent-utama"
                                            class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
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
                                          </label>
                                        </div>
                                      </label>
                                    </div>

                                    <!--  -->
                                  </div>
                                </div>
                                <!--  -->
                                <div
                                  class="w-full h-full flex items-start justify-end"
                                >
                                  <img
                                    class="w-8 h-8 object-contain"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                                    alt=""
                                  />
                                </div>
                                <!--  -->
                              </div>
                            </div>
                            <!--  -->
                          </div>
                        </div>
                      </div>
                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src=""
                                        controls
                                      >
                                        <track
                                          kind="captions"
                                          src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                          srclang="en"
                                          label="English"
                                          default
                                        />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <!--  -->
                              <div class="text-gray-500 text-sm mx-3 pt-2 pb-2">
                                23 jam yang lalu
                              </div>
                              <!--  -->

                              <div
                                class="inline-flex justify-start w-full pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-lg font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>

                              <!--  -->

                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <!--  -->
                              <div class="text-gray-500 text-sm mx-3 pt-2 pb-2">
                                23 jam yang lalu
                              </div>
                              <!--  -->

                              <div
                                class="inline-flex justify-start w-full pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-lg font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>

                              <!--  -->

                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!--  -->
                    </div>

                    <!--  -->
                  </div>
                </div>
                <!--  -->
              </div>

              <!-- Tujuh -->
              <div class="story-galeri-on-tujuh hidden">
                <!--  -->
                <div
                  class="h-[76.4vh] overflow-y-auto overflow-x-hidden hide-scrollbar bg-white"
                >
                  <!-- Mode Pertama -->
                  <div class="h-full mode-card-pertama grid grid-cols-1">
                    <!-- galeri stories ketiga -->
                    <div class="w-full h-full bg-gray-100 flex flex-col">
                      <!--  card judul -->
                      <div class="w-full">
                        <!--  -->
                        <div class="mx-0 mt-0 mb-0">
                          <div class="grid grid-cols-5">
                            <div class="col-span-3">
                              <!--  -->

                              <!--  -->
                            </div>
                            <!--  -->
                            <div
                              class="col-span-2 px-3 pt-2.5 pb-1.5 border-l border-gray-300"
                            >
                              <div class="w-full h-full flex justify-between">
                                <div class="flex flex-row w-full h-full">
                                  <div class="w-8 h-8">
                                    <img
                                      class="w-8 h-8 rounded-full"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="flex flex-col ml-2">
                                    <div class="inline-flex">
                                      <div
                                        class="text-sm -mt-1 font-semibold text-black cursor-pointer"
                                        tabindex="0"
                                        on:click={showCardAgent}
                                        on:keypress={handleKeyPress}
                                        role="button"
                                      >
                                        Budiman
                                      </div>
                                      <div
                                        class="flex items-center justify-center ml-1 -mt-1.5"
                                      >
                                        <div
                                          class="w-4 h-4 flex justify-center items-center relative"
                                        >
                                          <img
                                            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <!--  -->
                                    <div class="mb-1 mt-0.5">
                                      <label
                                        for="star-agent-utama"
                                        class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                      >
                                        <div>
                                          <label
                                            for="star-agent-utama"
                                            class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
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
                                              class="w-3 h-3 text-gray-300 hidden"
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
                                    <!--  -->
                                    <div class="text-gray-400 text-xs">
                                      23 jam
                                    </div>
                                    <!--  -->
                                  </div>
                                </div>
                                <!--  -->
                                <div
                                  class="w-full h-full flex items-start justify-end"
                                >
                                  <img
                                    class="w-8 h-8 object-contain"
                                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                                    alt=""
                                  />
                                </div>
                                <!--  -->
                              </div>
                            </div>
                            <!--  -->
                          </div>
                        </div>
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security9</li>
                                      </ol>
                                    </ul>
                                  </div>
                                  <!--  -->
                                </div>
                                <!--  -->
                                <!--  -->
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full px-3 pt-3 border-b border-gray-300"
                        >
                          <div class="flex flex-col justify-center flex-grow">
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[49vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div class="h-[34vh] flex items-center">
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3 pb-4">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!-- <div class="col-span-5 border-b border-gray-300 mx-3"></div> -->

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!-- card 1 -->
                      <div class="grid grid-cols-5 bg-gray-100">
                        <div
                          class="w-full col-span-3 h-full pl-3 border-b border-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center flex-grow h-full"
                          >
                            <div class="relative">
                              <div class="slider-menu-video">
                                <div class="relative h-[76vh] z-index-10">
                                  <div class="video-wrapper">
                                    <div
                                      class="h-[76vh] flex items-center py-3"
                                    >
                                      <!-- <video
                                        class="w-full !h-full object-contain"
                                        id="video-detail-beranda"
                                        src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                      ></video> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-2 w-full h-full flex flex-col justify-between border-l border-gray-300"
                        >
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div class="flex-1 flex flex-col">
                              <div
                                class="inline-flex justify-start w-full pt-2 pb-2 mx-3"
                              >
                                <div>
                                  <h5
                                    class="text-base font-bold tracking-tight text-black"
                                  >
                                    Rp 11.300.000.000
                                  </h5>
                                </div>
                              </div>
                              <!--  -->
                              <div class="grid grid-cols-1">
                                <div
                                  class="flex flex-col mb-0 font-normal text-sm text-black mx-3"
                                >
                                  <div class="flex items-center">
                                    <span class="mr-1">LT 80 m² |</span>
                                    <span class="mr-1">LB 276 m² |</span>
                                    <span class="mr-1">2 KT |</span>
                                    <span class="mr-1">5 KM</span>
                                  </div>
                                  <div class="pb-1">
                                    Sunter, Tanjung Priok, Jakarta Utara
                                  </div>
                                  <!--  -->
                                  <div class="mx-3">
                                    <ul class="list-disc">
                                      <ol
                                        class="ps-3 list-decimal list-outside"
                                      >
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
                                        <li>Akses jalan raya utama</li>
                                        <li>Perumahan TOWNHOUSE mewah</li>
                                        <li>Row jalan 6.5 meter (2mobil)</li>
                                        <li>One gate security</li>
                                        <li class="">
                                          Lingkungan bagus, asri dan nyaman
                                        </li>
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
                                <div class="flex items-end mx-2 pt-3">
                                  <div
                                    class="grid grid-cols-5 items-center justify-start mt-1 ml-1 gap-2"
                                  >
                                    <!-- Existing heart icon -->
                                    <div class="flex flex-col items-center">
                                      <img
                                        class="w-5 h-5 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                        alt="Love"
                                      />
                                      <div class="text-xs mt-1 text-black">
                                        1.100
                                      </div>
                                    </div>

                                    <!-- Existing share icon -->
                                    <div
                                      class="flex h-full flex-col items-start mr-2 ml-1"
                                    >
                                      <img
                                        class="w-[1.20rem] h-[1.20rem] object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                        alt="Love"
                                      />
                                    </div>

                                    <!-- Existing chat bubble icon -->
                                    <div
                                      class="flex h-full flex-col items-start -mt-1.5"
                                    >
                                      <img
                                        class="w-6 h-6 object-cover"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                        alt="Love"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                            </div>
                          </div>

                          <!--  -->

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!--  -->
                    </div>

                    <!--  -->
                  </div>
                </div>
                <!--  -->
              </div>

              <!-- Delapan -->
              <div class="story-galeri-on-delapan hidden">
                <!--  -->
                <!--  Konten Card buatFavorti -->
                <div
                  class="h-[75.2vh] overflow-y-auto overflow-x-hidden hide-scrollbar bg-white"
                >
                  <!-- Mode Pertama -->
                  <div class="h-full mode-card-pertama grid grid-cols-1">
                    <!-- Model Video PersegiPanjang -->
                    <div
                      class="grid grid-cols-5 bg-gray-100 border-t border-gray-300"
                    >
                      <div
                        class="w-full col-span-3 h-full border-r border-gray-300"
                      >
                        <div class="flex flex-col flex-grow h-full">
                          <div class="relative">
                            <div class="slider-menu-video">
                              <div class="relative h-[77vh] z-index-10">
                                <div class="h-[11.5vh]">
                                  <!--  -->
                                  <div
                                    class="flex items-center justify-beetwen w-full h-full px-2"
                                  >
                                    <div class="flex flex-row w-full">
                                      <div
                                        class="flex flex-col items-center justify-center"
                                      >
                                        <img
                                          class="w-8 h-8 rounded-full"
                                          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                          alt=""
                                        />

                                        <div class="text-gray-400 text-xs pt-1">
                                          23 jam
                                        </div>
                                      </div>

                                      <div class="flex flex-col ml-2">
                                        <div class="inline-flex">
                                          <div
                                            class="text-sm -mt-1 font-semibold text-black cursor-pointer"
                                            tabindex="0"
                                            on:click={showCardAgent}
                                            on:keypress={handleKeyPress}
                                            role="button"
                                          >
                                            Budimanz-delapan
                                          </div>
                                          <div
                                            class="flex items-center justify-center ml-1"
                                          >
                                            <div
                                              class="w-4 h-4 flex justify-center items-center relative"
                                            >
                                              <img
                                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <!--  -->
                                        <div class="">
                                          <label
                                            for="star-agent-utama"
                                            class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                          >
                                            <div>
                                              <label
                                                for="star-agent-utama"
                                                class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
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
                                                  class="w-3 h-3 text-gray-300 hidden"
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
                                    <div class="flex justify-end relative">
                                      <img
                                        class="w-8 h-8 object-contain"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <!--  -->
                                </div>
                                <div class="video-wrapper">
                                  <div class="h-[65vh] flex items-center">
                                    <!-- <video
                                      class="w-full !h-full object-contain"
                                      id="video-detail-beranda"
                                      src="https://www.joglopro.com/bucket/soaraja/video/001.mp4"
                                    ></video> -->
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="col-span-2 w-full h-full flex flex-col justify-between"
                      >
                        <div class="flex-1 flex flex-col">
                          <!--  -->

                          <div class="border-b border-gray-300"></div>
                          <!--  -->
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div
                              class="inline-flex justify-start w-full pt-3 pb-3 mx-3"
                            >
                              <div>
                                <h5
                                  class="text-base font-bold tracking-tight text-black"
                                >
                                  Rp 11.300.000.000
                                </h5>
                              </div>
                            </div>
                            <!--  -->
                            <div class="grid grid-cols-1">
                              <div
                                class="flex flex-col mb-5 font-normal text-sm text-black mx-3"
                              >
                                <div class="flex items-center">
                                  <span class="mr-1">LT 80 m² |</span>
                                  <span class="mr-1">LB 276 m² |</span>
                                  <span class="mr-1">2 KT |</span>
                                  <span class="mr-1">5 KM</span>
                                </div>
                                <div class="pb-1">
                                  Sunter, Tanjung Priok, Jakarta Utara
                                </div>
                                <!--  -->
                                <div class="mx-3">
                                  <ul class="list-disc">
                                    <ol class="ps-3 list-decimal list-outside">
                                      <li class="">
                                        Lingkungan bagus, asri dan nyaman
                                      </li>
                                      <li>Akses jalan raya utama</li>
                                      <li>Perumahan TOWNHOUSE mewah</li>
                                      <li>Row jalan 6.5 meter (2mobil)</li>
                                      <li>One gate security</li>
                                      <li class="">
                                        Lingkungan bagus, asri dan nyaman
                                      </li>
                                      <li>Akses jalan raya utama</li>
                                      <li>Perumahan TOWNHOUSE mewah</li>
                                      <li>Row jalan 6.5 meter (2mobil)</li>
                                      <li>One gate security xxx</li>
                                    </ol>
                                  </ul>
                                </div>
                                <!--  -->
                              </div>
                              <!--  -->
                              <div class="border-t border-gray-300"></div>
                              <!--  -->
                              <div class="flex items-end mx-2 pt-1">
                                <div
                                  class="grid grid-cols-5 items-center justify-start mt-2.5 gap-2"
                                >
                                  <!-- Existing heart icon -->
                                  <div class="flex flex-col items-center">
                                    <img
                                      class="w-5 h-5 object-cover"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                      alt="Love"
                                    />
                                    <div
                                      class="text-xs ml-1 mt-1 text-gray-500"
                                    >
                                      1.100
                                    </div>
                                  </div>

                                  <!-- Existing share icon -->
                                  <div
                                    class="flex h-full flex-col items-start mr-2"
                                  >
                                    <img
                                      class="w-5 h-5 object-cover"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                      alt="Love"
                                    />
                                  </div>

                                  <!-- Existing chat bubble icon -->
                                  <div class="flex h-full flex-col items-start">
                                    <img
                                      class="w-6 h-6 object-cover"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                      alt="Love"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--  -->
                          </div>
                        </div>

                        <!--  -->

                        <!--  -->
                      </div>

                      <!--  -->
                    </div>

                    <!--  -->
                  </div>
                </div>
                <!--  -->
              </div>

              <!-- Sembilan -->
              <div class="story-galeri-on-sembilan hidden">
                <!--  -->
                <!--  Konten Card buatFavorti -->
                <div
                  class="h-[75.2vh] overflow-y-auto overflow-x-hidden hide-scrollbar bg-white"
                >
                  <!-- Mode Pertama -->
                  <div class="h-full mode-card-pertama grid grid-cols-1">
                    <!-- Model Video PersegiPanjang -->
                    <div
                      class="grid grid-cols-5 bg-gray-100 border-t border-gray-300"
                    >
                      <div
                        class="w-full col-span-3 h-full border-r border-gray-300"
                      >
                        <div class="flex flex-col flex-grow h-full">
                          <div class="relative">
                            <div class="slider-menu-video">
                              <div class="relative h-[77vh] z-index-10">
                                <div class="h-[11.5vh]">
                                  <!--  -->
                                  <div
                                    class="flex items-center justify-beetwen w-full h-full px-2"
                                  >
                                    <div class="flex flex-row w-full">
                                      <div
                                        class="flex flex-col items-center justify-center"
                                      >
                                        <img
                                          class="w-8 h-8 rounded-full"
                                          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
                                          alt=""
                                        />

                                        <div class="text-gray-400 text-xs pt-1">
                                          23 jam
                                        </div>
                                      </div>

                                      <div class="flex flex-col ml-2">
                                        <div class="inline-flex">
                                          <div
                                            class="text-sm -mt-1 font-semibold text-black cursor-pointer"
                                            tabindex="0"
                                            on:click={showCardAgent}
                                            on:keypress={handleKeyPress}
                                            role="button"
                                          >
                                            Budimanz-delapan
                                          </div>
                                          <div
                                            class="flex items-center justify-center ml-1"
                                          >
                                            <div
                                              class="w-4 h-4 flex justify-center items-center relative"
                                            >
                                              <img
                                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/verif.png"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <!--  -->
                                        <div class="">
                                          <label
                                            for="star-agent-utama"
                                            class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
                                          >
                                            <div>
                                              <label
                                                for="star-agent-utama"
                                                class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
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
                                                  class="w-3 h-3 text-gray-300 hidden"
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
                                    <div class="flex justify-end relative">
                                      <img
                                        class="w-8 h-8 object-contain"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era2.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <!--  -->
                                </div>
                                <div class="video-wrapper">
                                  <div class="h-[65.5vh] flex items-center">
                                    <!-- <video
                                      class="w-full !h-full object-contain"
                                      id="video-detail-beranda"
                                      src="https://www.joglopro.com/bucket/soaraja/video/videopersegi1.mp4"
                                    ></video> -->
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="col-span-2 w-full h-full flex flex-col justify-between"
                      >
                        <div class="flex-1 flex flex-col">
                          <!--  -->

                          <div class="border-b border-gray-300"></div>
                          <!--  -->
                          <div class="flex-1 flex flex-col">
                            <!--  -->
                            <div
                              class="inline-flex justify-start w-full pt-3 pb-3 mx-3"
                            >
                              <div>
                                <h5
                                  class="text-base font-bold tracking-tight text-black"
                                >
                                  Rp 11.300.000.000
                                </h5>
                              </div>
                            </div>
                            <!--  -->
                            <div class="grid grid-cols-1">
                              <div
                                class="flex flex-col mb-5 font-normal text-sm text-black mx-3"
                              >
                                <div class="flex items-center">
                                  <span class="mr-1">LT 80 m² |</span>
                                  <span class="mr-1">LB 276 m² |</span>
                                  <span class="mr-1">2 KT |</span>
                                  <span class="mr-1">5 KM</span>
                                </div>
                                <div class="pb-1">
                                  Sunter, Tanjung Priok, Jakarta Utara
                                </div>
                                <!--  -->
                                <div class="mx-3">
                                  <ul class="list-disc">
                                    <ol class="ps-3 list-decimal list-outside">
                                      <li class="">
                                        Lingkungan bagus, asri dan nyaman
                                      </li>
                                      <li>Akses jalan raya utama</li>
                                      <li>Perumahan TOWNHOUSE mewah</li>
                                      <li>Row jalan 6.5 meter (2mobil)</li>
                                      <li>One gate security</li>
                                      <li class="">
                                        Lingkungan bagus, asri dan nyaman
                                      </li>
                                      <li>Akses jalan raya utama</li>
                                      <li>Perumahan TOWNHOUSE mewah</li>
                                      <li>Row jalan 6.5 meter (2mobil)</li>
                                      <li>One gate security xxx</li>
                                    </ol>
                                  </ul>
                                </div>
                                <!--  -->
                              </div>
                              <!--  -->
                              <div class="border-t border-gray-300"></div>
                              <!--  -->
                              <div class="flex items-end mx-2 pt-1">
                                <div
                                  class="grid grid-cols-5 items-center justify-start mt-2.5 gap-2"
                                >
                                  <!-- Existing heart icon -->
                                  <div class="flex flex-col items-center">
                                    <img
                                      class="w-5 h-5 object-cover"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/heart-off.png"
                                      alt="Love"
                                    />
                                    <div
                                      class="text-xs ml-1 mt-1 text-gray-500"
                                    >
                                      1.100
                                    </div>
                                  </div>

                                  <!-- Existing share icon -->
                                  <div
                                    class="flex h-full flex-col items-start mr-2"
                                  >
                                    <img
                                      class="w-5 h-5 object-cover"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/share.png"
                                      alt="Love"
                                    />
                                  </div>

                                  <!-- Existing chat bubble icon -->
                                  <div class="flex h-full flex-col items-start">
                                    <img
                                      class="w-6 h-6 object-cover"
                                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/chat-bubble-2.png"
                                      alt="Love"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--  -->
                          </div>
                        </div>

                        <!--  -->

                        <!--  -->
                      </div>

                      <!--  -->
                    </div>

                    <!--  -->
                  </div>
                </div>
                <!--  -->
              </div>

              <div class="story-add-form hidden">
                <div class="h-[76.5vh] px-3 grid grid-cols-1">
                  <div>Tambah Stories</div>
                </div>
              </div>
            </div>
            <!-- EndCardPertama -->
          </div>
        </div>
        <!-- Registrasi blade -->
        <div class="flex flex-col show-form-registrasi hidden">
          <!-- Judul Beranda -->

          <div class="w-full flex justify-between border-b border-gray-300">
            <!--    <div
                    class="font-sf_pro_bold text-2xl px-3 py-2 judulStory w-80"
                    >
                    Registrasi
                  </div> -->

            <div class="font-sf_pro_bold text-2xl px-3 py-2 judulStory w-80">
              Registrasi
            </div>
            <!--  -->

            <div class="flex col justify-center py-1 mt-1">
              <div
                on:click={CloseTabPengaturan}
                on:keypress={handleKeyPress}
                role="button"
                tabindex="0"
                class="flex justify-center items-center flex-col menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
              >
                <div
                  class="w-5 h-5 mt-0.5 mr-0.5 flex justify-center items-center relative"
                >
                  <img
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/back.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <!--  Registrasi -->
          <div
            class="h-[76.5vh] flex justify-center items-center overflow-y-hidden overflow-x-hidden hide-scrollbar form-registrasi"
          >
            <!-- Login  -->
            <div
              class="h-[60vh] w-[25vw] flex justify-center items-center p-5 rounded-xl form-login-with-google bg-white rounded-lg"
            >
              <div class="w-full">
                <div class="my-5">
                  <button
                    class="w-full text-center text-sm py-2 my-2 border-2 border-gray-300 flex space-x-2 items-center justify-center rounded-lg text-black"
                  >
                    <img
                      src="https://www.svgrepo.com/show/355037/google.svg"
                      class="w-5 h-5"
                      alt=""
                    />
                    <span>Login dengan Google</span>
                  </button>
                </div>

                <div class="flex justify-center items-center">
                  <span class="w-full border border-gray-300"></span>
                  <span class="px-4 text-xs text-gray-500">atau</span>
                  <span class="w-full border border-gray-300"></span>
                </div>

                <div class="my-3">
                  <div class="flex flex-col">
                    <div class="flex flex-col space-y-3 mb-3">
                      <div>
                        <label
                          for="email-input1"
                          class="block mb-2 text-sm font-medium text-gray-900"
                          >Nomor Ponsel atau Email</label
                        >
                        <input
                          type="text"
                          id="email-input1"
                          class="border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full"
                        />
                      </div>
                    </div>

                    <div class="flex flex-col space-y-3 mb-2">
                      <div>
                        <label
                          for="password-input1"
                          class="block mb-2 text-sm font-medium text-gray-900"
                          >Kata Sandi</label
                        >
                        <div class="relative">
                          <input
                            id="password-input1"
                            type="password"
                            class="password-input border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full"
                          />
                          <span
                            class="toggle-password absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                          >
                            <img
                              class="view-icon w-4 h-4 object-contain mt-0.5"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/view.png"
                              alt="Lihat"
                            />
                            <img
                              class="hide-icon w-4 h-4 object-contain mt-0.5 hidden"
                              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/hide.png"
                              alt="Sembunyikan"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="text-right text-xs">
                      <div
                        on:click={FormLupaPassword}
                        on:keypress={handleKeyPress}
                        class="text-[#2074D8] font-medium inline-flex space-x-1 items-center cursor-pointer"
                        target="_blank"
                      >
                        <span> Lupa kata sandi? </span>
                      </div>
                    </div>

                    <button
                      on:click={MasukAkunLogin}
                      class="w-full py-2 mt-6 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                    >
                      <span>Login</span>
                    </button>

                    <p class="text-center text-xs">
                      Tidak punya akun?
                      <a
                        on:click={FormRegistration}
                        on:keypress={handleKeyPress}
                        role="button"
                        tabindex="0"
                        class="text-[#2074D8] font-medium inline-flex space-x-1 items-center cursor-pointer"
                        target="_blank"
                      >
                        <span>Registrasi </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->

            <!-- Registration v2 -->
            <div
              class="h-[76.5vh] flex justify-center items-center overflow-y-hidden overflow-x-hidden hide-scrollbar form-registration hidden"
            >
              <div
                class="h-[60vh] w-[25vw] flex justify-center items-center p-5 rounded-xl bg-white rounded-lg"
              >
                <div class="w-full">
                  <div class="my-5">
                    <button
                      class="w-full text-center text-sm py-2 my-2 border-2 border-gray-300 flex space-x-2 items-center justify-center rounded-lg text-black"
                    >
                      <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        class="w-5 h-5"
                        alt=""
                      />
                      <span>Registerrrr dengan Google</span>
                    </button>
                  </div>

                  <div class="flex justify-center items-center">
                    <span class="w-full border border-gray-300"></span>
                    <span class="px-4 text-xs text-gray-500">atau</span>
                    <span class="w-full border border-gray-300"></span>
                  </div>

                  <form action="" class="my-3">
                    <div class="flex flex-col">
                      <div class="flex flex-col space-y-3 mb-3">
                        <div>
                          <label
                            for="email-input2"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Nomor Ponsel atau Email</label
                          >
                          <input
                            type="text"
                            id="email-input2"
                            class="border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full"
                          />
                        </div>
                      </div>

                      <div class="flex flex-col space-y-3 mb-3">
                        <div>
                          <label
                            for="email-input3"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Nama Akun</label
                          >
                          <input
                            type="text"
                            id="email-input3"
                            class="border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full"
                          />
                        </div>
                      </div>

                      <div class="flex flex-col space-y-3 mb-3 hidden">
                        <div>
                          <label
                            for="username-input"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Nama Pengguna</label
                          >
                          <div class="relative">
                            <input
                              id="username-input"
                              type="text"
                              class="username-input border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full pr-10"
                            />
                            <span
                              class="validation-icon absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                            >
                              <img
                                class="tick-icon w-4 h-4 object-contain m-0.5 mt-0.5"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/ticks.png"
                                alt="Benar"
                              />
                              <img
                                class="close-icon w-3.5 h-3.5 object-contain ml-2 mt-0.5"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/close-simbol.png"
                                alt="Salah"
                              />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="flex flex-col space-y-3 mb-2">
                        <div>
                          <label
                            for="password-input1"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Kata Sandi</label
                          >
                          <div class="relative">
                            <input
                              id="password-input1"
                              type="password"
                              class="password-input border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full pr-10"
                            />
                            <span
                              class="toggle-password absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                            >
                              <img
                                class="view-icon w-4 h-4 object-contain mt-0.5"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/view.png"
                                alt="Lihat"
                              />
                              <img
                                class="hide-icon w-4 h-4 object-contain mt-0.5 hidden"
                                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/hide.png"
                                alt="Sembunyikan"
                              />
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        on:click={MasukAkunLogin}
                        class="w-full py-2 mt-6 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                      >
                        <span>Daftar</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Lupa Password -->
            <div
              class="h-[76.5vh] flex justify-center items-center overflow-y-hidden overflow-x-hidden hide-scrollbar form-lupa-password hidden"
            >
              <div
                class="h-[60vh] w-[25vw] flex justify-center items-center p-5 rounded-xl bg-white rounded-lg"
              >
                <div class="w-full">
                  <div class="w-full flex justify-center">
                    <img
                      class="w-14 h-14 object-contain"
                      src="https://www.joglopro.com/bucket/soaraja/image/joglopro/padlock.png"
                      alt=""
                    />
                  </div>

                  <p class="text-center text-sm text-black mt-10">
                    Masukkan nomor ponsel atau email dan kami akan kirimkan
                    tautan ke akun anda.
                  </p>

                  <form action="" class="my-3">
                    <div class="flex flex-col">
                      <div class="flex flex-col space-y-3 mb-3 mt-5">
                        <div>
                          <label
                            for="email-input4"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Nomor Ponsel atau Email</label
                          >
                          <input
                            type="text"
                            id="email-input4"
                            class="border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full"
                          />
                        </div>
                      </div>

                      <button
                        on:click={MasukAkunLogin}
                        class="w-full py-2 mt-3 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                      >
                        <span>Reset</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!--  -->
          </div>
          <!-- Profil -->
          <div
            class="h-full overflow-y-hidden overflow-x-hidden hide-scrollbar hidden form-profil"
          >
            <div class="h-full w-full px-3">
              <!--  -->

              <!-- MenuPengaturanxxxx -->

              <div class="w-full">
                <div class="w-full my-[1.5vh]">
                  <div id="" class="w-[32vw] flex flex-row menu_pengaturaan">
                    <div
                      id=""
                      class="btn_default_tab_menu_pengaturan pr-4 pb-1 pt-1 text-sm text-black cursor-pointer"
                      data-target="#user_pengaturan"
                    >
                      Profil
                    </div>
                    <div
                      class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hidden"
                      data-target="#pengaturan_user_notifikasi"
                    >
                      Notifikasi
                    </div>
                  </div>
                </div>

                <!-- Content untuk menu Biodata -->
                <div
                  id="user_pengaturan"
                  class="menu-content-profil-pengaturans w-full h-[73.5vh]"
                >
                  <div class="h-[70.5vh] form-profil px-0">
                    <!--  -->

                    <div
                      class="bg-transparent rounded-lg h-[70.5vh] overflow-y-auto overflow-x-hidden hide-scrollbar"
                    >
                      <form class="mt-2.5" action="#">
                        <div class="grid grid-cols-2 gap-y-3 gap-x-3">
                          <!-- b -->
                          <div>
                            <!-- Avatarr -->
                            <div
                              class="relative flex flex-col items-center mt-7 mb-5"
                            >
                              <label
                                for="file-upload-avatarr"
                                class="w-24 h-24 p-[0.15rem] bg-white rounded-full flex justify-center items-center cursor-pointer relative group"
                              >
                                <input
                                  id="file-upload-avatar"
                                  type="file"
                                  class="file-input hidden"
                                  accept="image/*"
                                  on:change={previewFilePengaturan}
                                  on:keypress={handleKeyPress}
                                  role="button"
                                  tabindex="0"
                                />
                                <img
                                  id="preview-img-avatar"
                                  src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model6.png"
                                  alt=""
                                  class="w-full h-full bg-white rounded-full object-cover relative"
                                />
                                <!-- Hover Effect Div -->
                                <!-- <div class="w-full h-full group-hover:bg-white opacity-75 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                                              <img class="w-12 h-12 hidden group-hover:block" src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model5.jpg" alt="">
                                            </div> -->
                                <!-- Delete Image Icon initially hidden -->
                                <!--      <div id="delete-icon" class="p-0.5 rounded-full shadow border bg-white absolute bottom-1 right-0 hidden">
                                              <img src="https://www.joglopro.com/bucket/soaraja/image/joglopro/delete.png" alt="Delete Image" class="w-4 h-4 cursor-pointer" onclick="deleteImage()">
                                            </div> -->
                              </label>
                            </div>
                            <!-- username -->

                            <div class="relative w-full mb-2 mt-7">
                              <label
                                class="block text-xs font-bold mb-1"
                                for="username_pengaturan"
                              >
                                Nama Akun
                              </label>
                              <input
                                disabled
                                readonly
                                type="text"
                                id="username_pengaturan"
                                class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                              />
                            </div>

                            <!-- nama profil -->
                            <div class="relative w-full mb-2">
                              <label
                                class="block text-xs font-bold mb-1"
                                for="nama_profil_pengaturan"
                              >
                                Nama Profil (maks. 20 karakter)
                              </label>
                              <input
                                type="text"
                                id="nama_profil_pengaturan"
                                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                              />
                            </div>

                            <!-- Deskripsi singkat -->
                            <div class="relative w-full mb-2">
                              <label
                                class="block text-xs font-bold mb-1"
                                for="deskripsi_singkat_pengaturan"
                              >
                                Bio Singkat (maks. 70 karakter)
                              </label>
                              <textarea
                                name="deskripsi_singkat_pengaturan"
                                id="deskripsi_singkat_pengaturan"
                                class="block py-1.5 px-2 h-[7vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
                                required
                                rows="9"
                              ></textarea>
                            </div>

                            <!-- Status -->
                            <div class="relative w-full mb-2 mt-[3vh]">
                              <label
                                class="block text-xs font-bold mb-1"
                                for="Status">Status</label
                              >
                              <div
                                class="w-full grid grid-cols-[80px,43px,90px] justify-start"
                              >
                                <div class="w-full flex items-center">
                                  <span class="text-sm text-black"
                                    >Non Agen</span
                                  >
                                </div>
                                <div class="w-full flex items-center">
                                  <label
                                    class="relative inline-flex cursor-pointer w-full"
                                  >
                                    <input
                                      type="checkbox"
                                      id="toggleSwitchAgenNonAgen"
                                      value=""
                                      class="sr-only peer"
                                      on:click={toggleAgenNonAgen}
                                      on:keypress={handleKeyPress}
                                      role="button"
                                      tabindex="0"
                                    />
                                    <div
                                      class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] -after:start-[0.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                    ></div>
                                  </label>
                                </div>
                                <div class="w-full flex items-center">
                                  <span class="text-sm text-black">Agen</span>
                                </div>
                              </div>
                            </div>

                            <div class="relative w-full mb-2 mt-[3vh]">
                              <div class="grid grid-cols-[1fr,80px]">
                                <div class="w-full">
                                  <label
                                    class="block text-xs font-bold mb-1"
                                    for="afiliasi_pengaturan"
                                  >
                                    Afiliasi
                                  </label>

                                  <textarea
                                    style="
                                            resize: none;
                                            margin: 0;
                                            padding: 0.3rem;
                                          "
                                    disabled
                                    name="afiliasi"
                                    id="afiliasi_pengaturan"
                                    class="block py-1.5 px-2 h-[7vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
                                    required
                                    rows="9"
                                  ></textarea>
                                </div>

                                <div class="w-full flex flex-col">
                                  <div
                                    class="ml-2.5 w-full h-full flex items-center justify-start"
                                  >
                                    <label class="block text-xs font-bold mb-1">
                                      Logo
                                    </label>
                                  </div>

                                  <div
                                    id="uploadContainer"
                                    class="w-[4.6vw] h-[7vh] flex items-center justify-end border border-gray-200 ml-2.5 rounded-lg bg-gray-200 p-1.5"
                                  >
                                    <!-- Upload Button Container -->
                                    <div
                                      id="imageDefaultPreview"
                                      class="w-full h-full relative cursor-default"
                                    >
                                      <img
                                        class="h-full w-full object-contain"
                                        src="https://www.joglopro.com/bucket/soaraja/image/joglopro/landscape.png"
                                        alt=""
                                      />
                                      <!-- Hidden File Input -->
                                      <input
                                        disabled
                                        type="text"
                                        id="fileUpload"
                                        class="absolute inset-0 w-full h-full opacity-0 cursor-default"
                                      />
                                    </div>

                                    <!-- Image Preview Container -->
                                    <div
                                      id="imagePreviewContainer"
                                      class="hidden w-[4.6vw] h-[7vh] flex justify-start p-1.5"
                                    >
                                      <img
                                        id="imagePreview"
                                        class="h-full w-full object-contain"
                                        src=""
                                        alt="Image preview"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!--  -->
                          </div>

                          <!-- a -->
                          <div class="flex flex-col">
                            <!-- Deskripsi Panjang -->
                            <div class="relative w-full mb-2">
                              <label
                                class="block text-xs font-bold mb-1"
                                for="deskripsi_postingannn_pengaturan"
                              >
                                Bio Lengkap (maks. 500 karakter)
                              </label>
                              <textarea
                                name="deskripsi_postingannn"
                                id="deskripsi_postingannn_pengaturan"
                                class="block px-2 h-[44.5vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
                                required
                                rows="9"
                              ></textarea>
                            </div>

                            <div class="relative w-full mb-2 flex flex-col">
                              <div class="block text-xs font-bold">
                                Spesialisasi Aset
                              </div>
                              <div
                                class="w-full grid grid-cols-2 tipe-aset-pengaturan-disable"
                              >
                                <div class="flex items-center mb-0.5">
                                  <input
                                    disabled={true}
                                    id="neww_ac1"
                                    type="checkbox"
                                    value=""
                                    class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-gray-200"
                                  />
                                  <label
                                    for="ac1"
                                    class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                                    >Rumah Baru</label
                                  >
                                </div>

                                <div class="flex items-center mb-0.5">
                                  <input
                                    disabled={true}
                                    id="neww_ac1"
                                    type="checkbox"
                                    value=""
                                    class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-gray-200"
                                  />
                                  <label
                                    for="ac1"
                                    class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                                    >Rumah Seken</label
                                  >
                                </div>

                                <!--  -->
                              </div>

                              <div
                                class="w-full grid grid-cols-2 tipe-aset-pengaturan-disable"
                              >
                                <div class="flex items-center mb-0.5">
                                  <input
                                    disabled={true}
                                    id="neww_ac1"
                                    type="checkbox"
                                    value=""
                                    class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-gray-200"
                                  />
                                  <label
                                    for="ac1"
                                    class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                                    >Apartemen Baru</label
                                  >
                                </div>

                                <div class="flex items-center mb-0.5">
                                  <input
                                    disabled={true}
                                    id="neww_ac1"
                                    type="checkbox"
                                    value=""
                                    class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-gray-200"
                                  />
                                  <label
                                    for="ac1"
                                    class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                                    >Apartemen Seken</label
                                  >
                                </div>

                                <!--  -->
                              </div>
                            </div>

                            <!-- Spesialisasi Asset -->
                            <div class="relative w-full mb-1">
                              <label
                                class="block text-xs font-bold mb-1"
                                for="speliasi_aset_pengaturan"
                              >
                                Spesialisasi Area
                              </label>
                              <textarea
                                disabled={true}
                                name="speliasi-aset"
                                id="speliasi_aset_pengaturan"
                                class="block py-1 px-2 h-[7vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
                                placeholder="Menteng, Bintaro, Kemang"
                                required
                                rows="9"
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div class="px-5 mt-3 mb-7 flex w-full">
                          <div class="w-full flex justify-center">
                            <button
                              type="button"
                              class="h-8 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3"
                            >
                              Simpan
                            </button>
                          </div>
                        </div>

                        <!--  -->
                      </form>
                    </div>

                    <!--  -->
                  </div>
                </div>

                <!-- Content untuk menu Statistik -->
                <div
                  id="pengaturan_user_notifikasi"
                  class="menu-content-profil-pengaturans w-full h-[73.5vh] hidden"
                >
                  <!--  -->
                  <div class="w-full flex justify-start">Notifikasi</div>
                </div>
              </div>

              <div class="h-full flex flex-col hidden">
                <!--  Card Favorit -->
                <div class="flex flex-col">
                  <!-- Judul Favorit -->
                  <div class="px-0 pt-0">
                    <div
                      class="flex flex-row items-stretch justify-between mt-1.5 border-b border-gray-200"
                    >
                      <!-- Menu Tab Pasang -->

                      <div class="border-b border-gray-200">
                        <!-- Tab Menu Pasang -->
                        <ul
                          class="flex flex-wrap -mb-px text-sm font-medium text-center pr-4"
                          id="DetailPengaturan"
                          data-tabs-toggle="#DetailPengaturanContent"
                          role="tablist"
                        >
                          <!-- Menu Tab Satu Pasang -->
                          <li
                            class="border-b border-gray-200"
                            role="presentation"
                          >
                            <button
                              class="inline-block pr-4 pb-1 pt-2 border-b-2 rounded-t-lg hover:text-black text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                              id="detail-pengaturan-satu-tab"
                              data-tabs-target="#detail-pengaturan-satu"
                              type="button"
                              role="tab"
                              aria-controls="detail-pengaturan-satu"
                              aria-selected="true"
                            >
                              Profil
                            </button>
                          </li>

                          <!-- Menu Tab Tiga Pasang -->
                          <li class="" role="presentation">
                            <button
                              class="inline-block px-3.5 pb-1 pt-2 border-b-2 rounded-t-lg hover:text-black hover:border-gray-300 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-700 dark:hover:text-gray-300"
                              id="detail-pengaturan-tiga-tab"
                              data-tabs-target="#detail-pengaturan-tiga"
                              type="button"
                              role="tab"
                              aria-controls="detail-pengaturan-tiga"
                              aria-selected="false"
                            >
                              Notifikasi
                            </button>
                          </li>
                        </ul>
                      </div>
                      <!--  -->
                    </div>
                  </div>

                  <!-- Konten Card Details pasang -->
                  <div class="w-full h-full">
                    <div class="flex flex-col h-full">
                      <!-- Tabs Pasang -->

                      <div id="DetailPengaturanContent" class="">
                        <!-- Konten Tab Satu Pasang -->
                        <div
                          class="py-2"
                          id="detail-pengaturan-satu"
                          role="tabpanel"
                          aria-labelledby="detail-pengaturan-satu-tab"
                        >
                          <!-- Profil bner-->
                        </div>

                        <!-- Konten Tab Tiga Pasang -->
                        <div
                          class="hidden px-4 py-2"
                          id="detail-pengaturan-tiga"
                          role="tabpanel"
                          aria-labelledby="detail-pengaturan-tiga-tab"
                        >
                          <!-- konten -->
                          Kedua

                          <!--  -->
                        </div>

                        <!--  -->
                      </div>

                      <!--  -->
                    </div>
                  </div>

                  <!--  -->
                </div>
              </div>

              <!--  -->
            </div>
          </div>
          <!--  -->
        </div>

        <!--  -->
      </div>

      <!-- End Konten Utama -->
    </div>

    <!-- End Section Three Main -->
  </div>
</main>

<style>
</style>
