async function getAllTask(){
    const contract = await getContract();
    const showallTask = await contract.showAllTodo();
    
    const taskItems = [];

    for (let i = 0; i < showallTask.length; i++) {
        const elements = showallTask[i];
        const{itemTitle, creator, startTime} = elements;
        const date = convertDate(startTime);

        
        
        taskItems.push({itemTitle, creator, date});
    }

    console.log(taskItems);
    return taskItems;
    
}

async function showAllTask(){
    const prepData = await getAllTask();

    for (let i = 0; i < prepData.length; i++) {
    
        const template = await  todoTemplate(prepData[i].itemTitle, prepData[i].creator, prepData[i].date);
        var new_line=document.createElement("li");
        new_line.innerHTML = template
        taskList.appendChild(new_line);

        
        inputTask.value = "";
        uid ++
        // console.log("Line 122, Uid:", uid);
    }
}

// showAllTask();


var uid=0

async function createItem(){
    await createTask(); 
}


addTask.addEventListener("click", async()=> {   
    await createTask();
})





function tick(random_id){
    var striked=document.getElementById("strike"+random_id);
    striked.classList.toggle('no-underline');
}
function trash(random_id){
    var get_id=document.getElementById(random_id);
    main_ul.removeChild(get_id);
}

