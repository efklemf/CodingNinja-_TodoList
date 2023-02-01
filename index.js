window.addEventListener('load',() => {
    const form=document.querySelector("#task-form");
    const input=document.querySelector("#new-task");
    const list_el=document.querySelector("#tasks");
    //Submit button
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task=input.value;
        if(!task){
            alert("Please fill out the task");
            return;
        }
        const task_el=document.createElement("div");
        task_el.classList.add("task");

        const task_content_element=document.createElement("div");
        task_content_element.classList.add("content");
        // task_content_element.innerText=task;

        task_el.appendChild(task_content_element);

        const task_input_el=document.createElement("input");
        task_input_el.type="text";
        task_input_el.classList.add("text");
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_element.appendChild(task_input_el);

        const task_action_ele=document.createElement("div");
        task_action_ele.classList.add("action");

        const task_edit_el=document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML="Edit";

        const task_delete_el=document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML="Delete";

        task_action_ele.appendChild(task_edit_el);
        task_action_ele.appendChild(task_delete_el);

        task_el.appendChild(task_action_ele);
        list_el.appendChild(task_el);
        //hiddin taskbar
        input.value="";
        //Enter Todoist
        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText.toLocaleLowerCase()=="edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText="Save";
            }else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText="Edit";
            }
        });
        //  delete TodoList Step by Step
            task_delete_el.addEventListener('click', () => {
             list_el.removeChild(task_el);
            });
    });
});