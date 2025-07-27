let framelessManifest = [];
let framelessSubtitleEl = null;

function generateFramelessSlides() {
    const wrapper = document.getElementById("framelessSlideshowWrapper");
    if (!wrapper || !window.FRAMELESS_MANIFEST) return;

    wrapper.innerHTML = ""; // Reset

    window.FRAMELESS_MANIFEST.forEach((entry, index) => {
        const slide = document.createElement("div");
        slide.className = "frameless-slide";

        const img = document.createElement("img");
        img.loading = "lazy";
        img.draggable = false;
        img.alt = entry.title || `Slide ${index + 1}`;
        img.src = entry.image;

        // Ne pas bloquer le DOM : toujours ajouter la slide
        img.onerror = function () {
            console.warn(`Image failed to load: ${entry.image}`);
            img.style.visibility = "hidden"; // ou display: none, si tu préfères
            img.alt = "[image manquante]";
        };

        slide.appendChild(img);
        wrapper.appendChild(slide);
    });
}


function initFramelessSubtitles() {
    framelessSubtitleEl = document.getElementById("framelessSubtitle");
    framelessManifest = window.FRAMELESS_MANIFEST || [];

    generateFramelessSlides(); // 👈 AJOUT ICI
    updateFramelessSubtitle(0);
}

function updateFramelessSubtitle(index) {
    if (!framelessManifest.length) return;

    const entry = framelessManifest[index % framelessManifest.length];
    if (entry && framelessSubtitleEl) {
        framelessSubtitleEl.style.opacity = 0;
        setTimeout(() => {
            framelessSubtitleEl.innerHTML = `<strong>${entry.title}</strong><br>${entry.description}`;
            framelessSubtitleEl.style.opacity = 1;
        }, 150);
    }
}
