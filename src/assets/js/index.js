// Button Groups
export function setupButtonGroups() {
  const buttons1 = document.querySelectorAll(".btn_chip_header1");
  const buttons2 = document.querySelectorAll(".btn_chip_header2");

  function setupButtons(buttons) {
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        if (this.classList.contains("active_btn_peta")) {
          this.classList.remove("active_btn_peta");
          this.classList.add("bg-white");
        } else {
          buttons.forEach((btn) => {
            btn.classList.remove("active_btn_peta");
            btn.classList.add("bg-white");
          });
          this.classList.add("active_btn_peta");
          this.classList.remove("bg-white");
        }
      });
    });
  }

  setupButtons(buttons1);
  setupButtons(buttons2);
}
