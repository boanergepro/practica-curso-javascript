function ciclo_for(){
	document.write("Programa que muestre los numero del 1 al 10<br>");
	//Ciclo for
	for(var i=1; i < 11; i++){
		document.write(i+"<br>");
	}
}

function ciclo_while(){
	var dias_semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var i=0;
	var dias= dias_semana.length;

	document.write("Programa que muestre los dias dela semana en orden.<br>");
	 //Ciclo while
	 while(i < dias){
	 	document.write(dias_semana[i]+"<br>");
	 	i++;
	 }

}
function ciclo_do_while(){

}