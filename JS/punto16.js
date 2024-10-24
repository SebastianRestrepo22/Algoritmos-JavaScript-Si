// 16.desarrollar un algoritmo que capture un número y diga si es par o impar.

let Numero = parseInt(prompt("Ingrese un número: "))

if (Numero % 2 == 0){
    console.log("El número", Numero, "es par.")
}else{
    if(Numero % 2 == 1){
        console.log("El número", Numero, "es impar.")
    }
    else{
        console.log("Datos invalidos.")
    }
}