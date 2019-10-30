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
    return arr;
}

let randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

let setupModeButtons = () => {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[0].classList.remove("selected");
            this.classList.add("selected");
            numSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        })
    }
}

let setupSquares = () => {
    for (let i = 0; i < colors.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            let clickedColor = this.style.backgroundColor;
    
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                message.textContent = "CORRECT! YOU WON!!";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?"
                message.style.color = "green";
                message.style.fontWeight = "800";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again.";
                message.style.color = "red";
            }
        });
    }
}

let reset = () => {
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick a random color from the array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";

        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    message.textContent = "";
}

// VARIABLES
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor;
let colorDisplay = document.getElementById("colorDisplay");
let message = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");


// MAIN FUNCTION
let init = () => {
    setupModeButtons();
    setupSquares();
    reset();
}

resetButton.addEventListener("click", function() {
    reset();
});

init();







// REFACTORED CODE
// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.toggle("selected");
//     hardBtn.classList.toggle("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.toggle("selected");
//     hardBtn.classList.toggle("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

// reset