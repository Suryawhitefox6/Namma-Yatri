function changeBackground() {
    var body = document.querySelector('body');
    var color = generateRandomColor();
    body.style.backgroundColor = color;
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function zoomIn() {
    var img = event.target;
    img.style.transform = "scale(1.1)";
}

function zoomOut() {
    var img = event.target;
    img.style.transform = "scale(1)";
}

function toggleText() {
    var text = document.getElementById("text");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
