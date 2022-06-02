let containerBoxChildren=document.getElementById("containerBox__children");
let tittle = document.createElement("h1");
tittle.setAttribute("class","tittleh1");
tittle.innerText="Counter";

let containerBox=document.getElementById("containerBox");
containerBoxChildren.appendChild(tittle);



let numberCounter = document.createElement("h2");
numberCounter.setAttribute("class","numberCounter");
numberCounter.innerText=0;

containerBoxChildren.appendChild(numberCounter);

    let divButtons=document.createElement("div");
    divButtons.setAttribute("class","divButtons")
    divButtons.innerHTML=`<button id="button1">Decrease</button>
                       <button id="button2">Reset</button>
                       <button id="button3">Increase</button>
                       <button id="button4">Other counter</button>`
                       containerBoxChildren.appendChild(divButtons);
                       

let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");
let button4=document.getElementById("button4");
button4.addEventListener("click",()=>{
    let newCounter=document.createElement("h3");
    newCounter.innerText=0;
    newCounter.setAttribute("class","numberCounter");
    containerBoxChildren.appendChild(newCounter);
    return newCounter
})

let h3probando=document.getElementsByClassName("numberCounter");




let otherCounter = document.getElementById("otherCounter");

button3.addEventListener("click",()=>{
    numberCounter.innerText++;
    h3.innerText++;
})

button1.addEventListener("click",()=>{
    numberCounter.innerText--;
    otherCounter.innerText--;
})

button2.addEventListener("click",()=>{
    numberCounter.innerText=0;
    otherCounter.innerText=0;
})

// if(button4.addEventListener("click",()=>{
//     let newCounter=document.createElement("div");
//     newCounter.innerHTML=`<h2>0</h2>`
//     numberCounter.appendChild(newCounter);
// }) == true){
//     button3.addEventListener("click",()=>{
//         newCounter.innerText++;
//     })
    
//     button1.addEventListener("click",()=>{
//         numberCounter.innerText--;
//     })
    
//     button2.addEventListener("click",()=>{
//         numberCounter.innerText=0;
//     })
// }