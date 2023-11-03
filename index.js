function check() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

function player1(){
    
    if (randomNumber1 === 1){
        return document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    } else if (randomNumber1 === 2){
        return document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    } else if (randomNumber1 === 3){
        return document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    } else if (randomNumber1 === 4){
        return document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    } else if (randomNumber1 === 5){
        return document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    } else {
        return document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
}
player1()

function player2(){
    
    if (randomNumber2 === 1){
        return document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    } else if (randomNumber2 === 2){
        return document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    } else if (randomNumber2 === 3){
        return document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    } else if (randomNumber2 === 4){
        return document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    } else if (randomNumber2 === 5){
        return document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    } else {
        return document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
}
player2()

function winner(){
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "<h1>&#x1F6A9 Player 1 Winner!</h1>";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "<h1>Player 2 Winner! &#x1F6A9</h1>";
    } else {
        document.querySelector("h1").innerHTML = "<h1>&#x1F6A9 Draw! &#x1F6A9</h1>";
    }
}
winner()
}