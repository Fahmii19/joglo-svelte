<script>
  import { Listgroup } from "flowbite-svelte";
  import { writable } from "svelte/store";
  export let showModal; // writable(boolean)
  export let errors; // writable(array)

  let dialog; // HTMLDialogElement

  $: if (dialog && $showModal) dialog.showModal();
</script>

<dialog
  bind:this={dialog}
  on:close={() => showModal.set(false)}
  on:click|self={() => dialog.close()}
>
  <div class="modal-content" on:click|stopPropagation>
    <slot name="header" />
    <Listgroup items={$errors} let:item class="w-[25vw]">
      {item}
    </Listgroup>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    position: fixed;
    top: 30%;
    right: -50%;
    transform: translateY(-50%);
    max-width: 32em;
    border-radius: 0.6em;
    border: none;
    padding: 0;
  }
</style>
