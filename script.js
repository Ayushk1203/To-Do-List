
document.addEventListener("DOMContentLoaded", ()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if(storedTasks){
        storedTasks.forEach((task)=>tasks.push(task));
        updateTasksList();
        updateStats();
    }
});

const tasks = [];


const saveTasks = ()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

const toggleTaskComplete = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
    saveTasks();
}


const updateStats = () =>{
    const completedLength = tasks.filter((task) => task.completed).length;
    const totalLength = tasks.length;

    const progress = totalLength === 0 ? 0 : (completedLength / totalLength) * 100;

    const progressBar = document.getElementById("pb");
    progressBar.style.width = `${progress}%`;

    const stats = document.getElementById("num");

    if(completedLength == totalLength && totalLength != 0){
        blaskConfitti();
    }

    stats.innerHTML = `${completedLength} / ${totalLength}`;
    saveTasks();

}


const deleteTask = (index)=>{
    tasks.splice(index,1);
    updateTasksList();
    updateStats();
    saveTasks()
}


const editTask = (index)=>{
    const input = document.getElementById("input");
    input.value = tasks[index].text;
    
    tasks.splice(index,1);
    updateTasksList();
    updateStats();
    saveTasks();
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
        updateStats();
        updateStats();
        
        
    }
    input.value = "";

}


document.getElementById('addtasksbutton').addEventListener('click',(e)=>{
    e.preventDefault();
    addTaskToList();
});

const blaskConfitti = () =>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}