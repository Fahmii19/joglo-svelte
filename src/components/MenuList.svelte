<script lang="ts">
  // Image Icon Menu
  import GalleryIcon from "../assets/images/galeri.png";
  import PostIcon from "../assets/images/more.png";
  import FavoriteIcon from "../assets/images/favorite.png";
  import AgentIcon from "../assets/images/real-estate-agent.png";
  import SettingIcon from "../assets/images/settings.png";
  import LogOutIcon from "../assets/images/logout.png";
  import MessageIcon from "../assets/images/messenger.png";

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

  //  get value from store
  let tooltipValue = "";

  tooltip.subscribe((value) => {
    tooltipValue = value;
  });
</script>

<!-- Menu -->
<div
  class="w-full h-[85vh] flex flex-col justify-between border-x-[1px] border-gray-300 py-4"
  id="kontenMenuTab"
  data-tabs-toggle="#kontenMenuContent"
  role="tablist"
>
  <!-- Menu Button -->
  <div use:links>
    <Menu
      href="/"
      id={uuidv4()}
      image={GalleryIcon}
      title="Galeri"
      padding_y={1}
    />
    <Menu
      id={uuidv4()}
      image={PostIcon}
      title="Listing Baru"
      dimension={6}
      href="/listing-baru"
    />
    <Menu
      id={uuidv4()}
      image={FavoriteIcon}
      title="Favorit"
      dimension={6}
      href="/favorite"
    />
    <Menu
      id={uuidv4()}
      image={AgentIcon}
      title="Agen"
      dimension={6}
      href="/agent"
    />
    <Menu
      id={uuidv4()}
      image={MessageIcon}
      title="Pesan"
      dimension={6}
      indicator={$unreadMessages}
      href="/chat"
    />
  </div>
  {#if $isLogged}
    <div use:links>
      <Menu
        id={uuidv4()}
        image={SettingIcon}
        title="Pengaturan"
        dimension={6}
        href="/settings"
      />
      <Menu
        id={uuidv4()}
        image={LogOutIcon}
        title="Keluar"
        dimension={6}
        on:click={() => LogOut()}
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
