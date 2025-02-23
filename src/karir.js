function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }