 // DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
rectangle(80, 260, 460, 80, "fill");

// Filled Triangle for Hair
Triangle(180, 80, 140, 100, 220, 100, "fill");

// Filled Triangle for Hair
Triangle(340, 80, 300, 100, 380, 100, "fill");

// Outlined Triangle for Hair
Triangle(260, 80, 220, 100, 300, 100, "stroke");

// Outlined Triangle for Hair
Triangle(420, 80, 380, 100, 460, 100, "stroke");

// Filled Triangle for Neck
Triangle(300, 200, 220, 600, 380, 600, "fill");

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rectangle(100, 100, 400, 400, "fill");

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, "fill");

// Filled Circle for Right Eye Socket
circle(400, 250, 50, "fill");

// Rectangle for Mouth
rectangle(200, 350, 200, 60, "fill");

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380, "stroke");

// First Vertical Line for Teeth
line(250, 350, 250, 410, "stroke");

// Second Vertical Line for Teeth
line(300, 350, 300, 410, "stroke");

// Third Vertical Line for Teeth
line(350, 350, 350, 410, "stroke");

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(200, 250, 30, "fill");

// Filled Circle for Right Eye
circle(400, 250, 10, "fill");

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, "stroke");

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, "stroke");

// Line for Left Eyebrow
ctx.lineWidth = 2;
line(150, 180, 250, 180, "stroke");

// Line for Right Eyebrow
line(350, 160, 450, 180, "stroke");

// Outlined Triangle for Nose
Triangle(300, 280, 320, 320, 280, 320, "stroke", "close");

// Eye patch
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(200, 200, 100, 0, 1 * Math.PI);
ctx.fill();

// Headband
ctx.fillStyle = "red";
rectangle(100, 100, 400, 40, "fill");

// Goatee
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(300, 440, 50, 0, 1 * Math.PI);
ctx.fill();

// Helper functions
function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

function rectangle(x, y, w, h, type) {
  ctx.beginPath();
  ctx.fillRect(x, y, w, h);
  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

function line(x1, y1, x2, y2, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

function Triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();

  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}
