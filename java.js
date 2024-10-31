// Sélection du formulaire et du message de confirmation
const form = document.getElementById('registerForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Ajout d'un écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Affiche le message de confirmation
    confirmationMessage.style.display = 'block';

    // Optionnel : Réinitialise les champs du formulaire
    form.reset();
});