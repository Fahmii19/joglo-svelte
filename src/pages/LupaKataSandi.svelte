<script lang="ts">
  import { navigate } from "svelte-routing";
  import BackIcon from "../assets/images/back.png";
  import FormLupaKataSandi from "../components/FormLupaKataSandi.svelte";

  function KembaliLogin() {
    navigate("/login");
  }
</script>

<div class="flex flex-col show-form-registrasi">
  <!-- Judul Beranda -->
  <div class="w-full flex justify-between border-b border-gray-300">
    <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory w-80">
      Lupa Kata Sandiii
    </div>
    <!--  -->

    <div class="flex col justify-center py-1 mt-1">
      <div
        class="flex justify-center items-center flex-col menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
      >
        <div
          class="w-5 h-5 mt-0.5 mr-0.5 flex justify-center items-center relative"
        >
          <!-- Ganti <a> dengan <button> untuk aksesibilitas yang lebih baik -->
          <button
            on:click={KembaliLogin}
            class="flex items-center justify-center"
            aria-label="Kembali ke login"
          >
            <img src={BackIcon} alt="Kembali" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--  Registrasi -->
  <div
    class="h-[76.5vh] flex justify-center items-center overflow-y-hidden overflow-x-hidden hide-scrollbar form-registrasi"
  >
    <!-- Login  -->
    <FormLupaKataSandi />
    <!--  -->
  </div>
</div>
