
function sizeScreen(){
	var alto = $(window).height();
	var ancho = $(window).width();
	var anchoContainer = $("#container").width();

	//$("section#debug").html("Ancho: "+ancho+" Alto:"+alto);	
	$("#container").css({"height":alto+"px"});
	$("body.noticias #container iframe").css({"width":anchoContainer-10+"px","height":alto-150+"px"})
	
	// ======== margin top del 10% de la altura para envios =============== //
		
	//var margenEnvios = (alto*10)/100;
	//$("#envios").css({"margin": margenEnvios+"px auto 0px auto"});
}

$(window).resize(function(){ sizeScreen(); });




$(document).on("ready",function(){
	sizeScreen();

	if ($("body#home").length) {
		$('#cont-dvLoading').css({"display":"none"});
	}else{
		$(window).load(function(){
  			$('#cont-dvLoading').fadeOut(400);
		});
	};

	


});