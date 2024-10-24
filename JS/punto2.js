// 2. desarrollar un programa que, dado una calificación de un alumno en un
// parcial, escribe aprobado si la calificación es superior a 3.

let nota = parseInt(prompt("Ingrese la califiación del estudiante: "))

if(nota > 3){
    console.log("El estudiante aprobo con la calificación: ", nota)
}else{
    console.log("El estudiante a reprobado con la nota: ", nota)
}