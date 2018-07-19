$("document").ready(function(){

	// agrega nombre al listado
	$('.add_name').on('click', function(e){

		var name = prompt('Por favor agrega un nombre a la lista', 'Nombre');
		$('.names').append('<li><span>' + name + ' <a href="#" class="remove_name">Eliminar</a></span></li>');
	});
	
	// Delegación de evento y evento de eliminar li
	$(".names").on("click", "li > span > a", function(e){
		e.preventDefault();
		$(this).parent().parent().remove();
	});

})

 