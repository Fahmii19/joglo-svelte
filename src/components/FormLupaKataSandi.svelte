<script>
  const pinlock =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/padlock.png";
</script>

<div
  class="h-[60vh] w-[25vw] flex justify-center items-center p-5 rounded-xl bg-white rounded-lg"
>
  <div class="w-full">
    <div class="w-full flex justify-center">
      <img class="w-14 h-14 object-contain" src={pinlock} alt="Padlock" />
    </div>

    <p class="text-center text-sm text-black mt-10">
      Masukkan nomor ponsel atau email dan kami akan kirimkan tautan ke akun
      anda.
    </p>

    <form action="" class="my-3">
      <div class="flex flex-col">
        <div class="flex flex-col space-y-3 mb-3 mt-5">
          <div>
            <label
              for="email-input4"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Nomor Ponsel atau Email</label
            >
            <input
              type="text"
              id="email-input4"
              class="border-0 px-2 py-2 text-black bg-gray-200 rounded text-sm focus:outline-none focus:ring-0 w-full"
            />
          </div>
        </div>

        <button
          onclick="MasukAkunLogin()"
          class="w-full py-2 mt-3 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
        >
          <span>Reset</span>
        </button>
      </div>
    </form>
  </div>
</div>
