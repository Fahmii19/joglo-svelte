<!-- LoadingIndicator.svelte -->
<script>
  export let message = "Loading..."; // Pesan default untuk indikator pemuatan
</script>

<div class="loading-indicator">
  {message}
  <!-- Menampilkan pesan pemuatan -->
</div>

<style>
  .loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    font-size: 2em;
    z-index: 1000;
  }
</style>
