<script lang="ts">
  import { link } from "svelte-routing";
  import BackIcon from "../assets/images/back.png";
  import { onMount } from "svelte";
  import AuthService from "../service/auth/auth";
  import type { AuthUser } from "../service/auth/type";
  import { authUser } from "../store/auth";
  import { Alert, Spinner } from "flowbite-svelte";
  import { beforeUpdate } from "svelte";
  import { isExpired } from "../utils/auth";
  import { markerStore } from "../store/map";

  // Log out if the token is expired
  beforeUpdate(() => {
    isExpired();
  });

  // Service
  const authService = new AuthService();
  $: user = {} as AuthUser;

  // Get user detail
  onMount(async () => {
    const { data } = await authService.getDetail();

    user = data;
  });

  // Update user detail
  const updateUser = async () => {
    // Show spinner and hide text
    const textSaveProfile = document.querySelector(
      ".text-save-profile"
    ) as HTMLElement;
    textSaveProfile.classList.add("hidden");
    const spinner = document.querySelector(".spinner") as HTMLElement;
    spinner.classList.remove("hidden");

    // Get value from form
    const firstName = document.getElementById(
      "nama-depan-profil"
    ) as HTMLInputElement;
    const lastName = document.getElementById(
      "nama-belakang-profil"
    ) as HTMLInputElement;
    const afiliasi = document.getElementById(
      "afiliasi-profil"
    ) as HTMLInputElement;
    const agent = document.getElementById("agent-profil") as HTMLInputElement;
    const spesialisasiAset = document.getElementsByName(
      "spesialisasi-aset-profil"
    ) as NodeListOf<HTMLInputElement>;
    const spesialisasiAreaProfil = document.getElementById(
      "spesialisasi-area-profil"
    ) as HTMLTextAreaElement;
    const deskripsiSingkatProfil = document.getElementById(
      "deskripsi-singkat-profil"
    ) as HTMLInputElement;
    const deskripsiPanjangProfil = document.getElementById(
      "deskripsi-panjang-profil"
    ) as HTMLTextAreaElement;

    // Get value from checkbox
    const spesialisasiAsetValue = Array.from(spesialisasiAset)
      .filter((el) => el.checked)
      .map((el) => el.value);

    const spesialisasiAreaValue = spesialisasiAreaProfil.value.split(",");

    try {
      // Update user detail
      const { data } = await authService.updateDetail({
        first_name: firstName.value,
        last_name: lastName.value,
        afiliasi: afiliasi.value,
        agent: agent.checked,
        spesialisasi_aset: spesialisasiAsetValue,
        spesialisasi_area: spesialisasiAreaValue,
        bio_singkat: deskripsiSingkatProfil.value,
        bio_panjang: deskripsiPanjangProfil.value,
      });

      // Update user state
      user = data;

      // Update auth user state
      authUser.update((state) => {
        return {
          ...state,
          first_name: data.first_name,
          last_name: data.last_name,
          afiliasi: data.afiliasi,
          agent: data.agent,
          spesialisasi_aset: data.spesialisasi_aset,
          spesialisasi_area: data.spesialisasi_area,
          bio_singkat: data.bio_singkat,
          bio_panjang: data.bio_panjang,
        };
      });

      // Show success alert
      const responseSuccess = document.querySelector(
        ".response-success"
      ) as HTMLElement;

      responseSuccess.classList.remove("hidden");

      // Hide success alert after 3 seconds
      setTimeout(() => {
        responseSuccess.classList.add("hidden");
      }, 3000);
    } catch (error) {
      // Show failed alert
      const responseFailed = document.querySelector(
        ".response-failed"
      ) as HTMLElement;

      responseFailed.classList.remove("hidden");

      // Hide failed alert after 3 seconds
      setTimeout(() => {
        responseFailed.classList.add("hidden");
      }, 3000);
    }

    // Hide spinner and show text
    textSaveProfile.classList.remove("hidden");
    spinner.classList.add("hidden");
  };

  // Remove Marker
  $markerStore?.remove();
</script>

<div class="flex flex-col show-form-registrasi">
  <!-- Judul Beranda -->

  <div class="w-full flex justify-between border-b border-gray-300">
    <div class="font-sf_pro_bold_judul text-2xl px-3 py-2 judulStory w-80">
      Pengaturan
    </div>
    <!--  -->

    <div class="flex col justify-center py-1 mt-1">
      <div
        class="flex justify-center items-center flex-col menus w-9 h-9 cursor-pointer hover:bg-slate-200 hover:rounded-full text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
      >
        <a
          href="/"
          use:link
          class="w-5 h-5 mt-0.5 mr-0.5 flex justify-center items-center relative"
        >
          <img src={BackIcon} alt="" />
        </a>
      </div>
    </div>
  </div>

  <!-- Profil -->
  <div
    class="h-full overflow-y-hidden overflow-x-hidden hide-scrollbar form-profil"
  >
    <div class="h-full w-full px-3">
      <!--  -->

      <!-- MenuPengaturan -->
      <div class="h-full flex flex-col">
        <!--  Card Favorit -->
        <div class="flex flex-col">
          <!-- Judul Favorit -->
          <div class="px-0 pt-0">
            <div
              class="flex flex-row items-stretch justify-between mt-1.5 border-b border-gray-200"
            >
              <!-- Menu Tab Pasang -->

              <div class="border-b border-gray-200">
                <!-- Tab Menu Pasang -->
                <ul
                  class="flex flex-wrap -mb-px text-sm font-medium text-center pr-4"
                  id="DetailPengaturan"
                  data-tabs-toggle="#DetailPengaturanContent"
                  role="tablist"
                >
                  <!-- Menu Tab Satu Pasang -->
                  <li class="border-b border-gray-200" role="presentation">
                    <button
                      class="inline-block pr-4 pb-1 pt-2 border-b-2 rounded-t-lg text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                      id="detail-pengaturan-satu-tab"
                      data-tabs-target="#detail-pengaturan-satu"
                      type="button"
                      role="tab"
                      aria-controls="detail-pengaturan-satu"
                      aria-selected="true"
                    >
                      Profil
                    </button>
                  </li>

                  <!-- Menu Tab Tiga Pasang -->
                  <li class="hidden" role="presentation">
                    <button
                      class="inline-block px-3.5 pb-1 pt-2 border-b-2 rounded-t-lg hover:border-gray-300 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-700 dark:hover:text-gray-300"
                      id="detail-pengaturan-tiga-tab"
                      data-tabs-target="#detail-pengaturan-tiga"
                      type="button"
                      role="tab"
                      aria-controls="detail-pengaturan-tiga"
                      aria-selected="false"
                    >
                      Kedua
                    </button>
                  </li>
                </ul>
              </div>
              <!--  -->
            </div>
          </div>

          <!-- Konten Card Details pasang -->
          <div class="w-full h-full">
            <div class="flex flex-col h-full">
              <!-- Tabs Pasang -->

              <div id="DetailPengaturanContent" class="">
                <!-- Konten Tab Satu Pasang -->
                <div
                  class="py-2"
                  id="detail-pengaturan-satu"
                  role="tabpanel"
                  aria-labelledby="detail-pengaturan-satu-tab"
                >
                  <!-- Profil bner-->
                  <div class="h-[70.5vh] form-profil px-0">
                    <!--  -->
                    <Alert color="red" class="response-failed hidden">
                      <span class="font-bold response-category">Gagal!</span>
                      <span class="response-message">Update Profile</span>
                    </Alert>
                    <Alert color="green" class="response-success hidden">
                      <span class="font-bold response-category">Berhasil!</span>
                      <span class="response-message">Update Profile</span>
                    </Alert>
                    <div
                      class="bg-transparent rounded-lg h-[67.5vh] overflow-y-auto overflow-x-hidden hide-scrollbar"
                    >
                      <div class="pt-0">
                        <form action="#">
                          <div class="grid grid-cols-2 gap-x-4 mb-5">
                            <!-- Nama -->
                            <div class="flex flex-col space-y-3">
                              <div>
                                <label
                                  for="nama-depan-profil"
                                  class="block mb-2 text-sm font-medium text-black"
                                  >Nama Depan</label
                                >
                                <input
                                  type="text"
                                  name="nama-depan-profil"
                                  id="nama-depan-profil"
                                  value={user.first_name ?? ""}
                                  class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                                />
                              </div>
                            </div>

                            <!-- Nama Belakang -->
                            <div class="flex flex-col space-y-3">
                              <div>
                                <label
                                  for="nama-belakang-profil"
                                  class="block mb-2 text-sm font-medium text-black"
                                  >Nama Belakang</label
                                >
                                <input
                                  type="text"
                                  name="nama-belakang-profil"
                                  id="nama-belakang-profil"
                                  value={user.last_name ?? ""}
                                  class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="grid grid-cols-2 gap-x-4 mb-5">
                            <!-- Afiliasi -->
                            <div class="flex flex-col space-y-3">
                              <div>
                                <label
                                  for="afiliasi-profil"
                                  class="block mb-2 text-sm font-medium text-black"
                                  >Afiliasi</label
                                >
                                <input
                                  type="text"
                                  name="afiliasi-profil"
                                  id="afiliasi-profil"
                                  value={user.afiliasi ?? ""}
                                  class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                                />
                              </div>
                            </div>

                            <!--  -->

                            <!-- Agent -->
                            <div class="flex flex-col space-y-3">
                              <div>
                                <label
                                  for="agent-profil"
                                  class="block mb-2 text-sm font-medium text-black"
                                  >Status</label
                                >
                                <div class="inline-flex mt-1 items-center">
                                  <div>
                                    <label
                                      class="relative inline-flex cursor-pointer w-full mt-1"
                                    >
                                      <input
                                        type="checkbox"
                                        value=""
                                        name="agent-profil"
                                        id="agent-profil"
                                        class="sr-only peer"
                                        checked={user.agent}
                                      />
                                      <div
                                        class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                      ></div>
                                    </label>
                                  </div>
                                  <div class="ml-3 text-sm -mt-1">Agen</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!--  -->
                          <div class="grid grid-cols-2 gap-x-4 mb-5">
                            <!-- Spesialisasi Aset -->
                            <div>
                              <label
                                for="spesialisasi-aset"
                                class="block mb-2 text-sm font-medium text-black"
                                >Spesialisasi Aset</label
                              >
                              <div class="w-full flex flex-row">
                                <div class="basis-1/3">
                                  <div class="flex items-center">
                                    <input
                                      name="spesialisasi-aset-profil"
                                      type="checkbox"
                                      value="Rumah Baru"
                                      checked={user.spesialisasi_aset?.includes(
                                        "Rumah Baru"
                                      )}
                                      class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-0 hapus_focus_checkbox"
                                    />
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label
                                      class="ml-2 text-sm cursor-pointer font-medium text-gray-900"
                                      >Rumah Baru</label
                                    >
                                  </div>
                                </div>
                                <div class="basis-1/3">
                                  <div class="flex items-center">
                                    <input
                                      name="spesialisasi-aset-profil"
                                      type="checkbox"
                                      value="Rumah Seken"
                                      checked={user.spesialisasi_aset?.includes(
                                        "Rumah Seken"
                                      )}
                                      class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-0 hapus_focus_checkbox"
                                    />
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label
                                      class="ml-2 text-sm cursor-pointer font-medium text-gray-900"
                                      >Rumah Seken</label
                                    >
                                  </div>
                                </div>

                                <div class="basis-1/3">
                                  <div class="flex items-center">
                                    <input
                                      name="spesialisasi-aset-profil"
                                      type="checkbox"
                                      value="Ruko"
                                      checked={user.spesialisasi_aset?.includes(
                                        "Ruko"
                                      )}
                                      class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-0 hapus_focus_checkbox"
                                    />
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label
                                      class="ml-2 text-sm cursor-pointer font-medium text-gray-900"
                                      >Ruko</label
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="w-full flex flex-row mt-1">
                                <div class="basis-1/2">
                                  <div class="flex items-center">
                                    <input
                                      name="spesialisasi-aset-profil"
                                      type="checkbox"
                                      value="Apartemen Baru"
                                      checked={user.spesialisasi_aset?.includes(
                                        "Apartemen Baru"
                                      )}
                                      class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-0 hapus_focus_checkbox"
                                    />
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label
                                      class="ml-2 text-sm cursor-pointer font-medium text-gray-900"
                                      >Apartemen Baru</label
                                    >
                                  </div>
                                </div>

                                <div class="basis-1/2">
                                  <div class="flex items-center">
                                    <input
                                      name="spesialisasi-aset-profil"
                                      type="checkbox"
                                      value="Apartemen Seken"
                                      checked={user.spesialisasi_aset?.includes(
                                        "Apartemen Seken"
                                      )}
                                      class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-0 hapus_focus_checkbox"
                                    />
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label
                                      class="ml-2 text-sm cursor-pointer font-medium text-gray-900"
                                      >Apartemen Seken</label
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                for="spesialisasi-aset"
                                class="block mb-2 text-sm font-medium text-black"
                                >Spesialisasi Area</label
                              >
                              <textarea
                                name="spesialisasi-area-profil"
                                id="spesialisasi-area-profil"
                                class="block p-2.5 h-[9vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 shadow"
                                rows="9"
                                >{user.spesialisasi_area ?? ""}</textarea
                              >
                            </div>
                          </div>

                          <!--  -->

                          <div class="grid grid-cols-2 gap-x-4 mb-5">
                            <!-- Deskripsi Panjang -->
                            <div class="flex flex-col space-y-3">
                              <div>
                                <label
                                  for="deskripsi-singkat-profil"
                                  class="block mb-2 text-sm font-medium text-black"
                                  >Deskripsi Singkat</label
                                >
                                <input
                                  type="text"
                                  name="deskripsi-singkat-profil"
                                  id="deskripsi-singkat-profil"
                                  value={user.bio_singkat ?? ""}
                                  class="border-0 px-2 py-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                                />
                              </div>
                            </div>

                            <!-- Deskripsi Panjang -->
                            <div class="flex flex-col space-y-3">
                              <div>
                                <label
                                  for="deskripsi-panjang-profil"
                                  class="block mb-2 text-sm font-medium text-black"
                                  >Deskripsi Panjang</label
                                >
                                <textarea
                                  name="deskripsi-panjang-profil"
                                  id="deskripsi-panjang-profil"
                                  class="block p-2.5 h-[9vh] remove-scroll-textarea resize-none w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 shadow"
                                  rows="9">{user.bio_panjang ?? ""}</textarea
                                >
                              </div>
                            </div>
                          </div>

                          <!--  -->
                        </form>
                      </div>

                      <div class="px-5 mt-4 flex w-full">
                        <div class="w-full flex justify-center">
                          <button
                            type="button"
                            class="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center"
                            on:click={updateUser}
                          >
                            <span class="text-save-profile">Simpan</span>
                            <Spinner
                              color="white"
                              class="hidden spinner"
                              size="6"
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <!--  -->
                  </div>
                </div>

                <!--  -->
              </div>

              <!--  -->
            </div>
          </div>

          <!--  -->
        </div>
      </div>

      <!--  -->
    </div>
  </div>
  <!--  -->
</div>
