<script>
  import Range from "./Range.svelte";
  import RangePertahun from "./RangePertahun.svelte";
  let value = 0;
</script>

<div class="h-[65vh] overflow-y-hidden hide-scrollbar">
  <div class="h-[67vh] overflow-y-auto hide-scrollbar text-black">
    <form class="formEditListingg RemoveClassformEditListingg">
      <div class="w-full flex flex-row mb-0.5">
        <div class="basis-6/12">
          <div class="text-md font-sf_pro_reguler_new font-bold">Asumsi</div>
        </div>
        <div class="basis-6/12">
          <div class="text-md ml-2 font-sf_pro_reguler_new font-bold">
            Detil Pembayaran
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-y-1 gap-x-5">
        <!-- aa -->

        <div>
          <!-- Harga Properti -->
          <div class="relative w-full flex flex-row mb-2">
            <div class="basis-7/12 flex items-end relative">
              <label
                class="block text-sm absolute bottom-[0.225rem] left-0"
                for="new_perkiraan_njob_m2"
              >
                Harga Properti (Rp)
              </label>
            </div>
            <div class="basis-5/12">
              <input
                value="300.000.000"
                type="text"
                disabled
                readonly
                id="new_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right"
              />
            </div>
          </div>

          <!-- Uang Muka -->
          <div class="relative w-full flex flex-row mb-0">
            <div class="basis-7/12 flex items-end relative">
              <label
                class="block text-sm absolute bottom-[0.225rem] left-0"
                for="new3_perkiraan_njob_m2"
              >
                Uang Muka (Rp)
              </label>
            </div>
            <div class="basis-5/12">
              <input
                value="150.000.000"
                type="text"
                id="new3_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right remove_style_arrow_inputan"
              />
            </div>
          </div>

          <!-- Range -->
          <div class="relative w-full flex flex-row mb-6">
            <div class="basis-7/12 w-full"></div>
            <div class="basis-5/12 w-full">
              <!--  -->
              <div class="w-full my-1">
                <Range
                  value={75}
                  min={50}
                  max={100}
                  initialValue={value}
                  on:change={(e) => (value = e.detail.value)}
                />
              </div>
              <!--  -->
            </div>
          </div>

          <!-- Suku Bunga (%) -->
          <div class="relative w-full flex flex-row mb-0">
            <div class="basis-7/12 flex items-end relative">
              <label
                class="block text-sm absolute bottom-[0.225rem] left-0"
                for="new11_perkiraan_njob_m2"
              >
                Suku Bunga (%)
              </label>
            </div>
            <div class="basis-5/12">
              <input
                value="10"
                type="text"
                id="new11_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right remove_style_arrow_inputan"
              />
            </div>
          </div>

          <!-- Range -->
          <div class="relative w-full flex flex-row mb-[1.9rem]">
            <div class="basis-7/12 w-full"></div>
            <div class="basis-5/12 w-full">
              <!--  -->
              <div class="w-full my-1">
                <Range
                  value={20}
                  min={10}
                  max={100}
                  initialValue={value}
                  on:change={(e) => (value = e.detail.value)}
                />
              </div>
              <!--  -->
            </div>
          </div>

          <!-- Tenor (tahun) -->
          <div class="relative w-full flex flex-row mb-0">
            <div class="basis-7/12 flex items-end relative">
              <label
                class="block text-sm absolute bottom-[0.225rem] left-0"
                for="new12_perkiraan_njob_m2"
              >
                Tenor (tahun)
              </label>
            </div>
            <div class="basis-5/12">
              <input
                value="15"
                type="text"
                id="new12_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right remove_style_arrow_inputan"
              />
            </div>
          </div>

          <!-- Range -->
          <div class="relative w-full flex flex-row mb-2">
            <div class="basis-7/12 w-full"></div>
            <div class="basis-5/12 w-full">
              <!--  -->
              <div class="w-full my-1">
                <RangePertahun
                  value={12}
                  min={5}
                  max={20}
                  initialValue={value}
                  on:change={(e) => (value = e.detail.value)}
                />
              </div>
              <!--  -->
            </div>
          </div>

          <!--  -->
        </div>

        <!-- b -->
        <div>
          <!-- Penawaran -->

          <!-- Bunga Pinjaman (Rp) -->

          <div class="relative w-full flex flex-col mb-4">
            <div class="flex flex-row">
              <div class="basis-7/12 flex items-end relative">
                <label
                  class="block text-sm absolute bottom-[0.225rem] left-0"
                  for="new4_perkiraan_njob_m2"
                >
                  Angsuran (Rp)
                </label>
              </div>
              <div class="basis-5/12">
                <input
                  value="2.000.000"
                  type="text"
                  disabled
                  readonly
                  id="new4_perkiraan_njob_m2"
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right"
                />
              </div>
            </div>
          </div>

          <!-- Uang Muka -->

          <div class="relative w-full flex flex-col mb-2">
            <div class="w-full font-semibold text-sm mb-1">
              Estimasi Pembayaran Pertama
            </div>
            <div class="flex flex-row">
              <div class="basis-7/12 flex items-end relative">
                <label
                  class="block text-sm absolute bottom-[0.225rem] left-0"
                  for="new5_perkiraan_njob_m2"
                >
                  Uang Muka (Rp)
                </label>
              </div>
              <div class="basis-5/12">
                <input
                  value="30.000.000"
                  type="text"
                  disabled
                  readonly
                  id="new5_perkiraan_njob_m2"
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right"
                />
              </div>
            </div>
          </div>

          <!-- Angsuran Pertama -->

          <div class="relative w-full flex flex-row mb-2">
            <div class="basis-7/12 flex items-end relative">
              <label
                class="block text-sm absolute bottom-[0.225rem] left-0"
                for="new6_perkiraan_njob_m2"
              >
                Angsuran (Rp)
              </label>
            </div>
            <div class="basis-5/12">
              <input
                value="80.000.000"
                type="text"
                disabled
                readonly
                id="new6_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right"
              />
            </div>
          </div>

          <!-- Estimasi Biaya Lainnya -->

          <div class="relative w-full flex flex-row mb-2">
            <div class="basis-7/12 flex items-end relative">
              <label
                class="block text-sm absolute bottom-[0.225rem] left-0"
                for="new7_perkiraan_njob_m2"
              >
                Estimasi Biaya Lainnya (Rp)
              </label>
            </div>
            <div class="basis-5/12">
              <input
                value="10.000.000"
                type="text"
                id="new7_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right remove_style_arrow_inputan"
              />
            </div>
          </div>

          <!-- Total -->

          <div class="relative w-full flex flex-row mb-4">
            <div class="basis-7/12 flex items-end relative">
              <!--                                   <label
                                    class="block text-sm absolute bottom-[0.225rem] left-0"
                                    for="new8_perkiraan_njob_m2"
                                    >
                                    Total (Rp)
                                  </label> -->
            </div>
            <div class="basis-5/12">
              <input
                value="220.000.000"
                type="text"
                disabled
                readonly
                id="new8_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right font-bold"
              />
            </div>
          </div>

          <!-- Pinjaman Pokok -->

          <div class="relative w-full flex flex-col mb-2">
            <div class="w-full font-semibold text-sm mb-1">Detil Pinjaman</div>

            <div class="w-full flex flex-row">
              <div class="basis-7/12 flex items-end relative">
                <label
                  class="block text-sm absolute bottom-[0.225rem] left-0"
                  for="new9_perkiraan_njob_m2"
                >
                  Pinjaman Pokok (Rp)
                </label>
              </div>
              <div class="basis-5/12">
                <input
                  value="245.000.000"
                  type="text"
                  disabled
                  readonly
                  id="new9_perkiraan_njob_m2"
                  class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right"
                />
              </div>
            </div>
          </div>

          <!-- Estimasi Bunga Pinjaman -->

          <div class="relative w-full flex flex-row mb-2">
            <div class="basis-7/12 flex items-end relative">
              <label
                class="block text-sm absolute bottom-[0.225rem] left-0"
                for="new10_perkiraan_njob_m2"
              >
                Estimasi Bunga Pinjaman
              </label>
            </div>
            <div class="basis-5/12">
              <input
                value="500.000.000"
                type="text"
                disabled
                readonly
                id="new10_perkiraan_njob_m2"
                class="border-0 px-2 py-1.5 text-black bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-0 w-full text-right"
              />
            </div>
          </div>

          <!--  -->
        </div>
      </div>

      <!--  -->
    </form>
  </div>
</div>
