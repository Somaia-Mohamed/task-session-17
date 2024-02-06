document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('inputTask');
  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', addTask);
  function addTask() {
    const taskList = document.createElement('div');
    const taskText = taskInput.value;
    if (taskText !== '') {
      const task = document.createElement('h3');
      const delBtn = document.createElement('button');
      const doneBtn = document.createElement('button');
      delBtn.textContent="delete task"
      doneBtn.textContent="done task";
      task.textContent=" - "+ taskText;
      delBtn.addEventListener("click",deleteTask)
      doneBtn.addEventListener("click",doneTask)
      document.body.appendChild(taskList)
      taskList.appendChild(task);
      taskList.appendChild(delBtn);
      taskList.appendChild(doneBtn);
      taskInput.value = '';
    }
  }
});
function deleteTask(event) {
    const target = event.target;
    target.parentElement.remove();
}
function doneTask(event){
  const target = event.target;
  const Task = target.parentElement.querySelector('h3');
  Task.style.backgroundColor = 'yellow';
    
}
