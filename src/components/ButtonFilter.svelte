<script lang="ts">
  export let id: string;
  export let label: string;
  export let width: string = "w-[17rem]";

  const handleClick = () => {
    const buttonClikced = document.getElementById(
      "konten_dropdown_" + id
    ) as HTMLDivElement;
    const arrowIcon = document.getElementById(
      "arrow_icon_" + id
    ) as HTMLDivElement;

    if (buttonClikced.classList.contains("hidden")) {
      //  Hide all dropdown
      const allDropdown = document.querySelectorAll(
        "[id^='konten_dropdown_']"
      ) as NodeListOf<HTMLDivElement>;
      allDropdown.forEach((dropdown) => {
        dropdown.classList.add("hidden");

        const arrowIcon = document.getElementById(
          "arrow_icon_" + dropdown.id.split("_")[2]
        ) as HTMLDivElement;

        arrowIcon.classList.remove("rotate-180");
      });

      buttonClikced.classList.remove("hidden");
      arrowIcon.classList.add("rotate-180");
    } else {
      buttonClikced.classList.add("hidden");
      arrowIcon.classList.remove("rotate-180");
    }
  };
</script>

<div class="flex items-center px-1">
  <div class="grid grid-cols-1 relative">
    <div class="text-left">
      <button
        on:click={handleClick}
        class="inline-flex justify-center items-center pl-1 w-[5.5rem] h-8 text-xs font-medium rounded-[5px] shadow-sm focus:outline-none focus:ring-0 bg-white text-gray-700 placeholder-gray-700"
      >
        <span class="pl-2">{label}</span>

        <svg
          id="arrow_icon_{id}"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2 transition-transform duration-200 transform text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <div
      id="konten_dropdown_{id}"
      class="hidden absolute top-8 z-20 {width} rounded-[5px] shadow-lg bg-white border-[1px] border-gray-300"
    >
      <slot />
    </div>
  </div>
</div>

<style>
  .rotate-arrow {
    transform: rotate(180deg);
  }
</style>
