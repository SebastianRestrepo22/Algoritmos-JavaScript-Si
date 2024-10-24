// 13.desarrollar un algoritmo que halle la nota total de una materia en el SENA, y
// determine si la gano o la reprobó

let nota1 = parseFloat(prompt("Ingrese la primera nota: "))
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "))
let nota3 = parseFloat(prompt("Ingrese la tercera nota: "))
let nota4 = parseFloat(prompt("Ingrese la cuarta nota: "))

let promedio = (nota1+nota2+nota3+nota4)/4

if (promedio >= 3.0){
    console.log("Usted ha aprobado la competencia de JavaScript con: ", promedio)
}else{
    if (promedio <= 2.9){
        console.log("Usted reprobo la competencia de JavaScript con: ", promedio)
    }
    else{
        console.log("Datos invalidos.")
    }
}