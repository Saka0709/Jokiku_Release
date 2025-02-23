// Set the countdown end time
const endTime = new Date("2025-03-31T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  if (timeLeft > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerText = 
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    // Stop the countdown and show expired message
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "Expired!";
  }
}, 1000);