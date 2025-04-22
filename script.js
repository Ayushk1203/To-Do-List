const tasks = [];


const toggleTaskComplete = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();

}

const deleteTask = (index)=>{
    tasks.splice(index,1);
    updateTasksList();

}

const updateTasksList = ()=>{
    const taskList = document.getElementById('taskList');

    taskList.innerHTML="";

    tasks.forEach((task,index) =>{
        const newTask = document.createElement('li');

        newTask.innerHTML = `
        <div class="task">
           <div class="taskValue">
               <input type="checkbox"/ class="checkbox" ${task.completed ? "checked" : ""}>
               <p class="task${task.completed ? "completed" : ""}">${task.text}</p>
           </div>
           <div class="icons">
              <img src='./images/edit.png' onclick="editTask(${index})"/>
              <img src='./images/bin.png'onclick="deleteTask(${index})"/>
           </div>
        </div>
        
        `

        newTask.addEventListener("change",()=> toggleTaskComplete(index));
        taskList.append(newTask);
        

    });

}

const addTaskToList = () =>{
    const input = document.getElementById('input');
    const task  = input.value.trim();

    if(task){
        tasks.push({text:task, completed:false});
        updateTasksList();
    }
    input.value = "";

}

document.getElementById('addtasksbutton').addEventListener('click',(e)=>{
    e.preventDefault();
    addTaskToList();
})