const taskInput = document.getElementById('task__input');
const taskAddButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');


taskAddButton.addEventListener('click', (e) => {
    e.preventDefault();
	

	if(taskInput.value.trim()) {
		tasksList.insertAdjacentHTML('afterend', `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
	}

	taskInput.value = '';


	const taskRemoveButton = document.querySelector('.task__remove');

    taskRemoveButton.addEventListener('click', (e) => {
		e.preventDefault();
		let taskRemoveButtonParent = taskRemoveButton.parentElement;
		taskRemoveButtonParent.remove();
	});
	
});

