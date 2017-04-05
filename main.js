// /**
//  * Tipops de datos en JS
//  * Principalmente son 3:
//  * Booleans
//  *    Los Booleaans son true o false
//  * Numbers
//  *    Pertenecen a los numeros reales
//  * Strings
//  *    Son cadenas de caracteres - nombre completo de alguien incluyendo los espacios
//  */

// //Definiendo Booleans
// var miVariableBoolean = true
// var miVariableBoolean2 = false 
// console.log("Imprimiendo booleans:" , miVariableBoolean,miVariableBoolean2)

// //Definiendo numeros
// var miNumero = - 17
// var miNumero2 = 56
// var miNumero4 = 5686876869868969
// var miNumero5 = 879877970970970
// var miNumeroDecimal = 0.6374467
// var miNumeroDecimal2 = 0.6385785
// console.log("Imprimiendo numeros:" , miNumero, miNumero2, miNumero4, miNumero5) 

// //Definiendo Strings
// var miString1 = "Mi primer string"
// var miString2 = "pueden contener numeros! como el 2,3,4,5,6,7,$%& "
// var miString3 = "2"
// console.log("imprimiendo strings", miString1, miString2, miString3)

// var miNumero5 = Number(miString3)
// var miNumero4 = String(miNumeroDecimal2)

// var miNuevoNumero4 = Number(miString4)
// var miNumero4 = String(miNumeroDecimal2)
// console.log(typeof miNuevoNumero)

// console.log("suma:", 1 + 3)
// console.log("resta:", 1 - 3)
// console.log("multiplicar:", 9 * 3)
// console.log("dividir", 28 / 7)

// var suma = 5 + 5
// var mensajeparaelusuario = "el resultado de la suma es:" + suma
// alert(mensajeparaelusuario)

// var nombre = prompt("ingresa tu nombre")
// var edad = prompt("ingresa tu edad")

// alert("Hola! " + nombre + " , tienes" + edad + "años!")

/**
 * creasr un programa que consulte el nombre, el apellido, la edad
 * y tambien le pregunte al usuario cuantos mas quiere tener.
 */

var nombre = prompt("ingresa tu nombre")
var apellido = prompt("ingresa tu apellido")
var edad = prompt("ingresa tu edad")
var pregunta = prompt("¿cuantos años mas quieres tener?")
var resultado = Number(edad) + Number(pregunta);
alert("Quieres tener" + resultado + "años")
