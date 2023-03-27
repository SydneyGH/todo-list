const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const del = document.getElementsByClassName("del");



const removeLi = (evt) => {
    evt.target.removeEventListener("click", removeLi, false);
    evt.target.parentNode.remove();
}

const doneTask = (evt) => {
    if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("done");
    }
}

const inputLength = () => {
    return input.value.length;
}

const createListElement = () => {
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.onclick = removeLi;
    
    const li = document.createElement("li");
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(delBtn);

    ul.appendChild(li);
    input.value = "";
    
}

const addListAfterClick = () => {
    if (inputLength() > 0){
        createListElement();
    }
}

const addListAfterKeyPress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

ul.addEventListener("click", doneTask)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
