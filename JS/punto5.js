// 5. desarrollar un programa que capture tres números e imprima por pantalla
// cual es el número mayor, el menor, cuales son iguales, si los tres
// diferentes.

let Num1 = parseInt(prompt("Digite el primer valor: "))
let Num2 = parseInt(prompt("Ingrese el segundo valor: "))
let Num3 = parseInt(prompt("Ingrese el tercer número: "))

// Para saber que número es mayor.

if (Num1 > Num2 && Num1 > Num3){
    console.log ("El primer valor (", Num1, ") es mayor que el segundo valor (", Num2, ") y que el tercer valor (", Num3, ")")
}else{
    if(Num2 > Num1 && Num2 > Num3){
        console.log ("El segundo valor (", Num2, ") es mayor que el primer valor (", Num1, ")y que el tercer valor (", Num3, ")")
    }else{
        if(Num3 > Num1 && Num3 > Num2){
            console.log ("El tercer valor (", Num3, ") es mayor que el primer valor (", Num1, ")y que el segundo valor (", Num2, ")")
        }
        else {
            console.log ("No hay número mayores")
        }
    }

}

// Para saber que número es menor.

if (Num1 < Num2 && Num1 < Num3){
    console.log ("El primer valor (", Num1, ") es menor que el segundo valor (", Num2, ") y que el tercer valor (", Num3, ")")
}else{
    if(Num2 < Num1 && Num2 < Num3){
        console.log("El segundo valor (", Num2, ") es menor que el primer valor (", Num1, ")y que el tercer valor (", Num3, ")")
    }else{
        if (Num3 < Num1 && Num3 < Num2){
            console.log("El tercer valor (", Num3, ") es menor que el primer valor (", Num1, ")y que el segundo valor (", Num2, ")")
        }
        else{
            console.log ("No hay número menores.")
        }
    }
}

// Para saber que número es igual.

if(Num1 == Num2 && Num2 == Num3){
    console.log("todos los numeros son iguales.")
}else{
    if (Num1 == Num2){
        console.log(Num1, "es igual a: ", Num2)
    }else{
        if (Num2 == Num3){
            console.log (Num2, "es igual a: ", Num3)
        }else{
            if (Num3 == Num1){
                console.log (Num3, "es igual a: ", Num1)
            }
            else{
                console.log("No hay números iguales.")
            }
        }
    }
}

// Para saber que número es diferente.

if (Num1 !== Num2 && Num2 !== Num3){
    console.log ("Todos los número son diferentes.")
}else{
    if (Num1 !== Num2){
        console.log(Num1, "es diferente a: ", Num2)
    }else{
        if (Num2 !== Num3){
            console.log (Num2, "es diferente a: ", Num3)
        }else{
            if (Num3 !== Num1){
                console.log (Num3, "es diferente a: ", Num1)
            }
            else{
                console.log ("No hay numeros diferentes.")
            }
        }
    }
}