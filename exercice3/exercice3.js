/* Modifier le code ci dessous pour réaliser l'exercice */
let monDiv = document.getElementById('monDiv');
monDiv.style.width = '10rem';
monDiv.style.height = '10rem';
monDiv.style.backgroundColor = "blue";

let x = 10;
let y = 10;

if(x === y) {
    x = x + 3;
}
else {
    monDiv.style.backgroundColor = "red";
}

