<script lang="ts">
  import HomeIcon from "../assets/images/home.png";
  import { link } from "svelte-routing";
  import { isLogged, authUser } from "../store/auth";
  import { loggedIn } from "../store/store";
  import UserIcon from "../assets/images/user_model.jpg";
  import { navigate } from "svelte-routing";
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

  <!--  -->

  <button
    on:click={() => navigate("/login")}
    class="text-sm text-gray-700 cursor-pointer">Login</button
  >
  <!-- {#if $isLogged || loggedIn}



  {:else}
    <button
      on:click={handleLogin}
      class="button_login_pengaturan text-sm text-gray-700 cursor-pointer"
      >Login</button
    >
  {/if} -->
</div>
