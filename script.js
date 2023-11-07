const contentNewTask = document.querySelector('.wribe_task');
const btnNewTask = document.querySelector('.btn_add_task');
const areaAllTasks = document.querySelector('.all_tasks');

let allTasks = [];

btnNewTask.addEventListener('click', addContent)

function addContent() {
    allTasks.push(
        { task: contentNewTask.value,
        completed: false})
    contentNewTask.value = ''
    addTaskUnit()
}

function addTaskUnit() {
    let novaUnit = ''
    allTasks.forEach((index, position) => {
        novaUnit = novaUnit + `
            <li class="task_unit ${index.completed && "done"}">
                <img src="./img/checked.png" alt="check" onclick="completedTask(${position})">
                <p>${index.task}</p>
                <img src="./img/trash.png" alt="remove" onclick="deleteTask(${position})">
            </li>
        `
    })
    areaAllTasks.innerHTML = novaUnit;
    localStorage.setItem('tasks', JSON.stringify(allTasks))
}
function deleteTask(position) {
   allTasks.splice(position, 1)
    addTaskUnit()
}
function completedTask(position) {
    allTasks[position].completed = !allTasks[position].completed
    addTaskUnit()
}
function reloadTasks() {
    const tasksLocalStorage = localStorage.getItem('tasks')
    if(tasksLocalStorage){
        allTasks = JSON.parse(tasksLocalStorage)}
    addTaskUnit()
}

reloadTasks()