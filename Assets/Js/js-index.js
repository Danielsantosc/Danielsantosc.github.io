$(document).ready(function() {

    $("#hMobile").hide();

    $(".gtInicio").click(function() {
        $('html, body').animate({
            scrollTop: $("#telaInicial").offset().top
        }, 500);
        $("#hMobile").slideUp();
    });

    $(".gtSobre").click(function() {
        $('html, body').animate({
            scrollTop: $("#sobreMim").offset().top - 75
        }, 500);
        $("#hMobile").slideUp();
    });

    $(".gtProjetos").click(function() {
        $('html, body').animate({
            scrollTop: $("#Projetos").offset().top - 75
        }, 500);
        $("#hMobile").slideUp();
    });

    $(".gtContato").click(function() {
        $('html, body').animate({
            scrollTop: $("#Contato").offset().top - 75
        }, 500);
        $("#hMobile").slideUp();
    });

    $(".oMenu").click(function() {
        $("#hMobile").slideToggle();
    });
});
