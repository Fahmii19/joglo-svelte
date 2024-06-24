<script lang="ts">
  export let message = "";
  export let self = false;
  export let image = "";

  let position = self ? "justify-end" : "";
  let bg = self ? "bg-[#69B3E7]" : "bg-slate-200";
  let text = self ? "text-white" : "text-gray-700";
</script>

<div class="chat-message">
  <div class="flex items-end {position}">
    <div
      class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
    >
      <div>
        <span class="px-4 py-2 rounded-xl inline-block {bg} {text}"
          >{message}</span
        >
      </div>
    </div>
    {#if !self}
      <img src={image} alt="My profile" class="w-8 h-8 rounded-full order-1" />
    {/if}
  </div>
</div>
