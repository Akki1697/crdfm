
function sizeScreen(){
	var alto = $(window).height();
	var ancho = $(window).width();

	$("section#debug").html("Ancho: "+ancho+" Alto:"+alto);	
	$("#container").css({"height":alto+"px"});	
}

$(window).resize(function(){ sizeScreen(); });
	


$(document).on("ready",function(){
	sizeScreen();
});