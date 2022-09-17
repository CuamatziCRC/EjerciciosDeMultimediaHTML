var 
c1=0;
c2=0;
c3=0;
c4=0;
c5=0;
c6=0;
tt=0;

document.getElementById('demo1').innerHTML = "1: " + c1 + "<br>";
document.getElementById('demo2').innerHTML = "2: " + c2 + "<br>";
document.getElementById('demo3').innerHTML = "3: " + c3 + "<br>";
document.getElementById('demo4').innerHTML = "4: " + c4 + "<br>";
document.getElementById('demo5').innerHTML = "5: " + c5 + "<br>";
document.getElementById('demo6').innerHTML = "6: " + c6 + "<br>";
document.getElementById('demo7').innerHTML = "total: " + tt;

function lanzaDado (){

	op=  Math.round(Math.random()*5);
	switch(op){

		case 0: c1++;
				tt++;
				document.getElementById('demo1').innerHTML = "1: " + c1 + "<br>";
				document.getElementById('demo7').innerHTML = "total; " + tt;
				document.dado.src = "cara1.jpg"
				document.getElementById('uno.mp3').play();
				
				break;

		case 1: c2++;
				tt++;
				document.getElementById('demo2').innerHTML = "2: " + c2 + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "cara2.jpg"
				document.getElementById('dos.mp3').play();
				
				break;

		case 2: c3++;
				tt++;
				document.getElementById('demo3').innerHTML = "3: " + c3 + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "cara3.jpg"
				document.getElementById('tres.mp3').play();
				
				break;

		case 3: c4++;
				tt++;
				document.getElementById('demo4').innerHTML = "4: " + c4 + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "cara4.jpg"
				document.getElementById('cuatro.mp3').play();
				
				break;

		case 4: c5++;
				tt++;
				document.getElementById('demo5').innerHTML = "5: " + c5 + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "cara5.jpg"
				document.getElementById('cinco.mp3').play();
				
				break;

		case 5: c6++;
				tt++;
				document.getElementById('demo6').innerHTML = "6: " + c6 + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "cara6.jpg"
				document.getElementById('seis.mp3').play();
				
				break;

	}

	
	
}
