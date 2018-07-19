$('document').ready(function(){

	// Tomo al padre de los 2 botones 
	$('.social').on('click', function(e){
		// le quito el evento del href
		e.preventDefault();

		// a traves de mi evento "e" (e.target) puedo saber sobre que elemento <i> hice click.
		// Luego obtengo el padre de <i>.parent(), que es <button>.
		// ej:
		// e                                    =>  Evento rescatado al momento de hacer click, con este puedo obtener mas info de quien clickeo.
		// $(e.target)                          =>  <i> (Elemento que hice click)
		// $(e.target).parent()                 =>  <button> (Elemento padre de <i>)
		let btnclick = $(e.target).parent();

		// Si es social like
		if(btnclick.hasClass('social__like')){

			// toggleClass('social__like--clicked') =>  Evento asignado a <button>
			btnclick.toggleClass('social__like--clicked');
		}
		// Si es social link
		if(btnclick.hasClass('social__link')){
			// $(this)  =>  .social (Contenedor de los botones)
			// $(this).prev()   =>  Su hermano anterior es la imagen <img>
			// $(this).prev().attr("alt") => obtengo el alt de la imagen.
			alert($(this).prev().attr("alt"))
		}

		

	});
});