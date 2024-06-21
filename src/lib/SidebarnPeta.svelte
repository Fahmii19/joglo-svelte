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
