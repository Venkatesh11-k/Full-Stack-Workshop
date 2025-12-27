const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const counts = document.getElementById('counts');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'All';

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateCounts() {
    const work = todos.filter(t => t.category === 'Work').length;
    const personal = todos.filter(t => t.category === 'Personal').length;
    counts.textContent = `Work: ${work} | Personal: ${personal}`;
}

function renderTodos() {
    todoList.innerHTML = '';

    todos
        .filter(t => currentFilter === 'All' || t.category === currentFilter)
        .forEach((todo, index) => {

            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';

            li.innerHTML = `
                <div>
                    <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                    <span>${todo.text}</span>
                    <span class="category">[${todo.category}]</span>
                </div>
                <span class="delete">X</span>
            `;

            li.querySelector('input').addEventListener('change', () => {
                todo.completed = !todo.completed;
                saveTodos();
                renderTodos();
            });

            li.querySelector('.delete').addEventListener('click', () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            todoList.appendChild(li);
        });

    updateCounts();
}

addBtn.addEventListener('click', () => {
    if (taskInput.value.trim() === '') return;

    todos.push({
        text: taskInput.value,
        category: categorySelect.value,
        completed: false
    });

    taskInput.value = '';
    saveTodos();
    renderTodos();
});

document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

renderTodos();
