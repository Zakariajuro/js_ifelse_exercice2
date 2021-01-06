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

// let phrase = prompt("indiquez une phrase de votre choix.")
// let esti = prompt("A combien estimé vous le nombre de caractère de votre phrase ?")

// if (phrase.length == esti) {
//     alert("BIEN JOUE !! bonne réponse!");
    
// } else {
//     alert("désolé mauvaise réponse");
//     let result = phrase.length - esti
//     alert(Math.sign(result));
//     alert(`Incorrect tu étais à ${result} unités de la bonne réponse !`);
// }


// EXERCICE 5

// let prenom = prompt("quel est votre prenom ?");

// if (prenom == "") {
//     alert("Attention vous devez remplir le champs ci-dessous");
//     prenom = prompt("quel est votre prenom ?");
//     console.log(prenom);
// }

// EXERCICE 6

// let txt;
// let luxe = 'luxe';
// let normal = 'normale'
// let conf = confirm("Voulez-vous vous abonner ?");
// if (conf == true) {
//   txt = "Appuyer sur OK";
//   let repform = prompt(`quel formule voulez-vous choisir ? luxe ou normale ?`);
//   if (repform == "luxe") {
//     alert("Félicitation vous avez choisis la formule Luxe !");
//   } else if (repform == "normale") {
//       alert("Merci pour votre abonnement.");
//   }  else if (repform == "") {
//       let conf2 = confirm("étes vous certain ?");
//       if (conf2 == true) {
//         txt = "Appuyer sur OK";
//         alert("OK c'est dommage.");
//       } else {
//         txt = "Vous avez appuyé sur Annuler";
//         prompt(`quel formule voulez-vous choisir ? luxe ou normale ?`);
//       }
//   }
// } else {
//     txt = "Vous avez appuyé sur Annuler";
//     alert("Merci a bientôt !")
// }

// EXERCICE 7

// let quest1 = prompt("quel est le personnag qui est la référence en manga ?");
// let quest2 = prompt("quel est le manga avec la meilleur aventure ?");

// let reponse = "sangoku";
// let reponse2 = "one piece";

// // reponse = quest1;
// // reponse2 = quest2;

// if (quest1 == reponse && quest2 == reponse2) {
//     alert("Bien jouer !!!")
// } else if (quest1 == reponse) {
//     alert(`Mince tu y étais presque, tu a eu faux a la response -${reponse}- !`);
// } else if (quest2 == reponse2) {
//     alert(`Mince tu y étais presque, tu a eu faux a la response - ${reponse2} - !`);
// } else {
//     alert("désole tu fera mieux la prochaine fois !")
// }


// EXERCICE 8

// let age = prompt("quel est votre âge ?");

// if (age == 18) {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant")
// } else if (age > 18 && age < 99) {
//     alert("vous êtes majeur, vous pouvez réserver")
// } else if (age <= 0) {
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher")
// } else if (age >= 100) {
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
// } else {
//     alert("vous êtes mineur, l’accès est réservé aux grands")
// }


// EXERCICE 9

let quest1 = prompt("est-ce que vous êtes riche ?");
let quest2 = prompt("voulez-vous partir en vacance ?");
let quest3 = prompt("est-ce que vous avez un chat ?");

if (quest2 == "non" ) {
    alert("pas de problème, ne partez pas en vacance")
} else if (quest1 == "non" || quest3 == "oui") {
    alert("Même si vous le voulez, vous ne pouvez pas partir.");
} else if (quest1 == "oui" && quest3 == "non") {
    alert("Vous pourriez partir en vacance si vous le voulez");
} else if (quest1 == "oui" && quest2 == oui && quest3 == "non") {
    alert("Tout est parfait, partez en vacance !");
} else {
    alert("tant pis")
} 

if (vacances == "oui" ) {
    if (quest1 == "non" || quest3 == "oui") {
        alert("Meme si vous voulez, vous ne pouvez pas partir");

    } else if (quest1 == "oui" && quest3 == "non") {
        alert("Tout est parfait, partez en vacances");

    } else if (quest1 == "oui" || quest3 == "non") {
        alert("InchAllah, t'es riche sinon tu reste a la dar a fou")
    }
}







