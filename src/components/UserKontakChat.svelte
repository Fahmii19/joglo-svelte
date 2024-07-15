<script>
  import { activePesan, activeChatId } from "../store/store";
  import { onMount } from "svelte";
  import UserChatRandom from "./UserChatRandom.svelte";
  import { get } from "svelte/store";

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
    return index < 4 ? "bg-[#ffb500] border-2 border-white" : "";
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
        id: i + 2, // Ensure IDs start from 2 to avoid conflict with Co-Broking
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

  function handleChatClick(chatId) {
    activePesan.set(2);
    activeChatId.set(chatId);
  }
</script>

<ul>
  <li>
    <div
      class="menu-pesan-area flex items-center px-3 py-2.5 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none"
      class:bg-slate-200={$activeChatId === 1}
      on:click={() => {
        activePesan.set(1);
        activeChatId.set(1);
      }}
      role="button"
      tabindex="0"
      on:keydown={(e) => {
        if (e.key === "Enter") {
          activePesan.set(1);
          activeChatId.set(1);
        }
      }}
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
