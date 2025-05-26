document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar ul li a"); // Enlaces de la sidebar
    const sections = document.querySelectorAll("section"); // Todas las secciones

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remover la clase 'active' de todas las secciones
            sections.forEach(section => section.classList.remove("active"));

            // Obtener el ID de la sección a mostrar
            const targetId = link.getAttribute("href").substring(1); // Obtiene el ID sin el '#'
            const targetSection = document.getElementById(targetId);

            // Agregar la clase 'active' a la sección correspondiente
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});