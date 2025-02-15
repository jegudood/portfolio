document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");
    const activeLine = document.querySelector(".active-line");
    const navList = document.querySelector("nav ul");

    function updateActiveTab(target) {
        links.forEach(link => link.classList.remove("active"));
        target.classList.add("active");

        const targetRect = target.getBoundingClientRect();
        const navListRect = navList.getBoundingClientRect();
        const leftOffset = targetRect.left - navListRect.left;

        activeLine.style.width = `${targetRect.width}px`;
        activeLine.style.transform = `translateX(${leftOffset}px)`;
    }

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.id === targetId) {
                section.classList.add("active");
            }
        });
    }

    function setInitialPosition() {
        const initialActive = document.querySelector("nav a.active") || links[0];
        updateActiveTab(initialActive);
    }

    setInitialPosition();

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            updateActiveTab(link);
            showSection(targetId);
        });
    });

    window.addEventListener("resize", () => {
        const activeLink = document.querySelector("nav a.active");
        if (activeLink) updateActiveTab(activeLink);
    });
});
