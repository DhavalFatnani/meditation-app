function togglePlayPause() {
  let play_button = document.querySelector(".play");
  let pause_button = document.querySelector(".pause");

  let video = document.querySelector(".background-video");

  if (video.paused) {
    video.play();
    play_button.style.display = "none";
    pause_button.style.display = "inline";
    reduceTime();
  } else {
    video.pause();
    pause_button.style.display = "none";
    play_button.style.display = "inline";
  }
}

function restartTimer() {}

function setTimer(time) {
  let displayTime = document.querySelector(".time");
  let seconds = 0;
  let timer = `${time}:${seconds}`;

  displayTime.innerHTML = timer;
}

function reduceTime() {}
