var text = document.querySelector(".text");
var email = document.getElementById("email");
var btn = document.getElementById("btn")
let res = []

fetch("https://jsonplaceholder.typicode.com/comments")
.then((res)=>res.json())
.then(data=>{
    for(let i = 0; i < data.length;i++){
       res.push(data[i])
    }
});

btn.addEventListener("click",()=>{
    for(let i = 0; i <res.length ; i++){
        if(email.value == res[i].email){
            text.textContent = "sucess"
            break
        }else{
          text.textContent = "error"
        }
    }
})