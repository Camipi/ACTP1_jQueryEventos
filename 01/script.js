$("document").ready(function(){

	$("img").on("click", function(){
		alert($(this).attr('alt'));
	})
})