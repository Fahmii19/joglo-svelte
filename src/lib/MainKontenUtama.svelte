<script>
  import { activeTab } from "../assets/js/index.js";
  import { derived } from "svelte/store";

  // Derived store to get the current active tab value
  const currentTab = derived(activeTab, ($activeTab) => $activeTab);
</script>

<div class="flex flex-col w-full h-full">
  <!-- Konten Galeri -->
  <div
    id="MenuSatuContent"
    role="tabpanel"
    aria-labelledby="MenuSatuTab"
    class="flex flex-col w-full h-full overflow-y-auto"
    class:hidden={$currentTab !== 0}
  >
    <!-- Content for Galeri -->
    satu
  </div>

  <!-- Konten Posting Listing -->
  <div
    id="MenuDelapanBelasContent"
    role="tabpanel"
    aria-labelledby="MenuDelapanBelasTab"
    class="flex flex-col w-full h-full overflow-y-auto"
    class:hidden={$currentTab !== 1}
  >
    <!-- Content for Posting Listing -->
    kedua
  </div>

  <!-- Konten Favorit -->
  <div
    id="MenuTigaContent"
    role="tabpanel"
    aria-labelledby="MenuTigaTab"
    class="flex flex-col w-full h-full overflow-y-auto"
    class:hidden={$currentTab !== 2}
  >
    <!-- Content for Favorit -->
    ketiga
  </div>

  <!-- Konten Agen -->
  <div
    id="MenuEmpatContent"
    role="tabpanel"
    aria-labelledby="MenuEmpatTab"
    class="flex flex-col w-full h-full overflow-y-auto"
    class:hidden={$currentTab !== 3}
  >
    <!-- Content for Agen -->
    keempat
  </div>

  <!-- Konten Pesan -->
  <div
    id="MenuTujuhContent"
    role="tabpanel"
    aria-labelledby="MenuTujuhTab"
    class="flex flex-col w-full h-full overflow-y-auto"
    class:hidden={$currentTab !== 4}
  >
    <!-- Content for Pesan -->
    kelima
  </div>
</div>
