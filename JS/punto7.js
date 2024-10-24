// 7. Desarrolle un algoritmo que lea de un registro: el nombre, la edad, el sexo,
// el estado civil de cualquier persona e imprima el nombre de la persona, si
// corresponde a un hombre casado mayor de 40 años o a una mujer soltera
// menor de 50 años.

let Nombre = prompt ("Ingrese su nombre: ")
let Edad = parseInt(prompt("Ingrese su edad: "))
let Sexo = prompt("Ingrese su sexo si es Masculino (M) o Femenino (F): ")
let Estado_Civil = prompt("Ingrese su estado civil (Casado o Soltero): ")

if (Sexo == "M" && Estado_Civil == "Casado" && Edad > 40){
    console.log("El Señor", Nombre, "encaja con la descripción.")
}else{
    if(Sexo == "F" && Estado_Civil == "Soltero" && Edad < 50){
        console.log("La Señora", Nombre, "encaja con la descripción.")
    }
    else{
        console.log(Nombre, "no encajas con la descripción.")
    }
}