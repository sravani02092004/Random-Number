button = document.getElementById("button");
label = document.getElementById("label");
const min=1;
const max=6;
let randomNum;

button.onclick = ()=>{
    randomNum = Math.floor(Math.random() * max) + min;
    label.textContent = randomNum;
}