var 
q=0;
w=0;
e=0;
r=0;
t=0;
y=0;
tt=0;

document.getElementById('demo1').innerHTML = "1: " + q + "<br>";
document.getElementById('demo2').innerHTML = "2: " + w + "<br>";
document.getElementById('demo3').innerHTML = "3: " + e + "<br>";
document.getElementById('demo4').innerHTML = "4: " + r + "<br>";
document.getElementById('demo5').innerHTML = "5: " + t + "<br>";
document.getElementById('demo6').innerHTML = "6: " + y + "<br>";
document.getElementById('demo7').innerHTML = "total: " + tt;

function Dado (){

	op=  Math.round(Math.random()*5);
	switch(op){

		case 0: q++;
				tt++;
				document.getElementById('demo1').innerHTML = "1: " + q + "<br>";
				document.getElementById('demo7').innerHTML = "total; " + tt;
				document.dado.src = "1.jpg"
				document.getElementById('uno.mp3').play();
				
				break;

		case 1: w++;
				tt++;
				document.getElementById('demo2').innerHTML = "2: " + w + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "2.jpg"
				document.getElementById('dos.mp3').play();
				
				break;

		case 2: e++;
				tt++;
				document.getElementById('demo3').innerHTML = "3: " + e + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "3.jpg"
				document.getElementById('tres.mp3').play();
				
				break;

		case 3: r++;
				tt++;
				document.getElementById('demo4').innerHTML = "4: " + r + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "4.jpg"
				document.getElementById('cuatro.mp3').play();
				
				break;

		case 4: t++;
				tt++;
				document.getElementById('demo5').innerHTML = "5: " + t + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "5.jpg"
				document.getElementById('cinco.mp3').play();
				
				break;

		case 5: y++;
				tt++;
				document.getElementById('demo6').innerHTML = "6: " + y + "<br>";
				document.getElementById('demo7').innerHTML = "total: " + tt;
				document.dado.src = "6.jpg"
				document.getElementById('seis.mp3').play();
				
				break;

	}

	
	
}
