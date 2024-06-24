<script lang="ts">
  import type { Property } from "../service/list_property/type";

  export let properties: Property | undefined;
  export let coordinates: number[] | undefined;
</script>

<div class="h-[62.5vh] overflow-y-auto hide-scrollbar">
  <div class="grid grid-cols-2 gap-2 mb-24">
    <!-- Card Beranda 1 -->
    <!--  -->
    <div class="w-full text-lg col-span-2 sf_pro_bold_judul px-5">Lokasi</div>
    <div
      class="col-span-2 w-full bg-gray-100 rounded-lg h-[21vh] px-5 py-3 flex flex-col"
    >
      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-1/5 font-semibold">Kode Zona</div>
        <div class="w-full basis-4/5">
          <div class="">{properties?.kode_zona ?? "-"}</div>
        </div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-1/5 font-semibold">Zona</div>
        <div class="w-full basis-4/5">
          <div class="">{properties?.nama_zona ?? "-"}</div>
        </div>
      </div>
      <!--  -->
      <div class="flex flex-row mb-2">
        <div class="w-full basis-1/5 font-semibold text-sm">Koordinat</div>
        <div class="w-full basis-4/5 text-sm">
          <a
            href="https://www.google.com/maps/search/{coordinates?.[1]},{coordinates?.[0]}"
            target="blank_"
            class="cursor-pointer text-[#69B3E7]"
            >{coordinates?.[1]}, {coordinates?.[0]}</a
          >
        </div>
      </div>

      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-1/5 font-semibold">Alamat</div>
        <div class="w-full basis-4/5">
          <div class="">
            {properties?.alamat1}, {properties?.kelurahan}, {properties?.kecamatan},
            {properties?.kota}
          </div>
        </div>
      </div>

      <!--  -->
      <!--  -->
      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-1/5 font-semibold">Kelurahan</div>
        <div class="w-full basis-4/5">
          <div class="">{properties?.kelurahan}</div>
        </div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-1/5 font-semibold">Kecamatan</div>
        <div class="w-full basis-4/5">
          <div class="">{properties?.kecamatan}</div>
        </div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-1/5 font-semibold">Kota</div>
        <div class="w-full basis-4/5">
          <div class="">{properties?.kota}</div>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
  <!--  -->
  <div class="grid grid-cols-2 gap-2">
    <!-- Card Beranda 1 -->
    <!--  -->

    <div class="flex flex-row col-span-2">
      <div class="w-full text-lg sf_pro_bold_judul px-5">
        Detail Spesifikasi
      </div>
      <div class="w-full text-lg sf_pro_bold_judul px-5">Fasilitas</div>
    </div>
    <div
      class="w-full bg-gray-100 rounded-lg h-[55.5vh] px-5 py-3 flex flex-col"
    >
      <!--  -->

      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold text-sm">Tipe Properti</div>
        <div class="w-full basis-6/12 ml-0.5">Rumah Baru</div>
      </div>
      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Tahun Dibangun</div>
        <div class="w-full basis-6/12 ml-0.5">2023</div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Surat</div>
        <div class="w-full basis-6/12 ml-0.5">
          <div class="w-full flex flex-col">
            <div class="w-full flex flex-row items-center">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">SHM</div>
            </div>
            <div class="w-full flex flex-row items-center">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">IMB</div>
            </div>
            <div class="w-full flex flex-row items-center">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">PBB</div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="flex flex-row mb-2 mt-2">
        <div class="w-full basis-5/12 font-semibold">Luas Tanah</div>
        <div class="w-full basis-6/12 ml-0.5">
          {properties?.luas_tanah} m²
        </div>
      </div>
      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Luas Bangunan</div>
        <div class="w-full basis-6/12 ml-0.5">
          {properties?.luas_bangunan} m²
        </div>
      </div>

      <!--  -->
      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Kamar Tidur</div>
        <div class="w-full basis-6/12 ml-0.5">
          {properties?.kamar_tidur}
        </div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Kamar Mandi</div>
        <div class="w-full basis-6/12 ml-0.5">
          {properties?.kamar_mandi}
        </div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Listrik</div>
        <div class="w-full basis-6/12 ml-0.5">2200 Watt</div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Air</div>
        <div class="w-full basis-6/12 ml-0.5">PAM</div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Arah Bangunan</div>
        <div class="w-full basis-6/12 ml-0.5">Barat Lauts</div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Garasi</div>
        <div class="w-full basis-6/12 ml-0.5">2</div>
      </div>

      <!--  -->
      <div class="flex flex-row mb-2 text-sm">
        <div class="w-full basis-5/12 font-semibold">Lantai</div>
        <div class="w-full basis-6/12 ml-0.5">2</div>
      </div>

      <!--  -->
    </div>
    <!-- Card Beranda 1 -->
    <div
      class="w-full bg-gray-100 rounded-lg h-[55.5vh] px-5 py-3 flex flex-col"
    >
      <!--  -->
      <!--        <div class="flex flex-row mb-2 text-sm">
                            <div class="w-full basis-1/3 font-semibold">
                              Fasilitasss
                            </div>
                            <div class="w-full basis-2/3">
                              <div class="flex flex-row"></div>
                            </div>
                          </div> -->

      <!--  -->
      <div class="flex flex-row mb-2">
        <div class="w-full basis-3/3 flex flex-row">
          <div class="w-full flex flex-col text-sm">
            <div class="w-full flex flex-row items-center mb-2">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">Carport 2 mobilss</div>
            </div>
            <!--  -->
            <div class="w-full flex flex-row items-center mb-2">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">Swimming pool</div>
            </div>
            <!--  -->
            <div class="w-full flex flex-row items-center mb-2">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">Gated cluster</div>
            </div>
            <!--  -->
            <div class="w-full flex flex-row items-center mb-2">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">Carport 2 mobilss</div>
            </div>
            <!--  -->
            <div class="w-full flex flex-row items-center mb-2">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">Swimming pool</div>
            </div>
            <!--  -->
            <div class="w-full flex flex-row items-center mb-2">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">Gated cluster</div>
            </div>
            <!--  -->
            <!--  -->
            <div class="w-full flex flex-row items-center mb-2">
              <div class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  ></path>
                </svg>
              </div>
              <div class="ml-2">Gated cluster</div>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <!--  -->
    </div>
  </div>
</div>
