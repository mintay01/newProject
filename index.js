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
  //   searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  image = body.querySelector(".image"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  image.classList.toggle("hide");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
//   dashboard script close

// image pop up open
function openForm() {
  if (document.getElementById("myForm")) {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").classList.add("opened");
  }
}

function closeForm() {
  if (document.getElementById("myForm")) {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm").classList.remove("opened");
  }
}
window.addEventListener("click", function (e) {
  var element = document.getElementById("myForm");
  var imgItm = document.getElementsByClassName("img");

  if (e.target !== element && !element.contains(e.target)) {
    if (element.classList.contains("opened") && e.target !== imgItm) {
      closeForm();
    }
  }
});
// image pop up close
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var edit = document.querySelectorAll(".fa-user-edit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//
// When the user clicks the button, open the modal
var btn = document.getElementById("myBtn");
if (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
  };
  
}
edit.forEach((each) => {
  each.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
