<script lang="ts">
  import { tooltip } from "../store/tootlip";
  export let image = "";
  export let id = "";
  export let title = "";
  export let dimension = 7;
  export let padding_y = 2;
  export let indicator = 0;
  export let href = "";

  const onHover = (): void => {
    tooltip.set(title);
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<a
  class="flex col justify-center py-{padding_y}"
  id="menu_{id}"
  {href}
  on:mouseenter={onHover}
  on:click
>
  <div
    class="bg-aktif-menu BtntagSearchAgen BtnRemoveCard flex justify-center items-center flex-col menus w-11 h-11 cursor-pointer hover:bg-slate-200 hover:rounded-lg"
  >
    <div
      class="w-{dimension} h-{dimension} flex justify-center items-center relative"
    >
      <img class="menu-icon" src={image} alt="" />

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
