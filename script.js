function login() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "leo messi" && password === "goat") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
