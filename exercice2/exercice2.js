/* Modifier le code ci dessous pour réaliser l'exercice */

let x = prompt('x ?');
let y = prompt('y ?');

if (x > y) {
    document.getElementById('monDiv').innerHTML = "La variable x est supérieure à la variable y";
}

else{
    document.getElementById('monDiv').innerHTML = "La variable x n'est pas supérieure à la variable y";
}

