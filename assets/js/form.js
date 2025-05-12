let startTime;
const form = document.getElementById("contactForm");
const timerDisplay = document.getElementById("timer");
const confirmation = document.getElementById("confirmation");

form.addEventListener("focusin", () => {
  if (!startTime) {
    startTime = Date.now();
    updateTimer();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Basic HTML5 validation will already be handled
  const timeSpent = Math.floor((Date.now() - startTime) / 1000);
  confirmation.classList.remove("hidden");
  confirmation.textContent = `Thank you! Your message was submitted. You spent ${timeSpent} seconds.`;
  form.reset();
  startTime = null;
  timerDisplay.textContent = "Time spent: 0 seconds";
});

function updateTimer() {
  if (!startTime) return;
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  timerDisplay.textContent = `Time spent: ${elapsed} seconds`;
  requestAnimationFrame(updateTimer);
}
