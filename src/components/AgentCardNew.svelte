<script lang="ts">
  import AgentIcon from "../assets/images/agen-property.png";
  import VerifIcon from "../assets/images/verif.png";
  import UserIcon from "../assets/images/user_model.jpg";
  import UserModel1 from "../assets/images/model2.jpg";
  import UserModel2 from "../assets/images/model3.jpg";
  import { link } from "svelte-routing";
  import { navigate } from "svelte-routing";
  import Menu from "./Menu.svelte";
</script>

<!-- Card Agent -->
<a
  href="/detail-agent"
  on:click={(event) => {
    event.preventDefault();
    navigate("/detail-agent");
  }}
  class="cursor-pointer py-2 px-1 grid grid-cols-[90px,1fr] items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  role="button"
  tabindex="0"
  on:keydown={(event) => {
    if (event.key === "Enter" || event.key === " ") navigate("/detail-new");
  }}
>
  <div class="flex flex-col items-center">
    <div
      class="p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full w-16 h-16"
    >
      <div class="block bg-white p-0.5 rounded-full transform transition">
        <img class="w-full h-full rounded-full" src={UserModel1} alt="model" />
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-center ml-2">
    <div class="inline-flex w-full">
      <div class="font-semibold mr-1">Regita Syahira</div>
    </div>

    <div class="text-xs h-8 text-black">
      Agen terpercaya wilayah Pondok Indah sejak 1981. Telah melayani lebih dari
      1000 klien.
    </div>
    <div class="w-full flex flex-row justify-between relative">
      <div class="text-[10px] mt-5 text-gray-400">ERA JAKARTA</div>
      <div class="relative hidden">
        <img
          class="w-6 h-6 object-contain"
          src={"https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era-property.png"}
          alt="Agency logo"
        />
      </div>
    </div>
  </div>
</a>
