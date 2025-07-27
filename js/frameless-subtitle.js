let framelessManifest = [];
let framelessSubtitleEl = null;

function generateFramelessSlides() {
    const wrapper = document.getElementById("framelessSlideshowWrapper");
    if (!wrapper || !window.FRAMELESS_MANIFEST) return;

    wrapper.innerHTML = ""; // Clear existing content

    window.FRAMELESS_MANIFEST.forEach((entry, index) => {
        const slide = document.createElement("div");
        slide.className = "frameless-slide";

        const img = document.createElement("img");
        img.src = entry.image;
        img.alt = entry.title || `Slide ${index + 1}`;
        img.draggable = false;

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
