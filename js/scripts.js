let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];
let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");
let message = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < colors.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            message.textContent = "Correct! You Won!"
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again.";
        }
    });
}