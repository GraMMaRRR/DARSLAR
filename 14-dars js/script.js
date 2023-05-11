var navbarList = ["Portfolio","About","Contact"];
var nav = document.querySelector(".navbar-list");


for(var i = 0; i <navbar-list.length;i++){
    var liEl = document.createElement("li");
    var linkEl = document.createElement("a");
    linkEl.textContent = navbarList[i]
    linkEl.classList.add("navbar-link");
    liEl.appendChild(linkEl);
    navbar.appendChild(liEl)
}


var sectionEl = document.querySelector(".section-list")


for(var i = 1; i <= 9;i++){
    var liEl = document.createElement("li");
    var linkEl = document.createElement("img");
    imgEl.src = "./img/img.png";
    liEl.appendChild(imgEl)
    sectionEl.appendChild(liEl)
}