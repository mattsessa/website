document.addEventListener("DOMContentLoaded", function () {
  const phrases = ["Matt Sessa", "a Maker", "a Creator"];
  let currentPhraseIndex = 0;
  const rotatingTextElement = document.getElementById("rotating-text");

  function rotateText() {
    rotatingTextElement.style.animation = "rotateOut 0.5s ease-in-out";
    setTimeout(() => {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      rotatingTextElement.textContent = phrases[currentPhraseIndex];
      rotatingTextElement.style.animation = "rotateIn 0.5s ease-in-out";
    }, 500);
  }

  setInterval(rotateText, 3000); // Change text every 3 seconds
});
