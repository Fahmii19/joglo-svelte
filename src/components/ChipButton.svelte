<script lang="ts">
  export let name: string;
  export let id: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="pr-3" on:click>
  <button
    id="chip_{id}"
    class="btn-on-map inline-flex justify-center items-center px-4 h-8 text-xs font-medium rounded-full shadow-sm focus:outline-none focus:ring-0 bg-white text-gray-700"
  >
    <span class="font-semibold tracking-wider">{name}</span>
  </button>
</div>
