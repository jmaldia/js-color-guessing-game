// HELPER FUNCTIONS
let changeColors = (color) => {
    for(let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
} 

let pickColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

let generateRandomColors = (num) => {
    // make an array 
    let arr = [];
    // repeat num times
    for(let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr
}

let randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

// VARIABLES
let colors = generateRandomColors(6)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let numSquares = 6;

// MAIN FUNCTION
// difficulty options
easyBtn.addEventListener("click", function() {
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

// reset
resetButton.addEventListener("click", function() {

    resetButton.textContent = "New Colors"
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick a random color from the array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "#232323";
})

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
            message.textContent = "Correct! You Won!";
            h1.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again.";
        }
    });
}