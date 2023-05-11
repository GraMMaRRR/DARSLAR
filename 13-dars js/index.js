var books = ["fsefsfeefsww","edryeiygergu"];

var listElement = document.getElementById("list");
var btnElement = document.getElementById("btn");
var inputElement = document.getElementById("input");

btnElement.addEventListener("click",()=>{
    listElement.appendChild(CreateElement(inputElement.value));
    inputElement.value = ""
})


for(var i = 0; i< books.length;i++){
    listElement.appendChild(CreateElement(books[i]))
}

function CreateElement(value){
    var liElement = document.CreateElement("li");
    liElement.setAttribute("class","nav-item d-flex");
    var pElement = document.CreateElement("p");
    pElement.textContent = value
    buttonElement.textContent
}