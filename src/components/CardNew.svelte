<script lang="ts">
  import ModelImage from "../assets/images/model.jpg";
  import RumahContoh1 from "../assets/images/rumaha1.jpg";
  import { navigate } from "svelte-routing";
  import Menu from "./Menu.svelte";
  import { removeEditListingClass, buttonEditListing } from "../store/agent";

  let isVisible = false;
  removeEditListingClass.subscribe((value) => {
    isVisible = value;
  });

  const handleEditListingClik = () => {
    buttonEditListing.set(true);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="w-full flex flex-col cursor-pointer bg-white rounded-lg"
  id="card-property-1"
  on:click={() => navigate("/detail-new")}
>
  <!--  -->
  <div class="py-1 px-2 h-[7vh]">
    <div class="w-full h-full grid grid-cols-[1fr,40px]">
      <div class="w-full grid grid-cols-[33px,1fr] items-center">
        <div class="w-full">
          <img
            class="w-8 h-8 rounded-full"
            src="https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model11.jpg"
            alt=""
          />
        </div>
        <div class="w-full flex flex-col ml-2">
          <div class="h-full flex items-center inline-flex mt-0.5">
            <div class="text-sm font-semibold text-black cursor-pointer">
              <div class="tracking-[0.060em]">Gunawan Budi Ardivaa2</div>
            </div>
            <div class="flex items-center justify-center ml-1"></div>
          </div>
          <!--  -->
        </div>
      </div>
      {#if isVisible}
        <button on:click={handleEditListingClik}>
          <div class="w-full flex justify-end items-center relative">
            <img
              class="w-5 h-5 mb-0.5 -mr-1 cursor-pointer rotate-[90deg] mr-2"
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/threedots.png"
              alt=""
            />
          </div>
        </button>
      {/if}
    </div>
  </div>
  <!--  -->
  <div class="w-full h-[27vh] relative">
    <img class="w-full h-full object-fill" src={RumahContoh1} alt="" />
  </div>

  <!--  -->
  <div class="px-2 pt-[0.3rem] h-[11.3vh]">
    <div class="w-full text-gray-500 text-xs flex justify-end">
      <div>ID 78AC66</div>
    </div>
    <div class="flex flex-row justify-between -mt-1">
      <div>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <div>
          <div class="inline-flex items-center w-full">
            <h5 class="text-lg font-bold tracking-tight text-black">
              Rp 11.300.000.000
            </h5>

            <div class="flex flex-row items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-[1fr,74px]">
      <div class="flex flex-col mb-2 font-normal">
        <div class="flex items-center text-xs text-black">
          <span class="mr-1">LT 80 m² |</span>
          <span class="mr-1">LB 250 m² |</span>
          <span class="mr-1">2 KT |</span>
          <span class="mr-1">1 KM</span>
        </div>
        <div class="text-xs text-black">
          Sunter, Tanjung Priok, Jakarta Utara
        </div>
      </div>
      <!--  -->
    </div>
  </div>
  <!--  -->
</div>
