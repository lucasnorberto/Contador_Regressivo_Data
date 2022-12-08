function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}
window.onload = function () {
  var duration = 60 * 5; // Converter para segundos
      display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
};

// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minsEl = document.getElementById("mins");
// const secondsEl = document.getElementById("seconds");

// const newYears = "1 jan 2023";

// function countdown() {
//   const newYearsDate = new Date(newYears);
//   const currentDate = new Date();

//   const totalSeconds = (newYearsDate - currentDate) / 1000;

//   const days = Math.floor(totalSeconds / 3600 / 24);
//   const hours = Math.floor(totalSeconds / 3600) % 24;
//   const mins = Math.floor(totalSeconds / 60) % 60;
//   const seconds = Math.floor(totalSeconds) % 60;

//   daysEl.innerHTML = days;
//   hoursEl.innerHTML = formatTime(hours);
//   minsEl.innerHTML = formatTime(mins);
//   secondsEl.innerHTML = formatTime(seconds);
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// countdown();

// setInterval(countdown, 1000);
