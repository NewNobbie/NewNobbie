/* 1. Class declaration */ // La declarion debe ser siempre en mayus

class Coder{
    #nombre
    constructor(nombre, nota){
        this.#nombre = nombre;  //this.(propiedad) = parametro
        this.nota = nota
    }

    showCoder(){   //Metodo que renderiza valores de las propiedades
        return `El coder ${this.#nombre}, 
        obtuvo la nota de: ${this.nota}`
    }

    static message(){ //Al ser estatico solo se puede acceder a el mediante la clase
        return `The coders of riwi are the best developers in Antioquia and the entire world`
    }
}

/* 3. Instanciar la clase en JS -> Objeto */
const tomas = new Coder('Tomas', 4.5);
console.log(tomas);
console.log(tomas.showCoder());
console.log(Coder.message());
console.log(tomas.nombre);
/* herencia - inheritance */

class Pasante extends Coder{
    constructor(nombre, nota, telefono){
        super(nombre, nota);
        this.telefono = telefono
    }
    showPasante(){
        return `El Pasante ${this.nombre}
        obtuvo la nota de: ${this.nota}
        y su telefono es: ${this.telefono}`
    }
}

const tabares = new Pasante('Miguel Tabares', 4.8, 32034678988)
console.log(tabares.showCoder());
console.log(tabares.showPasante());

/* 2. Class expression */
// const CoderRIwi = {
    
// }

class Customer{
    nombre

    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
}

const carito = new Customer();

/* setter */
carito.setNombre('Carolina Garcia');

/* getter */
console.log(carito.getNombre());
carito.getNombre()