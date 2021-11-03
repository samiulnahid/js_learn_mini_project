
let form = document.querySelector("#task_form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");

let taskInput = document.querySelector("#new_task");


//define event listeners

form.addEventListener("submit", addTask);



taskList.addEventListener("click", removetask);

clearBtn.addEventListener("click" , clearAll)



// define functions
// add task

function addTask(e){

    if(taskInput.value === ''){
        alert("add a task !");
    }
    else{

        let li =  document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value  + " "));

        let link = document.createElement("a");
        link.setAttribute("href" , "#");
        link.innerText = "x";
        li.appendChild(link);

        taskList.appendChild(li);

        taskInput.value = "";


    }

    e.preventDefault();

}


function removetask(e){

    if(e.target.hasAttribute("href")){
        if(confirm("are you sure?")){


            let ele = e.target.parentElement;
            ele.remove();

            console.log(ele);
        }
    }

}

function clearAll(e){

    taskList.innerHTML = "";

//    while(taskList.firstChild){

//        taskList.removeChild(taskList.firstChild);
//    }



}

