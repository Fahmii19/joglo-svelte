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
  <div class="h-screen bg-gray-100 text-black flex flex-col overflow-y-hidden">
    <!-- Start Header rev.1 -->
    <div class="header">
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
        class="flex justify-end text-sm font-medium cursor-pointer user-login-soaraja"
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
      <!-- Sidebar & Peta -->
      <div class="grid grid-cols-[55px,1fr] border border-red-500">
        <!-- Semua Tab Menu Siderbar -->
        <div
          class="sidebar border border-green-500"
          id="kontenMenuTab"
          data-tabs-toggle="#kontenMenuContent"
          role="tablist"
        >
          <!-- Main Button -->
          <div>
            <!-- Button Galeri -->
            <div
              class="flex col justify-center py-1"
              data-tooltip-target="menu-beranda"
              data-tooltip-placement="right"
            >
              <div
                id="MenuSatuTab"
                data-tabs-target="#MenuSatuContent"
                type="button"
                role="tab"
                aria-controls="MenuSatuContent"
                aria-selected="false"
                class="bg-aktif-menu BtntagSearchAgen BtnRemoveCard flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
                onclik="MenuTabList(4)"
              >
                <div class="w-7 h-7 flex justify-center items-center relative">
                  <img
                    class="menu-icon"
                    data-menu="1"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/icon_menu_baru/aktif_galeri.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              id="menu-beranda"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Galeri
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Button Posting Listing -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="menu-posting"
              data-tooltip-placement="right"
            >
              <div
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
              </div>
            </div>
            <div
              id="menu-posting"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Listing Baru
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Button Favorit -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="menu-favorit"
              data-tooltip-placement="right"
            >
              <div
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
              </div>
            </div>
            <div
              id="menu-favorit"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Favoritt
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Button Agen -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="tooltip-right4"
              data-tooltip-placement="right"
            >
              <div
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
              </div>
            </div>
            <div
              id="tooltip-right4"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Agen
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <!-- Button Pesan -->
            <div
              class="flex col justify-center py-2"
              data-tooltip-target="menu-pesan"
              data-tooltip-placement="right"
            >
              <div
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
              </div>
            </div>
            <div
              id="menu-pesan"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip"
            >
              Pesan
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <!--  -->
          </div>

          <!-- Menu Setting -->
          <div class="akun-login-soaraja hidden">
            <!--  -->
            <div class="">
              <!-- Menu 15 profil -->
              <div
                onclick="ShowProfil()"
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
                onclick="KeluarAkun()"
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

        <!--  PetaJoglo -->
        <div class="w-full h-full">
          <nav id="menu"></nav>
          <div class="relative w-full h-screen">
            <!-- PetaJoglo -->
            <div id="mapSoaraja" class="w-full h-full"></div>

            <!-- Start Button Chip Pada Peta -->
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
            <!-- End Button Chip Pada Peta -->
          </div>
        </div>
      </div>

      <!-- End Menu Navigation & Peta -->

      <!-- Start Konten Utama -->
      <div class="border border-purple-500">On Going</div>
      <!-- End Konten Utama -->
    </div>

    <!-- End Section Three Main -->
  </div>
</main>

<style>
</style>
