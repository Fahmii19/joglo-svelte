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
    <ul
      class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-600 w-[25vw] text-center"
    >
      {#each $errors as error}
        <li
          class="py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg border-item"
        >
          {error}
        </li>
      {/each}
    </ul>
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

  .border-item {
    padding: 10px;
    margin: 5px 0;
  }
</style>
