var empa=0;
var r=0;
var m=0;
var card=0;
var galle;
var gal1=0;
var gal2=0;
var gal3=0;
$(document).ready(function(){
    $('.parallax').parallax();
});
$(document).ready(function() {
	$('.carousel.carousel-slider').carousel({
    	fullWidth: true,
    	indicators: true
	});
	$('#izq').click(function() {
		$('.carousel.carousel-slider').carousel('prev');
	});
	$('#der').click(function() {
		$('.carousel.carousel-slider').carousel('next');
	});
})
function paginacion(c){
	switch(c){
		case 1:$('.pagina').empty();
		var x="<ul class=\"pagination\">\
				<a onclick=\"paginacion(1)\" class=\"waves-effect waves-light btn disabled\">Anterior</a>\
				<li class=\"active\"><a>1</a></li>\
				<li class=\"disabled\"><a>2</a></li>\
				<li class=\"disabled\"><a href=\"#!\">3</a></li>\
				<li class=\"disabled\"><a href=\"#!\">4</a></li>\
				<li class=\"disabled\"><a href=\"#!\">5</a></li>\
				<a onclick=\"paginacion(2)\" class=\"waves-effect waves-light btn\">Siguiente</a>\
			</ul>";
			$('.pagina').append(x);
			$('.contenido').empty();
			var y="<div class=\"col s2\">\
						<img onclick=\"empaque(1)\" class=\"imagen\" src=\"img/empa1.png\">\
						<img onclick=\"empaque(2)\" class=\"imagen\" src=\"img/empa2.png\">\
						<img onclick=\"empaque(3)\" class=\"imagen\" src=\"img/empa3.png\">\
						<img onclick=\"empaque(4)\" class=\"imagen\" src=\"img/empa4.png\">\
					</div>\
					<div class=\"col s2\">\
						<img onclick=\"empaque(5)\" class=\"imagen\" src=\"img/empa5.png\">\
						<img onclick=\"empaque(6)\" class=\"imagen\" src=\"img/empa6.png\">\
						<img onclick=\"empaque(7)\" class=\"imagen\" src=\"img/empa7.png\">\
					</div>";
			$('.contenido').append(y);
			break;
		case 2: if (empa==1||empa==7) {
			paginacion(3);
		} else {
			$('.pagina').empty();
			var x="<ul class=\"pagination\">\
				<a onclick=\"paginacion(1)\" class=\"waves-effect waves-light btn\">Anterior</a>\
				<li class=\"active\"><a><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a>2</a></li>\
				<li class=\"disabled\"><a href=\"#!\">3</a></li>\
				<li class=\"disabled\"><a href=\"#!\">4</a></li>\
				<li class=\"disabled\"><a href=\"#!\">5</a></li>\
				<a onclick=\"paginacion(3)\" class=\"waves-effect waves-light btn\">Siguiente</a>\
			</ul>";
			$('.pagina').append(x);
			$('.contenido').empty();
			var y="<div class=\"col s2\">\
						<img onclick=\"ramos(1)\" class=\"imagen\" src=\"img/ramo1.png\">\
						<img onclick=\"ramos(2)\" class=\"imagen\" src=\"img/ramo2.png\">\
						<img onclick=\"ramos(3)\" class=\"imagen\" src=\"img/ramo3.png\">\
					</div>";
			$('.contenido').append(y);
		}
		 
			break;
		case 3: if (empa==7) {
			paginacion(4);
		} else {
			$('.pagina').empty();
			var x="<ul class=\"pagination\">\
				<a onclick=\"paginacion(2)\" class=\"waves-effect waves-light btn\">Anterior</a>\
				<li class=\"active\"><a><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a href=\"#!\">3</a></li>\
				<li class=\"disabled\"><a href=\"#!\">4</a></li>\
				<li class=\"disabled\"><a href=\"#!\">5</a></li>\
				<a onclick=\"paginacion(4)\" class=\"waves-effect waves-light btn\">Siguiente</a>\
			</ul>";
			$('.pagina').append(x);
			$('.contenido').empty();
			var y="<div class=\"col s2\">\
						<img onclick=\"moño(1)\" class=\"imagen\" src=\"img/mo1.png\">\
						<img onclick=\"moño(2)\" class=\"imagen\" src=\"img/mo2.png\">\
						<img onclick=\"moño(3)\" class=\"imagen\" src=\"img/mo3.png\">\
						<img onclick=\"moño(4)\" class=\"imagen\" src=\"img/mo4.png\">\
						<img onclick=\"moño(5)\" class=\"imagen\" src=\"img/mo5.png\">\
					</div>\
					<div class=\"col s2\">\
						<img onclick=\"moño(6)\" class=\"imagen\" src=\"img/mo6.png\">\
						<img onclick=\"moño(7)\" class=\"imagen\" src=\"img/mo7.png\">\
						<img onclick=\"moño(8)\" class=\"imagen\" src=\"img/mo8.png\">\
						<img onclick=\"moño(9)\" class=\"imagen\" src=\"img/mo9.png\">\
						<img onclick=\"moño(10)\" class=\"imagen\" src=\"img/mo10.png\">\
					</div>";
					$('.contenido').append(y);
			}
		 
			break;
		case 4: $('.pagina').empty();
		var x="<ul class=\"pagination\">\
				<a onclick=\"paginacion(3)\" class=\"waves-effect waves-light btn\">Anterior</a>\
				<li class=\"active\"><a><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a href=\"#!\"><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a href=\"#!\">4</a></li>\
				<li class=\"disabled\"><a href=\"#!\">5</a></li>\
				<a onclick=\"paginacion(5)\" class=\"waves-effect waves-light btn\">Siguiente</a>\
			</ul>";
			$('.pagina').append(x);
			$('.contenido').empty();
			var y="<div class=\"col s2\">\
						<img onclick=\"tarjeta(1)\" class=\"imagen\" src=\"img/ta1.jpg\">\
						<img onclick=\"tarjeta(2)\" class=\"imagen\" src=\"img/ta2.jpg\">\
						<img onclick=\"tarjeta(3)\" class=\"imagen\" src=\"img/ta3.jpg\">\
					</div>";
			$('.contenido').append(y);
			break;
		case 5: $('.pagina').empty();
		var x="<ul class=\"pagination\">\
				<a onclick=\"paginacion(4)\" class=\"waves-effect waves-light btn disabled\">Anterior</a>\
				<li class=\"active\"><a><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a href=\"#!\"><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a href=\"#!\"><i class=\"material-icons\">check</i></a></li>\
				<li class=\"active\"><a href=\"#!\">5</a></li>\
				<a onclick=\"paginacion(5)\" class=\"waves-effect waves-light btn disabled\">Siguiente</a>\
			</ul>";
			$('.pagina').append(x);
			$('#tarjetita').empty();
			var t="<div class=\"card-content black-text\">\
							<img style=\"display: none\" id=\"gal1\" class=\"galleta\" src=\"img/mm.png\">\
							<img style=\"display: none\" id=\"gal2\" class=\"galleta\" src=\"img/choco.png\">\
							<img style=\"display: none\" id=\"gal3\" class=\"galleta\" src=\"img/red.png\">\
						</div>";
			$('#tarjetita').append(t);
			var u="<a onclick=\"marcador(false)\" id=\"btn1\" class=\"btn-floating waves-effect waves-light red\"><i class=\"material-icons\">arrow_drop_down</i></a>\
			<p class=\"canti\"></p>\
           <a onclick=\"marcador(true)\" id=\"btn2\" class=\"btn-floating waves-effect waves-light green\"><i class=\"material-icons\">arrow_drop_up</i></a>";
    	$('#tarjetita').append(u);

			$('.contenido').empty();
			var y="<div class=\"col s2\">\
						<img onclick=\"galleta(1)\" class=\"imagen\" src=\"img/mm.png\">\
						<img onclick=\"galleta(2)\" class=\"imagen\" src=\"img/choco.png\">\
						<img onclick=\"galleta(3)\" class=\"imagen\" src=\"img/red.png\">\
					</div>";
			$('.contenido').append(y);
			var titu="<h2 class=\"titulogalle\"></h2>";
			$('.contenido').append(titu);
			var r="<a onclick=\"terminar()\" id=\"termi\" class=\"waves-effect waves-light btn\">Terminar</a>";
			$('.contenido').append(r);
			M.toast({html: 'Su combinación se guardado con éxito!', classes: 'rounded'});
			break;

	}
}
function empaque(h) {
	console.log(h);
	for (var i = 1; i <= 7; i++) {
		$("#empa"+i+"").css("display", "none");
	}
	$("#empa"+h+"").css("display", "block");
	empa=h;	
}
function ramos(g){
	for (var i = 1; i <=3; i++) {
		$("#ramo"+i+"").css("display", "none");
	}
	switch (empa){
		case 2: var logo=document.getElementById("ramo"+g+"");
			logo.height=100;
			logo.style.left=300+"px";
			logo.style.top=150+"px";
			$("#ramo"+g+"").css("display", "block");
			break;
		case 3:var logo=document.getElementById("ramo"+g+"");
			logo.height=100;
			logo.style.left=370+"px";
			logo.style.top=150+"px";
			$("#ramo"+g+"").css("display", "block");
			break;
		case 4:var logo=document.getElementById("ramo"+g+"");
			logo.height=100;
			logo.style.left=320+"px";
			logo.style.top=150+"px";
			$("#ramo"+g+"").css("display", "block");
			break;
		case 5:var logo=document.getElementById("ramo"+g+"");
			logo.height=100;
			logo.style.left=320+"px";
			logo.style.top=120+"px";
			$("#ramo"+g+"").css("display", "block");
			break;
		case 6:var logo=document.getElementById("ramo"+g+"");
			logo.height=100;
			logo.style.left=200+"px";
			logo.style.top=130+"px";
			$("#ramo"+g+"").css("display", "block");
			break;
	}
	r=g;
}
function moño(k) {
	for (var i = 1; i <=10; i++) {
		$("#moño"+i+"").css("display", "none");
	}
	switch (empa){
		case 1:var logo=document.getElementById("moño"+k+"");
			logo.style.left=220+"px";
			logo.style.top=110+"px";
			$("#moño"+k+"").css("display", "block");
			break;
		case 2:var logo=document.getElementById("moño"+k+"");
			logo.style.left=200+"px";
			logo.style.top=170+"px";
			$("#moño"+k+"").css("display", "block");
			break;
		case 3:var logo=document.getElementById("moño"+k+"");
			logo.style.left=170+"px";
			logo.style.top=20+"px";
			$("#moño"+k+"").css("display", "block");
			break;
		case 4:var logo=document.getElementById("moño"+k+"");
			logo.style.left=180+"px";
			logo.style.top=20+"px";
			$("#moño"+k+"").css("display", "block");
			break;
		case 5:var logo=document.getElementById("moño"+k+"");
			logo.style.left=220+"px";
			logo.style.top=30+"px";
			$("#moño"+k+"").css("display", "block");
			break;
		case 6:var logo=document.getElementById("moño"+k+"");
			logo.style.left=270+"px";
			logo.style.top=20+"px";
			$("#moño"+k+"").css("display", "block");
			break;
	}
	m=k;
}
function tarjeta(r) {
	for (var i = 1; i <=10; i++) {
		$("#tar"+i+"").css("display", "none");
	}
	switch(empa){
		case 1:var logo=document.getElementById("tar"+r+"");
			logo.height=50;
			logo.style.left=220+"px";
			logo.style.top=230+"px";
			$("#tar"+r+"").css("display", "block");
			break;
		case 2:var logo=document.getElementById("tar"+r+"");
			logo.height=50;
			logo.style.left=350+"px";
			logo.style.top=80+"px";
			$("#tar"+r+"").css("display", "block");
			break;
		case 3:var logo=document.getElementById("tar"+r+"");
			logo.height=50;
			logo.style.left=320+"px";
			logo.style.top=100+"px";
			$("#tar"+r+"").css("display", "block");
			break;
		case 4:var logo=document.getElementById("tar"+r+"");
			logo.height=50;
			logo.style.left=220+"px";
			logo.style.top=200+"px";
			$("#tar"+r+"").css("display", "block");
			break;
		case 5:var logo=document.getElementById("tar"+r+"");
			logo.height=50;
			logo.style.left=220+"px";
			logo.style.top=240+"px";
			$("#tar"+r+"").css("display", "block");
			break;
		case 6:var logo=document.getElementById("tar"+r+"");
			logo.height=50;
			logo.style.left=220+"px";
			logo.style.top=90+"px";
			$("#tar"+r+"").css("display", "block");
			break;
		case 7:var logo=document.getElementById("tar"+r+"");
			logo.height=50;
			logo.style.left=280+"px";
			logo.style.top=190+"px";
			$("#tar"+r+"").css("display", "block");
			break;
	}
	card=r;
}
function galleta(a) {
	for (var i = 1; i <=3; i++) {
		$("#gal"+i+"").css("display", "none");
	}
	$("#gal"+a+"").css("display", "block");
	switch (a){
		case 1:$('.canti').text(gal1);
		$('.titulogalle').text('Gotas de Lluvia');
		break;
		case 2:$('.canti').text(gal2);
		$('.titulogalle').text('Idilio de Amor');
		break;
		case 3:$('.canti').text(gal3);
		$('.titulogalle').text('Quiéreme Siempre');
		break;

	}
	galle=a;
}
function marcador(c) {
	switch (galle){
		case 1:if (c) {
    	gal1++
    	$('.canti').text(gal1);
    	} else {
    		if (gal1==0) {
    			swal({
                title: "Ooops!",
                text: "No puedes tener galletas negativas",
                icon: "error",
                button: "Ohhh claro"
            });
    		} else {
    			gal1--;
    			$('.canti').text(gal1);
    		}

    	}
    	break;
    	case 2:if (c) {
    	gal2++
    	$('.canti').text(gal2);
    	} else {
    		if (gal2==0) {
    			swal({
                title: "Ooops!",
                text: "No puedes tener galletas negativas",
                icon: "error",
                button: "Ohhh claro"
            	});
    		} else {
    			gal2--;
    			$('.canti').text(gal2);
    		}

    	}
    	break;
    	case 3:if (c) {
    	gal3++
    	$('.canti').text(gal3);
    	} else {
    		if (gal3==0) {
    			swal({
                title: "Ooops!",
                text: "No puedes tener galletas negativas",
                icon: "error",
                button: "Ohhh claro"
            });
    		} else {
    			gal3--;
    			$('.canti').text(gal3);
    		}
    	}
    	break;
	}   
}
var pedido=[];
function terminar() {
	var x=empa+""+r+""+m+""+card;
	pedido.push(x);
	console.log(x);
	$('.contenido').empty();
	$('#tarjetita').empty();
	$('.pagina').empty();
	$('#btn1').css("display", "none");
  	$('#btn2').css("display", "none");
  	var t='<div class="card-content black-text">\
								<img style="display: none" id="empa1" class="empaques" src="img/empa1.png">\
								<img style="display: none" id="empa2" class="empaques" src="img/empa2.png">\
								<img style="display: none" id="empa3" class="empaques" src="img/empa3.png">\
								<img style="display: none" id="empa4" class="empaques" src="img/empa4.png">\
								<img style="display: none" id="empa5" class="empaques" src="img/empa5.png">\
								<img style="display: none" id="empa6" class="empaques" src="img/empa6.png">\
								<img style="display: none" id="empa7" class="empaques" src="img/empa7.png">\
								<img style="display: none" id="ramo1" class="ramo" src="img/ramo1.png">\
								<img style="display: none" id="ramo2" class="ramo" src="img/ramo2.png">\
								<img style="display: none" id="ramo3" class="ramo" src="img/ramo3.png">\
								<img style="display: none" id="moño1" class="moño" src="img/mo1.png">\
								<img style="display: none" id="moño2" class="moño" src="img/mo2.png">\
								<img style="display: none" id="moño3" class="moño" src="img/mo3.png">\
								<img style="display: none" id="moño4" class="moño" src="img/mo4.png">\
								<img style="display: none" id="moño5" class="moño" src="img/mo5.png">\
								<img style="display: none" id="moño6" class="moño" src="img/mo6.png">\
								<img style="display: none" id="moño7" class="moño" src="img/mo7.png">\
								<img style="display: none" id="moño8" class="moño" src="img/mo8.png">\
								<img style="display: none" id="moño9" class="moño" src="img/mo9.png">\
								<img style="display: none" id="moño10" class="moño" src="img/mo10.png">\
								<img style="display: none" id="tar1" class="tarjeta" src="img/ta1.jpg">\
								<img style="display: none" id="tar2" class="tarjeta" src="img/ta2.jpg">\
								<img style="display: none" id="tar3" class="tarjeta" src="img/ta3.jpg">\
								<img style="display: none" id="gal1" class="galleta" src="img/mm.png">\
								<img style="display: none" id="gal2" class="galleta" src="img/choco.png">\
								<img style="display: none" id="gal3" class="galleta" src="img/red.png">\
						</div>';
	$('#tarjetita').append(t);
	var f="<a onclick=\"home()\" class=\"waves-effect waves-light btn\">Comprar</a>\
	<a onclick=\"home()\" class=\"waves-effect waves-light btn\">Borrar</a>"
	$('.contenido').append(f);
	var p='<p class=\"cajitade\">Su pedido esta con</p>\
	<p class=\"cajitade\">'+gal1+' galletas gotas de lluvia</p>\
	<p class=\"cajitade\">'+gal2+' galletas idilio de amor</p>\
	<p class=\"cajitade\">'+gal3+' galletas quiéreme siempre</p>';
	$('#tarjetita').append(p);
	empaque(empa);
	tarjeta(card);
	if (empa==1||empa==7) {
		if (empa==1) {
			moño(m);
		}
	} else {
		ramos(r);
		moño(m);
	}
	
				
}
function home() {
	window.location.replace('home.html');
}