let thisDay = document.getElementById('day');
let doText = document.getElementById('todotext');
let doButton = document.getElementById('todobutton');
let addList = document.getElementById("task__list");

let day = new Date();
thisDay.innerText = day.toLocaleString('en-us', { weekday: 'long' });
// console.log(thisDay.innerText);

doButton.addEventListener("click", () => {
    if (doText.value == "") {
        window.alert("Pls Enter task!");
        return};

    const li = document.createElement('li');
    const input = document.createElement("input");
    const label = document.createElement("label");
    const del_icon = document.createElement("a");
    
    label.appendChild(document.createTextNode(doText.value));
    del_icon.appendChild(document.createTextNode("X"));
    
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(del_icon);
    
    addList.appendChild(li);
    doText.value = "";
    
    input.type = "checkbox";
    let checkBox = document.querySelectorAll("input[type=checkbox]")
    // console.log(checkBox);
    
    checkBox.forEach((e)=>{
        e.addEventListener("change", ()=>{
            if (e.checked == false){
                e.parentElement.style.backgroundColor = "white";
                e.parentElement.style.textDecoration = "none";
            }
            else{
                e.parentElement.style.backgroundColor = "orange";
                e.parentElement.style.textDecoration = "line-through";
            }
        });
    
        del_icon.className = "del__icon";
        del_icon.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        });
    });
});