<script lang="ts">
  import ModelImage from "../assets/images/model.jpg";
  import { navigate } from "svelte-routing";
</script>

<button
  class="relative flex flex-col items-center cursor-pointer"
  on:click={() => navigate("/postingan-stories")}
>
  <div
    class="w-16 h-16 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
  >
    <img
      class="w-full h-full p-[0.15rem] bg-white rounded-full object-cover hover:-rotate-6 transform transition relative"
      src={ModelImage}
      alt=""
    />
  </div>
</button>
