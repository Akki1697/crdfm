
function sizeScreen(){
	var alto = $(window).height();
	var ancho = $(window).width();
	var anchoContainer = $("#container").width();

	$("section#debug").html("Ancho: "+ancho+" Alto:"+alto);	
	$("#container").css({"height":alto+"px"});
	$("body.noticias #container iframe").css({"width":anchoContainer-10+"px","height":alto-150+"px"})
}

$(window).resize(function(){ sizeScreen(); });
	


$(document).on("ready",function(){
	sizeScreen();
});