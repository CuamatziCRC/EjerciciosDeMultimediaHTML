//JS

var nc=0,nx=0,tt=0;


	document.getElementById("demo1").innerHTML = "Cara: "+ nc + "<br>";
	document.getElementById("demo2").innerHTML = "Cruz: "+ nx + "<br>" + "<br>";
	document.getElementById("demo3").innerHTML = "Total: " + tt ;


	function caracruz(){
	
	if(Math.random()>0.5){

		nc++;
		
		document.getElementById("demo1").innerHTML = "Cara:" + nc + "<br>";
		document.moneda.src = "cara1.gif";
		document.getEmlementById("sonido1").play();
		tt++;
		
		
	}
	else{
		nx++;
		
		document.getElementById("demo2").innerHTML = "Cruz: "+ nx + "<br>" + "<br>";
		document.moneda.src = "cruz1.gif";
		document.getEmlementById("sonido2").play();
		tt++;
		
	}
		//document.getElementById("demo3").innerHTML = "Total:" + tt;
		document.getElementById("demo3").innerHTML = "Total: " + tt + "<br>";
	
	return false;

   }	
   

