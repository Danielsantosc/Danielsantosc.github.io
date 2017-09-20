document.onscroll = function () {
    var headerNormal = document.getElementById("headerNormal");
    var headerPosts = document.getElementById("headerPosts");
    var mouse = document.getElementById("mouse");
    var scrollTop = document.body.scrollTop;

    if (scrollTop != 0) {
        if (headerNormal) {
            headerNormal.style.boxShadow = "0px 2px 4px rgba(44, 44, 44, 0.2), 0px 2px 4px rgba(44, 44, 44, 0.2)";
        }
        if (headerPosts) {
            headerPosts.style.boxShadow = "0px 2px 4px rgba(44, 44, 44, 0.2), 0px 2px 4px rgba(44, 44, 44, 0.2)";
        }
        if (mouse) {
            mouse.style.bottom = "-14px";
        }
    } else {
        if (headerNormal) {
            headerNormal.style.boxShadow = "none";
        }
        if (headerPosts) {
            headerPosts.style.boxShadow = "none";
        }
        if (mouse) {
            mouse.style.bottom = "20px";
        }
    }

}

function gtSobre () {
    document.querySelector('#telaSobre').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function gtProjetos () {
    document.querySelector('#telaProjetos').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function gtContato () {
    document.querySelector('#telaContato').scrollIntoView({ 
        behavior: 'smooth' 
    });
}