const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx-C8hQKZeWr-OvPyRR0Vy4fslvgrsn0hUN0NHtry99fGqDaJ4D2aLEGmpf5OKhwYwF/exec";

document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address.");
    return;
  }

  try {
    const formData = new FormData(this);
    const res = await fetch(SCRIPT_URL, { method: "POST", body: formData });
    if (res.ok) {
      alert("Message sent successfully!");
      this.reset();
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (err) {
    alert("Network error. Please try again later.");
  }
});

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}
