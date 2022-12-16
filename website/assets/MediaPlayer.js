function MediaPlayer(config) {
    this.media = config.el;
  }
  
  MediaPlayer.prototype.play = function() {
      this.media.play();
  }
  
  MediaPlayer.prototype.pause = function() {
      this.media.pause();
  }
  
  MediaPlayer.prototype.mute = function() {
      this.media.muted = true;
  }
  
  MediaPlayer.prototype.unmute = function() {
      this.media.muted = false;
  }

  export default MediaPlayer;