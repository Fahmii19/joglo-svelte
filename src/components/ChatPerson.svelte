<script lang="ts">
  export let last_message = "";
  export let name = "";
  export let image = "";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
  class="menu-pesan-area flex items-center px-3 py-1 transition duration-150 ease-in-out cursor-pointer focus:outline-none hover:bg-slate-200 bg-aktif-menu-pesan"
  on:click
>
  <div class="relative">
    <img class="object-cover w-10 h-10 rounded-full" src={image} alt="" />
  </div>
  <div class="py-2">
    <div class="flex justify-between">
      <div class="flex flex-row w-full justify-between items-center">
        <div>
          <span class="block ml-3 text-gray-700 text-sm">{name}</span>
        </div>
      </div>
    </div>
    <span class="block ml-3 text-xs text-gray-700">{last_message}</span>
  </div>
</span>
