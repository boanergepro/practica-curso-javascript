//Operaciones Básicas------

function miSuma(){
	var num1,num2;

	num1= prompt("Ingrese la primera cantidad");
	num1=parseFloat(num1);
	num2= prompt("Ingrese la segunda cantidad");
	num2=parseFloat(num2);

	var resultado= num1+num2;
	document.write("El resultado es: "+resultado);
	document.write('<br/><a href="index.html">Volver</a>');
}
function miResta(){
	var num1,num2;

	num1= prompt("Ingrese la primera cantidad");
	num1=parseFloat(num1);
	num2=prompt("Ingrese la primera cantidad");
	num2=parseFloat(num2);

	var resultado= num1-num2;
	document.write("El resultado es: "+resultado);
	document.write('<br/><a href="index.html">Volver</a>');
}
function miMultiplicacion(){
	var num1, num2;

	num1= prompt("Ingrese la primera cantidad");
	num1=parseFloat(num1);
	num2= prompt("Ingrese la segunda cantidad");
	num2=parseFloat(num2);

	var resultado= num1*num2;
	document.write("El resultado es: "+resultado);
	document.write('<br/><a href="index.html">Volver</a>');
}
function miDivision(){
	var num1, num2;

	num1= prompt("Ingrese la primera cantidad");
	num1=parseFloat(num1);
	num2=prompt("Ingrese la segunda cantidad");
	num2=parseFloat(num2);

	var resultado=num1/num2;
	document.write("El resultado es: "+resultado);
	document.write('<br/><a href="index.html">Volver</a>');
}