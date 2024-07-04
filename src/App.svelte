<script lang="ts">
  import { onMount, beforeUpdate } from "svelte";
  import LoadingIndicator from "./components/LoadingIndicator.svelte";

  let isLoaded = false;
  let Nav,
    NavFilter,
    MenuContent,
    Gallery,
    Detail,
    DetailNew,
    DetailAgentNew,
    Login,
    Register,
    LupaKataSandi,
    Setting,
    FavoritNew,
    PengaturanNew,
    ListingBaruNew,
    PostinganStoriesBaru,
    Profile,
    ChatNew,
    AgentNew,
    Posting,
    DetailPostinganStories;
  onMount(() => {
    const loadFonts = async () => {
      try {
        await Promise.all([
          document.fonts.load("1em 'Font SF-Pro-Text-Regular'"),
          document.fonts.load("1em 'Font SF-Pro-Text-Bold'"),
          document.fonts.load("1em 'Font SF-Pro-Text-Bold-Italic'"),
        ]);
        isLoaded = true;
        // Load critical components after fonts
        Nav = (await import("./components/Nav.svelte")).default;
        NavFilter = (await import("./components/NavFilter.svelte")).default;
        MenuContent = (await import("./components/MenuContent.svelte")).default;
        Gallery = (await import("./pages/Gallery.svelte")).default;
      } catch (error) {
        console.error("Gagal memuat font:", error);
      }
    };

    loadFonts();
  });

  // Import routing and other necessary components dynamically
  import { Router, Route, navigate } from "svelte-routing";
  import favIcon from "/favicon.ico";
  import { authUser, isLogged } from "./store/auth";
  import { ExtractToken } from "./utils/auth";
  import { socketConnect } from "./utils/socket";

  export let url = "";

  beforeUpdate(() => {
    const active_token = localStorage.getItem("active_token");
    if (active_token) {
      isLogged.set(true);
      authUser.set(ExtractToken());
    }

    window.onbeforeunload = () => {
      localStorage.setItem("isRefreshing", "true");
    };

    window.onload = () => {
      if (localStorage.getItem("isRefreshing") === "true") {
        localStorage.removeItem("isRefreshing");
        navigate("/");
      }
    };
  });

  onMount(() => {
    socketConnect(import.meta.env.VITE_SOCKET_URL);
  });

  async function loadPage(componentName) {
    switch (componentName) {
      case "Detail":
        if (!Detail) Detail = (await import("./pages/Detail.svelte")).default;
        return Detail;
      case "DetailNew":
        if (!DetailNew)
          DetailNew = (await import("./pages/DetailNew.svelte")).default;
        return DetailNew;
      case "DetailAgentNew":
        if (!DetailAgentNew)
          DetailAgentNew = (await import("./pages/DetailAgentNew.svelte"))
            .default;
        return DetailAgentNew;
      case "Login":
        if (!Login) Login = (await import("./pages/Login.svelte")).default;
        return Login;
      case "LupaKataSandi":
        if (!LupaKataSandi)
          LupaKataSandi = (await import("./pages/LupaKataSandi.svelte"))
            .default;
        return LupaKataSandi;
      case "Register":
        if (!Register)
          Register = (await import("./pages/Register.svelte")).default;
        return Register;
      case "Setting":
        if (!Setting)
          Setting = (await import("./pages/Setting.svelte")).default;
        return Setting;
      case "FavoritNew":
        if (!FavoritNew)
          FavoritNew = (await import("./pages/FavoritNew.svelte")).default;
        return FavoritNew;
      case "PengaturanNew":
        if (!PengaturanNew)
          PengaturanNew = (await import("./pages/PengaturanNew.svelte"))
            .default;
        return PengaturanNew;
      case "ListingBaruNew":
        if (!ListingBaruNew)
          ListingBaruNew = (await import("./pages/ListingBaruNew.svelte"))
            .default;
        return ListingBaruNew;
      case "Profile":
        if (!Profile)
          Profile = (await import("./pages/Profile.svelte")).default;
        return Profile;
      case "ChatNew":
        if (!ChatNew)
          ChatNew = (await import("./pages/ChatNew.svelte")).default;
        return ChatNew;
      case "AgentNew":
        if (!AgentNew)
          AgentNew = (await import("./pages/AgentNew.svelte")).default;
        return AgentNew;
      case "Posting":
        if (!Posting)
          Posting = (await import("./pages/Posting.svelte")).default;
        return Posting;
      case "PostinganStoriesBaru":
        if (!PostinganStoriesBaru)
          PostinganStoriesBaru = (
            await import("./pages/PostinganStoriesBaru.svelte")
          ).default;
        return PostinganStoriesBaru;
      case "DetailPostinganStories":
        if (!DetailPostinganStories)
          DetailPostinganStories = (
            await import("./pages/DetailPostinganStories.svelte")
          ).default;
        return DetailPostinganStories;
    }
  }
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={favIcon} />
</svelte:head>

{#if !isLoaded}
  <!-- <LoadingIndicator message="Mohon tunggu, sedang memuat..." /> -->
{:else}
  <main class="font-sf_pro_reguler">
    <div class="min-h-screen bg-gray-100 flex flex-col overflow-y-hidden">
      <svelte:component this={Nav} />
      <svelte:component this={NavFilter} />
      <svelte:component this={MenuContent}>
        <Router {url}>
          <Route path="/" component={Gallery} />
          <Route path="/detail/:id" let:params>
            {#await loadPage("Detail") then DetailComponent}
              <DetailComponent id={params.id} />
            {/await}
          </Route>
          <Route path="/login" let:params>
            {#await loadPage("Login") then LoginComponent}
              <LoginComponent />
            {/await}
          </Route>
          <Route path="/lupa-kata-sandi" let:params>
            {#await loadPage("LupaKataSandi") then LupaKataSandiComponent}
              <LupaKataSandiComponent />
            {/await}
          </Route>
          <Route path="/register" let:params>
            {#await loadPage("Register") then RegisterComponent}
              <RegisterComponent />
            {/await}
          </Route>
          <Route path="/settings" let:params>
            {#await loadPage("Setting") then SettingComponent}
              <SettingComponent />
            {/await}
          </Route>
          <Route path="/favorit" let:params>
            {#await loadPage("FavoritNew") then FavoritNewComponent}
              <FavoritNewComponent />
            {/await}
          </Route>
          <Route path="/pengaturan" let:params>
            {#await loadPage("PengaturanNew") then PengaturanNewComponent}
              <PengaturanNewComponent />
            {/await}
          </Route>
          <Route path="/listing-baru" let:params>
            {#await loadPage("ListingBaruNew") then ListingBaruNewComponent}
              <ListingBaruNewComponent />
            {/await}
          </Route>
          <Route path="/profile/:user_id" let:params>
            {#await loadPage("Profile") then ProfileComponent}
              <ProfileComponent user_id={Number(params.user_id)} />
            {/await}
          </Route>
          <Route path="/chat" let:params>
            {#await loadPage("ChatNew") then ChatNewComponent}
              <ChatNewComponent />
            {/await}
          </Route>
          <Route path="/agen" let:params>
            {#await loadPage("AgentNew") then AgentNewComponent}
              <AgentNewComponent />
            {/await}
          </Route>
          <Route path="/detail-agent" let:params>
            {#await loadPage("DetailAgentNew") then DetailAgentNewComponent}
              <DetailAgentNewComponent />
            {/await}
          </Route>
          <Route path="/posting" let:params>
            {#await loadPage("Posting") then PostingComponent}
              <PostingComponent />
            {/await}
          </Route>
          <Route path="/detail-new" let:params>
            {#await loadPage("DetailNew") then DetailNewComponent}
              <DetailNewComponent />
            {/await}
          </Route>
          <Route path="/postingan-stories" let:params>
            {#await loadPage("PostinganStoriesBaru") then PostinganStoriesBaruComponent}
              <PostinganStoriesBaruComponent />
            {/await}
          </Route>
          <Route path="/detail-postingan-stories" let:params>
            {#await loadPage("DetailPostinganStories") then DetailPostinganStoriesComponent}
              <DetailPostinganStoriesComponent />
            {/await}
          </Route>
          <Route path="*">404 Not Found</Route>
        </Router>
      </svelte:component>
    </div>
  </main>
{/if}

<style>
</style>
