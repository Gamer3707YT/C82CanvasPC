var MouseEvent = "empty";
var lastposX , lastposY ;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
LineWidth = 1 ;
 
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color = document.getElementById("color").value;
LineWidth = document.getElementById("linewd").value;
MouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    MouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    MouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentPosX = e.clientX - canvas.offsetLeft;
    currentPosY = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = LineWidth;
        console.log("Last Position of X and Y Coordinates = ");
        console.log("x =" + lastposX + "y = " + lastposY);
        ctx.moveTo(lastposX , lastposY);
        console.log("Current Position of X and Y Coordinates = ");
        console.log("x =" + currentPosX + "y = " + currentPosY);
        ctx.lineTo(currentPosX , currentPosY);
        ctx.stroke();
       
    }
    lastposX = currentPosX;
    lastposY = currentPosY;
    
}

function ClearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}