<script>
  import { activeTab } from "../assets/js/index.js";

  // Import gambar-gambar yang diperlukan
  import nonaktifGaleri from "../assets/images/icon_menu_baru/nonaktif_aktif_galeri.png";
  import nonaktifRealEstate from "../assets/images/icon_menu_baru/nonaktif_aktif_real-estate-agent.png";
  import nonaktifFavorite from "../assets/images/icon_menu_baru/nonaktif_aktif_favorite.png";
  import nonaktifMessenger from "../assets/images/icon_menu_baru/nonaktif_aktif_messenger.png";
  import nonaktifMore from "../assets/images/icon_menu_baru/nonaktif_aktif_more.png";

  import aktifGaleri from "../assets/images/icon_menu_baru/aktif_galeri.png";
  import aktifRealEstate from "../assets/images/icon_menu_baru/aktif_real-estate-agent.png";
  import aktifFavorite from "../assets/images/icon_menu_baru/aktif_favorite.png";
  import aktifMessenger from "../assets/images/icon_menu_baru/aktif_messenger.png";
  import aktifMore from "../assets/images/icon_menu_baru/aktif_more.png";

  // Array untuk menyimpan gambar-gambar aktif dan nonaktif
  let activeImages = [
    aktifGaleri,
    aktifRealEstate,
    aktifFavorite,
    aktifMessenger,
    aktifMore,
  ];

  let inactiveImages = [
    nonaktifGaleri,
    nonaktifRealEstate,
    nonaktifFavorite,
    nonaktifMessenger,
    nonaktifMore,
  ];

  // Fungsi untuk mengubah tab
  function switchTab(tabIndex) {
    activeTab.set(tabIndex);

    // Mengubah gambar-gambar aktif dan nonaktif
    for (let i = 0; i < activeImages.length; i++) {
      if (i === tabIndex) {
        document.getElementById(`menu-icon-${i}`).src = activeImages[i];
      } else {
        document.getElementById(`menu-icon-${i}`).src = inactiveImages[i];
      }
    }
  }

  // Fungsi untuk menangani tombol keyboard
  function handleKey(event, tabIndex) {
    if (event.key === "Enter" || event.key === " ") {
      switchTab(tabIndex);
    }
  }

  import { Tooltip, Button } from "flowbite-svelte";
  let placement = "left";
</script>

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
      <div class="flex col justify-center py-1">
        <div
          id="MenuSatuTab"
          role="tab"
          aria-selected={$activeTab === 0}
          tabindex="0"
          class="{$activeTab === 0
            ? 'bg-aktif-menu'
            : 'bg-non-aktif-menu'} BtntagSearchAgen BtnRemoveCard flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
          on:click={() => switchTab(0)}
          on:keydown={(event) => handleKey(event, 0)}
        >
          <div class="w-7 h-7 flex justify-center items-center relative">
            <img
              id="menu-icon-0"
              class="menu-icon"
              src={activeImages[0]}
              alt="Galeri"
            />
          </div>
        </div>
        <Tooltip placement="right" color="light" triggeredBy="#MenuSatuTab"
          >Galeri</Tooltip
        >
      </div>

      <!-- Button Pesan -->
      <div class="flex col justify-center py-2">
        <div
          id="MenuTujuhTab"
          role="tab"
          aria-selected={$activeTab === 4}
          tabindex="0"
          class="{$activeTab === 4
            ? 'bg-aktif-menu'
            : 'bg-non-aktif-menu'} flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
          on:click={() => switchTab(4)}
          on:keydown={(event) => handleKey(event, 4)}
        >
          <div class="w-6 h-6 flex justify-center items-center relative">
            <img
              id="menu-icon-4"
              class="menu-icon"
              src={inactiveImages[4]}
              alt="Pesan"
            />
          </div>
        </div>
        <Tooltip placement="right" color="light" triggeredBy="#MenuTujuhTab"
          >Listing Baru</Tooltip
        >
      </div>

      <!-- Button Favorit -->
      <div class="flex col justify-center py-2">
        <div
          id="MenuTigaTab"
          role="tab"
          aria-selected={$activeTab === 2}
          tabindex="0"
          class="{$activeTab === 2
            ? 'bg-aktif-menu'
            : 'bg-non-aktif-menu'} flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
          on:click={() => switchTab(2)}
          on:keydown={(event) => handleKey(event, 2)}
        >
          <div class="w-6 h-6 flex justify-center items-center relative">
            <img
              id="menu-icon-2"
              class="menu-icon"
              src={inactiveImages[2]}
              alt="Favorit"
            />
          </div>
        </div>
        <Tooltip placement="right" color="light" triggeredBy="#MenuTigaTab"
          >Favorit</Tooltip
        >
      </div>

      <!-- Button Posting Listing -->
      <div class="flex col justify-center py-2">
        <div
          id="MenuDelapanBelasTab"
          role="tab"
          aria-selected={$activeTab === 1}
          tabindex="0"
          class="{$activeTab === 1
            ? 'bg-aktif-menu'
            : 'bg-non-aktif-menu'} flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
          on:click={() => switchTab(1)}
          on:keydown={(event) => handleKey(event, 1)}
        >
          <div class="w-6 h-6 flex justify-center items-center relative">
            <img
              id="menu-icon-1"
              class="menu-icon"
              src={inactiveImages[1]}
              alt="Listing Baru"
            />
          </div>
        </div>
        <Tooltip
          placement="right"
          color="light"
          triggeredBy="#MenuDelapanBelasTab">Agen</Tooltip
        >
      </div>

      <!-- Button Agen -->
      <div class="flex col justify-center py-2">
        <div
          id="MenuEmpatTab"
          role="tab"
          aria-selected={$activeTab === 3}
          tabindex="0"
          class="{$activeTab === 3
            ? 'bg-aktif-menu'
            : 'bg-non-aktif-menu'} flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
          on:click={() => switchTab(3)}
          on:keydown={(event) => handleKey(event, 3)}
        >
          <div class="w-6 h-6 flex justify-center items-center relative">
            <img
              id="menu-icon-3"
              class="menu-icon"
              src={inactiveImages[3]}
              alt="Agen"
            />
            <div
              class="absolute inline-flex items-center justify-center px-1 min-w-[18px] h-[21px] text-[11px] font-bold text-white bg-red-600 border border-white rounded-full -top-[0.45rem] -right-[0.7rem]"
            >
              188
            </div>
          </div>
        </div>
        <Tooltip placement="right" color="light" triggeredBy="#MenuEmpatTab"
          >Pesan</Tooltip
        >
      </div>
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
            <div class="w-6 h-6 flex justify-center items-center relative">
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
            <div class="w-5 h-5 flex justify-center items-center relative">
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
      <div class="absolute flex justify-center place-items-center top-3 w-full">
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
            <span class="font-semibold tracking-[0.08em]">Transportasi</span>
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
