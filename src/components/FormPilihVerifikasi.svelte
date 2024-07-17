<script>
  const pinlock =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/padlock.png";
</script>

<div class="h-[60vh] w-[25vw] flex justify-center p-7 bg-white rounded-lg">
  <div class="w-full flex flex-col justify-between">
    <div class="h-full">
      <div class="w-full flex justify-center mt-4">
        <img class="w-14 h-14 object-contain" src={pinlock} alt="Padlock" />
      </div>

      <p class="text-center text-sm text-black mt-6">
        Bagaimana Anda ingin mendapatkan kode untuk mereset kata sandi Anda?
      </p>

      <form action="" class="mt-9">
        <div class=" flex flex-col">
          <div class="grid grid-cols-1 gap-y-3">
            <div class="w-full grid grid-cols-[30px,1fr]">
              <div class="flex items-start justify-center border">
                <input
                  id="sale-dijual-a"
                  type="radio"
                  value="dijual"
                  name="sale-type-a"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white mt-1.5"
                />
              </div>
              <div class="flex flex-col border">
                <div class="">Kirim kode melalui nomor</div>
                <div>asdsa</div>
              </div>
            </div>

            <!-- <div class="flex items-center">

              <label for="sale-dijual-a" class="ms-2 text-sm text-black"
                >Dijual</label
              >
            </div> -->
            <div class="flex items-center">
              <input
                id="sale-disewakan-a"
                type="radio"
                value="disewakan"
                name="sale-type-a"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:border-transparent focus:ring-0 hapus_focus_checkbox bg-white"
              />
              <label for="sale-disewakan-a" class="ms-2 text-sm text-black"
                >Disewakan</label
              >
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="w-full">
      <button
        onclick="MasukAkunLogin()"
        class="w-full py-2 mt-3 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
      >
        <span>Reset</span>
      </button>
    </div>
  </div>
</div>
