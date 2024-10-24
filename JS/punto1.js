// 1. Desarrolle un algoritmo que lea un número, en caso de ser negativo lo
// imprima junto con su positivo.

let Num1 = parseInt(prompt("Digite un número: "))
let Positivo = Num1 * -1

if (Num1 < 0){
    console.log("El número negativo es: ", Num1, "y su positivo es: ", Positivo)
}else{
    console.log("El número ingresado es: ", Num1)
}