<!-- Spinner.svelte -->
<script>
  import { Spinner } from "spin.js";
  import { onMount } from "svelte";

  export let options = {
    lines: 13,
    length: 7, // Ukuran panjang spinner lebih kecil
    width: 4, // Ukuran lebar spinner lebih kecil
    radius: 10, // Ukuran radius spinner lebih kecil
    scale: 1,
    corners: 1,
    color: "#FFF",
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    className: "spinner",
    top: "50%",
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
