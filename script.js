function calculateTimeRemaining() {
    const targetDate = new Date(document.getElementById("target-date").value).getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
  
    if (timeRemaining <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    const seconds = Math.floor (timeRemaining % (1000 * 60)) / 1000).toString().padStart(2, "0");

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    }
    
    function updateElapsedTime() {
    let elapsedTime = parseInt(document.getElementById("elapsed-time").textContent);
    document.getElementById("elapsed-time").textContent = elapsedTime + 1;
    }
    
    let intervalId = setInterval(updateElapsedTime, 1000);
    
    function toggleTheme() {
    const body = document.querySelector("body");
    const themeButton = document.getElementById("theme-button");
    
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")) {
    themeButton.textContent = "Light";
    } else {
    themeButton.textContent = "Dark";
    }
    }

    let countdownIntervalId;
    let elapsedTimeIntervalId;

function startCountdown() {
  clearInterval(countdownIntervalId);
  clearInterval(elapsedTimeIntervalId);

  const countdownDate = new Date(document.getElementById("date-input").value).getTime();

  countdownIntervalId = setInterval(updateCountdown, 1000, countdownDate);
  elapsedTimeIntervalId = setInterval(updateElapsedTime, 1000);
}

document.getElementById("start-button").addEventListener("click", startCountdown);

  