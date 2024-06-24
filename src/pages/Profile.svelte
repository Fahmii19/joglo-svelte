<script lang="ts">
  import { TabItem, Tabs } from "flowbite-svelte";
  import BackIcon from "../assets/images/back.png";
  import { link } from "svelte-routing";
  import ProfileBiodata from "../components/ProfileBiodata.svelte";
  import ProfileListing from "../components/ProfileListing.svelte";
  import UserService from "../service/users/users";
  import { authUser } from "../store/auth";
  import { page } from "../store/page";
  import { markerStore } from "../store/map";

  export let user_id = Number($authUser?.user_id);

  let authUserData = $authUser || {};

  // Get Detail Users
  const userService = new UserService();

  userService.getUsers(user_id).then((res) => {
    authUserData = res.data;
  });

  // Remove Marker
  $markerStore?.remove();
</script>

<div class="flex flex-col px-3">
  <div class="w-full">
    <div class="flex flex-col">
      <div class="w-full flex justify-between items-center">
        <div class="sf_pro_bold_judul text-2xl">Profil</div>

        <div class="flex col justify-center py-1 mt-1">
          <div
            class="flex justify-center items-center flex-col menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
          >
            <a
              href="/{$page}"
              use:link
              class="w-5 h-5 mt-0.5 mr-0.5 flex justify-center items-center relative"
            >
              <img src={BackIcon} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div class="py-2">
        <Tabs
          class="flex flex-wrap -mb-px text-sm font-medium text-center pr-4"
          inactiveClasses="inline-block pr-4 pb-1 pt-1 border-b-2 rounded-t-lg hover:text-gray-700 hover:border-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 dark:hover:text-gray-300 hover:text-gray-600"
          activeClasses="inline-block pr-4 pb-1 pt-1 border-b-2 rounded-t-lg text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500"
          contentClass="pt-1"
        >
          <TabItem title="Bioadata" open>
            <ProfileBiodata {authUserData} />
          </TabItem>
          <TabItem title="Stories" disabled />
          <TabItem title="Listing">
            <ProfileListing {user_id} />
          </TabItem>
          <TabItem title="Statistik" disabled />
        </Tabs>
      </div>
    </div>
  </div>
</div>
