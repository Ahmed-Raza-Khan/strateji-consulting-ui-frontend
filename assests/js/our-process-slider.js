document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    const scrollCards = (direction) => {
        const cardWidth = document.querySelector('.card-item').offsetWidth;
        
        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;

        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    };

    nextBtn.addEventListener('click', () => {
        scrollCards('next');
    });

    prevBtn.addEventListener('click', () => {
        scrollCards('prev');
    });
});