<script lang="ts">
  import UserService from "../service/users/users";
  import { agentList } from "../store/agent";

  let letter: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ] as string[];

  let selected_letter = "";

  // User Service
  const userService = new UserService();

  const selectLetter = (letter: string) => {
    if (selected_letter === letter) {
      selected_letter = "";

      userService.getListAgent().then((res) => {
        agentList.set(res.data);
      });

      return;
    }
    selected_letter = letter;

    userService.getListAgentByLetter(letter).then((res) => {
      agentList.set(res.data);
    });
  };
</script>

<div class="w-full flex flex-col justify-start items-center">
  {#each letter as item}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      id="letter-{item}"
      class="w-5 h-4 {selected_letter == item
        ? 'bg-gray-200'
        : ''} mb-0.5 flex items-stretch justify-center rounded-sm"
      on:click={() => selectLetter(item)}
    >
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="self-center text-xs">{item}</a>
    </div>
  {/each}
</div>
