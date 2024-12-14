// Afficher la boîte modale d'inscription
document.getElementById("signup-btn").addEventListener("click", function () {
    document.getElementById("modal").classList.remove("hidden");
});

// Afficher les détails du club
document.getElementById("details-btn").addEventListener("click", function () {
    document.getElementById("details-modal").classList.remove("hidden");
});

// Afficher les contacts
document.getElementById("contact-btn").addEventListener("click", function () {
    document.getElementById("contact-modal").classList.remove("hidden");
});

// Fermer les boîtes modales
document.querySelectorAll(".close").forEach(button => {
    button.addEventListener("click", function () {
        button.parentElement.parentElement.classList.add("hidden");
    });
});
