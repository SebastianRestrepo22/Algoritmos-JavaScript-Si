// 18.Desarrollar un algoritmo que capture un número y diga si negativo o
// positivo.

let Numero = parseInt(prompt("Ingrese un número: "))

if (Numero < 0){
    console.log("El número", Numero, "es negativo.")
}else{
    if(Numero >= 0){
        console.log("El número", Numero, "es positivo.")
    }
    else{
        console.log("Datos invalidos.")
    }
}