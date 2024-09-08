const afterSoundBite = document.querySelector("#after");
const notAfter = document.querySelector(".container");

const afterTrial = new Audio("../sounds/after.wav");

afterSoundBite.addEventListener("click", (evt) => {
  afterTrial.volume = 1;
  afterTrial.play();
});

notAfter.addEventListener("click", (evt) => {
  if (evt.target.id != "after") {
    const audioElement = new Audio(`../sounds/${evt.target.id}.wav`);
    audioElement.volume = 1;
    audioElement.play();
  }
});
