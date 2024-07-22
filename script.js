const recetteForm = document.getElementById('recette-form');

recetteForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement par défaut de la page

    const titre = document.getElementById('titre').value;
    const ingredients = document.getElementById('ingredients').value;
    // ... (Récupérer les valeurs des autres champs du formulaire)

    // Validation des données saisies (facultatif)

    // Envoyer les données au serveur (par exemple, avec AJAX)
    // ...

    // Afficher un message de confirmation ou d'erreur
    // ...
});
