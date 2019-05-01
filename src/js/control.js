const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");
const jumpForwardButton = document.getElementById("jumpForwardButton");
const jumpBackButton = document.getElementById("jumpBackButton");
const loadSourceButtons = document.querySelectorAll(".loadSource");
const player = videojs("my-player");

player.on("ready", function() {
  playButton.addEventListener("click", handlePlay);
  pauseButton.addEventListener("click", handlePause);
  stopButton.addEventListener("click", handleStop);
  jumpForwardButton.addEventListener("click", handleJumpForward);
  jumpBackButton.addEventListener("click", handleJumpBack);
  for (loadSourceButton of loadSourceButtons) {
    loadSourceButton.addEventListener("click", handleLoadSource);
  }
});

function handlePlay() {
  player.play();
}

function handlePause() {
  player.pause();
}

function handleStop() {
  //player.reset();
  player.pause();
  player.currentTime(0);
}

function handleJumpForward() {
  player.currentTime(player.currentTime() + 5);
}

function handleJumpBack() {
  player.currentTime(player.currentTime() - 5);
}

function handleLoadSource(e) {
  const input = e.currentTarget.parentNode.getElementsByTagName("input");
  const source = input[0].value;
  player.src(source);
  player.load();
  player.play();
}
