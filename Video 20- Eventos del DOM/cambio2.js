//Los tres div-----------------------------------------
var primerDiv = document.getElementById('primero'),
	segundoDiv = document.getElementById('segundo'),
	tercerDiv = document.getElementById('tercero');
//Los botones------------------------------------------
var botonIz = document.getElementById('botonIz'),
	botonDe = document.getElementById('botonDe');
//Imagen-----------------------------------------------
var Imagen = document.getElementById("img");
//Arreglo para el posicionamiento----------------------
var arreglo = [true,false,false,false];
var nodos  = document.getElementsByName('imagen');

function MoverDerecha(){
	var posicion_img = arreglo.indexOf(true);

	if(arreglo.length != posicion_img+1){
		nodos[posicion_img].removeChild(Imagen); 

		var aux = arreglo[posicion_img]; 
		arreglo[posicion_img] = arreglo[posicion_img+1]; 
		arreglo[posicion_img+1] = aux; 

		nodos[posicion_img+1].appendChild(Imagen); 
	}
	//console.log(arreglo,nodos);
}
function MoverIzquierda(){
	var posicion_img = arreglo.indexOf(true);

	if(posicion_img-1 != -1){
		nodos[posicion_img].removeChild(Imagen);

		var aux = arreglo[posicion_img];
		arreglo[posicion_img] = arreglo[posicion_img-1];
		arreglo[posicion_img-1] = aux;

		nodos[posicion_img-1].appendChild(Imagen);
	}
	//console.log(arreglo,nodos);
}


//Eventos- Click a la derecha y a la izquierda
botonIz.addEventListener("click", MoverIzquierda);
botonDe.addEventListener("click", MoverDerecha);

/*

function cambiar(){
	botonDe.click();
};

//setTimeout(cambiar,2000); con esto solo va a avanzar una ves la imagen

setInterval(cambiar,2000); //con esto la imagen va a avanzar hacia la derecha

*/