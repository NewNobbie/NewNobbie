/* LocalStorage - setItemn('key', 'value') */

localStorage.setItem('company', 'riwi');

/* Save Objects - LocalStorage */

const coder = {
    nombre: "David Velez",
    celular: 3207451209,


}

/* 1.1 Convert Objet to String - JSON.stringify */

const coderString = JSON.stringify(coder);
console.log(coderString);
console.log(typeof coderString);

/* 1.2 Save in LocalStorage - String en formato de Objeto */

localStorage.setItem('coder', coderString);

/* 2 Save Array in LocalStorage - Array en forma de Objeto */

const coderA = ['carito', 'viejo eyder', 'viejo jimmy'];

/* 2.1 Convert array to string */

const conderAString = JSON.stringify(coderA);
console.log(conderAString);

/* 2.2 Store in LocalStorage - String en formato de Array*/

localStorage.setItem('coderA', conderAString);


/* 3 Obtain String with format of Object */

const company = localStorage.getItem('company');
console.log(company);

/* 3.1 Obtain String with format of Object in Console*/

const coderObject = localStorage.getItem('coder');
/* 3.2 Convert */
console.log(JSON.parse(coderObject));

/* 4 Obtain of LocalStorage */

/* 4.1 Obtain String in format Array */

const coderArray = localStorage.getItem('coderA');
console.log(JSON.parse(coderArray));

/* CRUD 
(c) - create (setItem())
(R) - read (getItem())
(U) - update (no tiene metodo)
(D) - delete (removeItem())*/

/* 5 Delete elements of LocalStorage */

localStorage.removeItem('company');


// Tomar al array y actualizarlo

const array = JSON.parse(localStorage.getItem('coderA'));
console.log(array);

array.push("Viejo Vermen");

JSON.setItem('coders',array);
console.log(array);




