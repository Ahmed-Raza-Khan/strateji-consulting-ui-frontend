document.addEventListener('DOMContentLoaded', () => {
    const testimonials =;

    const carouselInner = document.getElementById('carousel-content');

    function loadTestimonials() {
        testimonials.forEach((testimonial, index) => {
            const activeClass = index === 0 ? 'active' : '';
            
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', activeClass);
            carouselItem.innerHTML = `
                <p class="testimonial-text mb-4">"${testimonial.quote}"</p>
                <div class="d-flex align-items-center mt-4">
                    <img src="${testimonial.image}" class="user-avatar me-3" alt="${testimonial.name}">
                    <div>
                        <p class="fw-bold mb-0 text-dark-blue">${testimonial.name}</p>
                        <small class="text-muted">${testimonial.role}</small>
                    </div>
                </div>
            `;
            carouselInner.appendChild(carouselItem);
        });
    }

    loadTestimonials();
});