function f(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    var pointX = 609;
    var pointY = 380;

    if (x >= pointX - 20 && x <= pointX + 20 && y >= pointY - 20 && y <= pointY + 20) {
        window.location.href = "Mercure.html";
    }
}