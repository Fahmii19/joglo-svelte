<script>
  import { navigate } from "svelte-routing";
  const pinlock =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/padlock.png";

  function MasukAkunLogin() {
    // Logic untuk reset kata sandi, misalnya mengarahkan ke halaman login atau menampilkan pesan sukses
    navigate("/login");
  }
</script>

<div
  class="h-[45vh] w-[25vw] flex justify-center items-center p-5 rounded-xl bg-white rounded-lg"
>
  <div class="w-full">
    <p class="text-center text-sm text-black mt-10">
      Harap periksa pesan teks berisi kode di ponsel Anda. Kode Anda memiliki
      panjang 6 karakter.
    </p>

    <form action="" class="my-3">
      <div class="flex flex-col">
        <div class="flex flex-col space-y-3 mb-3 mt-5">
          <div>
            <div class="mb-3 pt-0">
              <input
                type="text"
                placeholder="Masukan OTP"
                class="px-3 py-4 border text-black bg-white rounded-lg text-sm focus:outline-none focus:ring-0 w-full remove_style_arrow_inputan"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          on:click={MasukAkunLogin}
          class="w-full py-2 mt-3 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
        >
          <span>Kirim</span>
        </button>
      </div>
    </form>
  </div>
</div>

<style>
  input:focus {
    border-color: gray; /* Mengubah warna border menjadi abu-abu saat difokuskan */
  }
</style>
