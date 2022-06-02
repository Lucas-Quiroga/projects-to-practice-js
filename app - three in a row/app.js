
let counter = 0;
const table = [];

printBlock = (e,posición) =>{
counter++
let btn = e.target;
let color =  counter % 2 ? "red" : "green";
btn.style.background = color
table[posición] = color;
if(winner()) alert("GANASTE "+color);
}


const winner = () =>{
    if(table[0] == table[1]&&table[0]==table[2]&&table[0]){
        return true
    }else if(table[3] == table[4]&&table[3]==table[5]&&table[3]){
        return true
    } else if(table[6] == table[7]&&table[6]==table[8]&&table[6]){
        return true
} else if(table[0] == table[3]&&table[0]==table[6]&&table[0]){
    return true
}else if(table[1] == table[4]&&table[1]==table[7]&&table[1]){
    return true
} else if(table[2] == table[5]&&table[2]==table[8]&&table[2]){
    return true
} else if(table[0] == table[4]&&table[0]==table[8]&&table[0]){
    return true
} else if(table[2] == table[4]&&table[2]==table[6]&&table[2]){
    return true
}
return false 
}

document.querySelectorAll("button").forEach((obj,i) => obj.addEventListener("click", (e)=>printBlock(e,i)))