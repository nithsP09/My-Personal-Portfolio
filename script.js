

//About the effects working of Typewriter

const texts = [
    "Passionate Software Tester",
    "Passionate Software Tester",
    "Passionate Software Tester"
];

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter(){
    if(characterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed);
    } else{
        setTimeout(eraseTest, 1000)
    }
}

function eraseTest(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0,-1);
        setTimeout(eraseTest,50)
    } else{
        textIndex = (textIndex + 1)%texts.length;
        characterIndex = 0;
        setTimeout(typewriter,500)
    }
}

window.onload = typewriter




