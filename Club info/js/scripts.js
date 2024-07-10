// Créer un évènement lorsque on clique sur le bouton du menu 
document.getElementById("menu-button").addEventListener("click", function(event) {
    event.stopPropagation();
    document.getElementById("menu").classList.toggle("show");
});

// Ajoute un écouteur d'événements pour les clics sur le document
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuButton = document.getElementById("menu-button");

    // Si le menu est affiché et que le clic n'est ni sur le menu ni sur le bouton du menu
    if (menu.classList.contains("show") && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("show");
    }
});
