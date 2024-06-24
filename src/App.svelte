<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import favIcon from "/favicon.ico";
  import Nav from "./components/Nav.svelte";
  import NavFilter from "./components/NavFilter.svelte";
  import MenuContent from "./components/MenuContent.svelte";
  import Gallery from "./pages/Gallery.svelte";
  import Detail from "./pages/Detail.svelte";
  import { onMount, beforeUpdate } from "svelte";
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

  export let url = "";

  beforeUpdate(() => {
    // Check localStorage if the user is logged in
    const active_token = localStorage.getItem("active_token");
    if (active_token) {
      isLogged.set(true);
      authUser.set(ExtractToken());
    }

    window.onbeforeunload = () => {
      // Set a flag in localStorage to check if the page is being refreshed
      localStorage.setItem("isRefreshing", "true");
    };

    window.onload = () => {
      // Check if the page is being refreshed
      if (localStorage.getItem("isRefreshing") === "true") {
        // Clear the flag in localStorage
        localStorage.removeItem("isRefreshing");

        // Redirect to the root ("/") page
        navigate("/");
      }
    };
  });

  onMount(() => {
    // Connect to Socket
    socketConnect(import.meta.env.VITE_SOCKET_URL);
  });
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={favIcon} />
</svelte:head>

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
        <Route path="/favorite" component={Favorite} />
        <Route path="/profile/:user_id" let:params>
          <Profile user_id={Number(params.user_id)} />
        </Route>
        <Route path="/chat" component={Chat} />
        <Route path="/agent" component={Agent} />
        <Route path="/posting" component={Posting} />
        <!-- Route Not Found -->
        <Route path="*">404 Not Found</Route>
      </Router>
    </MenuContent>
  </div>
</main>

<style>
</style>
