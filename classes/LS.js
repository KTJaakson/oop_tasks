class LS {

	getData(name){
		let data;
		if(localStorage.getItem(name) === null){
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem(name));
		}
		return data;
	}

	setData(name, data){
		localStorage.setItem(name, JSON.stringify(data));
	}


	addTask(task){
		// set data to the LS
		let tasks = this.getData('tasks');
		tasks.push(task);
		this.setData('tasks', tasks);
		// log to console that task is added to LS
		task.addedToLS();
	}

	deleteTask(task){
		let tasks = this.getData('tasks');
		tasks.forEach(function(tasksElement, tasksIndex){
			if(tasksElement.name === task){
				tasks.splice(tasksIndex, 1);
			}
		});
		this.setData('tasks', tasks);
	}
}

function deleteTask(e){
	// get task name
	let task = e.target.parentElement.firstChild;
	// delete task value from visual by UI object
	ui.deleteTask(task);
	// change task element content before deleting from LS
	task = task.textContent;
	// delete task value from LS by LS object
	ls.deleteTask(task);
}