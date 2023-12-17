var screen = document.getElementById("scrr");
var ctx = screen.getContext('2d');

//konfuguracja układu osi X,Y

ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = 'high';

ctx.strokeStyle = 'white';
ctx.lineWidth = 0.5;
ctx.lineJoin = 'round'; 
ctx.lineCap = 'round'; 

var canvasWidth = screen.width;
var canvasHeight = screen.height;
var YCenter =  canvasHeight/ 2;
var fazaSinusoidy, fraquency,amplitude
//ctx.beginPath();
/*
ctx.moveTo(0, canvasHeight / 2); 
ctx.lineTo(canvasWidth, canvasHeight / 2); 
ctx.moveTo(canvasWidth/ 2,0)
ctx.lineTo(canvasWidth/ 2, canvasHeight )
ctx.strokeStyle = "white";
ctx.stroke();
*/

// start symulacji
function drawAplitude(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(0, canvasHeight / 2); 
    ctx.lineTo(canvasWidth, canvasHeight / 2); 
    ctx.moveTo(canvasWidth/ 2,0)
    ctx.lineTo(canvasWidth/ 2, canvasHeight )
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, YCenter);

    for (var i = 0; i < canvasWidth; i++){
        var y = YCenter  + amplitude * Math.sin(fraquency *i +fazaSinusoidy);
        ctx.lineTo(i,y);
    }
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    //fazaSinusoidy += 0.1;

}

function start_simulation(){
    fazaSinusoidy = parseFloat(document.getElementById("fazaSinusoidy").value);
    fraquency = parseFloat(document.getElementById("fraquency").value);
    amplitude = parseFloat(document.getElementById("amplituda").value);
    
    animate();
}
function animate(){
    drawAplitude(fazaSinusoidy, fraquency,amplitude);
    fazaSinusoidy+=0.1;
    requestAnimationFrame(animate);
}