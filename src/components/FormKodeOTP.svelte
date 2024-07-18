<script>
  import { navigate } from "svelte-routing";

  import { formState } from "../store/store";

  const pinlock =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/padlock.png";

  function Batal() {
    // Logic untuk batal, misalnya mengarahkan ke halaman login
    navigate("/login");
  }

  function handleLanjutkan() {
    formState.set({
      state: "GantiPassword",
      title: "Buat kata sandi baru",
    });
  }
</script>

<div
  class="h-[37vh] w-[25vw] flex flex-col justify-between p-5 rounded-xl bg-white"
>
  <div class="w-full">
    <p class="text-center text-sm text-gray-900">
      Harap periksa pesan teks berisi kode di ponsel Anda. Kode Anda memiliki
      panjang 6 karakter.
    </p>
  </div>

  <div class="w-full">
    <form action="" class="">
      <div class="flex flex-col">
        <div class="flex flex-col space-y-3 mb-3 mt-5">
          <div>
            <div class="mb-3 pt-0">
              <input
                type="number"
                placeholder="Masukan OTP"
                class="px-3 py-4 border text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <!--  -->

  <div class="flex space-x-3">
    <button
      type="button"
      on:click={handleLanjutkan}
      class="w-full py-2 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
    >
      <span>Kirim</span>
    </button>

    <button
      type="button"
      on:click={Batal}
      class="w-full py-2 font-medium text-white text-sm bg-gray-400 hover:bg-gray-500 rounded-lg border-gray-500 hover:shadow inline-flex space-x-2 items-center justify-center"
    >
      <span>Batal</span>
    </button>
  </div>

  <!--  -->
</div>

<style>
  input:focus {
    border-color: gray;
  }
</style>
