import { Coder } from "./index.js";

export class CoderMedellin extends Coder{
    constructor(coderName,coderAge,coderSpecialization){
        super(coderName, coderAge);
        this.specialization = coderSpecialization;
    }
    showInfo(){
        return`El coder ${this.nombre}
        tiene ${this.edad} años y se Especializa en ${this.specialization}`
    }
}