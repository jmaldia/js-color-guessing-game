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

let colors = generateRandomColors(6)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
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
            message.textContent = "Correct! You Won!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again.";
        }
    });
}