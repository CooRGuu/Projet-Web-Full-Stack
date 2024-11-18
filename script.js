// Ce script affiche une alerte quand le formulaire est soumis.
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    alert("Merci pour votre message !");
});