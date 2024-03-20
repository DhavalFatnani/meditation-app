let play_button = document.querySelector(".play");
let pause_button = document.querySelector(".pause");
let bg_video = document.querySelector(".background-video");
bg_video.pause();
play_button.style.display = "inline";
pause_button.style.display = "none";
let galaxy = document.querySelector(".galaxy");
let monk = document.querySelector(".monk");
let ocean = document.querySelector(".ocean");
let rain = document.querySelector(".rain");

function togglePlayPause() {
  if (bg_video.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
}

function playVideo() {
  bg_video.play();
  play_button.style.display = "none";
  pause_button.style.display = "inline";
  timerPlay();
}

function pauseVideo() {
  bg_video.pause();
  pause_button.style.display = "none";
  play_button.style.display = "inline";
  timerPause();
}

function restartTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timeLeft = 0;
  updateTimerDisplay();
  togglePlayPause();
}

let timerInterval;
let timeLeft = 0;
let isTimerRunning = false;

function setTime(minutes) {
  timeLeft = minutes * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.querySelector(".timer").textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function timerPlay() {
  timerInterval = setInterval(updateTime, 1000);
  isTimerRunning = true;
}

function timerPause() {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
  }
}

function updateTime() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimerDisplay();
  } else {
    clearInterval(timerInterval);
    isTimerRunning = false;
    alert("Time Finished!");
  }
}

function triggerGalaxy() {
  bg_video.src = "./images/galaxy.mp4";
  if (bg_video.play) {
    pauseVideo();
  }
}

function triggerMonk() {
  bg_video.src = "./images/monk.mp4";
  if (bg_video.play) {
    pauseVideo();
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
