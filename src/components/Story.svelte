<script lang="ts">
  import ModelImage from "../assets/images/model.jpg";
  import { navigate } from "svelte-routing";
  export let self_story = false;
  export let unseen = false;
  let background: string;
  let padding: string;

  // For unseen story
  if (unseen) {
    padding = "p-[0.075rem]";
  } else {
    padding = "p-[0.15rem]";
  }

  // For self story
  if (self_story) {
    background = "";
  } else {
    background = "bg-gradient-to-r from-yellow-200 to-pink-600";
  }
</script>

<div class="relative flex flex-col items-center cursor-pointer">
  <div class="">
    <div class="w-16 h-16 {padding} {background} rounded-full">
      <img
        class="w-full h-full p-[0.15rem] bg-white rounded-full"
        src={ModelImage}
        alt=""
      />
      {#if self_story}
        <button
          on:click={() => navigate("/postingan-stories")}
          class="absolute bottom-0 right-1 border-white border-2 rounded-full w-5 h-5 flex items-center justify-center"
          aria-label="Navigate to detail"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.125 16C12.4742 16 16 12.4742 16 8.125C16 3.77576 12.4742 0.25 8.125 0.25C3.77576 0.25 0.25 3.77576 0.25 8.125C0.25 12.4742 3.77576 16 8.125 16Z"
              fill="#1877F2"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.61719 4.67969C8.61719 4.40786 8.39683 4.1875 8.125 4.1875C7.85317 4.1875 7.63281 4.40786 7.63281 4.67969V7.63281H4.67969C4.40786 7.63281 4.1875 7.85317 4.1875 8.125C4.1875 8.39683 4.40786 8.61719 4.67969 8.61719H7.63281V11.5703C7.63281 11.8421 7.85317 12.0625 8.125 12.0625C8.39683 12.0625 8.61719 11.8421 8.61719 11.5703V8.61719H11.5703C11.8421 8.61719 12.0625 8.39683 12.0625 8.125C12.0625 7.85317 11.8421 7.63281 11.5703 7.63281H8.61719V4.67969Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </button>
      {/if}
    </div>
  </div>
</div>
