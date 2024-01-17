/* Import var o const */
import alias, { coderName, coderAge, showInformation,valid, beHired, Coder} from './index.js' //Se puede (alias) porque es único
import { CoderMedellin} from './coderMedellin.js'
console.log(coderName);
console.log(coderAge);

/* Invocar funciones */
console.log(showInformation(coderName,coderAge));

console.log(valid());
beHired();
// console.log(valid);

/* Exportar clases - objeto */
const coder = new Coder(coderName,coderAge);
console.log(coder.showCoder());

// Cuando es un método estático, se llama a la clase directamente
console.log(Coder.message(coderName));

//Ej
const coderMedello = new CoderMedellin("pa",45,"front");
console.log(coderMedello.showInfo());

alias();