// define element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//define event listener
form.addEventListener('submit', addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearAll);

//define function and add element
function addTask (e){
    if(taskInput.value === ''){
        alert('Please write something!');
    }
    else{
        let addLi = document.createElement('li');
        addLi.appendChild(document.createTextNode(taskInput.value + ' '));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerText ='x';
        addLi.appendChild(link);
        taskList.appendChild(addLi);
        taskInput.value = '';
    }

    e.preventDefault();
}

//remove task

function removeTask(e){
if(remove.hasAttribute('href')){
let clearItem = e.target.parentElement;
console.log(clearItem);
clearItem.remove();    
}
}


// clear all
function clearAll(e){
    taskList.innerHTML = '';
}
