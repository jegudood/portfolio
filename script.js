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
            if (section.classList.contains('active')) {
                section.classList.add('fade-out');
                setTimeout(() => {
                    section.classList.remove('active', 'fade-out');
                }, 400); // 👈 Match this with CSS transition duration if you change it
            }
            
            if (section.id === targetId) {
                setTimeout(() => {
                    section.classList.add('active');
                }, 400); // 👈 Match this with CSS transition duration if you change it
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
