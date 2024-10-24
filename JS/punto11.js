// 11.Escriba un algoritmo que acepte o rechace una pieza en forma de varilla,
// para una empresa de acuerdo a los siguientes criterios:
// a. Su longitud debe ser mayor de 7.5 cm pero no exceder los 9 cm
// b. Su diámetro no debe ser menor que 0.5 cm ni mayor de 1.3 cm.
// c. Por ningún motivo su masa debe exceder los 5.8 cm
// i. Nota: masa = diámetro * longitud * densidad; densidad = 3.5
// Gr/cm

let Longitud = parseFloat(prompt("Ingrese la longitud de la varilla (Su longitud debe ser mayor de 7.5 cm pero no exceder los 9 cm): "))
let Diametro = parseFloat(prompt("Ingrese el diámetro de la varilla (Su diámetro no debe ser menor que 0.5 cm ni mayor de 1.3 cm): "))
let Densidad = 3.5
let masa = Longitud * Diametro * Densidad 

if (Longitud >= 7.5 && Longitud <= 9 && Diametro >= 0.5 && Diametro <= 1.3 && masa <= 40){
    console.log("La masa de la varilla es: ", masa)
}
else{
    console.log("La masa excede a lo requerido.")
}
// Nota: Profe coloque en la masa 40 ya que al momento de hacer la operación el resultado
// daba muy alto y se excedia de los 5.8.