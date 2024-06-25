<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { mapStore, markerStore } from "../store/map";
  import { ExtractToken, isExpired } from "../utils/auth";
  import type { Property } from "../service/list_property/type";
  import ListPropertyService from "../service/list_property/list_property";
  import { Alert, Spinner } from "flowbite-svelte";
  import { PropertyByBoundingBox } from "../utils/layers";

  // Before Update Check Token Expired
  beforeUpdate(() => {
    isExpired();
  });

  const { user_id } = ExtractToken();

  // Property Data
  let propertyData: Property = {
    harga: 0,
    judul: "",
    luas_tanah: 0,
    luas_bangunan: 0,
    kelurahan: "",
    kecamatan: "",
    kota: "",
    tipe_aset: "",
    surat: "",
    user_id: Number(user_id) || 0,
    alamat1: "",
    kamar_mandi: 0,
    kamar_tidur: 0,
    deskripsi: "",
    tahun_bangun: 0,
    geom: [],
    tipe_penjual: "",
    like_count: 0,
  };

  // Coordinates Value
  let coordinates_value = "";

  // Form Save Posting
  let form_save_posting: HTMLFormElement;

  // Get Value on map click
  $mapStore?.on("click", "area_jakarta_fill", (e) => {
    // Auto Fill For Coordinates
    const coordinates_clicked = e.lngLat;
    const coordinates = [coordinates_clicked.lat, coordinates_clicked.lng];
    coordinates_value = coordinates.join(",");
    propertyData.geom = [
      coordinates_clicked.lng,
      coordinates_clicked.lat,
    ] as number[];

    // Add Marker and Check link if the page is posting
    if (window.location.pathname === "/posting") {
      $markerStore?.setLngLat(coordinates_clicked).addTo($mapStore);
    }

    // Auto Fill For Kelurahan
    propertyData.kelurahan = e.features?.[0]?.properties?.wadmkd;

    // Auto Fill For Kecamatan
    propertyData.kecamatan = e.features?.[0]?.properties?.wadmkc;

    // Auto Fill For Kota
    propertyData.kota = e.features?.[0]?.properties?.wadmkk;
  });

  // Save Property
  const PropertyService = new ListPropertyService();
  const saveProperty = async () => {
    const spinner = document.getElementsByClassName(
      "spinner-load-input"
    ) as HTMLCollectionOf<HTMLElement>;
    const textSave = document.getElementsByClassName(
      "text-save"
    ) as HTMLCollectionOf<HTMLElement>;
    const alert_success = document.getElementById(
      "alert-save-post-success"
    ) as HTMLDivElement;
    const alert_failed = document.getElementById(
      "alert-save-post-failed"
    ) as HTMLDivElement;

    try {
      // Show Spinner
      spinner[0].classList.remove("hidden");
      textSave[0].classList.add("hidden");

      // Save Property
      await PropertyService.insertProperty(propertyData);

      // Hide Spinner
      spinner[0].classList.add("hidden");
      textSave[0].classList.remove("hidden");

      // Update Property
      PropertyByBoundingBox($mapStore, $mapStore?.getBounds());

      // Remove Marker
      $markerStore?.remove();

      // Reset Form
      form_save_posting.reset();

      // Show Alert
      alert_success.classList.remove("hidden");
      setTimeout(() => {
        alert_success.classList.add("hidden");
      }, 3000);
    } catch (error) {
      // Hide Spinner
      spinner[0].classList.add("hidden");
      textSave[0].classList.remove("hidden");

      // Show Alert
      alert_failed.classList.remove("hidden");
      setTimeout(() => {
        alert_failed.classList.add("hidden");
      }, 3000);
    }
  };
</script>

<div class="h-full flex flex-col">
  <!--  Card Favorit -->
  <div class="flex flex-col card-info-favorit">
    <!-- Judul Favorit -->
    <div class="w-full flex justify-between border-b border-gray-300">
      <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory w-80">
        Postingan Listing
      </div>
    </div>
    <!--  -->

    <div class="h-[76vh] overflow-y-auto hide-scrollbar text-black px-4 py-2">
      <form id="save-posting" bind:this={form_save_posting}>
        <h6 class="text-lg sf_pro_bold_judul mt-3">Detail Rumah</h6>
        <div class="grid grid-cols-2 gap-y-3 gap-x-4">
          <!-- Upload Gambar -->

          <div
            class="w-full h-[46.5vh] mt-6 bg-white flex justify-center items-center rounded shadow"
          >
            <!-- Upload Gambar -->
            <!-- Gambar 1 -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <img
              class="w-20 h-20 object-contain"
              src="data:image/png;base64,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"
            />

            <!--  -->
          </div>

          <!-- Koordinat -->
          <div class="w-full h-full flex flex-col mt-5">
            <div class="w-full mb-4">
              <div class="relative w-full">
                <label class="block text-sm mb-1" for="koordinat">
                  Koordinat
                </label>
                <input
                  readonly={true}
                  type="text"
                  id="koordinat"
                  bind:value={coordinates_value}
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <!-- Luas Tanah m2 -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="luas-tanah">
                    Luas Tanah m²
                  </label>
                  <input
                    type="number"
                    id="luas-tanah"
                    bind:value={propertyData.luas_tanah}
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                  />
                </div>
              </div>

              <!-- Luas Bangunan m2 -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="luas-bangunan">
                    Luas Bangunan m²
                  </label>
                  <input
                    type="number"
                    id="luas-bangunan"
                    bind:value={propertyData.luas_bangunan}
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                  />
                </div>
              </div>

              <!-- Harga -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="harga"> Harga </label>
                  <input
                    type="number"
                    id="harga"
                    bind:value={propertyData.harga}
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                  />
                </div>
              </div>

              <!-- Tahun dibangun -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="tahun-dibangun">
                    Tahun dibangun
                  </label>
                  <input
                    type="number"
                    id="tahun-dibangun"
                    bind:value={propertyData.tahun_bangun}
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
                  />
                </div>
              </div>

              <!-- Jumlah Kamar Tidur -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="kamar-tidur">
                    Kamar Tidur
                  </label>
                  <input
                    type="number"
                    id="kamar-tidur"
                    bind:value={propertyData.kamar_tidur}
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                  />
                </div>
              </div>

              <!-- Jumlah Kamar Mandi -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="kamar-mandi">
                    Kamar Mandi
                  </label>
                  <input
                    type="number"
                    id="kamar-mandi"
                    bind:value={propertyData.kamar_mandi}
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                  />
                </div>
              </div>

              <!-- Penjual -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="jenis-properti">
                    Penjual
                  </label>
                  <select
                    id="jenis-properti"
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                    bind:value={propertyData.tipe_penjual}
                  >
                    <option value="">Pilih Jenis Penjual</option>
                    <option value="Pemilik Langsung"> Pemilik Langsung </option>
                    <option value="Agen">Agen</option>
                    <option value="Pengembang">Pengembang</option>
                  </select>
                </div>
              </div>

              <!-- Jenis Surat -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="jenis-surat">
                    Jenis Surat
                  </label>
                  <select
                    id="jenis-surat"
                    class="border-0 px-2 py-1.5 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                    bind:value={propertyData.surat}
                  >
                    <option value="">Pilih Jenis Surat</option>
                    <option value="SHM">SHM</option>
                    <option value="SHGB">SHGB</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!--  -->

          <div class="col-span-2">
            <div class="flex flex-row">
              <!-- Kelurahan -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="kelurahan">
                    Kelurahan
                  </label>
                  <input
                    readonly={true}
                    type="text"
                    id="kelurahan"
                    bind:value={propertyData.kelurahan}
                    class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                  />
                </div>
              </div>

              <!-- Kecamatan -->
              <div class="w-full px-5">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="kecamatan">
                    Kecamatan
                  </label>
                  <input
                    readonly={true}
                    type="text"
                    id="kecamatan"
                    bind:value={propertyData.kecamatan}
                    class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                  />
                </div>
              </div>

              <!-- Kota -->
              <div class="w-full">
                <div class="relative w-full">
                  <label class="block text-sm mb-1" for="kota"> Kota </label>
                  <input
                    readonly={true}
                    type="text"
                    id="kota"
                    bind:value={propertyData.kota}
                    class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Judul -->
          <div class="w-full">
            <div class="relative w-full">
              <label class="block text-sm mb-2" for="judul"> Judul </label>
              <textarea
                name="judul"
                id="judul"
                class="block p-2.5 h-[9vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 shadow"
                rows="9"
                bind:value={propertyData.judul}
              ></textarea>
            </div>
          </div>

          <!-- Alamat 1 -->
          <div class="w-full">
            <div class="relative w-full">
              <label class="block text-sm mb-2" for="alamat1"> Alamat </label>
              <textarea
                name="alamat1"
                id="alamat1"
                bind:value={propertyData.alamat1}
                class="block p-2.5 h-[9vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 shadow"
                rows="9"
              ></textarea>
            </div>
          </div>

          <!-- Deskripsi -->
          <div class="col-span-2">
            <div class="relative w-full">
              <label class="block text-sm mb-2" for="deskripsi_postingan">
                Deskripsi
              </label>
              <textarea
                name="deskripsi_postingan"
                id="deskripsi_postingan"
                class="block p-2.5 h-[14vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 shadow"
                rows="9"
                bind:value={propertyData.deskripsi}
              ></textarea>
            </div>
          </div>

          <!--  -->
        </div>

        <div class="flex justify-center col-span-2 pt-3 pb-5">
          <button
            type="button"
            class="text-white bg-[#0394F7] hover:bg-[#1877F2] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center"
            on:click={saveProperty}
          >
            <Spinner color="white" class="spinner-load-input hidden" />
            <span class="text-save">Simpan</span>
          </button>
        </div>

        <div class="flex justify-center col-span-2 pt-1 pb-5">
          <Alert color="red" id="alert-save-post-failed" class="hidden">
            <span class="font-bold response-category">Gagal!</span>
            <span class="response-message">Simpan Postingan</span>
          </Alert>

          <Alert color="green" id="alert-save-post-success" class="hidden">
            <span class="font-bold response-category">Berhasil!</span>
            <span class="response-message">Simpan Postingan</span>
          </Alert>
        </div>

        <!--  -->
      </form>
    </div>

    <!--  -->
  </div>
</div>
