import confetti from "https://cdn.skypack.dev/canvas-confetti";

const donate = document.getElementById("donate");
const makeConfetti = () => {
  confetti({
    particleCount: 900,
    spread: 70,
    origin: { y: 0.6 },
  });
};
donate.addEventListener("click", makeConfetti);
