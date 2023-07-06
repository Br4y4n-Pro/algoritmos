//============VARIABLES GLOBALES Y REGEX========================

var regex = /^\d+(\.\d+)?$/; //SOLO NUMEROS
var regexComa = /^[\d]+(?:,[\d]+)*$/; //NUMEROS SEPARADOS POR COMA 
var regexText = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/ // SOLO TEXTO Y ESPACIOS SIN ESPACIO AL INICIO O FINAL
let modal1 = document.querySelector('#modalUno')
let modal2 = document.querySelector('#modalDos')
let modal3 = document.querySelector('#modalTres')
let modal4 = document.querySelector('#modalCuatro')
let modal5 = document.querySelector('#modalCinco')
// let acordeon = document.querySelector('.acordeon')
let contenedor = document.querySelector(".contenedor")




//====================================================
//------------------ABRIR MODALES---------------------
//====================================================




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
    if (value ===5) {
    	modal5.classList.toggle('ocultar')
    }
}




//===========================================================
//---------------CERRAR MODAL ABIERTO------------------------
//===========================================================




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
		document.querySelector('.btn-extender').innerHTML = "Mostrar Codigo JavaScript";

  // Restablecer la clase y estilos del código
  	codigo[0].classList.remove('codigo');
  	codigo[0].classList.add('codigo_oculto');

    }

    if (value ===2) {
    	modal2.classList.toggle("ocultar");
    	let num1 = document.querySelector("#numero");
		let zoneResul = document.querySelector('.result')

		num1.value=""
		zoneResul.innerHTML=""


		document.querySelector('.btn-extender').innerHTML = "Mostrar Codigo JavaScript";

  // Restablecer la clase y estilos del código
  	codigo[1].classList.remove('codigo');
  	codigo[1].classList.add('codigo_oculto');
	}

	if (value === 3) {
		modal3.classList.toggle("ocultar");
		let valores = document.querySelector("#text");
		let respuesta = document.querySelector(".resultArreglo");
		valores.value="";
		respuesta.innerHTML=""

		document.querySelector('.btn-extender').innerHTML = "Mostrar Codigo JavaScript";

  // Restablecer la clase y estilos del código
  	codigo[2].classList.remove('codigo');
  	codigo[2].classList.add('codigo_oculto');
	}


	if (value === 4) {
		modal4.classList.toggle("ocultar");
		let textMin = document.querySelector("#textT")
		let conMayus = document.querySelector(".conMayus")
		let text ="";
		textMin.value="";
		conMayus.innerHTML=""

		document.querySelector('.btn-extender').innerHTML = "Mostrar Codigo JavaScript";

  // Restablecer la clase y estilos del código
  	codigo[3].classList.remove('codigo');
  	codigo[3].classList.add('codigo_oculto');
	}

	if (value === 5) {
		let string = document.querySelector('#textCont');
		let respuestaTexto = document.querySelector('.cantidadPalabra')
		let palabrasA = document.querySelector('.palabras')		
		string.value='';
		respuestaTexto.innerHTML = '';
		palabrasA.innerHTML = '';

		modal5.classList.toggle("ocultar");
		

		document.querySelector('.btn-extender').innerHTML = "Mostrar Codigo JavaScript";

  // Restablecer la clase y estilos del código
  	codigo[4].classList.remove('codigo');
  	codigo[4].classList.add('codigo_oculto');
	}


}




//==========================================================
//----------------ABRIR Y OCULTAR CODIGO--------------------
//==========================================================




let codigo = document.querySelectorAll('.codigoSelector');

function extender(valor){
let btn = document.querySelectorAll('.btn-extender');
let fondo = document.querySelectorAll('.fondoModal');
	
	if (valor === 1) {
		if (codigo[0].classList.contains('codigo')) {
 	btn[0].innerHTML="Mostrar Codigo JavaScript"
 	fondo[0].style.justifyContent = 'center'

	}else{
	btn[0].innerHTML ="Ocultar Codigo JavaScript"
	fondo[0].style.justifyContent = 'inherit'
	}
		codigo[0].classList.toggle('codigo');
		codigo[0].classList.toggle('codigo_oculto')
	};

	if (valor ===2) {
			if (codigo[1].classList.contains('codigo')) {
 	btn[1].innerHTML="Mostrar Codigo JavaScript"
 	fondo[1].style.justifyContent = 'center'

	}else{
	btn[1].innerHTML ="Ocultar Codigo JavaScript"
	fondo[1].style.justifyContent = 'inherit'
	}
		codigo[1].classList.toggle('codigo');
		codigo[1].classList.toggle('codigo_oculto')
	};

	if (valor ===3) {
			if (codigo[2].classList.contains('codigo')) {
 	btn[2].innerHTML="Mostrar Codigo JavaScript"
 	fondo[2].style.justifyContent = 'center'

	}else{
	btn[2].innerHTML ="Ocultar Codigo JavaScript"
	fondo[2].style.justifyContent = 'inherit'
	}
		codigo[2].classList.toggle('codigo');
		codigo[2].classList.toggle('codigo_oculto')
	};

	if (valor ===4) {
			if (codigo[3].classList.contains('codigo')) {
 	btn[3].innerHTML="Mostrar Codigo JavaScript"
 	fondo[3].style.justifyContent = 'center'

	}else{
	btn[3].innerHTML ="Ocultar Codigo JavaScript"
	fondo[3].style.justifyContent = 'inherit'
	}
		codigo[3].classList.toggle('codigo');
		codigo[3].classList.toggle('codigo_oculto')
	};

	if (valor ===5) {
			if (codigo[4].classList.contains('codigo')) {
 	btn[4].innerHTML="Mostrar Codigo JavaScript"
 	fondo[4].style.justifyContent = 'center'

	}else{
	btn[4].innerHTML ="Ocultar Codigo JavaScript"
	fondo[4].style.justifyContent = 'inherit'
	}
		codigo[4].classList.toggle('codigo');
		codigo[4].classList.toggle('codigo_oculto')
	};


}




// ==============================================================
// ----------------ALGORITMOS A SOLUCIONAR-----------------------
// ==============================================================





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
}; //1

//Pregunta: Escribe un algoritmo que tome un número y devuelva "Es par" si es divisible por 2, y "Es impar" si no lo es.
function parce(){
	//Se accede al input y a el lugar de la respuesta
		let num1 = document.querySelector("#numero");
		let zoneResul = document.querySelector('.result')
	//Se convierte el valor a un entero
		num1 = parseInt(num1.value);
		//Se verifica con este regex que lo introducido sea un numero
		if (regex.test(num1)) {
			//Se verifica que sea par observando si el modulo da 0
			if ((num1 % 2) === 0) {
				zoneResul.innerHTML = "es par"
				}else{
				zoneResul.innerHTML = "es impar"
				}
			}else{
				alert("Digite un numero no se permite caracteres")
			}
};	//2

//Pregunta: Escribe un algoritmo que tome un arreglo de números y devuelva el número más grande.
function arreglo(){
	//Se accede al elemento del input y donde se guardara la respuesta
	let valores = document.querySelector("#text").value;
	let respuesta = document.querySelector(".resultArreglo");
	//se hace un arreglo con lo digitado este se separa por una coma
	// AUN NO SE VALIDA QUE LOS DATOS DIGITADOS SEAN CORRECTOS
	let arreglo = valores.split(",")
	// se crea una variable con el valor 0
	let mayor = 0;
	//se verifica que cumpla con la separacion de comas y que sean numeros
	if (regexComa.test(valores)) {
			arreglo.forEach(numero => {
				numero = parseInt(numero)
				//se usa expresión ternaria
				mayor = (numero > mayor) ? numero : mayor;

				});
	//despues de hacer la operacion se queda guardado el numero mayor en la variable mayor
	//se hace un innerHTML con el numero
	  respuesta.innerHTML=mayor;

  }else{
  	//muestre mensaje de error sino cumple con los parametros
  	alert("Error al crear la lista por favor son numeros enteros y separados por coma")
  		respuesta.innerHTML="Corrige el error"			

  }
}; //3

// Pregunta: Escribe un algoritmo que tome un string y devuelva la misma cadena pero con todas las letras en mayúsculas.
function mayus(){
	//Se accede a los elementos 
	let textMin = document.querySelector("#textT")
	let conMayus = document.querySelector(".conMayus")
	// se trae el texto del input se convierte a mayuscula y se elimina los espacios al inicio
	//y final de la cadena
	// esto se hace por que en el regex no permite espacios al inicio o final de la cadena
	let text = textMin.value.toUpperCase().trim();
	// se valida el text si pasa se muestra si no manda mensaje de correcion y se coloca tambien en el inner 
	if (regexText.test(text)) {
	conMayus.innerHTML = text;
	}else{
		conMayus.innerHTML = 'Corregir'
		alert('Solo se permite texto,elimina cualquier espacio, numero o puntuaciones de la cadena')
	}
}; //4

// Pregunta: Escribe un algoritmo que tome un arreglo de strings y 
//devuelva la cantidad de elementos que tienen una longitud mayor a 5.
function largoString () {
	let string = document.querySelector('#textCont').value;
	let respuestaTexto = document.querySelector('.cantidadPalabra')
	let palabrasA = document.querySelector('.palabras')
	let cortados = string.split(" ")
	let words = cortados.filter((texto) => {
			return texto.length >= 5
		});

	let wordsRealize = words.map(palabra => `<li>${palabra}</li>`).join('');
	
	respuestaTexto.innerHTML = words.length;
	palabrasA.innerHTML = wordsRealize;

	}; //5

// Pregunta: Escribe un algoritmo que tome un número y devuelva la secuencia de Fibonacci hasta ese número.

// Pregunta: Escribe un algoritmo que tome un arreglo de números y devuelva un nuevo arreglo con los elementos ordenados de menor a mayor.

// Pregunta: Escribe un algoritmo que tome un número y devuelva true si es un número primo, y false si no lo es.

// Pregunta: Escribe un algoritmo que tome una cadena de palabras separadas por espacios y devuelva la cadena con las palabras en orden inverso.

// Pregunta: Escribe un algoritmo que tome un número y devuelva la suma de todos los números naturales hasta ese número.

// Recuerda que estos son solo ejemplos de preguntas de ejercicios de algoritmos en JavaScript. Puedes intentar resolverlos por tu cuenta y luego buscar las soluciones o pedirlas si necesitas ayuda. ¡Buena suerte en tu práctica!
