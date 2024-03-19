let play_button = document.querySelector(".play");
let pause_button = document.querySelector(".pause");
let bg_video = document.querySelector(".background-video");
bg_video.pause();
play_button.style.display = "inline";
pause_button.style.display = "none";

function togglePlayPause() {
  let galaxy = document.querySelector(".galaxy");
  let monk = document.querySelector(".monk");
  let ocean = document.querySelector(".ocean");
  let rain = document.querySelector(".rain");

  if (bg_video.paused) {
    bg_video.play();
    play_button.style.display = "none";
    pause_button.style.display = "inline";
    timerInterval = setInterval(Timer, 1000);
  } else {
    bg_video.pause();
    pause_button.style.display = "none";
    play_button.style.display = "inline";
  }
}

function restartTimer() {}

function Timer(time) {
  let timeLimitInMinutes = Number(time);
  let timeLimitInSeconds = timeLimitInMinutes * 60;
  let timerElement = document.querySelector(".time");
  let minutes = Math.floor(timeLimitInSeconds / 60);
  let seconds = timeLimitInSeconds % 60;

  timeLimitInSeconds--;

  if (timeLimitInSeconds < 0) {
    timerElement.textContent = "00:00";
    clearInterval(timerInterval);
    return;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  timerElement.textContent = minutes + ":" + seconds;
}

function triggerGalaxy() {
  bg_video.src = "./images/galaxy.mp4";
  if (bg_video.play) {
    pause_button.style.display = "inline";
    play_button.style.display = "none";
  }
}

function triggerMonk() {
  bg_video.src = "./images/monk.mp4";
  if (bg_video.play) {
    pause_button.style.display = "inline";
    play_button.style.display = "none";
  }
}

function triggerOcean() {
  bg_video.src = "./images/ocean.mp4";
  if (bg_video.play) {
    pause_button.style.display = "inline";
    play_button.style.display = "none";
  }
}

function triggerRain() {
  bg_video.src = "./images/rain.mp4";
  if (bg_video.play) {
    pause_button.style.display = "inline";
    play_button.style.display = "none";
  }
}
