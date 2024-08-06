<script>
  import { writable } from "svelte/store";
  export let showModal; // writable(boolean)
  export let errors; // writable(array)

  let dialog; // HTMLDialogElement

  $: if (dialog && $showModal) dialog.showModal();

  function handleDialogClose() {
    showModal.set(false);
  }

  function handleDialogClick(event) {
    if (event.target === dialog) {
      dialog.close();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      dialog.close();
    }
  }
</script>

<dialog
  bind:this={dialog}
  on:close={handleDialogClose}
  on:click={handleDialogClick}
  on:keydown={handleKeyDown}
  aria-modal="true"
>
  <div class="modal-content" role="document">
    <slot name="header" />
    <div
      class="bg-white text-black rounded-lg border border-gray-300 divide-y divide-gray-300 h-[32vh] w-[25vw] text-center overflow-hidden"
    >
      {#each $errors as error}
        <div
          class="py-2 px-4 w-full text-sm list-none first:rounded-t-lg last:rounded-b-lg border-item"
        >
          {error}
        </div>
      {/each}
    </div>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    position: fixed;
    top: 5%;
    left: 50%;
    /* transform: translate(50%, -50%); */
    max-width: 32em;
    border-radius: 0.6em;
    border: none;
    padding: 0;
  }

  .border-item {
    padding: 10px;
    margin: 5px 0;
  }
</style>
