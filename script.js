const tasks = [];


const toggleTaskComplete = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
    
    

}

const updateStats = () =>{
    const completedLength = tasks.filter((task) => task.completed).length;
    const totalLength = tasks.length;

    const progress = totalLength === 0 ? 0 : (completedLength / totalLength) * 100;

    const progressBar = document.getElementById("pb");
    progressBar.style.width = `${progress}%`;

    const stats = document.getElementById("num");

    stats.innerHTML = `${completedLength} / ${totalLength}`;

    
}

const deleteTask = (index)=>{
    tasks.splice(index,1);
    updateTasksList();
    updateStats();
    
    

}

const editTask = (index)=>{
    const input = document.getElementById("input");
    input.value = tasks[index].text;
    
    tasks.splice(index,1);
    updateTasksList();
    updateStats();
   
    
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
})