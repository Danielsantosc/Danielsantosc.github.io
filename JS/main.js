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
});

$(window).on("load", function() {
    $("#loading").fadeOut(200);
});
