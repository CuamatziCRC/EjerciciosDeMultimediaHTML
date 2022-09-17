//JS

var nc=0,nx=0,nz=0,na=0,ns=0,nd=0,tt=0,op=0;


	document.getElementById("demo1").innerHTML = "Cara 1: "+ nc + "<br>";
	document.getElementById("demo2").innerHTML = "Cara 2: "+ nx + "<br>";
	document.getElementById("demo3").innerHTML = "Cara 3: "+ nz + "<br>";
	document.getElementById("demo4").innerHTML = "Cara 4: "+ na + "<br>";
	document.getElementById("demo5").innerHTML = "Cara 5: "+ ns + "<br>";
	document.getElementById("demo6").innerHTML = "Cara 6: "+ nd + "<br>";

	
	document.getElementById("demo7").innerHTML = " Total: " + tt ;


	function caracruz(){
	op=  Math.round(Math.random()*5);
	if(Math.random()>0.166666){

		nc++;
		
		document.getElementById("demo1").innerHTML = "Cara 1: "+ nc +  "<br>" + "<br>";
		document.moneda.src = "1.jpg";
		document.getEmlementById("sonido1").play();
		tt++;
		
		
	}
	else if (Math.random()>0.333333) {
		nx++;
		document.getElementById("demo2").innerHTML = "Cara 2: "+ nx +  "<br>" + "<br>";
		document.moneda.src = "2.jpg";
		document.getEmlementById("sonido2").play();
		tt++;

	} else if (Math.random()>0.499999) {
		nz++;
		document.getElementById("demo3").innerHTML = "Cara 3: "+ nz +  "<br>" + "<br>";
		document.moneda.src = "3.jpg";
		document.getEmlementById("sonido3").play();
		tt++;

	} else  if (Math.random()>0.666666) {
		na++;
		document.getElementById("demo4").innerHTML = "Cara 4: "+ na +  "<br>" + "<br>";
		document.moneda.src = "4.jpg";
		document.getEmlementById("sonido4").play();
		tt++;

	}else if (Math.random()>0.833333) {
		ns++;
		document.getElementById("demo5").innerHTML = "Cara 4: "+ ns +  "<br>" + "<br>";
		document.moneda.src = "5.jpg";
		document.getEmlementById("sonido5").play();
		tt++;
		
	} else {
		nd++;
		document.getElementById("demo6").innerHTML = "Cara 6: "+ nd +  "<br>" + "<br>";
		document.moneda.src = "6.jpg";
		document.getEmlementById("sonido6").play();
		tt++;
		
	}
		//document.getElementById("demo3").innerHTML = "Total:" + tt;
		document.getElementById("demo7").innerHTML = "Total: " + tt + "<br>";
	
	return false;

   }	
   

