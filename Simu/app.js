const dom = document.addEventListener(`DOMContentLoaded`,getApi())
const buscador = document.querySelector(`#buscador`)
const padre = document.querySelector("#contenido")
const nombre = {
    nombre: ""
}

buscador.addEventListener(`input`, (e)=>{
    nombre.nombre = e.target.value
    console.log(nombre.nombre);
    fetch(`http://www.omdbapi.com/?apikey=5d376727&s="${nombre.nombre}"`)
    .then(rta =>{
        console.log(rta);
        return rta.json();
    })
    .then(data =>{
        console.log(data);
        clean()
        injectingMovies(data.Search)
    })
})


function getApi(){
    fetch(`http://www.omdbapi.com/?apikey=5d376727&s="mario"`)
    .then(rta =>{
        console.log(rta);
        return rta.json();
    })
    .then(data =>{
        console.log(data);
        injectingMovies(data.Search)
    })
}

function injectingMovies(pelis){
    pelis.forEach(i => {
        const{Title,Poster,Year} = i
        const pelicula = document.createElement(`div`)
        pelicula.innerHTML = `

        <div class="card" style="width: 18rem;">
            <img src="${Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${Title}</h5>
                <p class="card-text">${Year}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
        padre.appendChild(pelicula)
    });
    
}

function clean(){
    padre.textContent = ""
}