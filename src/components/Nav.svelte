<script lang="ts">
  import HomeIcon from "../assets/images/home.png";
  import { link } from "svelte-routing";
  import { isLogged } from "../store/auth";
  import UserIcon from "../assets/images/user_model.jpg";
  import { authUser } from "../store/auth";
</script>

<div
  class="w-full h-[10vh] bg-slate-50 flex flex-row items-center justify-between pl-3 pr-8 z-10"
>
  <a href="/" use:link>
    <div class="flex items-center space-x-4">
      <img
        class="w-12 h-12 object-cover mt-1"
        src={HomeIcon}
        alt="Joglo Icon"
      />
      <div class="text-3xl font-bold font-sf_pro_bold text-[#2074d8]">
        JogloProo
      </div>
    </div>
  </a>

  {#if $isLogged}
    <a href="/profile/{$authUser?.user_id}" use:link>
      <div class="flex cursor-pointer items-center">
        <span class="text-sm font-medium text-gray-700 mr-2"
          >{$authUser?.first_name} {$authUser?.last_name}</span
        >

        <img class="w-8 h-8 object-cover mr-2" src={UserIcon} alt="" />
      </div>
    </a>
  {:else}
    <a
      class="flex justify-end text-sm text-gray-700 cursor-pointer"
      href="/login"
      use:link>Login</a
    >
  {/if}
</div>
