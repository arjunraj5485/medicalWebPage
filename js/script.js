// Toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // Button events
  const helpBtn = document.getElementById("help-btn");
  const appointmentBtn = document.getElementById("appointment-btn");

  if (helpBtn) {
    helpBtn.addEventListener("click", () => {
      alert("Calling HelpLine...");
    });
  }

  if (appointmentBtn) {
    appointmentBtn.addEventListener("click", () => {
      alert("Redirecting to Appointment Booking...");
    });
  }
});
