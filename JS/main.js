$(document).ready(function () {

    aplicarBGAleatorio();

    // Menu Hamburguer

    $("#btAbrirGS").click(function () {
        $("#menuHam").css({ "left": "0px", "opacity": "1" });
    });

    $(".closeMenuHam").click(function () {
        $("#menuHam").css({ "left": "-100vw", "opacity": "0" });
    });

    // Menu Grid

    $("#btAbrirGL").click(function () {
        $("#menuGrid").css({ "right": "0px", "opacity": "1" });
    });

    $(".closeMenuGrid").click(function () {
        $("#menuGrid").css({ "right": "-100vw", "opacity": "0" });
    });

    // Botão ver mais banner

    $("#gtConteudo").click(function () {
        var Banner = $("#banner").height();
        $("html, body").animate({scrollTop : Banner - 75}, 850);
    });

    // box contato

    $("#closeBoxContato").click(function () {
        $("#boxContato").css({ "margin-bottom": "-215px" });
        $("#boxContato h1").css({ "width" : "100%", "cursor" : "pointer" });
        $("#closeBoxContato").fadeOut(200);
    });

    $("#boxContato h1").click(function () {
        $("#boxContato").css({ "margin-bottom": "0px" });
        $("#boxContato h1").css({ "width" : "150px", "cursor" : "text" });
        $("#closeBoxContato").fadeIn(200);
    });

});

// função no scroll

$(window).on("scroll", function () {

    // Menu Fixo

    var top = $(window).scrollTop();
    var menuTopo = $("#menuTopo");
    var menuTopoLink = $("#menuTopo #linksMenuTopo a");
    var menuTopoImagensBranca = $("#menuTopo #socialMenuTopo a img.socialBranca");
    var menuTopoImagensPreta = $("#menuTopo #socialMenuTopo a img.socialPreta");
    var menuTopoMenusBranca = $(".gridBranca, .hamBranca");
    var menuTopoMenusPreta = $(".gridPreta, .hamPreta");
    var iconeScroll = $("#gtConteudo");

    if (top > 0) {
        menuTopo.css({ "background-color" : "#ffffff", "box-shadow" : "0px 2px 2px rgba(0, 23, 31, 0.2), 0px 4px 4px rgba(0, 23, 31, 0.1)" });
        menuTopoLink.css({ "color" : "#2E4147" });
        menuTopoImagensBranca.css({ "display" : "none" });
        menuTopoImagensPreta.css({ "display" : "block" });
        menuTopoMenusPreta.css({ "display" : "block" });
        menuTopoMenusBranca.css({ "display" : "none" });
        iconeScroll.css({ "opacity" : "0" });
    } else {
        menuTopo.css({ "background-color" : "transparent", "box-shadow" : "none" });
        menuTopoLink.css({ "color" : "#ffffff" });
        menuTopoImagensBranca.css({ "display" : "block" });
        menuTopoImagensPreta.css({ "display" : "none" });
        menuTopoMenusPreta.css({ "display" : "none" });
        menuTopoMenusBranca.css({ "display" : "block" });
        iconeScroll.css({ "opacity" : "1" });
    }

    // parallax

    if ($("#banner").length) {
        $("#banner").each(function () {
            var bgParallax = $(this);
            var top = $(window).scrollTop();
            var heightBanner = $("#banner").height();
            var widthWindow = $(window).width();

            $(window).scroll(function () {
                if (top <= heightBanner && widthWindow >= 1067) {
                    var posBg = -(top / bgParallax.data("speed"));
                    bgParallax.css({ "background-position": "50% " + posBg + "px" });
                }
            });
        });
    }
});

function aplicarBGAleatorio() {
    var numeroBG = Math.floor(Math.random() * 5);

    if ($("#banner").length) {
        $("#banner").css({ "background-image": "url('Imagens/" + backgroundAleatorio(numeroBG) + "')" });
    }

    function backgroundAleatorio(x) {
        switch (x) {
            case 0:
                return "background0.jpg";
                break;
            case 1:
                return "background1.jpg";
                break;
            case 2:
                return "background2.jpg";
                break;
            case 3:
                return "background3.jpg";
                break;
            case 4:
                return "background4.jpg";
                break;
        }
    }
}
