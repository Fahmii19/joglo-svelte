<script>
  function FormLupaPassword(event) {}
  function FormRegistration(event) {}
  function MasukAkunLogin(event) {}
  function showCardInfoDetail(event) {}
  function showCardAgent(event) {}
  function formatNumber(event) {}
  function CloseAllStories(event) {}
  function showMessage(event) {}
  function KeluarAkun(event) {}
  function ShowProfil(event) {}
  function ShowRegistrasi(event) {}
  function MenuTabList(event) {}
  function EditStoriesPosting(event) {}
  function CloseTabPengaturan(event) {}
  function toggleAgenNonAgen(event) {}
  function showPostingStories(event) {}
  function storiesPrevious(event) {}
  function CloseStoriesDua(event) {}
  function closeTab(event) {}
  function handleKeyPress(event) {
    if (event.key === "Enter" || event.key === " ") {
      // Ketika pengguna menekan tombol Enter atau spasi
      showCardAgent();
    }
  }

  function previewFilePengaturan(event) {
    // Logic untuk menghandle perubahan file
  }

  // komponen
  import Header from "./lib/Header.svelte";
  import SidebarnPeta from "./lib/SidebarnPeta.svelte";
  import MainKontenUtama from "./lib/MainKontenUtama.svelte";
</script>

<main>
  <div class="h-screen bg-gray-100 text-black flex flex-col overflow-y-hidden">
    <Header />
    <!-- Start Main Konten Utama rev.1 -->
    <div class="w-full h-[82vh] grid grid-cols-2">
      <SidebarnPeta />
      <MainKontenUtama />
    </div>
  </div>
</main>

<style>
</style>
