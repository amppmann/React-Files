

function getRandom() {


    var randomNumber1 = Math.floor(Math.random() * 6 + 1)
    var randomNumber2 = Math.floor(Math.random() * 6 + 1)
    console.log("Dice 1 : " + randomNumber1);
    console.log("Dice 2 : " + randomNumber2);



    var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Tie!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 won...";
        
    } else {
        document.querySelector("h1").innerHTML = "Player 2 won...";

    }
}