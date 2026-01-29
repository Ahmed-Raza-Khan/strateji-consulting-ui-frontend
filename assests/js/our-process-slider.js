document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    const cards = document.querySelectorAll('.card-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    const totalCards = cards.length;
    let activeIndex = 0;

    function setActiveCard(index) {
        document.querySelectorAll('.card-content').forEach(card => {
            card.classList.remove('active');
        });

        cards[index].querySelector('.card-content').classList.add('active');
    }

    function scrollToCard(index) {
        const cardWidth = cards[0].offsetWidth;

        slider.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth'
        });

        setActiveCard(index);
    }

    nextBtn.addEventListener('click', () => {
        activeIndex++;

        if (activeIndex >= totalCards) {
            activeIndex = 0;
        }

        scrollToCard(activeIndex);
    });

    prevBtn.addEventListener('click', () => {
        activeIndex--;

        if (activeIndex < 0) {
            activeIndex = totalCards - 1;
        }

        scrollToCard(activeIndex);
    });

    scrollToCard(activeIndex);

    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchend', () => {
        const swipeDistance = startX - endX;

        // Minimum swipe distance to trigger slide
        if (Math.abs(swipeDistance) < 50) return;

        if (swipeDistance > 0) {
            // Swipe LEFT → Next card
            activeIndex++;
            if (activeIndex >= totalCards) activeIndex = 0;
        } else {
            // Swipe RIGHT → Previous card
            activeIndex--;
            if (activeIndex < 0) activeIndex = totalCards - 1;
        }

        scrollToCard(activeIndex);
    });
});