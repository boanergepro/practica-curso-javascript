var operacion = function(signo){
		//recojer datos
	var operando1 = document.getElementById("operando1").value,
		//recojer datos
		operando2 = document.getElementById("operando2").value,
		//Operacion
		result = eval(operando1 + signo + operando2); 
		//Creando nodo
	var nuevoElemento = document.createElement("p"),
		//Creando una variable con un nodo de texto que contiene el resultado
		contenidoResultado= document.createTextNode(result);
		//Uniendo el nuevo elemento con el resultado
		nuevoElemento.appendChild(contenidoResultado);

		//Este elemento padre es el div con la id pantalla 
	var padre = document.getElementById("pantalla"),
		//Accediendo al elemento p original de DOM
		elementoPeOriginal = document.getElementsByTagName('p')[0],
		//Almancenando el elemento p con el resultado en una variable
		elementoHijo = nuevoElemento;
		//Reemplazando el elemento p original antes mencionado con el elementoHijo que tiene el resultado
		padre.replaceChild(elementoHijo, elementoPeOriginal);

}
/*El elememento metodo replaceChild( , ) sirve para reemplazar nodos y resive dos
parametros el primero es el nuevo nodo y el segundo es el nodo que se quiere reemplazar*/