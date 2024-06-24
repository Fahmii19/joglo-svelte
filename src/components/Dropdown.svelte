<script lang="ts">
  export let item_list: string[] = [];
  export let id: string = "";

  const showDropdown = () => {
    const dropdown = document.getElementById(id) as HTMLElement;
    dropdown.classList.toggle("hidden");

    const arrowIcon = document.getElementById(
      `arrow-icon-${id}`
    ) as HTMLElement;
    arrowIcon.style.transform =
      arrowIcon.style.transform === "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  };

  const selectItem = (item: string) => {
    const selectedItem = document.getElementById(
      `selected-item-${id}`
    ) as HTMLElement;
    selectedItem.innerHTML = item;

    showDropdown();
  };
</script>

<div>
  <button
    class="inline-flex justify-between items-center pl-1 w-40 h-8 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
    on:click={showDropdown}
  >
    <span id="selected-item-{id}" class="pl-2">{item_list[0] ?? ""}</span>

    <svg
      id="arrow-icon-{id}"
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 mr-2 transition-transform duration-200 transform"
      viewBox="0 0 20 20"
      fill="currentColor"
      style="transform: rotate(0deg);"
    >
      <path
        fill-rule="evenodd"
        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>

  <div
    {id}
    class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 hidden"
  >
    <div class="py-2 p-2">
      {#each item_list as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <a
          id="{id}-item-{item}"
          on:click={() => selectItem(item)}
          class="flex rounded-md px-1 py-1 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
        >
          {item}
        </a>
      {/each}
    </div>
  </div>
</div>
