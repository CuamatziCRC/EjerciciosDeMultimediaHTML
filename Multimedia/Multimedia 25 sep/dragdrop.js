function iniciar() {
	// body...
	var imagenes = document.querySelectorAll('#cajaimagenes > img ');
	for (var i = 0; i < imagenes.length; i++) {
		imagenes[i].addEventListener('dragstart', arrastrado , false );
	}
	soltar = document.getElementById('cajasoltar');
	soltar.addEventListener('dragenter', function(e){ e.preventDefault(); }, false );
	soltar.addEventListener('dragover', function(e){ e.preventDefault(); }, false );
	soltar.addEventListener('drop', soltado , false)
}