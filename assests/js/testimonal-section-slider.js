const testimonials = [
    {
        text: "“Strateji Consulting has transformed our approach to telecom agreements. Their expert team helped us save over 30% on our annual telecom expenses while ensuring we had the flexibility to scale. We couldn’t be happier with the results.”",
        image: "assests/images/testimonal-card-1.jpg",
        name: "David Anderson",
        position: "CEO, TechSolutions Corp."
    },
    {
        text: "“Amazing experience! Their strategies helped us scale faster than ever without increasing costs. Strateji Consulting has transformed our approach to telecom agreements. Their expert team helped us save. Amazing experience! Their strategies helped us.”",
        image: "assests/images/ou-team-1.jpg",
        name: "Sarah Mitchell",
        position: "Marketing Director, NovaTech"
    },
    {
        text: "“Professional, reliable, and results-driven. Highly recommended consulting partner. Strateji Consulting has transformed our approach to telecom agreements. Their expert team helped us save. Amazing experience! Their strategies helped us.”",
        image: "assests/images/our-team-3.png",
        name: "James Carter",
        position: "COO, Bright Systems"
    }
];

let currentIndex = 0;

const textEl = document.getElementById("testimonialText");
const imgEl = document.getElementById("testimonialImage");
const nameEl = document.getElementById("testimonialName");
const positionEl = document.getElementById("testimonialPosition");

function updateTestimonial(index) {
    textEl.style.opacity = 0;
    imgEl.style.opacity = 0;

    setTimeout(() => {
        textEl.textContent = testimonials[index].text;
        imgEl.src = testimonials[index].image;
        nameEl.textContent = testimonials[index].name;
        positionEl.textContent = testimonials[index].position;

        textEl.style.opacity = 1;
        imgEl.style.opacity = 1;
    }, 200);
}

document.querySelector(".testimonal-arrow-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});

document.querySelector(".testimonal-arrow-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});