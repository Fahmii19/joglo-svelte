<script>
  import { onMount } from "svelte";

  let fileElem;
  let dropArea;
  let previewContainer;

  import IconHapus from "../assets/images/icon_hapus.png";

  const HIDE_CLASS = "hidden";
  const UPLOAD_WFULL_CLASS = "add_wfull_upload";
  const HIGHLIGHT_CLASS = "border-blue-500";

  onMount(() => {
    dropArea = document.getElementById("drop-area");
    fileElem = document.getElementById("fileElem");
    previewContainer = document.getElementById("preview-container");

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      dropArea.addEventListener(eventName, highlight, false);
    });

    ["dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, unhighlight, false);
    });

    dropArea.addEventListener("drop", handleDrop, false);
    fileElem.addEventListener("change", function () {
      handleFiles(this.files);
      hideUploadImage();
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight() {
    dropArea.classList.add(HIGHLIGHT_CLASS);
  }

  function unhighlight() {
    dropArea.classList.remove(HIGHLIGHT_CLASS);
  }

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
    hideUploadImage();
  }

  function handleFiles(files) {
    [...files].forEach(previewFile);
  }

  function previewFile(file) {
    const reader = new FileReader();
    reader.onloadend = function () {
      const img = document.createElement("img");
      img.src = reader.result;
      img.classList.add("w-full", "h-full", "object-contain");

      const div = document.createElement("div");
      div.classList.add(
        "border-r",
        "border-b",
        "border-gray-200",
        "overflow-hidden",
        "w-[6vw]",
        "h-[12.6vh]",
        "flex",
        "items-start",
        "relative",
        "object-contain"
      );
      div.appendChild(img);

      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add(
        "absolute",
        "top-0",
        "right-0",
        "inline-flex",
        "bg-white",
        "p-0.5",
        "border",
        "rounded-bl-sm"
      );

      const deleteIcon = document.createElement("img");
      deleteIcon.classList.add(
        "w-[1.2vw]",
        "h-[1.4vh]",
        "cursor-pointer",
        "object-contain"
      );
      deleteIcon.src = IconHapus;
      deleteIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        div.remove();
        if (previewContainer.children.length === 0) {
          showDefaultImage();
        }
      });

      actionsDiv.appendChild(deleteIcon);
      div.appendChild(actionsDiv);
      previewContainer.appendChild(div);

      showPreviewContainer();
    };
    reader.readAsDataURL(file);
  }

  function hideUploadImage() {
    const uploadImage = document.querySelector(".hide_gambar_upload");
    uploadImage.classList.add(HIDE_CLASS);

    const uploadWfull = document.querySelector(`.${UPLOAD_WFULL_CLASS}`);
    uploadWfull.classList.add("w-full");

    dropArea.classList.remove("justify-center", "items-center");
    dropArea.classList.add("justify-start", "items-start");
  }

  function showPreviewContainer() {
    const previewDiv = document.querySelector(".preview_gambar_upload");
    previewDiv.classList.remove("hidden");
  }

  function showDefaultImage() {
    const uploadImage = document.querySelector(".hide_gambar_upload");
    uploadImage.classList.remove(HIDE_CLASS);

    const uploadWfull = document.querySelector(`.${UPLOAD_WFULL_CLASS}`);
    uploadWfull.classList.remove("w-full");

    dropArea.classList.add("justify-center", "items-center");
    dropArea.classList.remove("justify-start", "items-start");

    const previewDiv = document.querySelector(".preview_gambar_upload");
    previewDiv.classList.add("hidden");
  }

  function triggerFileInput() {
    fileElem.click();
  }
</script>

<div class="relative w-full mb-2.5 mt-1 flex flex-col">
  <div class="block text-xs font-bold mb-1">Foto</div>
  <div class="w-full area_upload cursor-pointer" on:click={triggerFileInput}>
    <input id="fileElem" type="file" class="hidden" multiple accept="image/*" />
    <div
      id="drop-area"
      class="w-full h-[25.2vh] bg-white rounded-lg flex position_gambar_upload justify-center items-center"
    >
      <!-- default tidak ada gambar -->
      <div
        class="hide_gambar_upload cursor-pointer flex flex-col justify-center"
      >
        <div class=" w-full flex flex-col justify-center">
          <div class="w-full flex justify-center hidden_foto_after_upload">
            <img
              class="w-[6rem] h-[6rem] object-contain"
              src="https://www.joglopro.com/bucket/soaraja/image/joglopro/landscape.png"
              alt=""
            />
          </div>
          <div
            class="w-full text-center text-xs text-gray-500 hidden_foto_after_upload -mt-2"
          >
            Drop foto di sini
          </div>
          <div class="w-full text-center text-xs text-gray-500">maks. 9</div>
        </div>
      </div>
      <!-- menampilkan gambar -->
      <div
        class="overflow-hidden w-full h-full flex items-center justify-center relative preview_gambar_upload rounded-lg hidden"
      >
        <div
          class="w-full h-full grid grid-cols-4"
          id="preview-container"
        ></div>
      </div>
    </div>
  </div>
</div>
