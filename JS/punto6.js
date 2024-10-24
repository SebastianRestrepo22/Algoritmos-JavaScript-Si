// 6. Escriba el algoritmo que al capturar un numero entero convierta grados
// centígrados a kelvin, si captura un numero flotante diga si es mayor a 10.5,
// y si captura un carácter escriba su nombre.

let Dato = prompt("Ingrese alguna de estas opciones: Número entero, Número decimal o un caracter.")
let Numero = parseFloat (Dato)

if (Number.isInteger(Numero)){
    let Kelvin = Numero + 273.15
    console.log (Numero, "°C a Kelvin es: ", Kelvin)
}else{
    if (!isNaN(Numero)){
        if (Numero > 10.5){
            console.log (Numero, "es mayor a 10.5")
        }
        else{
            console.log (Numero, "no es mayor que 10.5")
        }
    }else{
        console.log(Dato)
    }
}