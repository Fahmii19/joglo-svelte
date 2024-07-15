<script>
  import ButtonKirimPesan from "./ButtonKirimPesan.svelte";
  import CardKirimPesan from "./CardKirimPesan.svelte";
  import { activeUser } from "../store/store";
  import { onMount } from "svelte";

  let currentUser;

  onMount(() => {
    activeUser.subscribe((value) => {
      currentUser = value;
    });
  });
</script>

<div class="w-full h-[77vh] flex flex-col">
  <div
    class="relative h-[68vh] w-full flex items-stretch overflow-y-auto hide-scrollbar"
  >
    <div
      class="w-full flex flex-col-reverse overflow-y-auto hide-scrollbar overflow-x-hidden scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div class="chat-message pt-3.5 px-3.5">
        <div class="flex items-end">
          <div
            class="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start"
          >
            <div>
              <span
                class="px-4 py-2 rounded-xl inline-block bg-slate-200 text-black"
                >Kamu agent dari Century21 Simprugsss ?</span
              >
            </div>
          </div>
          <img
            src={currentUser?.image || "default-profile.png"}
            alt="User profile"
            class="w-8 h-8 rounded-full order-1 object-cover aa"
          />
        </div>
      </div>
      <div class="chat-message pt-3.5 px-3.5">
        <div class="flex items-end justify-end">
          <div
            class="flex flex-col space-y-2 text-sm max-w-sm mx-2 order-1 items-end"
          >
            <div>
              <span
                class="px-4 py-2 rounded-xl inline-block bg-[#69B3E7] text-white"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-message pt-3.5 px-3.5">
        <div class="flex items-end">
          <div
            class="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start"
          >
            <div>
              <span
                class="px-4 py-2 rounded-xl inline-block bg-slate-200 text-black"
                >Kamu agent dari Century21 Simprugszz ?</span
              >
            </div>
          </div>
          <img
            src={currentUser?.image || "default-profile.png"}
            alt="User profile"
            class="w-8 h-8 rounded-full order-1 object-cover bb"
          />
        </div>
      </div>
      <div class="chat-message pt-3.5 px-3.5">
        <div class="flex items-end justify-end">
          <div
            class="flex flex-col space-y-2 text-sm max-w-sm mx-2 order-1 items-end"
          >
            <div>
              <span
                class="px-4 py-2 rounded-xl inline-block bg-[#69B3E7] text-white"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-message pt-3.5 px-3.5">
        <div class="flex items-end">
          <div
            class="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start"
          >
            <div>
              <span
                class="px-4 py-2 rounded-xl inline-block bg-slate-200 text-black"
                >Kamu agent dari Century21 Simprugszz ?</span
              >
            </div>
          </div>
          <img
            src={currentUser?.image || "default-profile.png"}
            alt="User profile"
            class="w-8 h-8 rounded-full order-1 object-cover bb"
          />
        </div>
      </div>
      <!--  -->
      <CardKirimPesan />
      <!--  -->
    </div>
  </div>

  <!--  -->
  <ButtonKirimPesan />
  <!--  -->
</div>
