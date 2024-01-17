//1. Fetch API para consumir datos desde un txt...
const loadTxtBtn = document.querySelector('#loadTxt');
loadTxtBtn.addEventListener('click', getData);

function getData(){
    fetch('data/datos.txt')
    .then(respuesta => {
        // console.log(respuesta);
        // console.log(respuesta.status);
        // console.log(respuesta.statusText);
        // console.log(respuesta.url);
        return respuesta.text();
    })
    .then(datos => {
        console.log(datos);
    })
}
//2. Fetch API para consumir un JSON (Objeto)
const loadJSONBtn = document.querySelector('#loadJSON');
loadJSONBtn.addEventListener('click', ()=>{
    fetch('data/coder.json')
    .then(rta => {
        console.log(rta);
        return rta.json();
    })
    .then(duque => {
        // console.log(data);
        showHtml(duque);
    })
});


function showHtml({id, nombre, edad, englishLevel}){
    const contenido = document.querySelector('#contenido');
    contenido.innerHTML = `
        <p> Id: ${id} </p>
        <p> Nombre ${nombre}</p>
        <p> Edad: ${edad}</p>
        <p> Nivel de Ingles ${englishLevel}</p>
    `
}
//3. Fetch API para consumir datos de un JSON (Array)
const loadJSONArrayBtn = document.querySelector('#loadJSONArray');
loadJSONArrayBtn.addEventListener('click', getdaticos);

function getdaticos (){
    fetch('data/coderArray.json')
    .then(responde => {
        console.log(responde);
        return responde.json();
    })
    .then (array =>{
        showHtmlArreglo(array);
    })
}

function showHtmlArreglo(array){
    const contenido = document.querySelector('#contenido');
    
    array.forEach(obj => {
        const {id, nombre, edad, englishLevel, clan} = obj
        contenido.innerHTML += `
        <p> Id: ${id} </p>
        <p> Nombre: ${nombre}</p>
        <p> Edad: ${edad}</p>
        <p> Nivel de Ingles: ${englishLevel}</p>
        <p> Clan: ${clan}</p>
        <hr>
        
    `
    }
    )
    // });
    // contenido.innerHTML = `
    //     <p> Id: ${id} </p>
    //     <p> Nombre: ${nombre}</p>
    //     <p> Edad: ${edad}</p>
    //     <p> Nivel de Ingles: ${englishLevel}</p>
    // `
}


//4.  FetchAPI para consumir recursos desde una API PUBLICA (internet)
