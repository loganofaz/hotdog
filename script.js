var links = document.querySelectorAll("a");
var colors = ["#7200F5", "#0065FF", "#00F5BE", "#99FF00", "#F50043"];
var pageTitle = document.querySelector('h1 a');
var currentTitle = pageTitle.innerHTML;
var domTitle = document.title;
var clickedColor = '';
pageTitle.innerHTML = currentTitle + ':' + domTitle;


for (var l = 0; l < links.length; l++) {
    (function(l) {
        links[l].addEventListener("mouseenter", function() {
            changeColor(links[l]);
        });
        links[l].addEventListener("mouseleave", function() {
            resetColor(links[l]);
        });
        if (domTitle = links[l].innerHTML) {
            links[l].style.color = clickedColor;
        }
    })(l);
}

function changeColor(element) {
    var colorsLength = colors.length;
    var colorIndex = Math.floor(Math.random() * colorsLength);
    element.style.color = colors[colorIndex];
    clickedColor = colors[colorIndex];
}

function resetColor(element) {
    element.style.color = "#000000";
}

