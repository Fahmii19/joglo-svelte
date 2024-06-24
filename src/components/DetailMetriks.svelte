<script lang="ts">
  import type { Property } from "../service/list_property/type";

  // Props
  export let properties: Property | undefined;
</script>

<div class="h-[62.5vh] overflow-y-auto hide-scrollbar">
  <div class="grid grid-cols-2 gap-2">
    <!--  -->
    <div class="flex flex-row col-span-2">
      <div class="w-full text-lg text-center sf_pro_bold_judul px-5">
        Livability Index
      </div>
      <div class="w-full text-lg text-center sf_pro_bold_judul px-5">
        <!-- Ecci Indeks -->
      </div>
    </div>
    <!-- Livability Indexsss -->
    <div
      class="w-full bg-gray-100 rounded-lg h-full px-5 pt-3 pb-3 flex flex-col"
    >
      <!--  -->
      <div class="h-[25vh] flex items-center justify-center">
        <div class="radarChart mt-6 -ml-6"></div>
      </div>

      <div
        class="flex flex-row text-2xl my-1 justify-center"
        style="padding: 0.5rem 0 0"
      >
        <div class="font-bold">
          {properties?.score_total_li?.toFixed(2) ?? 0}
        </div>
        <div class="">&nbsp;/&nbsp;</div>
        <div class="">9.00</div>
      </div>

      <div
        style="padding: 0 0 0.5rem 0"
        class="flex flex-row text-sm my-1 justify-center"
      >
        <div class="font-bold">
          {properties?.kategori_li ?? "-"}
        </div>
      </div>

      <div class="w-full h-full mb-0.5">
        <div class="flex flex-col text-sm">
          {#each properties?.deskripsi_param_li || [] as dl, index}
            <div class="">
              {index + 1}. {dl ?? "-"}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
