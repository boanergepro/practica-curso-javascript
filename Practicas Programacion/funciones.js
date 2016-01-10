function total(){
    function suma(num1,num2){
	      var a=num1, b=num2;
	      return a+b;
}
  var numA, numB;

  numA = prompt("Ingrese la primera cantidad","Ej. 55");
  numA = parseInt(numA);
  numB = prompt("Ingrese la segunda cantidad","Ej. 2");
  numB= parseInt(numB);

  alert("El resultado de la suma es: "+suma(numA,numB));
}