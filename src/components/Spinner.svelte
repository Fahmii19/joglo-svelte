<!-- Spinner.svelte -->
<script>
  import { Spinner } from "spin.js";
  import { onMount } from "svelte";

  export let options = {
    lines: 13,
    length: 7,
    width: 4,
    radius: 10,
    scale: 1,
    corners: 1,
    color: "#333", // Warna spinner lebih gelap
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    className: "spinner",
    top: "50%", // Atur jarak vertikal dari atas
    left: "50%",
    shadow: false,
    hwaccel: false,
    position: "absolute",
  };

  let spinner;
  let target;

  onMount(() => {
    spinner = new Spinner(options).spin(target);
    return () => spinner.stop();
  });
</script>

<div bind:this={target}></div>

<style>
  div {
    position: relative;
  }
</style>
