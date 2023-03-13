const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const taskInput = document.querySelector('#task');
	const task = taskInput.value;
	const li = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	const span = document.createElement('span');
	span.textContent = task;
	const button = document.createElement('button');
	button.textContent = 'Delete';
	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(button);
	taskList.appendChild(li);
	taskInput.value = '';
});

taskList.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		event.target.parentNode.remove();
	}
});
