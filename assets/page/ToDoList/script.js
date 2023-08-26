const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//function to add task
function addTask() {
    if(inputBox.value === ''){
        alert("Task cannot be empity!!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML =  inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
   }
   inputBox.value = '';
   saveData();
    
}

listContainer.addEventListener("click", function(e){
//function to mark task / checked and unchecked task
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
//function to remove task
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
}, false);
//function to save data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//function to restore data from local storage to browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();