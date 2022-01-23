function myPassword() {
  let showPassword = document.querySelectorAll("#password");
  if (showPassword.type === "password") {
    showPassword.type = "text";
  } else {
    showPassword.type = "password";
  }
}

//   dashboard script open
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
//   dashboard script close
