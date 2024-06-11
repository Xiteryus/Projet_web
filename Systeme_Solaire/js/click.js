function f(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    if (x >= 0 && x <= 400 && y >= 0 && y <= 815) {
        window.location.href = "soleil.html";
    }

    if (x >= 580 && x <= 600 && y >= 370 && y <= 390) {
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
    
    if (x >= 2754 && x <= 2762 && y >= 375 && y <= 385) {
        window.location.href = "pluton.html";
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
        else if (x >= 2754 && x <= 2762 && y >= 375 && y <= 385) {
            afficherp(p, x, y, "Aller sur pluton");
        } 
        else {
            p.style.display = "none";
        }
    }

    else if(page == "Mercure"){
        if (x >= 42 - 5 && x <= 42 + 5 && y >= 413 - 5 && y <= 413 + 5) {
            afficherp(p, x, y, "Basho",30,50);
        }
        else if (x >= 1096 - 5 && x <= 1096 + 5 && y >= 338 - 5 && y <= 338 + 5) {
            afficherp(p, x, y, "Eminescu",30,50);
        }
        else if (x >= 654 - 20 && x <= 654 + 20 && y >= 353 - 20 && y <= 353 + 20) {
            afficherp(p, x, y, "Debussy",30,50);
        }
        else if (x >= 381 - 5 && x <= 381 + 5 && y >= 265 - 5 && y <= 265 + 5) {
            afficherp(p, x, y, "Lermontov",30,50);
        }
        else if (x >= 391 - 5 && x <= 391 + 5 && y >= 387 - 5 && y <= 387 + 5) {
            afficherp(p, x, y, "Murasaki",30,50);
        }
        else {
            p.style.display = "none";
        }
    }
    else if(page == "venus"){
        if (x >= 586 - 15 && x <= 586 + 15 && y >= 515 - 15 && y <= 515 + 15) {
            afficherp(p, x, y, "Maxwell montes",30,50);
        }
        else if (x >= 738 - 5 && x <= 738 + 5 && y >= 361 - 5 && y <= 361 + 5) {
            afficherp(p, x, y, "Var Mons",30,50);
        }
        else if (x >= 723 - 20 && x <= 723 + 20 && y >= 386 - 20 && y <= 386 + 20) {
            afficherp(p, x, y, "Venera 14",30,50);
        }
        else if (x >= 288 - 15 && x <= 288 + 15 && y >= 281 - 15 && y <= 281 + 15) {
            afficherp(p, x, y, "Ovda Regio",30,50);
        }
        else if (x >= 174 - 15 && x <= 174 + 15 && y >= 273 - 15 && y <= 273 + 15) {
            afficherp(p, x, y, "Thetis Regio",30,50);
        }
        else {
            p.style.display = "none";
        }
    }
    else if(page == "terre"){
        if (x >= 626 - 15 && x <= 626 + 15 && y >= 146 - 15 && y <= 146 + 15) {
            afficherp(p, x, y, "Alpes - Mont Blanc",30,50);
        }
        else if (x >= 846 - 5 && x <= 846 + 5 && y >= 180 - 5 && y <= 180 + 5) {
            afficherp(p, x, y, "Himalaya - Everest ",30,50);
        }
        else if (x >= 1062 - 20 && x <= 1062 + 20 && y >= 264 - 20 && y <= 264 + 20) {
            afficherp(p, x, y, "Fosse des Mariannes",30,50);
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
    else if(page == "jupiter"){
        if (x >= 434 -20 && x <= 434+20 && y >= 364-20 && y <= 364+20) {
            afficherp(p, x, y, "<b>Grande Tache rouge</b>",30,50);
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

function opencaroussel() {
            document.querySelector(".carre-caroussel").style.display = "flex";
        }

function closecaroussel() {
            document.querySelector(".carre-caroussel").style.display = "none";
        }



//-----------------------------

const imagesSoleil = [
    {src: '../img/Soleil1.jpeg', legende: 'Soleil qui sourit' },
    {src: '../img/Soleil2.jpg', legende: 'Eruption solaire' },
    {src: '../img/Soleil3.jpg', legende: 'Le Soleil vu par le Solar Orbiter' },
    {src:'../img/Soleil4.webp', legende :'Les couches du Soleil'},
    {src:'../img/Soleil5.jpg', legende: 'Photo du Soleil avec 90000 images'}
];
const imagesMercure =[
    {src:'../img/Mercure1.jpeg',legende:'Mercure'},
    {src:'../img/Mercure2.jpeg',legende:'Mercure'},
    {src:'../img/Mercure3.png',legende:'Les couches de Mercure'},
];
const imagesVenus =[
    {src:'../img/Venus1.jpg',legende:'Surface de Vénus est cachée par son épaisse atmosphère'},
    {src:'../img/Venus2.jpeg',legende:'Venus'},
    {src:'../img/Venus3.jpg',legende:'Vue reconstituée du volcan vénusien Maat Mons à partir des images radar prises par la sonde Magellan en 1996.'},
    {src:'../img/Venus4.webp',legende:'Photo colorisée de la surface de Vénus. Elle a été prise par le vaisseau spatial russe Venera 13 le 1er mars 1982.'},
    {src:'../img/Venus5.jpg',legende:'Les couches de Ve,us'}];
const imagesTerre =[
    {src:'../img/Terre1.jpeg',legende:"Terre depuis l'espace"},
    {src:'../img/Terre2.webp',legende:'Terre vu depuis lune'},
    {src:'../img/Terre3.jpg',legende:"Terre vu depuis l'ISS"},
    {src:'../img/Terre4.png',legende:'Les couches de la Terre'}
];
const imagesMars =[
    {src:'../img/Mars1.jpeg',legende:'Mars'},
    {src:'../img/Mars2.jpeg',legende:'Surface de Mars'},
    {src:'../img/Mars3.jpeg',legende:'Surface de Mars et le rover MSL Curiosity'},
    {src:'../img/Mars4.jpeg',legende:'Lune de Mars : Phobos'},
    {src:'../img/Mars5.jpg',legende:'Les couches de Mars'}
];
const imagesCeres =[
    {src:'../img/Ceres1.jpg',legende:'Ceres'},
    {src:'../img/Ceres2.jpeg',legende:'Les couches de Ceres'},

];
const imagesJupiter = [
    {src: '../img/Jupiter1.webp', legende: 'Nuage Jupiter' },
    {src: '../img/jupiter2.webp', legende: 'Nuage Jupiter' },
    {src: '../img/jupiter3.webp', legende: 'Nuage Jupiter' },
    {src:'../img/jupiter4.jpg', legende :'Satelite de Jupiter : Europe'},
    {src:'../img/Jupiter5.webp', legende: 'Anneaux de Jupiter vus par Voyager 2'}
];
const imagesSaturne = [
    {src: '../img/saturne1.jpg', legende: 'Photo de Saturne' },
    {src: '../img/saturne2.webp', legende: 'Anneaux de Saturne' },
    {src: '../img/saturne3.jpg', legende: 'Saturne pris par James Webb' },
    {src:'../img/saturne4.webp', legende :'La lune Titan devant Saturne'},
    {src:'../img/saturne5.webp', legende: 'Saturne pris par Cassini'}
];
const imagesUranus = [
    {src: '../img/uranus1.jpg', legende: "Vrai couleur d'Uranus" },
    {src: '../img/uranus2.webp', legende: 'Tempete phenomenale sur Uranus' },
    {src: '../img/uranus3.webp', legende: 'Uranus et ces Anneaux pris par James Webb' },
    {src:'../img/uranus4.jpg', legende :"Lune Ariel d'Uranus"},
    {src:'../img/uranus5.jpg', legende: 'Uranus pris par Hubble'}
];

//-----------------------------

let imagesPage;
let currentIndex = 0;

function selectImageSet() {
    const page = document.body.getAttribute('data-page');
    if (page === 'soleil') {
        imagesPage = imagesSoleil;
    } 
    else if (page === 'Mercure') {
        imagesPage = imagesMercure;
    }
    else if (page === 'Venus') {
        imagesPage = imagesVenus;
    }
    else if (page === 'Terre') {
        imagesPage = imagesTerre;
    }
    else if (page === 'mars') {
        imagesPage = imagesMars;
    }
    else if (page === 'ceres') {
        imagesPage = imagesCeres;
    }


    else if (page === 'jupiter') {
        imagesPage = imagesJupiter;
    }
    else if (page === 'saturne') {
        imagesPage = imagesSaturne;
    }
    else if (page === 'uranus') {
        imagesPage = imagesUranus;
    }

}

function updateCaroussel() {
    document.getElementById('photo-caroussel').src = imagesPage[currentIndex].src;
    document.getElementById('photo-legende').innerText = imagesPage[currentIndex].legende;
    document.getElementById('precedent-btn').disabled = currentIndex === 0;
    document.getElementById('suivant-btn').disabled = currentIndex === imagesPage.length - 1;
}

function prochaineImage() {
    currentIndex = (currentIndex + 1) % imagesPage.length;
    updateCaroussel();
}

function precedenteImage() {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1) % imagesPage.length;
        updateCaroussel();
    }
}

window.onload = function() {
    selectImageSet();
    updateCaroussel(0);
};