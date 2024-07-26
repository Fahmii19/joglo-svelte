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
      class="bg-white text-black rounded-lg border border-gray-300 divide-y divide-gray-300 h-[30vh] w-[20vw] text-center"
    >
      <div
        class="py-2 px-4 w-full h-full text-xl font-bold flex flex-col relative"
      >
        <div class="flex flex-col py-8">
          <div class="w-full flex justify-center mb-3">
            <img src={IconSukses} class="w-16 h-16 mb-4" alt="Icon Sukses" />
          </div>
          <div>Data berhasil disimpan</div>
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
