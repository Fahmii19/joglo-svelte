<script>
  import { onMount } from "svelte";
  let transactionType = "dijual"; // Default value

  // Function to get the label text based on the transaction type
  function updateLabelText() {
    return transactionType === "dijual"
      ? "Harga Jual (Rp)"
      : "Harga Sewa Per Bulan (Rp)";
  }

  let labelText = updateLabelText();

  // Update label text when transaction type changes
  function handleTransactionTypeChange(event) {
    transactionType = event.target.value;
    labelText = updateLabelText();
  }

  onMount(() => {
    // Initial label text setting
    labelText = updateLabelText();
  });
</script>

<div class="w-full h-[60.2vh] overflow-y-auto overflow-x-hidden hide-scrollbar">
  <div class="grid grid-cols-2 gap-y-1 gap-x-3">
    <!-- b -->
    <div>
      <!-- Judul -->
      <!-- KelompokA -->
      <div class="relative w-full mb-2.5 flex flex-col" data-group="a">
        <div class="block text-xs font-bold mb-1.5">Tipe Transaksii</div>
        <div class="grid grid-cols-2">
          <div class="flex items-center">
            <input
              id="sale-dijual-a"
              type="radio"
              value="dijual"
              name="sale-type-a"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              checked
              on:change={handleTransactionTypeChange}
            />
            <label for="sale-dijual-a" class="ms-2 text-sm text-black"
              >Dijual</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="sale-disewakan-a"
              type="radio"
              value="disewakan"
              name="sale-type-a"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              on:change={handleTransactionTypeChange}
            />
            <label for="sale-disewakan-a" class="ms-2 text-sm text-black"
              >Disewakan</label
            >
          </div>
        </div>
      </div>

      <!-- Harga dijual dan disewakan -->
      <div class="flex flex-row mb-2.5" data-group="a">
        <div class="basis-6/12">
          <div class="relative w-full">
            <label class="block text-xs font-bold mb-1" for="harga_new">
              <span>{labelText}</span>
            </label>
            <input
              value="2.500.000.000"
              type="text"
              id="neww_harga_new"
              class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
            />
          </div>
        </div>
        <div class="basis-6/12 ml-3">
          <div class="relative w-full">
            <label
              class="block text-xs font-bold mb-1"
              for="tahun_dibangun_new"
            >
              Tahun Dibangun
            </label>
            <input
              value="2024"
              type="number"
              id="neww_tahun_dibangun_new"
              class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
            />
          </div>
        </div>
      </div>

      <!-- Koordinat -->
      <div class="relative w-full mb-2.5">
        <div class="flex flex-row">
          <div class="basis-[49%] w-full">
            <label class="block text-xs font-bold mb-1" for="koordinat_new">
              Koordinat
            </label>
            <input
              value="-6.282301, 106.794109"
              readonly=""
              disabled=""
              type="text"
              id="neww_koordinat_new"
              class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
            />
          </div>
          <!--  -->
          <div class="basis-[40%] w-full ml-3">
            <label class="block text-xs font-bold mb-1" for="koordinat_new">
              Klik dan drop di peta
            </label>
            <div
              class="w-[2.7vw] h-[4.2vh] rounded-lg flex justify-center items-center bg-white relative"
            >
              <img
                id="draggableImage"
                class="w-[1.4vw] h-[2.4vh]"
                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/pin.png"
                alt=""
              />
              <img
                class="w-[1.4vw] h-[2.4vh] absolute"
                src="https://www.joglopro.com/bucket/soaraja/image/joglopro/pin.png"
                alt=""
              />
            </div>
          </div>

          <!--  -->
        </div>
      </div>

      <!-- Kelurahan -->
      <div class="relative w-full mb-2.5">
        <label class="block text-xs font-bold mb-1" for="kelurahan_new">
          Kelurahan
        </label>
        <input
          value="Cilandak Barat"
          readonly=""
          disabled=""
          type="text"
          id="neww_kelurahan_new"
          class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
        />
      </div>

      <!-- Kecamatan -->
      <div class="relative w-full mb-2.5">
        <label class="block text-xs font-bold mb-1" for="kecamatan_new">
          Kecamatan
        </label>
        <input
          value="Cilandak"
          readonly=""
          disabled=""
          type="text"
          id="neww_kecamatan_new"
          class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
        />
      </div>

      <!-- Kota -->
      <div class="relative w-full mb-2.5">
        <label class="block text-xs font-bold mb-1" for="kota_new_beda">
          Kota
        </label>
        <input
          value="Jakarta Selatan"
          readonly=""
          disabled=""
          type="text"
          id="neww_kota_new_beda"
          class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
        />
      </div>

      <div class="relative w-full mb-2.5 mt-3" data-group="a">
        <div class="block text-xs font-bold my-1">Penjual</div>
        <div class="w-full grid grid-cols-3">
          <div class="flex items-center dijual block">
            <input
              id="neww_penjual-agen"
              type="radio"
              value="agen"
              name="jenis-penjual"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
            />
            <label for="penjual-agen" class="ms-2 text-sm text-black"
              >Agen</label
            >
          </div>
          <div class="flex items-center dijual block">
            <input
              id="neww_penjual-pemilik"
              type="radio"
              value="pemilik-langsung"
              name="jenis-penjual"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
            />
            <label for="penjual-pemilik" class="ms-2 text-sm text-black"
              >Pemilik</label
            >
          </div>
          <div class="flex items-center dijual block">
            <input
              id="neww_penjual-pengembang"
              type="radio"
              value="pengembang"
              name="jenis-penjual"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
            />
            <label for="penjual-pengembang" class="ms-2 text-sm text-black"
              >Pengembang</label
            >
          </div>
          <!--  -->
          <div class="flex items-center disewakan hidden">
            <input
              id="neww_penjual-agen"
              type="radio"
              value="agen"
              name="jenis-penjual"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
            />
            <label for="penjual-agen" class="ms-2 text-sm text-black"
              >Agen</label
            >
          </div>
          <div class="flex items-center disewakan hidden">
            <input
              id="neww_penjual-pemilik"
              type="radio"
              value="pemilik-langsung"
              name="jenis-penjual"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
            />
            <label for="penjual-pemilik" class="ms-2 text-sm text-black"
              >Pemilik</label
            >
          </div>

          <!--  -->
        </div>
      </div>
      <!-- Deskripsi bangunan -->

      <div class="w-full flex flex-col mt-2.5">
        <!-- Penjual -->

        <div class="flex flex-row mb-2.5">
          <!-- Luas Tanah m2 -->
          <div class="basis-6/12">
            <div class="relative w-full">
              <label class="block text-xs font-bold mb-1" for="luas_tanah_new">
                Luas Tanah (m²)
              </label>
              <input
                value="300"
                type="number"
                id="neww_luas_tanah_new"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
              />
            </div>
          </div>

          <!-- Luas Bangunan m2 -->
          <div class="basis-6/12 ml-3">
            <div class="relative w-full">
              <label
                class="block text-xs font-bold mb-1"
                for="luas_bangunan_new"
              >
                Luas Bangunan (m²)
              </label>
              <input
                value="150"
                type="number"
                id="neww_luas_bangunan_new"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-row mb-2.5">
          <!-- Jumlah Kamar Tidur Utama -->
          <div class="basis-6/12">
            <div class="relative w-full">
              <label
                class="block text-xs font-bold mb-1"
                for="kamar_tidur_utama_new"
              >
                Kamar Tidur
              </label>
              <input
                value="2"
                type="number"
                id="neww_kamar_tidur_utama_new"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
              />
            </div>
          </div>

          <!-- Jumlah Kamar Tidur Tambahan -->
          <div class="basis-6/12 ml-3">
            <div class="relative w-full">
              <label
                class="block text-xs font-bold mb-1"
                for="kamar_tidur_tambahan_new"
              >
                Kamar Mandi
              </label>
              <input
                value="1"
                type="number"
                id="neww_kamar_tidur_tambahan_new"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-row mb-3">
          <!-- Jumlah Kamar Tidur Utama -->
          <div class="basis-5/12">
            <div class="relative w-full">
              <label
                class="block text-xs font-bold mb-1"
                for="listrik_utama_new"
              >
                Listrik (watt)
              </label>
              <input
                value="450"
                type="number"
                id="neww_listrik_utama_new"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
              />
            </div>
          </div>

          <div class="basis-6/12 ml-2">
            <div class="relative w-full">
              <label
                class="block text-xs font-bold mb-1"
                for="listrik_utama_new"
              >
                Air
              </label>
              <select
                id="neww_"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
              >
                <option value="#">Pilih</option>
                <option selected="" value="PAM">PAM</option>
                <option value="Air Tanah">Air Tanah</option>
              </select>
            </div>
          </div>

          <!-- Jumlah Kamar Tidur Tambahan -->
          <div class="basis-6/12 ml-3">
            <div class="relative w-full">
              <label
                class="block text-xs font-bold mb-1"
                for="air_tambahan_new"
              >
                Arah Bangunan
              </label>
              <select
                id="neww_"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full"
              >
                <option value="#">Pilih</option>
                <option value="Utara">Utara</option>
                <option value="Selatan">Selatan</option>

                <option selected="" value="Barat"> Barat </option>

                <option value="Timur">Timur</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="flex flex-row mb-2.5 mt-1">
        <!-- Jumlah Kamar Tidur Utama -->
        <div class="basis-6/12">
          <div class="relative w-full">
            <div class="block text-xs font-bold mb-1">Sertifikat</div>
            <div class="grid grid-cols-2 w-full h-full">
              <div class="flex items-center">
                <input
                  id="neww_jenis-surat-shm"
                  type="radio"
                  value="shm"
                  name="jenis-surat"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
                />
                <label for="jenis-surat-shm" class="ms-2 text-sm text-black"
                  >SHM</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="neww_jenis-surat-shgb"
                  type="radio"
                  value="shgb"
                  name="jenis-surat"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
                />
                <label for="jenis-surat-shgb" class="ms-2 text-sm text-black"
                  >SHGB</label
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Jenis Surat -->
        <div class="basis-6/12 ml-3">
          <div class="relative w-full">
            <div class="block text-xs font-bold mb-1">Kelengkapan Surat</div>
            <div class="grid grid-cols-2 w-full h-full">
              <div class="flex items-center">
                <input
                  id="neww_jenis-surat-imb"
                  type="checkbox"
                  class="h-3.5 w-3.5 form-check-input hapus_focus_checkbox focus:border focus:ring-0 focus:ring-offset-0 text-blue-600 border-gray-300 border rounded-sm"
                />
                <label for="jenis-surat-imb" class="ms-2 text-sm text-black"
                  >IMB</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="neww_jenis-surat-pbb"
                  type="checkbox"
                  class="h-3.5 w-3.5 form-check-input hapus_focus_checkbox focus:border focus:ring-0 focus:ring-offset-0 text-blue-600 border-gray-300 border rounded-sm"
                />
                <label for="jenis-surat-pbb" class="ms-2 text-sm text-black"
                  >PBB</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <div class="w-full flex flex-col text-sm mt-1">
        <div class="block text-xs font-bold mb-1">Fasilitas</div>

        <div class="w-full grid grid-cols-2">
          <div class="w-full grid grid-rows-3">
            <!-- AC -->
            <div class="flex items-center mb-1">
              <input
                id="neww_ac1"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="ac1"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >AC</label
              >
            </div>

            <!-- Canopy -->
            <div class="flex items-center mb-1">
              <input
                id="neww_canopy1"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="canopy1"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Canopy</label
              >
            </div>

            <!-- Carport -->
            <div class="flex items-center mb-1">
              <input
                id="neww_carport123"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="carport123"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Carport</label
              >
            </div>

            <!-- CCTV -->
            <div class="flex items-center mb-1">
              <input
                id="neww_imb22"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="imb22"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >CCTV</label
              >
            </div>

            <div class="flex items-center mb-1">
              <input
                id="neww_jetpump"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="jetpump"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Garasi</label
              >
            </div>

            <!--  -->
          </div>

          <div class="w-full grid grid-rows-3">
            <!-- One Gate System -->
            <div class="flex items-center mb-1">
              <input
                id="neww_ogs1"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="ogs1"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Jet Pump</label
              >
            </div>

            <!-- Rooftop -->
            <div class="flex items-center mb-1">
              <input
                id="neww_rooftop1"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="rooftop1"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Rooftop</label
              >
            </div>

            <!-- Swimming Pool -->
            <div class="flex items-center mb-1">
              <input
                id="neww_pool1"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="pool1"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Swimming Pool</label
              >
            </div>

            <!-- Taman -->
            <div class="flex items-center mb-1">
              <input
                id="neww_taman1"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="taman1"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Taman</label
              >
            </div>

            <!-- Toren -->
            <div class="flex items-center mb-1">
              <input
                id="neww_toren1"
                type="checkbox"
                value=""
                class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded border-transparent focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label
                for="toren1"
                class="ml-2 mt-[0.150rem] text-sm cursor-pointer font-medium text-gray-900"
                >Toren</label
              >
            </div>
          </div>
        </div>
      </div>

      <!--  -->
    </div>
    <!-- a -->
    <div class="flex flex-col">
      <!--  -->

      <!-- Tipe Asset -->
      <div class="relative w-full mb-2.5 flex flex-col">
        <div class="block text-xs font-bold mb-1.5">Tipe Properti</div>
        <div class="w-full flex flex-col">
          <div class="grid grid-cols-2">
            <div class="flex items-center">
              <input
                id="default-radio-11"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label for="default-radio-11" class="ms-2 text-sm text-black"
                >Apartemen Baru</label
              >
            </div>
            <div class="flex items-center">
              <input
                id="default-radio-12"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label for="default-radio-12" class="ms-2 text-sm text-black"
                >Apartemen Seken</label
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Deskripsi -->
      <div class="relative w-full mb-2">
        <label
          class="block text-xs font-bold mb-1"
          for="deskripsi_postingan_new"
        >
          Deskripsi (maks. 500 karakter)
        </label>
        <textarea
          name="deskripsi_postingan_new"
          id="neww_deskripsi_postingan_new"
          class="block px-4 remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 deskripsi_postingan_new"
          required=""
          rows="9"
        ></textarea>
      </div>

      <!--  -->

      <!-- uploadddd -->

      <div class="relative w-full mb-2.5 mt-1 flex flex-col">
        <div class="block text-xs font-bold mb-1">Foto</div>
        <!--  -->
        <div
          class="w-full area_upload cursor-pointer"
          onclick="triggerFileInput()"
        >
          <input
            id="fileElem"
            type="file"
            class="hidden"
            multiple=""
            accept="image/*"
          />
          <div
            id="drop-area"
            class="w-full h-[24.2vh] bg-white rounded-lg flex position_gambar_upload justify-center items-center"
          >
            <div class="cursor-pointer flex flex-col justify-center">
              <div
                class="hide_gambar_upload w-full flex flex-col justify-center"
              >
                <div
                  class="w-full flex justify-center hidden_foto_after_upload"
                >
                  <img
                    class="w-[6rem] h-[6rem] object-contain"
                    src="https://www.joglopro.com/bucket/soaraja/image/joglopro/landscape.png"
                    alt=""
                  />
                </div>
                <div
                  class="w-full text-center text-xs text-gray-500 hidden_foto_after_upload"
                >
                  Drop foto di sini
                </div>
                <div class="w-full text-center text-xs text-gray-500">
                  maks. 9
                </div>
              </div>
            </div>
            <div
              class="overflow-hidden w-full h-full flex items-center justify-center relative preview_gambar_upload rounded-lg hidden"
            >
              <div class="w-full h-full" id="preview-container"></div>
            </div>
          </div>
        </div>
        <!--  -->

        <!-- BTN RESET -->
        <div class="w-full absolute grid grid-cols-1 top-8 right-3">
          <div class="w-full flex justify-end">
            <button
              type="button"
              class="text-white bg-slate-50 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center mr-0.5 batal_gambar_upload_listing hidden"
              onclick="ResetUploadListing(event)"
            >
              <svg
                class="w-3 h-3 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- BTN PREVIOUS NEXT -->
        <div
          class="w-full grid grid-cols-2 mt-2 absolute top-1/2 transform -translate-y-1/2"
        >
          <div class="w-full flex justify-start">
            <button
              type="button"
              class="text-white bg-[#f1f5f9] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center me-2 ml-4 previous_gambar_upload_listing hidden"
              onclick="showPreviousImage()"
            >
              <svg
                class="w-3.5 h-3.5 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m15 19-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>

          <div class="w-full flex justify-end">
            <button
              type="button"
              class="text-white bg-[#f1f5f9] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center me-2 mr-4 next_gambar_upload_listing hidden"
              onclick="showNextImage()"
            >
              <svg
                class="w-3.5 h-3.5 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Indikator -->
        <div class="w-full absolute grid grid-cols-1 bottom-2">
          <div class="w-full indikator_upload_listing hidden">
            <div
              class="w-full flex flex-row justify-center"
              id="indikator_listing"
            >
              <!-- <span class="flex w-1.5 h-1.5 me-1.5 bg-slate-50 rounded-full"></span> -->
            </div>
          </div>
        </div>

        <!--  -->
      </div>

      <!--  -->
    </div>

    <!--  -->

    <div class="col-span-2"></div>
  </div>
</div>
