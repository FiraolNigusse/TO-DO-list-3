const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const errorMessage = document.getElementById('error-message');

function addTask() {
    const taskValue = inputBox.value.trim();
    
    if (taskValue === "") {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter a task.';
        return;
    }

    errorMessage.style.display = 'none'; // Hide the error if any
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-content">${taskValue}</div>
        <span onclick="deleteTask(this)">&#x2715;</span>
    `;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    listContainer.appendChild(li);
    inputBox.value = '';
}

function deleteTask(element) {
    element.parentElement.remove();
}
