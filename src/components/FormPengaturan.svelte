<script>
  let landscape =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/landscape.png";

  let avatar =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model6.png";
</script>

<div
  class="bg-transparent rounded-lg h-[73vh] overflow-y-auto overflow-x-hidden hide-scrollbar"
>
  <form class="mt-2.5" action="#">
    <div class="grid grid-cols-2 gap-y-3 gap-x-3">
      <!-- b -->
      <div>
        <!-- Avatarr -->
        <div class="relative flex flex-col items-center mt-7 mb-5">
          <label
            for="file-upload-avatarr"
            class="w-24 h-24 p-[0.15rem] bg-white rounded-full flex justify-center items-center cursor-pointer relative group"
          >
            <input
              id="file-upload-avatarr"
              type="file"
              class="file-input hidden"
              accept="image/*"
              onchange="previewFilePengaturan(this);"
            />
            <img
              id="preview-img-avatar"
              src={avatar}
              alt=""
              class="w-full h-full bg-white rounded-full object-cover relative"
            />
          </label>
        </div>
        <!-- username -->

        <div class="relative w-full mb-2 mt-7">
          <label class="block text-xs font-bold mb-1" for="username_pengaturan">
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

        <!-- Status -->
        <div class="relative w-full mb-2 mt-[3vh]">
          <label class="block text-xs font-bold mb-1" for="Status">Status</label
          >
          <div class="w-full grid grid-cols-[80px,43px,90px] justify-start">
            <div class="w-full flex items-center">
              <span class="text-sm text-black">Non Agen</span>
            </div>
            <div class="w-full flex items-center">
              <label class="relative inline-flex cursor-pointer w-full">
                <input
                  type="checkbox"
                  id="toggleSwitchAgenNonAgen"
                  value=""
                  class="sr-only peer"
                  onchange="toggleAgenNonAgen();"
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
                style="resize: none; margin: 0; padding: 0.3rem;"
                disabled
                name="afiliasi"
                id="afiliasi_pengaturan"
                class="block py-1.5 px-2 h-[7vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
                required=""
                rows="9"
              ></textarea>
            </div>

            <div class="w-full flex flex-col">
              <div class="ml-2.5 w-full h-full flex items-center justify-start">
                <div class="block text-xs font-bold mb-1">Logo</div>
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
                    src={landscape}
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
                    alt=""
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
            required=""
            rows="9"
          ></textarea>
        </div>

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
            class="block px-2 h-[23vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
            required=""
            rows="9"
          ></textarea>
        </div>

        <div class="relative w-full mb-1 flex flex-col">
          <div class="block text-xs font-bold">Spesialisasi Aset</div>
          <div class="w-full grid grid-cols-2 tipe-aset-pengaturan-disable">
            <div class="flex items-center mb-0.5">
              <input
                disabled=""
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
                disabled=""
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

            <div class="flex items-center mb-0.5">
              <input
                disabled=""
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
                disabled=""
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
            class="block text-xs font-bold mb-1 pt-0.5"
            for="speliasi_aset_pengaturan"
          >
            Spesialisasi Area
          </label>
          <textarea
            disabled=""
            name="speliasi-aset"
            id="speliasi_aset_pengaturan"
            class="block py-1 px-2 h-[7vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200"
            placeholder="Menteng, Bintaro, Kemang"
            required=""
            rows="9"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="px-5 my-8 flex w-full">
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
