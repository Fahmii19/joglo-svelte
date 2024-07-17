<script lang="ts">
  import { link, navigate } from "svelte-routing";
  import BackIcon from "../assets/images/back.png";
  import HideIcon from "../assets/images/hide.png";
  import ViewIcon from "../assets/images/view.png";
  import TickIcon from "../assets/images/ticks.png";
  import CloseIcon from "../assets/images/close-simbol.png";
  import { onMount } from "svelte";
  import AuthService from "../service/auth/auth";
  import type { AuthUser, RegisterUser } from "../service/auth/type";
  import { Spinner } from "flowbite-svelte";
  import { authUserTemp } from "../store/auth";
  import { markerStore } from "../store/map";
  import ModalCustom from "../components/ModalCustom.svelte";
  import { writable } from "svelte/store";

  let showModal = writable(false);
  let errors = writable([]);
  let placement = "center-right";

  let phone = "";
  let email = "";
  let firstName = "";
  let lastName = "";
  let password = "";

  let formRegistrasiJoglopro;

  onMount(() => {
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.querySelector(
      ".password-input"
    ) as HTMLInputElement;
    const viewIcon = document.querySelector(".view-icon") as HTMLImageElement;
    const hideIcon = document.querySelector(".hide-icon") as HTMLImageElement;

    if (togglePassword) {
      togglePassword.addEventListener("click", () => {
        if (passwordInput && passwordInput.type === "password") {
          passwordInput.type = "text";
          hideIcon.classList.add("hidden");
          viewIcon.classList.remove("hidden");
        } else {
          passwordInput.type = "password";
          viewIcon.classList.add("hidden");
          hideIcon.classList.remove("hidden");
        }
      });
    }

    // Initial state setup
    if (passwordInput && passwordInput.type === "password") {
      viewIcon.classList.add("hidden");
      hideIcon.classList.remove("hidden");
    } else {
      hideIcon.classList.add("hidden");
      viewIcon.classList.remove("hidden");
    }
  });

  $: if (formRegistrasiJoglopro) {
    if ($showModal) {
      formRegistrasiJoglopro.classList.add("bg-custom");
    } else {
      formRegistrasiJoglopro.classList.remove("bg-custom");
    }
  }

  const validate = () => {
    let validationErrors = [];
    if (phone === "") validationErrors.push("Nomor ponsel wajib diisi");
    if (email === "") validationErrors.push("Email wajib diisi");
    if (firstName === "") validationErrors.push("Nama depan wajib diisi");
    if (lastName === "") validationErrors.push("Nama belakang wajib diisi");
    if (password === "") validationErrors.push("Kata sandi wajib diisi");
    errors.set(validationErrors);
    return validationErrors.length === 0;
  };

  const Register = async () => {
    const AuthServices = new AuthService();

    // Sembunyikan teks register dan tampilkan spinner
    const registerText = document.querySelector(
      ".register-text"
    ) as HTMLSpanElement;
    const spinner = document.querySelector(".spinner") as HTMLSpanElement;

    registerText.classList.add("hidden");
    spinner.classList.remove("hidden");

    if (!validate()) {
      showModal.set(true);
      registerText.classList.remove("hidden");
      spinner.classList.add("hidden");
      return;
    }

    let param: RegisterUser = {
      phone_number: phone,
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    };

    try {
      await AuthServices.register(param);

      // Tampilkan teks register dan sembunyikan spinner
      registerText.classList.remove("hidden");
      spinner.classList.add("hidden");

      authUserTemp.set({
        email: email,
        password: password,
      } as AuthUser);

      navigate("/login");
    } catch (error) {
      // Tampilkan teks register dan sembunyikan spinner
      registerText.classList.remove("hidden");
      spinner.classList.add("hidden");

      // Tampilkan modal dengan pesan error
      errors.set(["Registrasi gagal"]);
      showModal.set(true);
    }
  };

  // Remove Marker
  $markerStore?.remove();
</script>

<div class="flex flex-col show-form-registrasi">
  <!-- Judul Beranda -->
  <div class="w-full flex justify-between border-b border-gray-300">
    <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory w-80">
      Registrasi
    </div>
    <div class="flex col justify-center py-1 mt-1">
      <div
        class="flex justify-center items-center flex-col menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
      >
        <a
          href="/login"
          use:link
          class="w-5 h-5 mt-0.5 mr-0.5 flex justify-center items-center relative"
        >
          <img src={BackIcon} alt="" />
        </a>
      </div>
    </div>
  </div>

  <!--  Registrasi -->

  <div
    class="h-[76.5vh] flex justify-center items-center overflow-y-hidden overflow-x-hidden hide-scrollbar form-registrasi-joglopro"
    bind:this={formRegistrasiJoglopro}
  >
    <div
      class="h-[60vh] w-[25vw] flex justify-center items-center p-5 rounded-xl"
    >
      <div class="w-full">
        <div class="my-5">
          <button
            class="w-full text-center text-sm py-2 my-2 border-2 border-gray-300 flex space-x-2 items-center justify-center rounded-lg text-gray-700"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              class="w-5 h-5"
              alt=""
            />
            <span>Register dengan Google</span>
          </button>
        </div>

        <div class="flex justify-center items-center">
          <span class="w-full border border-gray-300"></span>
          <span class="px-4 text-xs text-gray-500">atau</span>
          <span class="w-full border border-gray-300"></span>
        </div>

        <div class="flex flex-col space-y-3 mb-3">
          <div>
            <label
              for="phone-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Nomor Ponsel</label
            >
            <input
              type="text"
              id="phone-input"
              bind:value={phone}
              class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-3 mb-3">
          <div>
            <label
              for="email-input"
              class="block mb-2 text-sm font-medium text-gray-900">Email</label
            >
            <input
              type="email"
              id="email-input"
              bind:value={email}
              class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-3 mb-3">
          <div>
            <label
              for="nama-depan-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Nama Depan</label
            >
            <input
              type="text"
              id="nama-depan-input"
              bind:value={firstName}
              class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-3 mb-3">
          <div>
            <label
              for="nama-belakang-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Nama Belakang</label
            >
            <div class="relative">
              <input
                id="nama-belakang-input"
                type="text"
                bind:value={lastName}
                class="nama-belakang-input border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full pr-10"
              />
              <span
                class="validation-icon absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                <img
                  class="tick-icon w-4 h-4 object-contain m-0.5 mt-0.5 hidden"
                  src={TickIcon}
                  alt="Benar"
                />
                <img
                  class="close-icon w-3.5 h-3.5 object-contain ml-2 mt-0.5 hidden"
                  src={CloseIcon}
                  alt="Salah"
                />
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-3 mb-2">
          <div>
            <label
              for="password-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Kata Sandi</label
            >
            <div class="relative">
              <input
                id="password-input"
                type="password"
                bind:value={password}
                class="password-input border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full pr-10"
              />
              <span
                class="toggle-password absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              >
                <img
                  class="view-icon w-4 h-4 object-contain mt-0.5 hidden"
                  src={ViewIcon}
                  alt="Lihat"
                />
                <img
                  class="hide-icon w-4 h-4 object-contain mt-0.5"
                  src={HideIcon}
                  alt="Sembunyikan"
                />
              </span>
            </div>
          </div>
        </div>

        <button
          class="w-full py-2 mt-6 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          on:click={Register}
        >
          <span class="register-text">Register</span>
          <Spinner color="white" class="hidden spinner" size="6" />
        </button>
      </div>
    </div>
  </div>

  <!-- Backdrop -->
  {#if $showModal}
    <div class="backdrop"></div>
  {/if}

  <ModalCustom {showModal} {errors}>
    <!-- <div slot="header">Registrasi Gagal</div> -->
  </ModalCustom>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
</style>
