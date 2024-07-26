<script>
  import { writable } from "svelte/store";
  import { Alert, Button } from "flowbite-svelte";
  import { InfoCircleSolid, EyeSolid } from "flowbite-svelte-icons";
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
    <Alert color="green">
      <div class="flex items-center gap-3">
        <InfoCircleSolid class="w-5 h-5" />
        <span class="text-lg font-medium">Berhasil!</span>
      </div>
      <p class="mt-2 mb-4 text-sm">
        Listing berhasil dikirim. Anda akan diarahkan ke halaman detail untuk
        melihat hasilnya.
      </p>
    </Alert>
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
    top: 15%;
    right: 35%;
    transform: translate(50%, -50%);
    max-width: 32em;
    border-radius: 0.6em;
    border: none;
    padding: 0;
    z-index: 20; /* Ensure dialog is above backdrop */
  }
</style>
