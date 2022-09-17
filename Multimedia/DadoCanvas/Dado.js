var 
c1=0;
c2=0;
c3=0;
c4=0;
c5=0;
c6=0;
tt=0;

var imageToDraw = new Image();
imageToDraw.src = "moneda-animada.gif";


document.getElementById('demo1').innerHTML = "1: " + c1 + "<br>";
document.getElementById('demo2').innerHTML = "2: " + c2 + "<br>";
document.getElementById('demo3').innerHTML = "3: " + c3 + "<br>";
document.getElementById('demo4').innerHTML = "4: " + c4 + "<br>";
document.getElementById('demo5').innerHTML = "5: " + c5 + "<br>";
document.getElementById('demo6').innerHTML = "6: " + c6 + "<br>";
document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt;


function init(){
	var ctx = (document.getElementById('miCanvas')).getContext('2d');
	ctx.drawImage(imageToDraw,0,0,100,100);
}

function lanzaDado (){

	ctx = (document.getElementById('miCanvas')).getContext('2d');
	ctx.clearRect(0,0,100,100);

	op=  Math.round(Math.random()*5);

	 
	switch(op){

		case 0: c1++;
				tt++;
				document.getElementById('demo1').innerHTML = "1: " + c1 + "<br>";
				document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt + "";
				imageToDraw.src = "1.jpg";
				ctx.drawImage(imageToDraw,0,0,100,100);
				document.getElementById('uno.mp3').play();
				

				
				break;

		case 1: c2++;
				tt++;
				document.getElementById('demo2').innerHTML = "2: " + c2 + "<br>";
				document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt + "";
				imageToDraw.src = "2.jpg";
				ctx.drawImage(imageToDraw,0,0,100,100);
				document.getElementById('dos.mp3').play();
				
				
				break;

		case 2: c3++;
				tt++;
				document.getElementById('demo3').innerHTML = "3: " + c3 + "<br>";
				document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt + "";
				imageToDraw.src = " 3.jpg";
				ctx.drawImage(imageToDraw,0,0,100,100);
				document.getElementById('tres.mp3').play();
				
				
				break;

		case 3: c4++;
				tt++;
				document.getElementById('demo4').innerHTML = "4: " + c4 + "<br>";
				document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt + "";
				imageToDraw.src = " 4.jpg";
				ctx.drawImage(imageToDraw,0,0,100,100);
				document.getElementById('cuatro.mp3').play();
				
				
				break;

		case 4: c5++;
				tt++;
				document.getElementById('demo5').innerHTML = "5: " + c5 + "<br>";
				document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt + "";
				imageToDraw.src = " 5.jpg";
				ctx.drawImage(imageToDraw,0,0,100,100);
				document.getElementById('cinco.mp3').play();
				
				
				break;

		case 5: c6++;
				tt++;
				document.getElementById('demo6').innerHTML = "6: " + c6 + "<br>";
				document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt + "";
				imageToDraw.src = "6.jpg";
				ctx.drawImage(imageToDraw,0,0,100,100);
				document.getElementById('seis.mp3').play();
				
				
				break;

	
		default: //ctx.drawImage(imageToDraw,0,0,100,100);
				 break;




	}

	ctx.drawImage(imageToDraw,0,0,100,100);
	document.getElementById('demo7').innerHTML = "Lanzamientos: " + tt + "";
	
	



	
	
}
