//agarramos los datos
const form=document.getElementById("formApp");
const input=document.getElementById("inputSearch");
const btn=document.getElementById("buttonSearch");
const sectionAjax=document.getElementById("conteinerAjax");

function recargarBusqueda(){
  location.reload()
}
function splice(contenedordeCards){
  contenedordeCards.splice(0,1)
}

//api key
const apiKey="16391637de1f7272867ebaddb29be797";
const contenedordeCards=[];
let contador=0;
//formulario con evento submit que trae la api del clima con sus respectivos datos
form.addEventListener("submit", e=>{
    //para que no recargue la pagina
    e.preventDefault();
    //guardamos el dato que escribe el usuario
    const inputValue=input.value;
    //aplicamos en la url el value del input + la keyApi
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      //guardamos el icono en una constante para volver a usarlo
      const icon = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
        //creamos las cards
        const createCard=document.createElement("div");
        createCard.setAttribute("class","card");
        createCard.style.width="18rem";
        createCard.innerHTML=`
                              <img src="${icon}" class="card-img-top" alt="${weather[0]["main"]}">
                              <div class="card-body">
                              <h5 class="card-title">${name} - ${sys.country}</h5>
                              <p class="card-text">Temperatura ${Math.round(main.temp_min)}<sup>°C</sup></p>
                              <figcaption>${weather[0]["description"]}</figcaption>
                              </div>`
        document.body.style.backgroundImage=`url('https://source.unsplash.com/1920x1080/?${name}')`;
        sectionAjax.appendChild(createCard);
        contenedordeCards.push(createCard).target;
        
    });
    form.reset();
    input.focus();

    btn.addEventListener("click", ()=>{
      contenedordeCards.reduce((acumulador, elemento) => acumulador - elemento.remove(),0);
    })
    
      // contador++
      // let buttonbtn=e.target;
      // contenedordeCards[0].remove()+1;
    
   
})

