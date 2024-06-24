<script lang="ts">
  export let harga: number;
  export let luas_bangunan: number;
  export let luas_tanah: number;
  export let njop: number;

  const CountNilaiAsset = () => {
    let luas_tanah = parseFloat(
      (document.getElementById("luas_tanah_asset") as HTMLInputElement).value
    );
    let njop = parseFloat(
      (document.getElementById("njop_asset") as HTMLInputElement).value
    );
    let angka_pengali = parseFloat(
      (document.getElementById("angka_pengali_asset") as HTMLInputElement).value
    );
    let nilai_tanah = luas_tanah * njop * angka_pengali;
    (document.getElementById("nilai_tanah_asset") as HTMLInputElement).value =
      nilai_tanah.toLocaleString("id-ID");

    let luas_bangunan = parseFloat(
      (document.getElementById("luas_bangunan_asset") as HTMLInputElement).value
    );
    let harga_bangunan = parseFloat(
      (document.getElementById("harga_bangunan_asset") as HTMLInputElement)
        .value
    );
    let usia_bangunan = parseFloat(
      (document.getElementById("usia_bangunan_asset") as HTMLInputElement).value
    );
    let depresiasi_bangunan = parseFloat(
      (document.getElementById("depresiasi_bangunan_asset") as HTMLInputElement)
        .value
    );
    let nilai_bangunan =
      luas_bangunan * harga_bangunan -
      (depresiasi_bangunan / 100) *
        usia_bangunan *
        (luas_bangunan * harga_bangunan);

    (
      document.getElementById("nilai_bangunan_asset") as HTMLInputElement
    ).value = nilai_bangunan.toLocaleString("id-ID");

    let nilai_aset = nilai_tanah + nilai_bangunan;
    (document.getElementById("nilai_aset_asset") as HTMLInputElement).value =
      nilai_aset.toLocaleString("id-ID");
  };
</script>

<div class="grid grid-cols-2 gap-2">
  <!-- Card Beranda 1 -->

  <div
    class="col-span-2 w-full bg-gray-100 rounded-lg h-full px-5 py-3 flex flex-col"
  >
    <!--  -->
    <div class="flex flex-row">
      <div class="w-full basis-5/5 text-left flex flex-col">
        <div class="text-sm sf_pro_bold_judul">Penawaran</div>

        <div class="font-semibold text-lg">
          Rp. {harga.toLocaleString("id-ID")}
        </div>
      </div>
    </div>

    <!--  -->
  </div>

  <!--  -->
  <div class="flex flex-row col-span-2">
    <div class="w-full text-lg sf_pro_bold_judul px-5">Valuasi aset fisik</div>
    <div class="w-full text-lg sf_pro_bold_judul px-5 hidden">Prediksi AI</div>
  </div>
  <!--  -->

  <div class="bg-gray-100 h-full rounded-lg">
    <div
      class="w-full bg-gray-100 rounded-lg h-[55.5vh] px-5 py-3 flex flex-col text-sm"
    >
      <!--  -->

      <!--              <div class="flex flex-row mb-3">
          <div
            class="w-full basis-5/5 font-semibold text-base"
          >
            Perkiraan harga berdasarkan aset fisik
          </div>
        </div> -->
      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm">Luas Tanah (m²)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="120"
            id="luas_tanah_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value={luas_tanah}
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm">Perkiraan NJOP (Rp/m²)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="2.000.000"
            id="njop_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value={njop}
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm">Angka Pengali NJOP</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="2.5"
            id="angka_pengali_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value="2.5"
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-5">
        <div class="w-full text-sm font-semibold">Nilai Tanah (Rp)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="600.000"
            id="nilai_tanah_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value="0"
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm">Luas Bangunan (m²)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="80"
            id="luas_bangunan_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value={luas_bangunan}
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm">Harga Bangunan (Rp/m²)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="3.000.000"
            id="harga_bangunan_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value="3000000"
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm">Usia Bangunan (tahun)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="5"
            id="usia_bangunan_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value="3"
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm">Depresiasi Bangunan (%)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="10"
            id="depresiasi_bangunan_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value="5"
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-5">
        <div class="w-full text-sm font-semibold">Nilai Bangunan (Rp)</div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="216.000.000"
            id="nilai_bangunan_asset"
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
            value="0"
            on:input={CountNilaiAsset}
          />
        </div>
      </div>

      <!-- new1 -->
      <div class="flex flex-row mb-2">
        <div class="w-full text-sm font-semibold">
          Perkiraan Nilai Aset (Rp)
        </div>
        <div>
          <input
            type="text"
            class="hapus_style_kalkulator block w-full p-0 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="800.000.000"
            id="nilai_aset_asset"
            readonly
            style="
                border: none;
                border-bottom: 1px solid;
                text-align: right;
              "
          />
          <div
            style="
                border-bottom: 1px solid;
                margin-top: 0.5vh;
              "
          ></div>
        </div>
      </div>

      <!--  -->
    </div>
  </div>

  <div class="w-full bg-gray-100 rounded-lg h-[55.5vh] p-5 text-sm">
    <!--  -->
    <div class="flex flex-row"></div>

    <!--  -->
  </div>
</div>
