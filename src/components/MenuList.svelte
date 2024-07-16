<script lang="ts">
  // Image Icon Menu
  import aktifGaleri from "../assets/images/button/aktif_galeri.png";
  import aktifRealEstate from "../assets/images/button/aktif_agen.png";
  import aktifFavorite from "../assets/images/button/aktif_favorite.png";
  import aktifMessenger from "../assets/images/button/aktif_messenger.png";
  import aktifMore from "../assets/images/button/aktif_more.png";
  import aktifPengaturan from "../assets/images/button/aktif_pengaturan.png";

  import nonaktifGaleri from "../assets/images/button/nonaktif_aktif_galeri.png";
  import nonaktifRealEstate from "../assets/images/button/nonaktif_agen.png";
  import nonaktifFavorite from "../assets/images/button/nonaktif_aktif_favorite.png";
  import nonaktifMessenger from "../assets/images/button/nonaktif_aktif_messenger.png";
  import nonaktifMore from "../assets/images/button/nonaktif_aktif_more.png";
  import nonaktifPengaturan from "../assets/images/button/nonaktif_pengaturan.png";

  // Login Pengaturan
  let GambarKeluar =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/logout3.png";

  //
  // Component
  import Menu from "./Menu.svelte";
  import { Tooltip } from "flowbite-svelte";
  import { navigate } from "svelte-routing";

  // Login
  import { loggedIn } from "../store/store";

  function handleLogout() {
    loggedIn.set(false);
    activeMenu.set("");
    navigate("/login");
  }

  // UUID
  import { v4 as uuidv4 } from "uuid";

  // Store
  import { tooltip } from "../store/tootlip";
  import { isLogged } from "../store/auth";
  import { LogOut } from "../utils/auth";
  import { links } from "svelte-routing";
  import { unreadMessages } from "../store/chat";
  import { activeMenu } from "../store/activeMenuStore"; // Impor store
  import { RunningTeksAktif, activeComponents } from "../store/store";

  // Login Pengaturan

  //  get value from store
  let tooltipValue = "";

  tooltip.subscribe((value) => {
    tooltipValue = value;
  });

  // Definisikan fungsi untuk mengatur menu aktif
  const setActiveMenu = (id: string) => {
    activeMenu.set(id);

    switch (id) {
      case "menu_listing_baru":
        RunningTeksAktif.set("Teks dinamis untuk Listing Baru");
        activeComponents.set({
          searchBar: false,
          buttonChip: false,
          ButtonCari: false,
          runningTeks: true,
        });
        break;
      case "menu_favorite":
        RunningTeksAktif.set("Teks dinamis untuk Favorit");
        activeComponents.set({
          searchBar: false,
          buttonChip: false,
          ButtonCari: false,
          runningTeks: true,
        });
        break;
      case "menu_agent":
        RunningTeksAktif.set("Teks dinamis untuk Agen");
        activeComponents.set({
          searchBar: false,
          buttonChip: false,
          ButtonCari: false,
          runningTeks: true,
        });
        break;
      case "menu_chat":
        RunningTeksAktif.set("Teks dinamis untuk Pesan");
        activeComponents.set({
          searchBar: false,
          buttonChip: false,
          ButtonCari: false,
          runningTeks: true,
        });
        break;
      case "menu_pengaturan":
        RunningTeksAktif.set("Teks dinamis untuk Pengaturan");
        activeComponents.set({
          searchBar: false,
          buttonChip: false,
          ButtonCari: false,
          runningTeks: true,
        });
        break;
      case "menu_logout":
        RunningTeksAktif.set("Teks dinamis untuk Keluar");
        activeComponents.set({
          searchBar: false,
          buttonChip: false,
          ButtonCari: false,
          runningTeks: true,
        });
        break;
      default:
        RunningTeksAktif.set("");
        activeComponents.set({
          searchBar: true,
          buttonChip: true,
          ButtonCari: true,
          runningTeks: false,
        });
        break;
    }
  };

  //
</script>

<!-- Menu -->
<div
  class="w-full h-[85vh] flex flex-col justify-between border-x-[1px] border-gray-300 py-4"
  id="kontenMenuTab"
  data-tabs-toggle="#kontenMenuContent"
  role="tablist"
>
  <div class="h-full flex flex-col justify-between" use:links>
    <div>
      <Menu
        href="/"
        id="menu_galeri"
        imageNonAktif={nonaktifGaleri}
        imageAktif={aktifGaleri}
        title="Galeri"
        padding_y={1}
        on:click={() => setActiveMenu("menu_galeri")}
      />

      <Menu
        id="menu_listing_baru"
        imageNonAktif={nonaktifMore}
        imageAktif={aktifMore}
        title="Listing Baru"
        dimension={6}
        href="/listing-baru"
        on:click={() => setActiveMenu("menu_listing_baru")}
      />
      <Menu
        id="menu_favorite"
        imageNonAktif={nonaktifFavorite}
        imageAktif={aktifFavorite}
        title="Favorit"
        dimension={6}
        href="/favorit"
        on:click={() => setActiveMenu("menu_favorite")}
      />
      <Menu
        id="menu_agent"
        imageNonAktif={nonaktifRealEstate}
        imageAktif={aktifRealEstate}
        title="Agen"
        dimension={6}
        href="/agen"
        on:click={() => setActiveMenu("menu_agent")}
      />
      <Menu
        id="menu_chat"
        imageNonAktif={nonaktifMessenger}
        imageAktif={aktifMessenger}
        title="Pesan"
        dimension={6}
        indicator={$unreadMessages}
        href="/chat"
        on:click={() => setActiveMenu("menu_chat")}
      />
    </div>

    <!--  -->
    <div>
      {#if $loggedIn}
        <div class="hide_show_button_pengaturan">
          <Menu
            id="menu_pengaturan"
            imageNonAktif={nonaktifPengaturan}
            imageAktif={aktifPengaturan}
            title="Pengaturan"
            dimension={6}
            href="/pengaturan"
            on:click={() => setActiveMenu("menu_pengaturan")}
          />

          <Menu
            id="menu_logout"
            imageNonAktif={GambarKeluar}
            title="Keluar"
            dimension={6}
            href="#"
            on:click={handleLogout}
          />
        </div>
      {/if}
    </div>

    <!--  -->
  </div>
  <!--  -->

  <!-- menu setting dan logout -->

  <!-- {#if $isLogged}
    <div use:links></div>
  {/if} -->

  <!--  -->

  <Tooltip
    triggeredBy="[data-tooltip-id='menu-tooltip']"
    placement="right"
    class="bg-white text-black z-[9999]"
  >
    {tooltipValue}
  </Tooltip>
</div>
