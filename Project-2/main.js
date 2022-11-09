const input = document.getElementById('input-text');
const taskContainer = document.getElementById('task-container');
const btn = document.getElementById('add-task');

btn.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText=`${input.value}`;
    task.appendChild(li);

    let checkbtn = document.createElement('button');
    checkbtn.classList.add('check');
    checkbtn.innerHTML = '<i class = "fa fa-check"></i>';

    let deletebtn = document.createElement('button');
    deletebtn.classList.add('delete');
    deletebtn.innerHTML = '<i class = "fa fa-trash-o" id = "delete"></i>';

    task.appendChild(checkbtn);
    task.appendChild(deletebtn);

    if(input.value === ""){
        alert('Please Enter Task');
    }else{
        taskContainer.appendChild(task);
        input.value = "";
    }

    checkbtn.addEventListener('click',function(){
        checkbtn.parentElement.style.textDecoration = "line-through";
    })
    
    deletebtn.addEventListener('click',function(e){
        e.target.parentElement.remove();
    })
    
})
