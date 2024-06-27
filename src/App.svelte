<script lang="ts">
  import { onMount, beforeUpdate } from "svelte";
  // import LoadingIndicator from "./components/LoadingIndicator.svelte";

  let isLoaded = false;

  onMount(() => {
    const loadFonts = async () => {
      try {
        await Promise.all([
          document.fonts.load("1em 'Font SF-Pro-Text-Regular'"),
          document.fonts.load("1em 'Font SF-Pro-Text-Bold'"),
          document.fonts.load("1em 'Font SF-Pro-Text-Bold-Italic'"),
        ]);
        isLoaded = true;
      } catch (error) {
        console.error("Failed to load fonts:", error);
      }
    };

    loadFonts();
  });

  // Import routing and other necessary components after fonts are loaded
  import { Router, Route, navigate } from "svelte-routing";
  import favIcon from "/favicon.ico";
  import Nav from "./components/Nav.svelte";
  import NavFilter from "./components/NavFilter.svelte";
  import MenuContent from "./components/MenuContent.svelte";
  import Gallery from "./pages/Gallery.svelte";
  import Detail from "./pages/Detail.svelte";
  import DetailNew from "./pages/DetailNew.svelte";
  import DetailAgentNew from "./pages/DetailAgentNew.svelte";
  import Login from "./pages/Login.svelte";
  import { authUser, isLogged } from "./store/auth";
  import { ExtractToken, isExpired } from "./utils/auth";
  import Register from "./pages/Register.svelte";
  import Setting from "./pages/Setting.svelte";
  import Favorite from "./pages/Favorite.svelte";
  import Profile from "./pages/Profile.svelte";
  import Chat from "./pages/Chat.svelte";
  import { socketConnect } from "./utils/socket";
  import Agent from "./pages/Agent.svelte";
  import Posting from "./pages/Posting.svelte";
  import ListingBaruNew from "./pages/ListingBaruNew.svelte";
  import FavoritNew from "./pages/FavoritNew.svelte";
  import AgentNew from "./pages/AgentNew.svelte";
  import ChatNew from "./pages/ChatNew.svelte";

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
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={favIcon} />
</svelte:head>

{#if !isLoaded}
  <!-- <LoadingIndicator message="Mohon tunggu, sedang memuat..." /> -->
{:else}
  <main class="font-sf_pro_reguler">
    <div class="min-h-screen bg-gray-100 flex flex-col overflow-y-hidden">
      <Nav />
      <NavFilter />
      <MenuContent>
        <Router {url}>
          <Route path="/" component={Gallery} />
          <Route path="/detail/:id" let:params>
            <Detail id={params.id} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/settings" component={Setting} />
          <Route path="/favorite" component={FavoritNew} />
          <Route path="/listing-baru" component={ListingBaruNew} />
          <Route path="/profile/:user_id" let:params>
            <Profile user_id={Number(params.user_id)} />
          </Route>
          <Route path="/chat" component={ChatNew} />
          <Route path="/agent" component={AgentNew} />
          <Route path="/detail-agent" component={DetailAgentNew} />
          <Route path="/posting" component={Posting} />
          <Route path="/detail-new" component={DetailNew} />
          <Route path="*">404 Not Found</Route>
        </Router>
      </MenuContent>
    </div>
  </main>
{/if}

<style>
  /* Define your styles for the application */
</style>
