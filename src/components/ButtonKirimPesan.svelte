<div class="w-full h-[8.2vh] relative px-3 end">
  <div class="w-full h-full flex items-center">
    <input
      type="text"
      title=""
      placeholder="Tuliskan pesan di sini ..."
      class="block w-full py-2 border border-gray-300 pl-4 mx-0 text-sm text-gray-400 bg-gray-100 rounded-full outline-none focus:outline-none focus:ring-0 focus:border-gray-300 tracking-[0.030em]"
      name="message"
      required=""
    />

    <div class="absolute right-4 items-center inset-y-0 hidden sm:flex">
      <input type="file" id="fileUpload" class="hidden" accept="image/*" />

      <!-- Button -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 focus:outline-none"
        onclick="document.getElementById('fileUpload').click()"
      >
        <img
          class="h-5 w-5"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/gallery.png"
          alt=""
        />
      </button>
    </div>
  </div>
</div>
