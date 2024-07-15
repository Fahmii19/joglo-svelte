<script>
  import { activePesan } from "../store/store";
  import { onMount } from "svelte";
  import UserChatRandom from "./UserChatRandom.svelte";

  let randomChats = [];

  function getRandomName() {
    const names = [
      "Delia Amanda",
      "Rahmat Hidayat",
      "Nina Putri",
      "Budi Santoso",
      "Lia Wulandari",
    ];
    return names[Math.floor(Math.random() * names.length)];
  }

  function getRandomMessage() {
    const messages = ["bye", "hello", "good morning", "see you", "take care"];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function getRandomStatus(index) {
    return index < 3 ? "bg-green-500" : "bg-[#ffb500]";
  }

  function getRandomImage() {
    const images = [
      "model1.jpg",
      "model2.jpg",
      "model3.jpg",
      "model4.jpg",
      "model11.jpg",
    ];
    return `https://www.joglopro.com/bucket/soaraja/image/joglopro/model/${images[Math.floor(Math.random() * images.length)]}`;
  }

  function generateRandomChats() {
    randomChats = [];
    for (let i = 0; i < 5; i++) {
      randomChats.push({
        id: i,
        name: getRandomName(),
        message: getRandomMessage(),
        status: getRandomStatus(i),
        image: getRandomImage(),
      });
    }
  }

  onMount(() => {
    generateRandomChats();
  });
</script>

<ul>
  <li>
    <div
      class="menu-pesan-area flex items-center px-3 py-2.5 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none hover:bg-slate-200"
      on:click={() => activePesan.set(1)}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === "Enter" && activePesan.set(1)}
    >
      <div class="w-10 h-10 flex justify-center items-center relative">
        <img
          class="object-cover w-7 h-7"
          src="https://www.joglopro.com/bucket/soaraja/image/joglopro/workgroup.png"
          alt=""
        />
      </div>
      <div class="py-2">
        <div class="flex justify-between">
          <div class="flex flex-row w-full justify-between items-center">
            <div>
              <span class="block ml-3 aktif-judul-pesan text-black text-sm"
                >Co-Broking</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  {#each randomChats as chat}
    <UserChatRandom {chat} />
  {/each}
</ul>
<!--  -->
