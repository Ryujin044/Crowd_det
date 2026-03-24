function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");
  

  // HARD CODED CREDENTIALS
  const validUser = "admin";
  const validPass = "1234";

  if (user === validUser && pass === validPass) {
    window.location.href = "dashboard.html"; // dummy redirect
  } else {
    error.textContent = "Invalid User ID or Password";
  }
}
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    login();
  }
});