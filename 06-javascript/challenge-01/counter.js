let count = 0;
let step = 1;

const countEl = document.getElementById('count');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const stepButtons = document.querySelectorAll('[data-step]');

function updateDisplay() {
    countEl.textContent = count;

    if (count > 0) {
        countEl.style.color = 'green';
    } else if (count < 0) {
        countEl.style.color = 'red';
    } else {
        countEl.style.color = 'black';
    }
}

incBtn.addEventListener('click', () => {
    count += step;
    updateDisplay();
});

decBtn.addEventListener('click', () => {
    if (count - step >= 0) {
        count -= step;
    }
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        step = Number(btn.dataset.step);
    });
});

updateDisplay();
