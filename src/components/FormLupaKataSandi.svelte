<script>
  import { formState } from "../store/store";
  const pinlock =
    "https://www.joglopro.com/bucket/soaraja/image/joglopro/padlock.png";

  function handleLanjutkan() {
    formState.set({
      state: "kodeOTP",
      title: "Masukkan Kode Keamanan",
    });
  }

  import { Radio, Helper } from "flowbite-svelte";
</script>

<div class="h-[60vh] w-[25vw] flex justify-center p-5 bg-white rounded-lg">
  <div class="w-full flex flex-col">
    <div class="w-full flex justify-center mt-5">
      <img class="w-14 h-14 object-contain" src={pinlock} alt="Padlock" />
    </div>

    <div class="w-full my-8">
      <p class="text-center text-sm text-gray-900">
        Bagaimana Anda ingin mendapatkan kode untuk mereset kata sandi Anda??
      </p>
    </div>

    <div class="w-full grid grid-cols-1 gap-y-5">
      <div class="w-full">
        <input
          type="radio"
          name="verification"
          id="sms"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 focus:border-transparent bg-white"
        />
        <label class="text-sm ms-1" for="sms" aria-describedby="helper-sms"
          >Kirim kode melalui SMS</label
        >
        <p id="helper-sms" class="ps-6 text-gray-500 text-xs">+62+++++++++95</p>
      </div>
      <div class="w-full">
        <input
          type="radio"
          name="verification"
          id="email"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 focus:border-transparent bg-white"
        />
        <label class="text-sm ms-1" for="email" aria-describedby="helper-email"
          >Kirim kode melalui email</label
        >
        <p id="helper-email" class="ps-6 text-gray-500 text-xs">f***@*******</p>
      </div>
    </div>

    <!--  -->
    <div class="w-full mt-6">
      <button
        type="button"
        on:click={handleLanjutkan}
        class="w-full py-2 mt-3 mb-5 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
      >
        <span>Lanjut</span>
      </button>
    </div>

    <!--  -->
  </div>
</div>
