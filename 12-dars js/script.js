var list = document.getElementById("list");
var input = document.getElementById("input");
var addElement = document.getElementById("add");

addElement.addEventListener("click",function(){
    var values = input.value;
    var liElement = document.createElement("li")
    var pElement = document.createElement("p")
    pElement.textContent = values
    var btn = document.createElement("button")
    btn.textContent = "delete"
    liElement.appendChild(pElement)
    liElement.appendChild(btn)
    list.appendChild(liElement)
    input.value = ".";
})
