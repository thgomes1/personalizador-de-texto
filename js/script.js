let texto = document.getElementById("result");
let rights = document.getElementById("rightsContent");
let main = document.getElementById("mainContainer");
let byContent = document.getElementById("footerByContent");

//---------RIGHTS--------//
onload = function () {
    byContent.addEventListener("mouseover", onOver);
};

function onOver() {
    main.style.filter = "blur(5px)";
    rights.style.opacity = "100%";
    rights.style.visibility = "visible";
    byContent.addEventListener("mouseleave", outOver);
}
function outOver() {
    main.style.filter = "none";
    rights.style.opacity = "0%";
    rights.style.visibility = "hidden";
}

//---------RESULT--------//
function changeResult(input) {
    texto.innerText = document.getElementById("textChange");
    texto.style.color = "white";
    texto.innerText = input.value;
}

//---------BUTTONS--------//
function smallFont() {
    texto.style.fontSize = "10px";
}
function defaultText() {
    texto.innerText = document.getElementById("textChange").value;
    texto.style.fontSize = "2rem";
    texto.style.textTransform = "initial";
    texto.style.fontWeight = "normal";
    texto.style.color = "white";
    texto.style.fontFamily = "'Rubik', sans-serif";
}
function biggerFont() {
    texto.style.fontSize = "21px";
}

function lowerCase() {
    texto.style.textTransform = "lowercase";
}
function upperCase() {
    texto.style.textTransform = "uppercase";
}
function boldFont() {
    texto.style.fontWeight = "bold";
}

//---------BUTTONS1--------//
function fontOne() {
    texto.style.fontFamily = "nexaLight";
}
function fontTwo() {
    texto.style.fontFamily = "'Rubik', sans-serif";
}
function fontThree() {
    texto.style.fontFamily = "nexaBold";
}
function fontFour() {
    texto.style.fontFamily = "Arial, Helvetica, sans-serif";
}

function colorRed() {
    texto.style.color = "red";
}
function colorBlue() {
    texto.style.color = "blue";
}
function colorGreen() {
    texto.style.color = "green";
}
function colorYellow() {
    texto.style.color = "yellow";
}
