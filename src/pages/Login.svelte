<script lang="ts">
  import { link, navigate } from "svelte-routing";
  import BackIcon from "../assets/images/back.png";
  import HideIcon from "../assets/images/hide.png";
  import ViewIcon from "../assets/images/view.png";
  import { afterUpdate, onMount } from "svelte";
  import AuthService from "../service/auth/auth";
  import type { AuthUser, RequestLogin } from "../service/auth/type";
  import { Alert, Spinner } from "flowbite-svelte";
  import { ExtractToken } from "../utils/auth";
  import { authUser, authUserTemp, isLogged } from "../store/auth";
  import type { ColorAlert } from "../types/color-alert";
  import { markerStore } from "../store/map";
  import { activeMenu } from "../store/activeMenuStore";

  $: colorResponse = "red" as ColorAlert;

  // email and password state
  $: email = "";
  $: password = "";

  afterUpdate(() => {
    authUserTemp.subscribe((value) => {
      if (value) {
        email = value.email ? value.email : "";
        password = value.password ? value.password : "";
      }
    });
  });

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

  const Login = async () => {
    const email = document.getElementById(
      "email-input-login"
    ) as HTMLInputElement;
    const password = document.getElementById(
      "password-input-login"
    ) as HTMLInputElement;

    const AuthServices = new AuthService();
    let param = {
      email: email.value,
      password: password.value,
    } as RequestLogin;

    // Hide login text and show spinner
    const loginText = document.querySelector(".login-text") as HTMLSpanElement;
    const spinner = document.querySelector(".spinner") as HTMLSpanElement;

    loginText.classList.add("hidden");
    spinner.classList.remove("hidden");

    // validate email and password
    if (email.value === "" || password.value === "") {
      // Show login text and hide spinner
      loginText.classList.remove("hidden");
      spinner.classList.add("hidden");

      // Show alert
      const alert = document.querySelector(".response") as HTMLDivElement;
      alert.querySelector(".response-category")!.textContent = "Gagal!";
      alert.querySelector(".response-message")!.textContent =
        "Email atau password tidak boleh kosong!";
      alert.classList.remove("hidden");

      setTimeout(() => {
        alert.classList.add("hidden");
      }, 3000);
      return;
    }

    try {
      const response = await AuthServices.login(param);
      const active_token = response.data.active_token;

      if (active_token) {
        // Set the token to localStorage and store
        localStorage.setItem("active_token", active_token);
        authUser.set(ExtractToken());
        isLogged.set(true);

        // Redirect to the root ("/") page
        navigate("/");
      }

      // Show login text and hide spinner
      loginText.classList.remove("hidden");
      spinner.classList.add("hidden");
    } catch (e) {
      // Show login text and hide spinner
      loginText.classList.remove("hidden");
      spinner.classList.add("hidden");

      // Show alert
      const alert = document.querySelector(".response") as HTMLDivElement;
      alert.querySelector(".response-category")!.textContent = "Gagal!";
      alert.querySelector(".response-message")!.textContent =
        "Email atau password salah!";
      alert.classList.remove("hidden");
    }
  };

  // login
  let UserIconNew =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/model/model6.png";

  import { loggedIn } from "../store/store";
  function handleLogin() {
    activeMenu.set("menu_galeri");
    loggedIn.set(true);
    navigate("/");
  }

  function lupaKataSandi() {
    navigate("/lupa-kata-sandi");
  }

  function handleBack() {
    activeMenu.set("menu_galeri"); // Set activeId ke menu_galeri
    navigate("/"); // Arahkan ke halaman utama
  }

  // Remove Marker
  $markerStore?.remove();
</script>

<div class="flex flex-col show-form-registrasi">
  <!-- Judul Beranda -->

  <div class="w-full flex justify-between border-b border-gray-300">
    <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory w-80">
      Loginnnn
    </div>
    <!--  -->

    <div class="flex col justify-center py-1 mt-1">
      <div
        class="flex justify-center items-center flex-col menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
      >
        <div
          class="w-5 h-5 mt-0.5 mr-0.5 flex justify-center items-center relative"
        >
          <button
            on:click={handleBack}
            class="flex items-center justify-center"
            aria-label="Kembali"
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
    <div
      class="h-[60vh] w-[25vw] flex justify-center items-center p-5 rounded-xl form-login-with-google"
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
            <span>Login dengan Google</span>
          </button>
        </div>

        <Alert color={colorResponse} class="response hidden">
          <span class="font-bold response-category">Gagal!</span>
          <span class="response-message">-</span>
        </Alert>

        <div class="flex justify-center items-center">
          <span class="w-full border border-gray-300"></span>
          <span class="px-4 text-xs text-gray-500">atau</span>
          <span class="w-full border border-gray-300"></span>
        </div>

        <div class="my-3">
          <div class="flex flex-col">
            <div class="flex flex-col space-y-3 mb-3">
              <div>
                <label
                  for="email-input-login"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Nomor Ponsel atau Email</label
                >
                <input
                  type="text"
                  id="email-input-login"
                  value={email}
                  class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                />
              </div>
            </div>

            <div class="flex flex-col space-y-3 mb-2">
              <div>
                <label
                  for="password-input-login"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Kata Sandi</label
                >
                <div class="relative">
                  <input
                    id="password-input-login"
                    type="password"
                    value={password}
                    class="password-input border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
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

            <p class="text-right text-xs">
              <button
                on:click={lupaKataSandi}
                class="text-[#2074D8] font-medium inline-flex space-x-1 items-center cursor-pointer bg-transparent border-none p-0"
                aria-label="Lupa kata sandi?"
              >
                <span> Lupa kata sandi? </span>
              </button>
            </p>

            <!-- <button
              class="w-full py-2 mt-6 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              on:click={Login}
            >
              <span class="login-text">Loginnn</span>
              <Spinner color="white" class="hidden spinner" size="6" />
            </button> -->

            <!--  -->
            {#if $loggedIn}
              <!-- button untuk sudah login -->
              <button
                class="w-full py-2 mt-6 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                on:click={handleLogin}
              >
                <span class="login-text">Loginn</span>
                <Spinner color="white" class="hidden spinner" size="6" />
              </button>
            {:else}
              <!-- button untuk belum login -->
              <button
                class="w-full py-2 mt-6 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                on:click={handleLogin}
              >
                <span class="login-text">Loginnnn</span>
                <Spinner color="white" class="hidden spinner" size="6" />
              </button>
            {/if}

            <p class="text-center text-xs">
              Tidak punya akun?
              <!-- svelte-ignore a11y-missing-attribute -->
              <a
                class="text-[#2074D8] font-medium inline-flex space-x-1 items-center cursor-pointer"
                href="/register"
                use:link
              >
                <span>Registrasi </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
  </div>
</div>
