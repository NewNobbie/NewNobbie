/* Exportar Variables o Constantes */

// export {showInformation, valid, beHired}

export const coderName = 'Franco'; 
export const coderAge = 15;
const coderSpecialization = 'Back-End';

/* Exportar funciones */
export function showInformation(){
    return `EL coder: ${coderName}, tiene: ${coderAge} años`;
}

export function valid(){
    return coderAge >= 18 ? 'Permitir Ingreso' : 'No puede ingresar';
    
}

export function beHired(){
    if(coderAge>18){
        console.log('Puede ser contratado');
    }else{
        console.log('No puede ser contratado');
    }
}

/* Exportar clases - Objeto */
export class Coder{
    constructor(coderName,coderAge){
        this.nombre = coderName,
        this.edad = coderAge
    }//Metodo de la clase
    showCoder(){
        return`El coder ${this.nombre}
        tiene ${this.edad} años`
    }

    // Cuando es un método estático (el cual es propio de la clase), se le debe pasar un parámetro para exportarlo
    static message(nombre){
        console.log(`The coder ${nombre} es el mejor del salón`)
    }
}

//Herede los 2 atributos, y si es back o front
// export class CoderMedellin extends Coder{
//     constructor(coderName,coderAge,coderSpecialization){
//         super(coderName, coderAge);
//         this.specialization = coderSpecialization;
//     }
//     showInfo(){
//         return`El coder ${this.nombre}
//         tiene ${this.edad} años y se Especializa en ${this.specialization}`
//     }
// }


export default function alias(){
    console.log(`EXPORT DEFAULT`);
}