import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const timeElement = document.querySelector("#time");
const durationElement = document.querySelector("#duration");

video.addEventListener("loadedmetadata", () => {
  let second = Math.floor(video.duration % 60);
  if (second < 10) {
    second = "0" + second;
  }
  durationElement.innerHTML = Math.floor(video.duration / 60) + ":" + second;
});



const player = new MediaPlayer({ 
  el: video, 
  plugins: [
    
    new Autoplay()
  ],
});

const playButton = document.querySelector("#playButton");
playButton.onclick = () => player.play();


const muteButton = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
}

video.addEventListener("timeupdate", () => {
    let second = Math.floor(video.currentTime % 60);
    if (second < 10) {
      second = "0" + second;
    }
    timeElement.innerHTML = Math.floor(video.currentTime / 60) + ":" + second;
  });
  
const progressBar = document.querySelector("#progressBar");

video.addEventListener("timeupdate", () => {
  progressBar.value = (video.currentTime / video.duration) * 100;
});
