function login() {
    event.preventDefault(); // Prevents the default form submission

    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace this with your actual login logic using AJAX/fetch to send data to a server
    // For demonstration purposes, we'll use a simple alert
    if (username === "leo messi" && password === "goat") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
