let count=Number(localStorage.getItem('fitflowCount')||0);
const countEl=document.getElementById('count'), bar=document.getElementById('bar');
const modal=document.getElementById('modal'), title=document.getElementById('modalTitle');
const exercise=document.getElementById('exercise');
const routines={
  'Full Body':'Try a gentle sequence: bodyweight squats, wall push-ups, alternating step-backs, and easy marching. Rest whenever needed.',
  'Core & Mobility':'Try gentle mobility, bird-dog, dead bug, and a comfortable stretch. Focus on controlled movement.',
  'Cardio':'Choose an easy-to-moderate activity such as brisk walking, dancing, or marching in place. Keep the pace comfortable.'
};
function render(){countEl.textContent=count;bar.style.width=Math.min(count/5*100,100)+'%'}
function openWorkout(name){title.textContent=name;exercise.textContent=routines[name];modal.classList.remove('hidden')}
document.querySelectorAll('.card').forEach(c=>c.addEventListener('click',()=>openWorkout(c.dataset.workout)));
document.getElementById('startBtn').addEventListener('click',()=>openWorkout('Full Body'));
document.getElementById('close').addEventListener('click',()=>modal.classList.add('hidden'));
document.getElementById('doneBtn').addEventListener('click',()=>{count++;localStorage.setItem('fitflowCount',count);render();modal.classList.add('hidden')});
render();
