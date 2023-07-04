var regex = /^\d+(\.\d+)?$/; //SOLO NUMEROS
var regexComa = /^[\d]+(?:,[\d]+)*$/; //NUMEROS SEPARADOS POR COMA 
var regexText = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/ // SOLO TEXTO Y ESPACIOS SIN ESPACIO AL INICIO O FINAL
let modal1 = document.querySelector('#modalUno')
let modal2 = document.querySelector('#modalDos')
let modal3 = document.querySelector('#modalTres')
let modal4 = document.querySelector('#modalCuatro')
let acordeon = document.querySelector('.acordeon')
let contenedor = document.querySelector(".contenedor")

function Mostrar(value){
	document.documentElement.style.overflow="hidden"
    if(value === 1){
    	modal1.classList.toggle("ocultar");
    }
    if (value ===2) {
    	modal2.classList.toggle("ocultar");
    }
    if (value ===3) {
    	modal3.classList.toggle('ocultar')
    }
    if (value ===4) {
    	modal4.classList.toggle('ocultar')
    }
}

function cerrar(value){
		document.documentElement.style.overflow="unset"

	if(value === 1){
    	modal1.classList.toggle("ocultar");
    	let num1 = document.querySelector("#num1")
		let num2 = document.querySelector("#num2")
		let zoneResul = document.querySelector('.resultado')
		num1.value=""
		num2.value=""
		zoneResul.innerHTML=""
		extender(1)

    }

    if (value ===2) {
    	modal2.classList.toggle("ocultar");
    	let num1 = document.querySelector("#numero");
		let zoneResul = document.querySelector('.result')

		num1.value=""
		zoneResul.innerHTML=""
	}

	if (value === 3) {
		modal3.classList.toggle("ocultar");
		let valores = document.querySelector("#text");
		let respuesta = document.querySelector(".resultArreglo");
		valores.value="";
		respuesta.innerHTML=""
	}


}

function extender(valor){
	let btn = document.querySelector('.extender')
	let contenido = document.querySelector('.contenido')
		contenido.classList.toggle('extender__abierto')

	if (acordeon.classList.contains('hola')) {
		btn.innerHTML="Mostrar Codigo JavaScript"

	}else{
		btn.innerHTML ="Ocultar Codigo JavaScript"

	}

	if (valor === 1) {
	acordeon.classList.toggle('hola')
	}
}





//Pregunta: Escribe un algoritmo que tome dos números y devuelva su suma.
function sumar(){
	let num1 = document.querySelector("#num1")
	let num2 = document.querySelector("#num2")
	let zoneResul = document.querySelector('.resultado')


	num1 = parseFloat(num1.value)
	num2 = parseFloat(num2.value)

	if (regex.test(num1) && regex.test(num2)) {
		let resultado = num1 + num2;
			 zoneResul.innerHTML = resultado;
		
	}else{
		alert("Digite numeros no se permite ningun tipo de caracter diferente")
	}
}
//Pregunta: Escribe un algoritmo que tome un número y devuelva "Es par" si es divisible por 2, y 
//"Es impar" si no lo es.
	function parce(){
		let num1 = document.querySelector("#numero");
		let zoneResul = document.querySelector('.result')
		num1 = parseInt(num1.value);

		if (regex.test(num1)) {
		if ((num1 % 2) === 0) {
			zoneResul.innerHTML = "es par"
		}else{
			zoneResul.innerHTML = "es impar"
			}
		}else{
			alert("Digite un numero no se permite caracteres")
		}
	}
//Pregunta: Escribe un algoritmo que tome un arreglo de números y devuelva el número más grande.

function arreglo(){
	let valores = document.querySelector("#text").value;
	let respuesta = document.querySelector(".resultArreglo");
	let arreglo = valores.split(",")
	let mayor = 0;
	let error = false;
	console.log(arreglo)
	if (regexComa.test(valores)) {
			arreglo.forEach((numero) => {
				numero = parseInt(numero)
				if (isNaN(numero)) {
				error = true;
				return
				}else{
				if (numero > mayor) {
				mayor = numero
					}
				}		
			});

		if (error) {
		alert('Digite la lista segùn los parametros num separado por ,')
			respuesta.innerHTML="Corrige el error"			
	}else{
		respuesta.innerHTML=mayor;
	}
	
  }else{
  	alert("Que haces? Hazlo bien en la descripcion te dice que hacer")
  }
};

// Pregunta: Escribe un algoritmo que tome un string y devuelva la misma cadena pero con todas las letras en mayúsculas.
function mayus(){
	var textMin = document.querySelector("#textT")
	let conMayus = document.querySelector(".conMayus")
	let text = textMin.value.toUpperCase().toString();
	console.log(text)

	if (regexText.test(text)) {
	conMayus.innerHTML = text;
	}else{
		conMayus.innerHTML = 'Corregir'
		alert('Solo se permite texto,elimina cualquier espacio, numero o puntuaciones de la cadena  o verifica que no haya espacios al inicio o final de la cadena')
	}

}

// Pregunta: Escribe un algoritmo que tome un arreglo de strings y devuelva la cantidad de elementos que tienen una longitud mayor a 5.

// Pregunta: Escribe un algoritmo que tome un número y devuelva la secuencia de Fibonacci hasta ese número.

// Pregunta: Escribe un algoritmo que tome un arreglo de números y devuelva un nuevo arreglo con los elementos ordenados de menor a mayor.

// Pregunta: Escribe un algoritmo que tome un número y devuelva true si es un número primo, y false si no lo es.

// Pregunta: Escribe un algoritmo que tome una cadena de palabras separadas por espacios y devuelva la cadena con las palabras en orden inverso.

// Pregunta: Escribe un algoritmo que tome un número y devuelva la suma de todos los números naturales hasta ese número.

// Recuerda que estos son solo ejemplos de preguntas de ejercicios de algoritmos en JavaScript. Puedes intentar resolverlos por tu cuenta y luego buscar las soluciones o pedirlas si necesitas ayuda. ¡Buena suerte en tu práctica!

// Pregunta: Escribe un algoritmo que tome un número y devuelva true si es un número primo, y false si no lo es.

// Pregunta: Escribe un algoritmo que tome una cadena de palabras separadas por espacios y devuelva la cadena con las palabras en orden inverso.

// Pregunta: Escribe un algoritmo que tome un número y devuelva la suma de todos los números naturales hasta ese número.

// Recuerda que estos son solo ejemplos de preguntas de ejercicios de algoritmos en JavaScript. Puedes intentar resolverlos por tu cuenta y luego buscar las soluciones o pedirlas si necesitas ayuda. ¡Buena suerte en tu práctica!
