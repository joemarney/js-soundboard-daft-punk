const soundBite = document.querySelector(".container");

soundBite.addEventListener("click", (evt) => {
  const audioElement = new Audio(`../sounds/${evt.target.id}.wav`);
  audioElement.volume = 0.5;
  audioElement.play();
});
