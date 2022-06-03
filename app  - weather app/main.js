//agarramos los datos
const form=document.getElementById("formApp");
const input=document.getElementById("inputSearch");
const btn=document.getElementById("buttonSearch");
const sectionAjax=document.getElementById("conteinerAjax");
const ul=document.getElementById("cities");



const apiKey="16391637de1f7272867ebaddb29be797";


form.addEventListener("submit", e=>{
    e.preventDefault();
    const inputValue=input.value;

    //ajax
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
    
        const creatingLi=document.createElement("li")
        creatingLi.innerHTML=`${name}`
        sectionAjax.appendChild(creatingLi);
    });
})
    // li.setAttribute("class","city");
    // li.innerHTML= `<h2 class="city-name" data-name="${name},${sys.country}"><span>${name}</span><sup>${sys.country}</sup></h2>
    // <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    // <figure>
    // <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    // <figcaption>${weather[0]["description"]}</figcaption></figure>`;;
    // sectionAjax.appendChild(li);
    // 

/*links 
https://webdesign.tutsplus.com/es/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893
https://openweathermap.org/api*/