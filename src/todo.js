// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoPending = document.querySelector(".js-pending"),
    toDoFinished = document.querySelector(".js-finished");
    finishDelete = document.querySelector(".finished.toDo")

const TODOS_P = "PENDING";
const TODOS_F = "FINISHED";
let PENDING = [];
let FINISHED =[]; 

function deleteToDo_P(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoPending.removeChild(li);
    const cleanToDos = PENDING.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    PENDING = cleanToDos;
    saveToDos();
}

function deleteToDo_F(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoFinished.removeChild(li);
    const cleanToDos = FINISHED.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    FINISHED = cleanToDos;
    saveToDos_F();
}


function saveToDos() {
    localStorage.setItem(TODOS_P, JSON.stringify(PENDING));
    endingFog();
}

function saveToDos_F() {
    localStorage.setItem(TODOS_F, JSON.stringify(FINISHED));
    endingFog();
}

let idNumber_P = 1;
let idNumber_F = 1;

function finishedToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("delBtn");
    const backBtn = document.createElement("backBtn");
    const span = document.createElement("span");
    const newId = idNumber_F;
    idNumber_F += 1;

    delBtn.innerText ="❌"
    delBtn.addEventListener("click", deleteToDo_F)
    backBtn.innerText ="⏪"
    backBtn.addEventListener("click", 
        function handleBack(event) {
            event.preventDefault();
            const currentValue = toDoObj.text;
            pendingToDo(currentValue);
            PENDING.value = ""
        })
    backBtn.addEventListener("click", deleteToDo_F)
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(backBtn);
    li.id = newId;
    toDoFinished.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    FINISHED.push(toDoObj);
    saveToDos_F();
}


function pendingToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("delBtn");
    const checkBtn = document.createElement("checkBtn");
    const span = document.createElement("span");
    const newId = idNumber_P;
    idNumber_P += 1;
    
    delBtn.innerText ="❌"
    delBtn.addEventListener("click", deleteToDo_P)
    checkBtn.innerText ="✅"
    checkBtn.addEventListener("click", 
        function handleCheck(event) {
            event.preventDefault();
            const currentValue = toDoObj.text;
            finishedToDo(currentValue);
            PENDING.value = ""
        })
        checkBtn.addEventListener("click",deleteToDo_P)
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = newId;
    toDoPending.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    PENDING.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    pendingToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_P);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            pendingToDo(toDo.text);
        })
    }
}

function loadToDos_F() {
    const loadedToDos = localStorage.getItem(TODOS_F);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            finishedToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    loadToDos_F();   
}

init();

toDoForm.addEventListener("submit", handleSubmit);
    
function endingFog() {
    const loadedToDos = localStorage.getItem(TODOS_F)[3];
    if (loadedToDos === 't') {
            finishDelete.innerText ="(☞ﾟヮﾟ)☞ The End ☜(ﾟヮﾟ☜)"
            finishDelete.style.fontSize = "40px";
        } else {
            finishDelete.innerText ="";
        }
}

