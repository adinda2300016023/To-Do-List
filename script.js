// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Change Font Style
document.getElementById('font-style').addEventListener('change', (event) => {
    document.body.style.fontFamily = event.target.value;
});

// Change Font Size
document.getElementById('font-size').addEventListener('input', (event) => {
    document.body.style.fontSize = event.target.value + 'px';
});

// Change Background Color
const bgColorBtn = document.getElementById('bg-color-btn');
const bgColorInput = document.getElementById('bg-color');

bgColorBtn.addEventListener('click', () => {
    bgColorInput.click();
});

bgColorInput.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// To-Do List Functionality
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    // Edit feature: double-click to edit
    span.addEventListener('dblclick', () => editTask(span));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
}

function editTask(taskSpan) {
    const currentText = taskSpan.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.className = 'editable-input';

    input.addEventListener('blur', () => {
        taskSpan.textContent = input.value.trim() || currentText;
        taskSpan.style.display = 'inline';
        input.replaceWith(taskSpan);
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            taskSpan.textContent = input.value.trim() || currentText;
            taskSpan.style.display = 'inline';
            input.replaceWith(taskSpan);
        }
    });

    taskSpan.replaceWith(input);
    input.focus();
}
