$("document").ready(function(){
	
	$('nav').find('ul').find('li').eq(3).append('<ul><li><a href="#">link 4.a</a></li></ul>').before('<li><a href="#">link 3.5</a></li>')
		console.log();

	$('nav').find('ul').find('li').eq(5).prepend('😎')
		console.log();

	$('nav').find('ul').find('li').eq(5).after('😎')
		console.log();

})