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
});