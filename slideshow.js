// Frameless Slideshow Logic (extracted from index.html)
// This keeps the original behavior, just moved into its own file.
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let framelessSlideshowTimer;
        const framelessWrapper = document.getElementById('framelessSlideshowWrapper');
        let framelessSlides = Array.from(document.querySelectorAll('.frameless-slide'));
        const framelessDotsContainer = document.getElementById('framelessSlideshowDots');
        const framelessNavPrev = document.getElementById('framelessNavPrev');
        const framelessNavNext = document.getElementById('framelessNavNext');
        const framelessSlideshowContainer = document.getElementById('framelessSlideshowContainer');

        let TotalSlides = framelessSlides.length;
        let framelessSlideIndex = TotalSlides * 10; // prevent negative values

        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;

        // Build dots for original slides only
        for (let i = 0; i < TotalSlides; i++) {
            const dot = document.createElement("span");
            dot.classList.add("frameless-dot");
            dot.addEventListener('click', () => framelessCurrentSlide(i));
            framelessDotsContainer.appendChild(dot);
        }

        // Prevent default image drag
        framelessWrapper.addEventListener('dragstart', (e) => { e.preventDefault(); });

        const setSlideClasses = () => {
            updateSlidePositions();
            let frameIndex = ((framelessSlideIndex) + TotalSlides) % TotalSlides;
            framelessSlides.forEach((slide, index) => {
                slide.classList.remove('active', 'side-1', 'side-2', 'side-3');
                const diff = index - frameIndex;
                const absDiff = Math.abs(diff);
                if (absDiff === 0) slide.classList.add('active');
                else if (absDiff === 1 || absDiff === TotalSlides - 1) slide.classList.add('side-1');
                else if (absDiff === 2 || absDiff === TotalSlides - 2) slide.classList.add('side-2');
                else if (absDiff >= 3 || absDiff === TotalSlides - 3) slide.classList.add('side-3');
            });
            let currentOriginalIndex = (frameIndex);
            document.querySelectorAll('.frameless-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentOriginalIndex);
            });
        };

        function setImageYOffset(index, yOffset) {
            const slide = framelessSlides[index]; if (!slide) return;
            const img = slide.querySelector('img'); if (!img) return;
            img.style.transform = `translateY(${yOffset}px)`;
        }

        function getImageOverflowY(index) {
            const slide = framelessSlides[index]; if (!slide) return 0;
            const img = slide.querySelector('img'); if (!img || !img.complete) return 0;
            const containerHeight = slide.offsetHeight;
            const naturalHeight = img.naturalHeight;
            const overflow = containerHeight - naturalHeight;
            return overflow;
        }

        let toY = 0;
        let last = -1;
        function updateVerticalAnimation() {
            const total = framelessSlides.length;
            const frameIndex = framelessSlideIndex % total;
            const overflowY = getImageOverflowY(frameIndex);
            if (last !== frameIndex) {
                last = frameIndex;
                if (overflowY >= 0) toY = overflowY; else toY = overflowY;
                if (Math.abs(overflowY) < 20) toY = 0;
            }
            if (toY < -1) toY += 0.25;
            if (toY > 1) toY -= 0.25;
            if (overflowY >= 0) {
                setImageYOffset(frameIndex, toY);
            } else {
                let posY = toY;
                if (posY > overflowY) posY = overflowY;
                if (posY < 0) posY = 0;
                setImageYOffset(frameIndex, toY);
            }
        }
        function loopVerticalAnimation() {
            updateVerticalAnimation();
            requestAnimationFrame(loopVerticalAnimation);
        }
        requestAnimationFrame(loopVerticalAnimation);

        const applyTransform = (smooth = true, duration = 600) => {
            currentTranslate = -framelessSlideIndex * framelessSlides[0].offsetWidth;
            framelessWrapper.style.transitionDuration = `${duration}ms`;
            if (smooth) framelessWrapper.classList.remove('no-transition');
            else framelessWrapper.classList.add('no-transition');
            framelessWrapper.style.transform = `translateX(${currentTranslate}px)`;
        };

        const framelessShowSlides = (targetIndex, smooth = true) => {
            clearTimeout(framelessSlideshowTimer);
            const oldIndex = framelessSlideIndex;
            const slidesMoved = Math.abs(targetIndex - oldIndex);
            const dynamicDuration = Math.max(300, 600 - (slidesMoved * 50));
            const actualTransitionDuration = Math.min(600, Math.max(300, dynamicDuration));
            framelessSlideIndex = targetIndex;
            setSlideClasses();
            applyTransform(true, actualTransitionDuration);
            if (typeof updateFramelessSubtitle === 'function') {
                updateFramelessSubtitle(framelessSlideIndex);
            }
            framelessSlideshowTimer = setTimeout(() => {
                framelessPlusSlides(1);
            }, 12000);
        };

        function updateSlidePositions() {
            const total = framelessSlides.length;
            const frameIndex = framelessSlideIndex % total;
            const loopIndex = Math.floor(framelessSlideIndex / total);
            let slideOffsets = [];
            let cumulativeOffset = 0;
            for (let i = 0; i < total; i++) {
                slideOffsets.push(cumulativeOffset);
                cumulativeOffset += framelessSlides[i].getBoundingClientRect().width;
            }
            const totalslideWidth = cumulativeOffset;
            for (let i = 0; i < total; i++) {
                const absoluteSlideOffset = loopIndex * totalslideWidth + slideOffsets[i];
                let offset = absoluteSlideOffset;
                const visibleCount = 2;
                if (i < visibleCount && frameIndex > total - visibleCount) {
                    offset += totalslideWidth;
                } else if (i > total - visibleCount && frameIndex < visibleCount) {
                    offset -= totalslideWidth;
                }
                framelessSlides[i].style.transform = `translateX(${offset}px)`;
            }
        }

        // Nav
        framelessNavPrev.addEventListener('click', () => framelessPlusSlides(-1));
        framelessNavNext.addEventListener('click', () => framelessPlusSlides(1));

        window.framelessPlusSlides = (n) => {
            framelessShowSlides(framelessSlideIndex + n, true);
        };
        window.framelessCurrentSlide = (dotIndex) => {
            let framepos = Math.floor(framelessSlideIndex / TotalSlides) * TotalSlides;
            framelessShowSlides(framepos + dotIndex, true);
        };

        // Dragging
        framelessSlideshowContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startPos = e.clientX;
            framelessSlideshowContainer.classList.add('grabbing');
            framelessWrapper.classList.add('no-transition');
            prevTranslate = currentTranslate;
            clearTimeout(framelessSlideshowTimer);
            framelessWrapper.style.transform = `translateX(${currentTranslate}px)`;
        });
        framelessSlideshowContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const currentPosition = e.clientX;
            const diff = currentPosition - startPos;
            currentTranslate = prevTranslate + diff;
            framelessWrapper.style.transform = `translateX(${currentTranslate}px)`;
        });
        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            framelessSlideshowContainer.classList.remove('grabbing');
            const slideWidth = framelessSlides[0].offsetWidth;
            const movedBy = currentTranslate - prevTranslate;
            let targetIndex = framelessSlideIndex;
            if (movedBy < -slideWidth / 4) targetIndex++;
            else if (movedBy > slideWidth / 4) targetIndex--;
            framelessShowSlides(targetIndex, true);
        }
        framelessSlideshowContainer.addEventListener('mouseup', endDrag);
        framelessSlideshowContainer.addEventListener('mouseleave', endDrag);

        // Initial setup
        applyTransform(false);
        setSlideClasses();

        // Resize
        window.addEventListener('resize', () => {
            framelessWrapper.classList.add('no-transition');
            applyTransform(false);
            setSlideClasses();
            framelessWrapper.offsetWidth;
            setTimeout(() => framelessWrapper.classList.remove('no-transition'), 50);
        });

        // Auto-advance
        framelessSlideshowTimer = setTimeout(() => { framelessPlusSlides(1); }, 12000);
    });
})();