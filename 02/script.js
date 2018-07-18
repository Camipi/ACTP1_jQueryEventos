$("document").ready(function(){

	$("article").eq(3).find("li").eq(3).find("a").text("Pinterest").attr("href", "http://pinterest.com");


	$( 'a[href="#"]' ).on( "click", function( e ) {
	  e.preventDefault();
	});

	$("header__main > h2").css("font-size", "3em" );

});