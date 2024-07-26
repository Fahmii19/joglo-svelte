<script lang="ts">
  import ModelIcon from "../assets/images/model.jpg";
  import VerifIcon from "../assets/images/verif.png";
  import AgenPropertyIcon from "../assets/images/agen-property.png";
  import MedalIcon from "../assets/images/medal_1.png";
  import MedalIcon2 from "../assets/images/medal_2.png";
  import MedalIcon3 from "../assets/images/medal_3.png";
  import ViewIcon from "../assets/images/view.png";
  import { authUser } from "../store/auth";
  import type { AuthUser } from "../service/auth/type";
  import { ExtractToken } from "../utils/auth";
  import { link, navigate } from "svelte-routing";
  import { io } from "../utils/socket";
  import { detailChat } from "../store/chat";

  export let authUserData = $authUser ?? ({} as AuthUser);

  const { user_id } = ExtractToken();

  const SendMessage = () => {
    $io?.emit(
      "chat_available_room",
      Number(user_id),
      Number(authUserData.user_id),
      (room_id: string) => {
        const room_id_available = room_id
          ? room_id
          : "ROOM-" + Number(user_id) + Number(authUserData.user_id);
        detailChat.set({
          name: `${authUserData.first_name ?? ""} ${
            authUserData.last_name ?? ""
          }`,
          to_user_id: Number(authUserData.user_id),
          room_id: room_id_available,
        });

        navigate("/chat");
      }
    );
  };
</script>

<div
  class="h-full"
  id="detail-agenprofil-satu"
  role="tabpanel"
  aria-labelledby="detail-agenprofil-satu-tab"
>
  <!-- Infokann -->
  <div
    class="w-full h-[67.5vh] grid grid-cols-[271px,1fr] gap-2 mt-5 HideProfilBiodata"
  >
    <div class="flex flex-col">
      <div class="bg-white rounded-lg shadow-xl h-[42.5vh]">
        <div class="">
          <!--  -->
          <div
            class="grid grid-cols-[90px,1fr] h-full w-full mx-auto mt-2 mb-1"
          >
            <div
              class="w-full h-full flex flex-col justify-center items-center"
            >
              <div class="relative flex flex-col items-center cursor-pointer">
                <div class="">
                  <div
                    class="w-12 h-12 p-[0.15rem] bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full"
                  >
                    <img
                      class="w-full h-full p-[0.15rem] bg-white rounded-full relative"
                      src={ModelIcon}
                      alt=""
                    />

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute bottom-0 -right-0.5 bg-white border-white border-2 rounded-full"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.125 16C12.4742 16 16 12.4742 16 8.125C16 3.77576 12.4742 0.25 8.125 0.25C3.77576 0.25 0.25 3.77576 0.25 8.125C0.25 12.4742 3.77576 16 8.125 16Z"
                        fill="#1877F2"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.61719 4.67969C8.61719 4.40786 8.39683 4.1875 8.125 4.1875C7.85317 4.1875 7.63281 4.40786 7.63281 4.67969V7.63281H4.67969C4.40786 7.63281 4.1875 7.85317 4.1875 8.125C4.1875 8.39683 4.40786 8.61719 4.67969 8.61719H7.63281V11.5703C7.63281 11.8421 7.85317 12.0625 8.125 12.0625C8.39683 12.0625 8.61719 11.8421 8.61719 11.5703V8.61719H11.5703C11.8421 8.61719 12.0625 8.39683 12.0625 8.125C12.0625 7.85317 11.8421 7.63281 11.5703 7.63281H8.61719V4.67969Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full h-full flex flex-row">
              <div class="flex flex-col justify-center items-center">
                <div class="text-lg font-semibold">557</div>
                <div class="text-xs">Listingn</div>
              </div>
              <div class="flex flex-col justify-center items-center px-7">
                <div class="text-lg font-semibold">5</div>
                <div class="text-xs">Terjual</div>
              </div>
              <div class="flex flex-col justify-center items-center pl-1">
                <div class="text-lg font-semibold">55</div>
                <div class="text-xs">Rank</div>
              </div>
            </div>
          </div>

          <div class="mx-3">
            <div class="inline-flex items-center">
              <div class="text-sm font-semibold text-gray-700 mr-2">
                {authUserData?.first_name}
                {authUserData?.last_name}
              </div>
              <!--  -->
              <div
                class="w-5 h-5 flex mt-0.5 mr-2 justify-center items-center relative"
              >
                <img src={VerifIcon} alt="" />
              </div>

              <!--  -->
            </div>

            <!--  -->
            <div class="mt-1">
              <div class="w-full flex flex-row">
                <div>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <img class="w-5 h-5 object-contain" src={MedalIcon} />
                </div>
                <div>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <img class="w-5 h-5 object-contain ml-1.5" src={MedalIcon2} />
                </div>

                <div>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <img class="w-5 h-5 object-contain ml-1.5" src={MedalIcon3} />
                </div>
              </div>
            </div>

            <div class="mt-2">
              <div class="text-sm text-gray-500">Kuningan, Jakarta Selatan</div>

              <!--  -->
            </div>

            <div class="mt-2 flex flex-col relative">
              <div class="font-semibold text-sm">Afiliasi</div>
              <div class="text-sm text-gray-500">
                {authUserData?.afiliasi ? authUserData?.afiliasi : "-"}
              </div>
              <div class="absolute right-0 bottom-0 mb-1">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="w-7 h-7 object-contain" src={AgenPropertyIcon} />
              </div>
            </div>

            <div class="inline-flex items-center mt-1">
              <div>
                <span class="text-sm text-[#2074d8] cursor-pointer">
                  linktr.ee/{authUserData?.first_name}</span
                >
              </div>

              <!--  -->
            </div>

            <div class="w-full flex justify-center mt-2">
              {#if user_id == authUserData?.user_id}
                <a
                  href="/settings"
                  use:link
                  class="h-4 p-3 text-xs font-medium text-center inline-flex items-center text-white bg-[#0394F7] hover:bg-[#1877F2] rounded-md"
                >
                  Edit Profil
                </a>
              {/if}
              <button
                type="button"
                on:click={SendMessage}
                class="h-4 p-3 text-xs font-medium text-center inline-flex items-center text-white bg-[#0394F7] hover:bg-[#1877F2] rounded-md mx-2"
              >
                Kirim Pesann
              </button>

              {#if user_id == authUserData?.user_id}
                <button
                  type="button"
                  class="h-4 p-3 text-xs font-medium text-center inline-flex items-center text-white bg-[#0394F7] hover:bg-[#1877F2] rounded-md"
                >
                  Iklan
                </button>
              {/if}
              <!--  -->
            </div>
            {#if user_id == authUserData?.user_id}
              <div class="w-full flex justify-center mt-2">
                <div>
                  <button
                    type="button"
                    class="h-4 p-3 text-xs font-medium text-center inline-flex items-center text-white bg-[#0394F7] hover:bg-[#1877F2] rounded-md"
                  >
                    Upgrade Membership
                  </button>
                </div>
              </div>

              <div class="w-full flex justify-start mt-2">
                <div class="inline-flex items-center">
                  <img class="w-5 h-5" src={ViewIcon} alt="" />

                  <div class="ml-1 text-xs text-black flex items-center">
                    25
                  </div>
                </div>
              </div>
            {/if}
          </div>

          <!--  -->
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-xl h-[24vh] mt-2">
        <div class="flex flex-col mx-3 mt-2">
          <div class="font text-sm font-semibold mb-1">Spesialisasi Areaa</div>
          <div class="flex flex-wrap">
            {#if authUserData.spesialisasi_area !== null}
              {#each authUserData.spesialisasi_area ?? [] as area}
                <div class="mr-2 mb-0.5">
                  <button
                    type="button"
                    class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
                  >
                    {area}
                  </button>
                </div>
              {/each}
            {:else}
              <div class="text-sm text-gray-500">
                Belum ada spesialisasi area
              </div>
            {/if}
          </div>
        </div>
        <div class="flex flex-col mx-3 mt-2">
          <div class="font text-sm font-semibold mb-1">Spesialisasi Aset</div>
          <div class="flex flex-wrap">
            {#if authUserData.spesialisasi_aset !== null}
              {#each authUserData.spesialisasi_aset ?? [] as aset}
                <div class="mr-2 mb-0.5">
                  <button
                    type="button"
                    class="h-5 px-2 bg-white border border-gray-700 text-black font-medium rounded-full text-xs"
                  >
                    {aset}
                  </button>
                </div>
              {/each}
            {:else}
              <div class="text-sm text-gray-500">
                Belum ada spesialisasi aset
              </div>
            {/if}
          </div>
        </div>

        <!--  -->
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-xl px-3 py-1 flex flex-col">
      <div class="text-sm font-semibold mt-1 mb-1">Deskripsi</div>

      <div class="text-sm text-gray-700 pb-1">
        {authUserData?.bio_panjang ? authUserData?.bio_panjang : "-"}
      </div>
    </div>
  </div>

  <!--  -->
  <!--  -->
</div>
