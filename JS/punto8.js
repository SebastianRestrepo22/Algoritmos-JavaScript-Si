// 8. Prepare un algoritmo que identifique e imprima el número medio de un
// conjunto de tres números únicos. El número medio es aquel que no es el
// menor ni el mayor.

let Num1 = parseInt(prompt("Ingrese el primer número: "))
let Num2 = parseInt(prompt("Ingrese el segundo número: "))
let Num3 = parseInt(prompt("Ingrese el tercer número: "))

if (Num1 > Num2 && Num1 < Num3){
    console.log("El número medio es: ", Num1, "que esta entre: ", Num2 ,"y", Num3)
}else{
    if(Num2 > Num1 && Num2 < Num3){
        console.log("El número medio es: ", Num2, "que esta entre: ", Num1, "y", Num3)
    }else{
        if(Num3 > Num1 && Num3 < Num2){
            console.log("El número medio es:", Num3, "que esta entre: ", Num1, "y", Num2)
        }
        else{
            console.log("No hay número medio.")
        }
    }
}