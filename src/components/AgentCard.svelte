<script lang="ts">
  import AgentIcon from "../assets/images/agen-property.png";
  import VerifIcon from "../assets/images/verif.png";
  import UserIcon from "../assets/images/user_model.jpg";
  import type { AuthUser } from "../service/auth/type";
  import { link } from "svelte-routing";

  export let user = {} as AuthUser;
</script>

<a
  class="cursor-pointer py-2 px-1 grid grid-cols-[90px,1fr] items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  href="/profile/{user.user_id}"
  use:link
>
  <div class="flex flex-col items-center">
    <div
      class="p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full w-16 h-16"
    >
      <div class="block bg-white p-0.5 rounded-full transform transition">
        <img class="w-full h-full rounded-full" src={UserIcon} alt="model" />
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center ml-2">
    <div class="inline-flex w-full">
      <div class="font-semibold mr-1">{user.first_name} {user.last_name}</div>
      <div class="flex">
        <div
          class="w-5 h-5 mt-0.5 ml-0.5 flex justify-center items-center relative"
        >
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src={VerifIcon} />
        </div>
      </div>
    </div>
    <div class="text-xs h-8 text-black">
      {user?.bio_singkat == "" ? "Bio belum diisi" : user?.bio_singkat}
    </div>
    <div class="w-full flex flex-row justify-between relative">
      <div class="text-[10px] mt-1 text-gray-400">ERA JAKARTA</div>
      <div class="relative hidden">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="w-6 h-6 object-contain" src={UserIcon} />
      </div>
    </div>
    <div></div>
    <div class="mt-1 flex justify-between items-end">
      <div>
        <label
          for="star-agent-utama"
          class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
          ><div>
            <label
              for="star-agent-utama"
              class="flex flex-row text-xs font-medium cursor-pointer text-gray-900"
              ><svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
                ><path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                ></path></svg
              >
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
                ><path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                ></path></svg
              >
              <svg
                class="w-4 h-4 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
                ><path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                ></path></svg
              ></label
            >
          </div></label
        >
      </div>
      <div class="mr-2 -mt-3">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="w-5 h-7 object-contain" src={AgentIcon} />
      </div>
    </div>
  </div>
</a>
