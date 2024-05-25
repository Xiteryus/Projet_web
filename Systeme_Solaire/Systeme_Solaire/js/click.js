function f(event) {
    var x = event.offsetX;
    var y = event.offsetY;



    if (x >= 609 - 25 && x <= 609 - 10 && y >= 380 - 10 && y <= 380 + 10) {
        
        window.location.href = "Mercure.html";
    }

    if (x >= 720 - 20 && x <= 720 + 20 && y >= 380 - 20 && y <= 380 + 20) {
        window.location.href = "Venus.html";
    }

    if (x >= 900 - 35 && x <= 900 + 5 && y >= 380 - 20 && y <= 380 + 20) {
        window.location.href = "Terre.html";
    }

    if (x >= 1050 - 23 && x <= 1050  && y >= 380 - 10 && y <= 380 + 10) {
        window.location.href = "mars.html";
    }
}