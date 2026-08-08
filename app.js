let count = Number(localStorage.getItem("fitflowCount")) || 0;

const countEl = document.getElementById("count");
const bar = document.getElementById("bar");
const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const exercise = document.getElementById("exercise");

const routines = {
  "Full Body":
    "Try a gentle sequence: bodyweight squats, wall push-ups, alternating step-backs, and easy marching. Rest whenever needed.",
  "Core & Mobility":
    "Try gentle mobility, bird-dog movements, easy stretching, and comfortable core exercises. Rest whenever needed.",
  "Cardio":
    "Choose an easy-to-moderate activity such as marching in place or a comfortable walk. Rest whenever needed."
 "Lower Body": "Try gentle lower-body movements such as chair squats, step-backs, and calf raises. Rest whenever needed.",
"Stretch & Flexibility": "Try gentle stretches for your arms, legs, shoulders, and back. Move slowly and comfortably.",
"Upper Body": "Try gentle upper-body movements such as wall push-ups, arm circles, and shoulder movements. Rest whenever needed.",};

function render() {
  countEl.textContent = count;
  bar.style.width = Math.min(count * 20, 100) + "%";
}

function openWorkout(name) {
  title.textContent = name;
  exercise.textContent = routines[name] || "Move at a comfortable pace and rest whenever needed.";
  modal.classList.remove("hidden");
}

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    openWorkout(card.dataset.workout);
  });
});

document.getElementById("startBtn").addEventListener("click", () => {
  openWorkout("Full Body");
});

document.getElementById("close").addEventListener("click", () => {
  modal.classList.add("hidden");
});

document.getElementById("doneBtn").addEventListener("click", () => {
  count++;
  localStorage.setItem("fitflowCount", count);
  modal.classList.add("hidden");
  render();
});

render();
let timerSeconds = 30;
let timerInterval = null;

const timerDisplay = document.getElementById("timerDisplay");
const timerBtn = document.getElementById("timerBtn");

function updateTimer() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;

  timerDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

timerBtn.addEventListener("click", () => {
  if (timerInterval) return;

  timerBtn.textContent = "Running...";

  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      timerBtn.textContent = "Start Timer";
      timerSeconds = 30;
      updateTimer();
      alert("Timer finished!");
      return;
    }

    timerSeconds--;
    updateTimer();
  }, 1000);
});

updateTimer();
