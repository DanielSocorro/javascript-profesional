import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const playButton = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");
const timeElement = document.querySelector("#time");


const player = new MediaPlayer({ el: video});
playButton.onclick = () => {
  if (video.paused) {
    player.play();
  } else {
    player.pause();
  }
}

muteButton.onclick = () => {
  if (video.muted) {
    player.unmute();
  } else {
    player.mute();
  }
}

video.addEventListener("timeupdate", () => {
  timeElement.innerHTML = Math.floor(video.currentTime / 60) + ":" + 
  Math.floor(video.currentTime % 60);
})