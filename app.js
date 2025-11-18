let body = document.body
let themebutton = document.getElementsByClassName("theme-button")
let input = document.getElementsByClassName("input-text")
let taskadd = document.getElementsByClassName("add-task")
let complete_btn = document.getElementsByClassName("para-btn1")
let edit_btn = document.getElementsByClassName("para-btn2")
let delete_btn = document.getElementsByClassName("para-btn3")
const winSound = new Audio('sound/win.wav');
const deleteSound = new Audio('sound/Whoosh.mp3');
function themechange(){
    body.classList.toggle("darktheme");
    if(body.classList.contains("darktheme")){
        themebutton[0].innerHTML = `<i class="bi bi-moon-stars"></i>`;
        themebutton[0].style.transform = "rotate(360deg)";
    }else{
        themebutton[0].innerHTML = `<i class="bi bi-brightness-high"></i>`;
        themebutton[0].style.transform = "rotate(0deg)";
    }
}


function createtask(){
    let para = document.createElement("p")
    para.classList.add("task-para")
    para.innerHTML = `<div><span class = "para-span">${input[0].value}<span></div>
                           <div class = "para-btn">
                           <button class = "para-btn1" onclick = "completebtn(this)"><i class="bi bi-check2"></i></button>
                           <button class = "para-btn2" onclick = "editbtn(this)"><i class="bi bi-pencil"></i></button>
                           <button class = "para-btn3" onclick = "deletebtn(this)"><i class="bi bi-trash3"></i></button>
                           </div>
                           `
        taskadd[0].append(para)
}

//added task
function addtask(){
    if(input[0].value == ""){
        alert("Please Add a Task!")
    }else{ 
        createtask()
        input[0].value = "";
    }
}

function completebtn(btn){
    let taskDiv = btn.parentElement;
    let textSpan =  btn.parentElement.parentElement.querySelector(".para-span");
    let completeButton = taskDiv.querySelector(".para-btn1");
    let editButton = taskDiv.querySelector(".para-btn2");
    completeButton.disabled = true;
    editButton.disabled = true;
    textSpan.style.textDecoration = "line-through"
    textSpan.style.opacity = "0.6"
    completeButton.style.opacity = "0.6";
    completeButton.style.cursor = "not-allowed";
    editButton.style.opacity = "0.6";
    editButton.style.cursor = "not-allowed";
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
    winSound.play()
    winSound.currentTime = 0;
}

function editbtn(btn){
    let textSpan =  btn.parentElement.parentElement.querySelector(".para-span");
    let newText = prompt("Edit Your Task :", textSpan.innerText)
    if(newText !== null && newText.trim() !== ""){
        textSpan.innerText = newText;
    }
}

function deletebtn(btn){
    if(confirm("⚠️ Are you sure you want to delete this task?")){
        btn.parentElement.parentElement.remove()
    }
    deleteSound.play()
    deleteSound.currentTime = 0;
}
