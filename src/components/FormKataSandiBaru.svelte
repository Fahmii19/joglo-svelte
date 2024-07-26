<script>
  import { navigate } from "svelte-routing";
  import HideIcon from "../assets/images/hide.png";
  import ViewIcon from "../assets/images/view.png";
  const pinlock =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/padlock.png";

  function MasukAkunLogin() {
    // Logic untuk reset kata sandi, misalnya mengarahkan ke halaman login atau menampilkan pesan sukses
    navigate("/login");
  }

  function Batal() {
    // Logic untuk batal, misalnya mengarahkan ke halaman login
    navigate("/login");
  }

  let passwordVisible = false;

  function togglePasswordVisibility() {
    passwordVisible = !passwordVisible;
  }
</script>

<div
  class="h-[37vh] w-[25vw] flex flex-col justify-between p-5 rounded-xl bg-white"
>
  <div class="w-full">
    <p class="text-center text-sm text-gray-900">
      Buat kata sandi baru yang berisi sedikitnya 6 karakter. Kata sandi yang
      kuat adalah kombinasi huruf, angka, dan tanda baca.
    </p>
  </div>
  <!--  -->
  <div class="w-full">
    <form action="" class="">
      <div class="flex flex-col">
        <div class="flex flex-col space-y-3 mb-3 mt-5">
          <div>
            <div class="mb-3 pt-0">
              <div class="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Kata Sandi Baru"
                  class="px-3 py-1 border text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan password-input"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  on:click={togglePasswordVisibility}
                  aria-label={passwordVisible
                    ? "Sembunyikan kata sandi"
                    : "Lihat kata sandi"}
                >
                  <img
                    src={passwordVisible ? ViewIcon : HideIcon}
                    class="view-icon w-4 h-4 object-contain mt-0.5"
                    alt={passwordVisible ? "Sembunyikan" : "Lihat"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

  <div class="flex space-x-3">
    <button
      type="button"
      on:click={MasukAkunLogin}
      class="w-full py-2 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
    >
      <span>Kirim</span>
    </button>
  </div>
</div>

<style>
  input:focus {
    border-color: gray;
  }
</style>
