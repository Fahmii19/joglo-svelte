<script lang="ts">
  import ApartemenFormListing from "../components/ApartemenFormListing.svelte";
  import RukoFormListing from "../components/RukoFormListing.svelte";
  import RumahFormListing from "../components/RumahFormListing.svelte";
  import TanahFormListing from "../components/TanahFormListing.svelte";
  import { navigate } from "svelte-routing";
  import AlertPesanBerhasil from "../components/AlertPesanBerhasil.svelte";
  import { writable } from "svelte/store";
  import { activeMenu } from "../store/activeMenuStore"; // Impor store

  // Store untuk mengelola visibilitas modal
  export let showModal = writable(false);

  // Fungsi untuk menampilkan modal, menunggu 2 detik, lalu mengarahkan
  function handleSend() {
    showModal.set(true);
    setTimeout(() => {
      showModal.set(false);
      navigate("/detail-new");
      activeMenu.set("menu_galeri");
    }, 2000);
  }

  // State untuk tab aktif
  let activeTab = 0;

  // State untuk visibilitas button edit listing
  import { buttonEditListing } from "../store/agent";
  let isVisible = false;
  buttonEditListing.subscribe((value) => {
    isVisible = value;
  });

  document.addEventListener("DOMContentLoaded", function () {
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
    <div class="w-full flex justify-between border-b border-gray-300">
      <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory">
        Listing Baru
      </div>
    </div>
    <div class="h-[76.2vh] story-galeri-off">
      <div class="h-full px-3 flex flex-col">
        <!-- Menu Button -->
        <div class="w-full flex flex-row pt-6 pb-2">
          <div id="" class="w-[32vw] flex flex-row menu_pengaturaan_detail_dua">
            <button
              type="button"
              class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-2.5"
              class:bg_aktif_detail={activeTab === 0}
              on:click={() => (activeTab = 0)}
            >
              Rumah
            </button>
            <button
              type="button"
              class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-2.5"
              class:bg_aktif_detail={activeTab === 1}
              on:click={() => (activeTab = 1)}
            >
              Apartemen
            </button>
            <button
              type="button"
              class="px-4 pb-1 pt-1 text-sm text-black cursor-pointer hover:bg-slate-200 hover:rounded-lg mr-2.5"
              class:bg_aktif_detail={activeTab === 2}
              on:click={() => (activeTab = 2)}
            >
              Ruko
            </button>
          </div>
          {#if isVisible}
            <div class="w-full inline-flex items-end justify-end">
              <div class="">
                <button
                  type="button"
                  class="h-7 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3"
                >
                  Terjual
                </button>
              </div>
              <div class="ml-3">
                <button
                  type="button"
                  class="h-7 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3"
                >
                  Non Aktif
                </button>
              </div>
              <div class="ml-3">
                <button
                  type="button"
                  class="h-7 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3"
                >
                  Hapus
                </button>
              </div>
            </div>
          {/if}
        </div>

        <div class="w-full flex justify-end items-center pb-6">
          <button
            on:click={handleSend}
            type="button"
            class="h-8 bg-[#0394F7] hover:bg-[#1877F2] text-white font-medium rounded-[5px] text-xs px-3"
          >
            Kirim
          </button>
        </div>

        {#if activeTab === 0}
          <RumahFormListing />
        {:else if activeTab === 1}
          <ApartemenFormListing />
        {:else if activeTab === 2}
          <RukoFormListing />
        {/if}
      </div>
    </div>
  </div>
</div>

<AlertPesanBerhasil {showModal} />
