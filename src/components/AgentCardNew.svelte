<script lang="ts">
  import AgentIcon from "../assets/images/agen-property.png";
  import VerifIcon from "../assets/images/verif.png";
  import UserIcon from "../assets/images/user_model.jpg";
  import type { AuthUser } from "../service/auth/type";
  import { link } from "svelte-routing";

  export let user = {} as AuthUser;
</script>

<!-- Card Agent -->
<div
  data-active-tab="5"
  onclick="showCardInfoDetail(this)"
  class="cursor-pointer py-2 px-1 grid grid-cols-[90px,1fr] items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex flex-col items-center">
    <div
      class="p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full w-16 h-16"
    >
      <div class="block bg-white p-0.5 rounded-full transform transition">
        <img
          class="w-full h-full rounded-full"
          src={user.profilePicture || UserIcon}
          alt="model"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-center ml-2">
    <div class="inline-flex w-full">
      <div class="font-semibold mr-1">{user.name || "Regita Syahiraa"}</div>
    </div>

    <div class="text-xs h-8 text-black">
      {user.description ||
        "Agen terpercaya wilayah Pondok Indah sejak 1981. Telah melayani lebih dari 1000 klien."}
    </div>
    <div class="w-full flex flex-row justify-between relative">
      <div class="text-[10px] mt-5 text-gray-400">
        {user.agency || "ERA JAKARTA"}
      </div>
      <div class="relative hidden">
        <img
          class="w-6 h-6 object-contain"
          src={user.agencyLogo ||
            "https://www.joglopro.com/bucket/soaraja/image/joglopro/agent/era-property.png"}
          alt="Agency logo"
        />
      </div>
    </div>

    <div></div>
  </div>
</div>
