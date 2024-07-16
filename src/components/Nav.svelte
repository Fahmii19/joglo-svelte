<script lang="ts">
  import HomeIcon from "../assets/images/home.png";
  import { link } from "svelte-routing";
  import { isLogged, authUser } from "../store/auth";
  import { loggedIn } from "../store/store";
  import UserIcon from "../assets/images/user_model.jpg";
  import { navigate } from "svelte-routing";
  import { activeMenu } from "../store/activeMenuStore";

  let UserIconNew =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model6.png";

  // Login
  function handleLogin() {
    activeMenu.set("");
  }
</script>

<div
  class="w-full h-[10vh] bg-slate-50 flex flex-row items-center justify-between pl-3 pr-8 z-10"
>
  <div class="flex items-center space-x-4 cursor-pointer">
    <img class="w-12 h-12 object-cover mt-1" src={HomeIcon} alt="Joglo Icon" />
    <div class="text-3xl font-bold font-sf_pro_bold text-[#2074d8]">
      JogloProo
    </div>
  </div>

  <!--  -->

  {#if $loggedIn}
    <a href="/detail-agent" use:link>
      <div class="flex cursor-pointer items-center">
        <span class="text-sm font-medium text-gray-700 mr-2">
          {$authUser?.first_name || "Adi"}
          {$authUser?.last_name || "Cahyadi"}
        </span>
        <img
          class="w-8 h-8 object-cover"
          src={UserIconNew}
          alt="User Profile"
        />
      </div>
    </a>
  {:else}
    <button
      on:click={() => {
        navigate("/login");
        handleLogin();
      }}
      class="text-sm text-gray-700 cursor-pointer">Loginn</button
    >
  {/if}

  <!-- {#if $isLogged || loggedIn}



  {:else}
    <button
      on:click={handleLogin}
      class="button_login_pengaturan text-sm text-gray-700 cursor-pointer"
      >Login</button
    >
  {/if} -->
</div>
