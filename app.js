/****************** A *********************/
/* let soyMayorDeEdad = false;
let edad = 16;

if (edad > 18) {
    // sentences 
    soyMayorDeEdad = true;
} else {
    // sentences
    soyMayorDeEdad = false;
} */

let edad = 16;
let soyMayorDeEdad = (edad > 18) ? true : false;

/******************* B **********************/

let a = 9;
let b = 7;
let c = 71;
//let esMayor = null;

//let esMayor = (a > b && a > c) ? `a = ${a}` : (b > c) ? `b = ${b}` : `c = ${c}`;

const esMayor = (a, b, c) => (a > b && a > c) ? `a = ${a}` : (b > c) ? `b = ${b}` : `c = ${c}`;

/* if(a > b && a > c){
    esMayor = `a = ${a}`;
}else if (b > c){
    esMayor = `b = ${b}`;
} else {
    esMayor = `c = ${c}`;
} */
/* if(a > b){
    if(a > c){
        esMayor = `a = ${a}`;
    }else{
        esMayor = `c = ${c}`;
    }
}else if (b > c){
    esMayor = `b = ${b}`;
} else {
    esMayor = `c = ${c}`;
} */

console.log(esMayor(a, b, c));

module.exports = {
    esMayor
}