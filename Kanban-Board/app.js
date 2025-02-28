let taskId = 0 ;

document.getElementById("addTask").addEventListener("click" , ()=>{
  const textTask = document.getElementById("taskInput").value;
  if(textTask){
   const div = document.createElement("div");
   div.className = "task";
   div.textContent = textTask;
   div.id = `task-${taskId++}` ;
   div.setAttribute("draggable" , "true" );
   document.querySelector("#todo .kanban-items").appendChild(div);
   document.getElementById("taskInput").value = "";
}
})

document.addEventListener("dragstart" , (event)=>{
  event.dataTransfer.setData("text/plain" , event.target.id);
  setTimeout(() => event.target.classList.add("hidden") , 0);
})

document.querySelectorAll(".kanban-items").forEach(column => {
 column.addEventListener("dragover" , (event)=>{
  event.preventDefault();
 });
 column.addEventListener("drop" , (event)=>{
  event.preventDefault();
  const task = document.querySelector(".hidden");
  column.appendChild(task);
  task.classList.remove("hidden");
 })
});

