document.getElementById("headerButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("headerText").style.color = getRandomColor();
});

document.getElementById("textButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("sampleText").style.color = getRandomColor();
});

document.getElementById("backgroundButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".colorForm").style.backgroundColor = getRandomColor();
});

document.getElementById("borderButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".colorForm").style.borderColor = getRandomColor();
});

document.getElementById("buttonButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = getRandomColor();
    });
});


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
