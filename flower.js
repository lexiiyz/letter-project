// Listen for message from parent window
window.addEventListener("message", (event) => {
  if (event.data === "start-bloom") {
    document.body.classList.remove("not-loaded");
  }
});

// Fallback: If no message received (e.g. standalone), remove after a delay
onload = () => {
    // Optional: Auto-start if testing standalone
    // document.body.classList.remove("not-loaded");
};
