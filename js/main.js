let changeColor = () => {
    const updatedLeftColor = document.getElementById("left-color");
    const updatedRightColor = document.getElementById("right-color");
    const leftColorValue = document.getElementById("leftColorValue");
    const rightColorValue = document.getElementById("rightColorValue");
    let body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${updatedLeftColor.value}, ${updatedRightColor.value})`;
    leftColorValue.innerText = updatedLeftColor.value;
    rightColorValue.innerText = updatedRightColor.value;
}

const leftInput = document.getElementById("left-color");
const rightInput = document.getElementById("right-color");

leftInput.addEventListener("input", changeColor);
rightInput.addEventListener("input", changeColor);