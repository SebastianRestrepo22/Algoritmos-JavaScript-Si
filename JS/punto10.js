// 10.A ciertos estudiantes se les dice que su calificación final será el promedio
// de las dos calificaciones más altas de entre las tres que se han obtenido en
// el curso. Haga un algoritmo que permita a un estudiante efectuar el cálculo
// correspondiente a su nota final.

let Nota1 = parseInt(prompt("Ingrese la primera nota: "))
let Nota2 = parseInt(prompt("Ingrese la segunda nota: "))
let Nota3 = parseInt(prompt("Ingrese la tercera nota: "))

if (Nota1 >= Nota2 && Nota1 >= Nota3 && Nota2 >= Nota3){
    let Promedio = (Nota1 + Nota2)/ 2
    console.log("El promedio es: ", Promedio)    
}else{
    if(Nota1 >= Nota2 && Nota1 >= Nota3 && Nota3 >= Nota2){
        let Promedio = (Nota1 + Nota3)/2
        console.log("El promedio es: ", Promedio)
    }else{
        if(Nota2 >= Nota1 && Nota2 >= Nota3 && Nota1 >= Nota3){
            let Promedio = (Nota2 + Nota1)/2
            console.log("El promedio es: ", Promedio)
        }else{
            if(Nota2 >= Nota1 && Nota2 >= Nota3 && Nota3 >= Nota1){
                let Promedio = (Nota2 + Nota3)/2
                console.log("El promedio es: ", Promedio)
            }else{
                if(Nota3 >= Nota2 && Nota3 >= Nota1 && Nota1 >= Nota2){
                    let Promedio = (Nota3 + Nota1)/2
                    console.log("El promedio es: ", Promedio)
                }else{
                    if(Nota3 >= Nota2 && Nota3 >= Nota1 && Nota2 >= Nota1){
                        let Promedio = ("El promedio es: ", Promedio)
                    }
                    else{
                        console.log("Datos invalidos.")
                    }
                }
            }
        }
    }
}