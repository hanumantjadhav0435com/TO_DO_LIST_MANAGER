let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editIndex = -1;

// Main function to show all tasks
function displayTasks() {
    const tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = ''; // Clear old tasks

    const statusFilter = document.getElementById('filterStatus').value;
    const priorityFilter = document.getElementById('filterPriority').value;
    const today = new Date().toISOString().split('T')[0]; // Get today's date

    tasks.forEach((task, index) => {
        const isOverdue = !task.completed && task.deadline < today;
        const isDueSoon = !task.completed && task.deadline >= today;

        // Apply filters
        const statusMatch = (statusFilter === 'All') ||
            (statusFilter === 'Completed' && task.completed) ||
            (statusFilter === 'Pending' && !task.completed);

        const priorityMatch = (priorityFilter === 'All') || (priorityFilter === task.priority);

        if (statusMatch && priorityMatch) {
            const taskCard = document.createElement('div');
            taskCard.className = 'task' + (task.completed ? ' completed' : '');

            let statusText = '';
            if (isOverdue) statusText = '<span class="overdue">Overdue</span>';
            else if (isDueSoon) statusText = `<span class="due-soon">Due in ${daysLeft(task.deadline)} days</span>`;

            taskCard.innerHTML = `
                <div class="task-details">
                    <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? 'checked' : ''}>
                    <strong>${task.title}</strong>
                    <span class="priority">${task.priority}</span>
                    <span>📅 ${task.deadline}</span>
                    ${statusText}
                </div>
                <div class="actions">
                    <button onclick="editTask(${index})">✏️</button>
                    <button onclick="deleteTask(${index})">🗑️</button>
                </div>
            `;
            tasksDiv.appendChild(taskCard);
        }
    });

    // Update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Calculate how many days left for deadline
function daysLeft(deadline) {
    const now = new Date();
    const due = new Date(deadline);
    const diff = due - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24)); // Convert ms to days
}

// Add or update task
function addTask() {
    const title = document.getElementById('title').value.trim();
    const priority = document.getElementById('priority').value;
    const deadline = document.getElementById('deadline').value;

    if (!title || !deadline) {
        alert('Please fill all fields');
        return;
    }

    const task = {
        title,
        priority,
        deadline,
        completed: false
    };

    if (editIndex === -1) {
        tasks.push(task); // New task
    } else {
        tasks[editIndex] = {
            ...tasks[editIndex],
            title,
            priority,
            deadline
        }; // Edit task
        editIndex = -1;
    }

    // Reset form
    document.getElementById('title').value = '';
    document.getElementById('deadline').value = '';

    displayTasks();
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Edit a task
function editTask(index) {
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('priority').value = task.priority;
    document.getElementById('deadline').value = task.deadline;
    editIndex = index;
}

// Toggle completed
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// On page load
displayTasks();