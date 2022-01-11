function myPassword() {
    let showPassword = document.getElementsByClassName("password");
    if (showPassword.type === "password") {
        showPassword.type = "text";
    } else {
        showPassword.type = "password";
    }
  }