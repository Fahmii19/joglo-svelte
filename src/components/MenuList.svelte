<script lang="ts">
  // Image Icon Menu
  import aktifGaleri from "../assets/images/button/aktif_galeri.png";
  import aktifRealEstate from "../assets/images/button/aktif_agen.png";
  import aktifFavorite from "../assets/images/button/aktif_favorite.png";
  import aktifMessenger from "../assets/images/button/aktif_messenger.png";
  import aktifMore from "../assets/images/button/aktif_more.png";

  import nonaktifGaleri from "../assets/images/button/nonaktif_aktif_galeri.png";
  import nonaktifRealEstate from "../assets/images/button/nonaktif_agen.png";
  import nonaktifFavorite from "../assets/images/button/nonaktif_aktif_favorite.png";
  import nonaktifMessenger from "../assets/images/button/nonaktif_aktif_messenger.png";
  import nonaktifMore from "../assets/images/button/nonaktif_aktif_more.png";

  // Component
  import Menu from "./Menu.svelte";
  import { Tooltip } from "flowbite-svelte";

  // UUID
  import { v4 as uuidv4 } from "uuid";

  // Store
  import { tooltip } from "../store/tootlip";
  import { isLogged } from "../store/auth";
  import { LogOut } from "../utils/auth";
  import { links } from "svelte-routing";
  import { unreadMessages } from "../store/chat";
  import { activeMenu } from "../store/activeMenuStore"; // Impor store

  //  get value from store
  let tooltipValue = "";

  tooltip.subscribe((value) => {
    tooltipValue = value;
  });

  // Definisikan fungsi untuk mengatur menu aktif
  const setActiveMenu = (id: string) => {
    activeMenu.set(id);
  };
</script>

<!-- Menu -->
<div
  class="w-full h-[85vh] flex flex-col justify-between border-x-[1px] border-gray-300 py-4"
  id="kontenMenuTab"
  data-tabs-toggle="#kontenMenuContent"
  role="tablist"
>
  <div use:links>
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
  {#if $isLogged}
    <div use:links>
      <Menu
        id="menu_settings"
        imageNonAktif={nonaktifMore}
        imageAktif={aktifMore}
        title="Pengaturan"
        dimension={6}
        href="/settings"
        on:click={() => setActiveMenu("menu_settings")}
      />
      <Menu
        id="menu_logout"
        imageNonAktif={nonaktifMore}
        imageAktif={aktifMore}
        title="Keluar"
        dimension={6}
        on:click={() => {
          LogOut();
          setActiveMenu("menu_logout");
        }}
      />
    </div>
  {/if}
  <Tooltip
    triggeredBy="[id^='menu_']"
    placement="right"
    class="bg-white text-black z-[9999]"
  >
    {tooltipValue}
  </Tooltip>
</div>
