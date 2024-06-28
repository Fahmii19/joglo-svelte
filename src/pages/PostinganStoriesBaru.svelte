<script lang="ts">
  import { Link } from "svelte-routing";

  document.addEventListener("DOMContentLoaded", function () {
    // First set of menu functions
    function activateMenuDua1(target) {
      document
        .querySelectorAll(".menu_pengaturaan_detail div")
        .forEach((item) => {
          item.classList.remove("font-bold");
        });
      document.querySelectorAll(".menu-content-detaill").forEach((content) => {
        content.classList.add("hidden");
      });
      document.querySelector(target).classList.remove("hidden");
    }

    function addMenuEventListener1(menuItem) {
      menuItem.addEventListener("click", function (event) {
        event.preventDefault();
        const target = this.getAttribute("data-target");
        activateMenuDua1(target);
        this.classList.add("font-bold");
      });
    }

    document
      .querySelectorAll(".menu_pengaturaan_detail > div")
      .forEach(addMenuEventListener1);

    const defaultActiveMenu1 = document.querySelector(
      ".btn_default_tab_menu_pengaturan_dua"
    );
    if (defaultActiveMenu1) {
      const target = defaultActiveMenu1.getAttribute("data-target");
      activateMenuDua1(target);
      defaultActiveMenu1.classList.add("font-bold");
    }

    // Second set of menu functions
    function activateMenuDua2(target) {
      document
        .querySelectorAll(".menu_pengaturaan_detail_dua div")
        .forEach((item) => {
          item.classList.remove("font-bold");
        });
      document
        .querySelectorAll(".menu-content-detaill_dua")
        .forEach((content) => {
          content.classList.add("hidden");
        });
      document.querySelector(target).classList.remove("hidden");
    }

    function addMenuEventListener2(menuItem) {
      menuItem.addEventListener("click", function (event) {
        event.preventDefault();
        const target = this.getAttribute("data-target");
        activateMenuDua2(target);
        this.classList.add("font-bold");
      });
    }

    document
      .querySelectorAll(".menu_pengaturaan_detail_dua > div")
      .forEach(addMenuEventListener2);

    const defaultActiveMenu2 = document.querySelector(
      ".btn_default_tab_menu_pengaturan_dua_dua"
    );
    if (defaultActiveMenu2) {
      const target = defaultActiveMenu2.getAttribute("data-target");
      activateMenuDua2(target);
      defaultActiveMenu2.classList.add("font-bold");
    }
  });
</script>

<div class="h-full w-full">
  <div class="h-full flex flex-col">
    <!-- HeaderInti -->
    <div
      class="w-full flex justify-between items-center border-b px-3 py-1.5 border-gray-300"
    >
      <div class="font-sf_pro_bold_judul text-2xl judulStory">
        Postingan Storiess
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
    <div class="h-[76.2vh] story-galeri-off">
      <div class="h-full px-3 flex flex-col">
        <!-- -->

        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-y-1 gap-x-3 mt-3">
            <!-- b -->
            <div>
              <!-- Koordinat -->
              <div class="relative w-full mb-2">
                <label class="block text-xs font-bold mb-1" for="listing_new">
                  Listing ID
                </label>
                <input
                  type="text"
                  id="listing_new"
                  class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                />
              </div>

              <!-- koordinatt -->
              <div class="relative w-full mb-2">
                <label
                  class="block text-xs font-bold mb-1"
                  for="koordinatt_new"
                >
                  Koordinat
                </label>
                <input
                  readonly=""
                  disabled=""
                  type="text"
                  id="koordinatt_new"
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                />
              </div>

              <!-- harga -->
              <div class="relative w-full mb-2">
                <label
                  class="block text-xs font-bold mb-1"
                  for="dua_new_harga_new"
                >
                  Harga (Rp)
                </label>
                <input
                  type="text"
                  id="dua_new_harga_new"
                  class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                />
              </div>

              <div class="w-full grid grid-cols-2 gap-x-2">
                <div class="relative w-full mb-2">
                  <label
                    class="block text-xs font-bold mb-1"
                    for="lb_pengaturann"
                  >
                    Luas Bangunan (m²)
                  </label>
                  <input
                    readonly=""
                    disabled=""
                    type="text"
                    id="lb_pengaturann"
                    class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                  />
                </div>
                <div class="relative w-full mb-2">
                  <label
                    class="block text-xs font-bold mb-1"
                    for="lt_pengaturann"
                  >
                    Luas Tanah (m²)
                  </label>
                  <input
                    readonly=""
                    disabled=""
                    type="text"
                    id="lt_pengaturann"
                    class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                  />
                </div>
              </div>

              <div class="w-full grid grid-cols-2 gap-x-2">
                <div class="relative w-full mb-2">
                  <label
                    class="block text-xs font-bold mb-1"
                    for="kt_utama_pengaturann"
                  >
                    Kamar Tidur
                  </label>
                  <input
                    readonly=""
                    disabled=""
                    type="text"
                    id="kt_utama_pengaturann"
                    class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                  />
                </div>
                <div class="relative w-full mb-2">
                  <label
                    class="block text-xs font-bold mb-1"
                    for="kt_tambahan_pengaturann"
                  >
                    Kamar Mandi
                  </label>
                  <input
                    readonly=""
                    disabled=""
                    type="text"
                    id="kt_tambahan_pengaturann"
                    class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                  />
                </div>
              </div>

              <!-- kelurahannn -->
              <div class="relative w-full mb-2">
                <label
                  class="block text-xs font-bold mb-1"
                  for="kelurahannn_new"
                >
                  Kelurahan
                </label>
                <input
                  readonly=""
                  disabled=""
                  type="text"
                  id="kelurahannn_new"
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                />
              </div>

              <!-- kecamatan -->
              <div class="relative w-full mb-2">
                <label
                  class="block text-xs font-bold mb-1"
                  for="kecamatan_newwww"
                >
                  Kecamatan
                </label>
                <input
                  readonly=""
                  disabled=""
                  type="text"
                  id="kecamatan_newwww"
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                />
              </div>

              <!-- Kotaaa -->
              <div class="relative w-full mb-2">
                <label
                  class="block text-xs font-bold mb-1"
                  for="kotaaa_new_beda"
                >
                  Kota
                </label>
                <input
                  readonly=""
                  disabled=""
                  type="text"
                  id="kotaaa_new_beda"
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
                />
              </div>
            </div>

            <!-- a -->
            <div class="flex flex-col">
              <div class="relative w-full mb-2">
                <label class="block text-xs font-bold mb-1" for="url_videoo">
                  URL Video
                </label>
                <input
                  type="text"
                  id="url_videoo"
                  class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                />
              </div>

              <!-- Deskripsi -->
              <div class="relative w-full mb-2">
                <label
                  class="block text-xs font-bold mb-1"
                  for="deskripsi_storiess_new"
                >
                  Deskripsi (maks. 300 karakter)
                </label>
                <textarea
                  readonly
                  disabled
                  name="deskripsi_storiess_new"
                  id="deskripsi_storiess_new"
                  class="block px-2 h-[54vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
                  required=""
                  rows="9"
                ></textarea>
              </div>

              <!--  -->
            </div>
          </div>

          <div class="flex justify-center col-span-2 pt-3 pb-6">
            <button
              type="button"
              class="text-white bg-[#0394F7] hover:bg-[#1877F2] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Simpan
            </button>
          </div>
        </div>

        <!--  -->
      </div>
    </div>
  </div>
</div>
