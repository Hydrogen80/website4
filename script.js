/*let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks; 
}*/


var canvas=document.getElementById('xrwma_canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle="white";
ctx.font="50px Roboto";
ctx.fillText("National",50,80,250);
ctx.fillText("Hellenic Team", 50,135,400);
ctx.fill();
