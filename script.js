document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic form validation
    if (username === "" || password === "") {
        document.getElementById('errorMessage').style.display = "block";
    } else {
        document.getElementById('errorMessage').style.display = "none";
        alert("Login successful!");
		location.href="./main.html";
        // You can implement actual login logic here
    }
});


