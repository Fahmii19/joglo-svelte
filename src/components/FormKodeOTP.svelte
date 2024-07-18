<script>
  import { navigate } from "svelte-routing";
  import { formState } from "../store/store";
  import { onMount } from "svelte";

  function Batal() {
    navigate("/login");
  }

  function handleLanjutkan() {
    formState.set({
      state: "GantiPassword",
      title: "Buat kata sandi baru",
    });
  }

  let inputs;

  onMount(() => {
    inputs = [...document.querySelectorAll("input[type=text]")];

    const handleKeyDown = (e) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "Tab" &&
        !e.metaKey
      ) {
        e.preventDefault();
      }

      if (e.key === "Delete" || e.key === "Backspace") {
        const index = inputs.indexOf(e.target);
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      }
    };

    const handleInput = (e) => {
      const { target } = e;
      const index = inputs.indexOf(target);
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    };

    const handleFocus = (e) => {
      e.target.select();
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData("text");
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split("");
      inputs.forEach((input, index) => (input.value = digits[index]));
    };

    inputs.forEach((input) => {
      input.addEventListener("input", handleInput);
      input.addEventListener("keydown", handleKeyDown);
      input.addEventListener("focus", handleFocus);
      input.addEventListener("paste", handlePaste);
    });
  });
</script>

<div
  class="h-[40vh] w-[25vw] flex flex-col justify-between p-5 rounded-xl bg-white"
>
  <div class="w-full mt-5">
    <p class="text-center text-sm text-gray-900">
      Harap periksa pesan teks berisi kode di ponsel Anda. Kode Anda memiliki
      panjang 6 karakter.
    </p>
  </div>

  <div class="w-full">
    <form id="otp-form" class="space-y-3">
      <div class="flex items-center justify-center gap-3">
        <input
          type="text"
          class="w-12 h-12 text-center text-xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          maxlength="1"
        />
        <input
          type="text"
          class="w-12 h-12 text-center text-xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          maxlength="1"
        />
        <input
          type="text"
          class="w-12 h-12 text-center text-xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          maxlength="1"
        />
        <input
          type="text"
          class="w-12 h-12 text-center text-xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          maxlength="1"
        />
        <input
          type="text"
          class="w-12 h-12 text-center text-xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          maxlength="1"
        />
        <input
          type="text"
          class="w-12 h-12 text-center text-xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          maxlength="1"
        />
      </div>
      <div
        class="w-full flex justify-center text-xs text-blue-500 cursor-pointer"
      >
        Kirm ulang kode?
      </div>
    </form>
  </div>

  <div class="flex space-x-3 mt-5 mb-5">
    <button
      type="button"
      on:click={handleLanjutkan}
      class="w-full py-2 font-medium text-white text-sm bg-[#0394F7] hover:bg-[#1877F2] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
    >
      <span>Lanjut</span>
    </button>

    <button
      type="button"
      on:click={Batal}
      class="w-full py-2 font-medium text-white text-sm bg-gray-400 hover:bg-gray-500 rounded-lg border-gray-500 hover:shadow inline-flex space-x-2 items-center justify-center"
    >
      <span>Batal</span>
    </button>
  </div>
</div>

<style>
  input:focus {
    border-color: gray;
  }
</style>
