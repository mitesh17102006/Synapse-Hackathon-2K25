// Basic login validation and redirect
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple validation (you can replace with real backend later)
  if (email === "admin@gmail.com" && password === "12345") {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index1.html"; // Redirect to main page
  } else {
    alert("Invalid email or password. Try again!");
  }
});

// Protect main website (optional check)
if (window.location.pathname.includes("index1.html")) {
  if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html";
  }
}
