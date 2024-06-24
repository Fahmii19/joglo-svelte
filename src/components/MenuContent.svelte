<script lang="ts">
  import Map from "./Map.svelte";
  import MenuList from "./MenuList.svelte";
</script>

<div class="w-full h-[82vh] grid grid-cols-2">
  <div class="grid grid-cols-[55px,1fr]">
    <MenuList />
    <Map />
  </div>
  <div id="kontenMenuContent" class="h-full w-full">
    <slot />
  </div>
</div>
