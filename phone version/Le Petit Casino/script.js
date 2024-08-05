var heureDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

function affichageHeure() {
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    today = new Date();

    annee = today.getFullYear();

    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()];

    jourNumero = today.getDate();

    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];

    deuxChiffres = function(element) {
        if (element < 10) {
            return "0" + element;
        } else {
            return element;
        }
    };

    heures = deuxChiffres(today.getHours());
    minutes = deuxChiffres(today.getMinutes());
    secondes = deuxChiffres(today.getSeconds());

    heureDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;

    setTimeout(affichageHeure, 1000);
}
affichageHeure();
