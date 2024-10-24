// 3. desarrollar el algoritmo dado como dato el sueldo de un trabajador, le aplica
// un aumento del 15% si su sueldo es inferior a $300.000.

let sueldo = parseInt(prompt("Ingrese el sueldo del trabajador: "))

if (sueldo < 300000){
    let aumento = sueldo * 0.15
    console.log("El aumento es de: ", aumento)
}else{
    console.log("El sueldo no cambia: ", sueldo)
}