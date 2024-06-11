<span id="countdown">28 : 18 : 00 : 39</span>
document.addEventListener('DOMContentLoaded', function() {
  // Function to start the countdown
  function startCountdown(duration, display) {
    var timer = duration, days, hours, minutes, seconds;

    setInterval(function () {
      days = Math.floor(timer / (24 * 60 * 60));
      hours = Math.floor((timer % (24 * 60 * 60)) / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = days + " : " + hours + " : " + minutes + " : " + seconds;

      if (--timer < 0) {
        timer = 0; // Stops the countdown at zero
      }
    }, 1000);
  }
