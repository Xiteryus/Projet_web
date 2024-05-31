function f(event) {
    var x = event.offsetX;
    var y = event.offsetY;



    if (x >= 609 - 20 && x <= 609 + 20 && y >= 380 - 20 && y <= 380 + 20) {
        window.location.href = "Mercure.html";
    }

    if (x >= 720 - 20 && x <= 720 + 20 && y >= 380 - 20 && y <= 380 + 20) {
        window.location.href = "Venus.html";
    }

    if (x >= 900 - 20 && x <= 900 + 20 && y >= 380 - 20 && y <= 380 + 20) {
        window.location.href = "Terre.html";
    }

    if (x >= 1050 - 23 && x <= 1050  && y >= 380 - 10 && y <= 380 + 10) {
        window.location.href = "mars.html";
    }
    if (x >= 1265 && x <= 1621 && y >= 193 && y <= 565) {
        window.location.href = "jupiter.html";
    }
}
/*
document.getElementById("image_systeme").addEventListener("mousemove", survole);

function survole(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x,y);
    var p = document.getElementsByClassName("survol-planete")[0];

    if (x >= 609 - 20 && x <= 609 + 20 && y >= 380 - 20 && y <= 380 + 20) {

        p.innerHTML = "Aller sur mercure";
        p.style.display = "block";
        p.style.left = (x + 10) + 'px';
        p.style.top  = (y + 10) + 'px';

    } 

    else if (x >= 700 && x <= 740 && y >= 360 && y <= 400) {
        p.innerHTML = "Aller sur venus";
        p.style.display = "block";
        p.style.left = (x + 10) + 'px';
        p.style.top  = (y + 10) + 'px';

    } 

    else if (x >= 880 && x <= 920 && y >= 360 && y <= 400) {
        p.innerHTML = "Aller sur la terre";
        p.style.display = "block";
        p.style.left = (x + 10) + 'px';
        p.style.top  = (y + 10) + 'px';

    } 
    
    else if (x >= 1027 && x <= 1050 && y >= 370 && y <= 390) {
        p.innerHTML = "Aller sur mars";
        p.style.display = "block";
        p.style.left = (x + 10) + 'px';
        p.style.top  = (y + 10) + 'px';

    } 

    else if (x >= 1265 && x <= 1621 && y >= 193 && y <= 565) {
        p.innerHTML = "Aller sur jupiter";
        p.style.display = "block";
        p.style.left = (x + 10) + 'px';
        p.style.top  = (y + 10) + 'px';

    } 
    
    else {
        p.style.display = "none";
    }
}*/


function opencarre() {
            document.querySelector(".carre").style.display = "block";
        }

function closecarre() {
            document.querySelector(".carre").style.display = "none";
        }