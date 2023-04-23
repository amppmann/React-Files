var count = document.querySelectorAll(".drum").length;

for (var i = 0; i < count; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonPress = this.innerHTML;

        makeSound(buttonPress);
        ButtonAnimation(buttonPress);

        
    });
    
    
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key.toLowerCase());
    ButtonAnimation(event.key.toLowerCase())

});



function ButtonAnimation(keyPressed){
    var button=document.querySelector("."+keyPressed);
    button.classList.add("elementScalable");

    setInterval(function(){
        button.classList.remove("elementScalable");

    },200);

}


function makeSound(key) {



    switch (key) {
        case 'w': var crash = new Audio("../sounds/crash.mp3");
            crash.play();
            break;


        case 's': var snare = new Audio("../sounds/snare.mp3");
            snare.play();
            break;

        case 'k': var kick = new Audio("../sounds/kick-bass.mp3");
            kick.play();
            break;

        case 'a': var tom1 = new Audio("../sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'd': var tom2 = new Audio("../sounds/tom-2.mp3");
            tom2.play();
            break;

        case 'j': var tom3 = new Audio("../sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'l': var tom4 = new Audio("../sounds/tom-4.mp3");
            tom4.play();
            break;

        default:console.log("");


    }
}


