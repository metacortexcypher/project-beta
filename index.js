// Display the alert box after 4 seconds
setTimeout(() => {
    const alertBox = document.getElementById("alertBox");
    alertBox.style.display = "block";
  }, 4000); // 4000 ms = 4 seconds

  function closeAlertBox() {
    const alertBox = document.getElementById("alertBox");
    alertBox.style.display = "none";
  }