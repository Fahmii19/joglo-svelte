<script>
  import { writable } from "svelte/store";

  import IconSukses from "../assets/images/icon_sukses.png";

  export let showModal; // writable(boolean)

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

{#if $showModal}
  <div class="backdrop"></div>
{/if}

<dialog
  bind:this={dialog}
  on:close={handleDialogClose}
  on:click={handleDialogClick}
  on:keydown={handleKeyDown}
  aria-modal="true"
>
  <div class="modal-content" role="document">
    <div
      class="bg-white text-black rounded-lg border border-gray-300 divide-y divide-gray-300 h-[32vh] w-[25vw]"
    >
      <div class="w-full h-full flex flex-col relative">
        <div class="w-full text-md text-black border-b py-2 px-4">
          Listing berhasil disimpan
        </div>
        <div class="h-full w-full flex flex-col items-center justify-center">
          <img src={IconSukses} class="w-20 h-20" alt="Icon Sukses" />
        </div>
      </div>
    </div>
  </div>
</dialog>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  dialog {
    position: fixed;
    top: 35%;
    left: 30%;
    transform: translate(50%, -50%);
    max-width: 32em;
    border-radius: 0.6em;
    border: none;
    padding: 0;
    z-index: 20; /* Ensure dialog is above backdrop */
  }
</style>
