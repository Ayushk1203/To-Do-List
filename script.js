const tasks = [];


const updateTasksList = ()=>{
    const taskList = document.getElementById('taskList');

    taskList.innerHTML="";

    tasks.forEach(task =>{
        const newTask = document.createElement('li');

        newTask.innerHTML = `
        <div class="task">
           <div class="taskValue">
               <input type="checkbox"/ class="checkbox " >
               <p>${task.text}</p>
           </div>
           <div class="icons">
              <img src='./images/edit.png'/>
              <img src='./images/bin.png'/>
           </div>
        </div>
        
        `

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

}

document.getElementById('addtasksbutton').addEventListener('click',(e)=>{
    e.preventDefault();
    addTaskToList();
})