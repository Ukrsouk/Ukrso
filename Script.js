// Fonction pour ouvrir la modale avec les détails du projet
function openProject(projectId) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImages = document.getElementById("modalImages");
    const modalDescription = document.getElementById("modalDescription");

    // Exemple de données pour chaque projet (à adapter avec vos projets)
    const projects = {
        projet1: {
            title: "Projet 1",
            images: ["images/projet1-1.jpg", "images/projet1-2.jpg"],
            description: "Description détaillée du Projet 1."
        },
        projet2: {
            title: "Projet 2",
            images: ["images/projet2-1.jpg", "images/projet2-2.jpg"],
            description: "Description détaillée du Projet 2."
        }
    };

    const project = projects[projectId];

    // Remplir la modale avec les données du projet
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalImages.innerHTML = project.images.map(img => `<img src="${img}" alt="${project.title}">`).join("");

    // Afficher la modale
    modal.style.display = "block";
}

// Fonction pour fermer la modale
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Fermer la modale si on clique en dehors de celle-ci
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
