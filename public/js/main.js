// EXERCICE 1 

// let nombre1 = prompt("indiquez un nombre");
// let nombre2 = prompt("indiquez un second nombres");

// console.log(nombre1 == nombre2);
// alert(nombre1 == nombre2);
// alert(`le nombre ${nombre1} et  le nombre ${nombre2} sont-il égaux ? : ${nombre1 == nombre2}`)

// EXERCICE 2

// let nombre1 = prompt("indiquez un nombre");
// let nombre2 = prompt("indiquez un second nombres");

// alert(nombre1 < nombre2);
// alert(`le nombre ${nombre1} est-il plus petit que le nombre ${nombre2} ? : ${nombre1 < nombre2}`);


// EXERCICE 3

// let nombre1 = parseInt(prompt("indiquez un nombre"));
// let nombre2 = parseInt(prompt("indiquez un second nombres"));
// let nombre3 = prompt("indiquez un troisieme nombres");

// let add = nombre1+nombre2
// alert(add)

// alert(add < nombre3);
// alert(`La somme du nombre ${nombre1} + le nombre ${nombre2} est-elle plus grande que le nombre ${nombre3} ? : ${add > nombre3}`);


// EXERCICE 4

let phrase = prompt("indiquez une phrase de votre choix.")
let esti = prompt("A combien estimé vous le nombre de caractère de votre phrase ?")

if (phrase.length == esti) {
    alert("BIEN JOUE !! bonne réponse!");
    
} else {
    alert("désolé mauvaise réponse");
    let result = phrase.length - esti
    alert(`Incorrect tu étais à ${result} unités de la bonne réponse !`)
}