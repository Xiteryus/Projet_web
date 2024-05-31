function f(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    if (x >= 0 && x <= 400 && y >= 0 && y <= 815) {
        window.location.href = "soleil.html";
    }

    if (x >= 560 && x <= 580 && y >= 370 && y <= 390) {
        window.location.href = "Mercure.html";
    }

    if (x >= 700 && x <= 730 && y >= 360 && y <= 400) {
        window.location.href = "Venus.html";
    }

    if (x >= 900 - 20 && x <= 900 + 20 && y >= 380 - 20 && y <= 380 + 20) {
        window.location.href = "Terre.html";
    }

    if (x >= 1050 - 23 && x <= 1050  && y >= 380 - 10 && y <= 380 + 10) {
        window.location.href = "mars.html";
    }

    if (x >= 1155 && x <= 1161 && y >= 377 && y <= 382) {
        window.location.href = "ceres.html";
    }

    if (x >= 1265 && x <= 1621 && y >= 193 && y <= 565) {
        window.location.href = "jupiter.html";
    }

    if (x >= 1730 && x <= 2030 && y >= 230 && y <= 550) {
        window.location.href = "saturne.html";
    }

    if (x >= 2117 && x <= 2250 && y >= 310 && y <= 450) {
        window.location.href = "uranus.html";
    }

    if (x >= 2340 && x <= 2470 && y >= 310 && y <= 450) {
        window.location.href = "neptune.html";
    } 
}

function survole(event, page) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x, y);
    var p = document.getElementsByClassName("survol-planete")[0];
    

    if(page == "accueil"){
        if (x >= 0 && x <= 400 && y >= 0 && y <= 815) {
            afficherp(p, x, y, "Aller sur le soleil");
        } 
        else if (x >= 580 && x <= 600 && y >= 370 && y <= 390) {
            afficherp(p, x, y, "Aller sur mercure");
        } 
        else if (x >= 700 && x <= 730 && y >= 360 && y <= 400) {
            afficherp(p, x, y, "Aller sur venus");
        } 
        else if (x >= 868 && x <= 903 && y >= 360 && y <= 400) {
            afficherp(p, x, y, "Aller sur la terre");
        } 
        else if (x >= 1027 && x <= 1050 && y >= 370 && y <= 390) {
            afficherp(p, x, y, "Aller sur mars");
        } 
        else if (x >= 1155 && x <= 1161 && y >= 377 && y <= 382) {
            afficherp(p, x, y, "Aller sur cères");
        } 
        else if (x >= 1265 && x <= 1621 && y >= 193 && y <= 565) {
            afficherp(p, x, y, "Aller sur jupiter");
        } 
        else if (x >= 1730 && x <= 2030 && y >= 230 && y <= 550) {
            afficherp(p, x, y, "Aller sur saturne");
        } 
        else if (x >= 2117 && x <= 2250 && y >= 310 && y <= 450) {
            afficherp(p, x, y, "Aller sur uranus");
        } 
        else if (x >= 2340 && x <= 2470 && y >= 310 && y <= 450) {
            afficherp(p, x, y, "Aller sur neptune");
        } 
        else {
            p.style.display = "none";
        }
    }

    else if(page == "mars"){
        if (x >= 154 - 5 && x <= 154 + 5 && y >= 233 - 5 && y <= 233 + 5) {
            afficherp(p, x, y, "<b>Mont Olympus</b><br> 22km de haut soit 2 fois et demi plus haut que l'everest<br> ce qui en fait la plus haute montagne du système solaire",30,50);
        } 
        else if (x >= 250 - 5 && x <= 250 + 5 && y >= 256 - 5 && y <= 256 + 5) {
            afficherp(p, x, y, "Mont Ascraeus",30,50);
        } 
        else if (x >= 222 - 5 && x <= 222 + 5 && y >= 290 - 5 && y <= 290 + 5) {
            afficherp(p, x, y, "Mont Pavonis",30,50);
        }
        else if (x >= 197 - 5 && x <= 197 + 5 && y >= 324 - 5 && y <= 324 + 5) {
            afficherp(p, x, y, "Mont Arsia",30,50);
        } 
        else if (x >= 294 - 5 && x <= 294 + 5 && y >= 108 - 5 && y <= 108 + 5) {
            afficherp(p, x, y, "Phoenix (E-U)<br>posé le 25 mai 2008",30,50);
        } 
        else {
            p.style.display = "none";
        }
    }
}

function afficherp(element, x, y, text, diffX = 10, diffY = 10) {
    element.innerHTML = text;
    element.style.display = "block";
    element.style.left = (x + diffX - window.screenX) + 'px';
    element.style.top = (y + diffY) + 'px';
}

function opencarre() {
            document.querySelector(".carre").style.display = "flex";
        }

function closecarre() {
            document.querySelector(".carre").style.display = "none";
        }