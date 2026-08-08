let count = Number(localStorage.getItem('fitflowCount')) || 0;

const countEl = document.getElementById('count');
const bar = document.getElementById('bar');
const modal = document.getElementById('modal');
const title = document.getElementById('title');
const exercise = document.getElementById('exercise');

const routines = {
  'Full Body':
    'Try a gentle sequence: bodyweight squats, wall push-ups, alternating step-backs, and easy marching. Rest whenever needed.',
  'Core & Mobility':
    'Try gentle mobility, bird-dog movements, easy stretching, and comfortable core exercises. Stop if anything hurts.',
  'Cardio':
    'Choose an easy-to-moderate activity such as marching, walking, or gentle step-touches. Take breaks whenever needed.'
};

function render() {
  countEl.textContent = count;
  bar.style.width = Math.min(count * 20, 100) + '%';
}

function openWorkout(name) {
  title.textContent = name;
  exercise.textContent = routines[name] || 'Move at a comfortable pace and rest whenever needed.';
  modal.hidden = false;
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    openWorkout(card.dataset.workout);
  });
});

document.getElementById('startBtn').addEventListener('click', () => {
  openWorkout('Full Body');
});

document.getElementById('close').addEventListener('click', () => {
  modal.hidden = true;
});

document.getElementById('doneBtn').addEventListener('click', () => {
  count++;
  localStorage.setItem('fitflowCount', count);
  modal.hidden = true;
  render();
});

render();
