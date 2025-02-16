document.addEventListener("DOMContentLoaded", function() {
    // GSAP Hero Animation
    gsap.from(".glow-text", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
    gsap.from(".hero p", { opacity: 0, y: 30, duration: 1, delay: 0.5 });

    // Custom Cursor for Entire Website
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // Mouse Move Effect (Entire Page)
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });

    // Hover Effects on Interactive Elements
    const interactiveElements = document.querySelectorAll("a, button, .card img, input, textarea");
    interactiveElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("hover-effect");
        });
        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover-effect");
        });
    });

    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about h2", { 
        opacity: 0, 
        x: -100, 
        duration: 1, 
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about p", { 
        opacity: 0, 
        x: 100, 
        duration: 1, 
        delay: 0.5, 
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".gallery h2", { 
        opacity: 0, 
        scale: 0.5, 
        duration: 1, 
        scrollTrigger: {
            trigger: ".gallery",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".card", { 
        opacity: 0, 
        y: 50, 
        duration: 0.8, 
        stagger: 0.3, 
        scrollTrigger: {
            trigger: ".gallery",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Hover Effect on Images
    const cards = document.querySelectorAll(".card img");

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            gsap.to(card, { scale: 1.1, duration: 0.3 });
        });

        card.addEventListener("mouseout", () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });

    // Form Submission Alert
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Message sent successfully!");
        form.reset();
    });
});
