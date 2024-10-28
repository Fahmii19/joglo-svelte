<!-- FourDotsLoader.svelte -->
<script>
  import { onMount } from "svelte";

  export let color = "#888"; // Warna titik
  export let size = "8px"; // Ukuran titik
  export let margin = "3px"; // Jarak antar titik
  export let speed = "0.6s"; // Kecepatan animasi

  let loaderStyle = `
    .four-dots-loader {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      position: relative;
    }
    .dot {
      width: ${size};
      height: ${size};
      margin: ${margin};
      background-color: ${color};
      animation: blink ${speed} infinite alternate;
    }
    .dot:nth-child(2) {
      animation-delay: ${parseFloat(speed) / 4}s;
    }
    .dot:nth-child(3) {
      animation-delay: ${parseFloat(speed) / 2}s;
    }
    .dot:nth-child(4) {
      animation-delay: ${parseFloat(speed) * 0.75}s;
    }
    @keyframes blink {
      0% {
        opacity: 0.2;
      }
      100% {
        opacity: 1;
      }
    }
  `;
</script>

<div class="four-dots-loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<style>
  .four-dots-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
  }
  .dot {
    width: 8px;
    height: 8px;
    margin: 3px;
    background-color: #888;
    animation: blink 0.6s infinite alternate;
  }
  .dot:nth-child(2) {
    animation-delay: 0.15s;
  }
  .dot:nth-child(3) {
    animation-delay: 0.3s;
  }
  .dot:nth-child(4) {
    animation-delay: 0.45s;
  }
  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
</style>
