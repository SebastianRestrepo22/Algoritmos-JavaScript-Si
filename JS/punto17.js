// 17.desarrollar el algoritmo que lea tres números y diga si uno es divisible del
// otro.

let Num1 = parseInt(prompt("Ingrese el primer número: "))
let Num2 = parseInt(prompt("Ingrese el segundo número: "))
let Num3 = parseInt(prompt("Ingrese el tercer número: "))

if (Num1 % Num2 === 0){
    console.log("El número 1: ", Num1, "es divisible por: ", Num2)
}
else{
    console.log("El número 1 y el 2 no son divisibles..")
}

if( Num1 % Num3 === 0){
    console.log("El número 1: ", Num1, "es divisible por: ", Num3)
}
else{
    console.log("El número 1 y el 3 no son divisibles entre si.")
}

if(Num2 % Num1 === 0){
    console.log("El número 2:", Num2, "es divisible por: ", Num1)
}
else{
    console.log("El número 2 y 1 no son divisibles entre si.")
}

if(Num2 % Num3 === 0){
    console.log("El número 2:", Num2, "es divisible por:", Num3)
}
else{
    console.log("El número 2 y 3 no son divisibles entre si.")
}

if(Num3 % Num1 === 0){
    console.log("El número 3:", Num3, "es divisible por:", Num1)
}
else{
    console.log("El número 3 y 1 no son divisibles entre si.")
}

if(Num3 % Num2 === 0){
    console.log("El número 3:", Num3, "es divisible por:", Num2)
}
else{
    console.log("El número 3 y 2 no son divisinles entre si.")
}
