// Get the ball element
var ball = document.getElementById("ball");

// Set initial position
var xPos = window.innerWidth / 2;
var yPos = window.innerHeight / 2;

// Set speed and direction
var xSpeed = 2;
var ySpeed = 2;

// Function to move the ball
function moveBall() {
    // Update ball position
    xPos += xSpeed;
    yPos += ySpeed;

    // Check boundaries and reverse direction if needed
    if (xPos <= 0 || xPos >= window.innerWidth - 50) {
        xSpeed = -xSpeed;
    }
    if (yPos <= 0 || yPos >= window.innerHeight - 50) {
        ySpeed = -ySpeed;
    }

    // Set new ball position
    ball.style.left = xPos + "px";
    ball.style.top = yPos + "px";
}

// Update the ball position every 10 milliseconds
setInterval(moveBall, 10);
xSpeed =4;
ySpeed = -2;
