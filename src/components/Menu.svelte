<script lang="ts">
  import { tooltip } from "../store/tootlip";
  import { activeMenu } from "../store/activeMenuStore"; // Impor store

  export let imageNonAktif = "";
  export let imageAktif = "";
  export let id = "";
  export let title = "";
  export let dimension = 7;
  export let padding_y = 2;
  export let indicator = 0;
  export let href = "";

  const onHover = (): void => {
    tooltip.set(title);
  };

  // Subscribe ke store untuk mendapatkan ID tombol aktif
  let activeId: string;
  activeMenu.subscribe((value) => {
    activeId = value;
  });
</script>

<a
  class="flex col justify-center py-{padding_y}"
  data-tooltip-id="menu-tooltip"
  {href}
  on:mouseenter={onHover}
  on:click
>
  <div
    class={`BtntagSearchAgen BtnRemoveCard flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg ${id === activeId ? "bg-gray-200 rounded-lg" : ""}`}
  >
    <div
      class="w-{dimension} h-{dimension} flex justify-center items-center relative"
    >
      <img
        class="menu-icon"
        src={id === activeId ? imageAktif : imageNonAktif}
        alt=""
      />

      {#if indicator > 0}
        <div
          class="absolute inline-flex items-center justify-center px-1 min-w-[18px] h-[21px] text-[11px] font-bold text-white bg-red-600 border border-white rounded-full -top-[0.45rem] -right-[0.7rem]"
        >
          {indicator}
        </div>
      {/if}
    </div>
  </div>
</a>
