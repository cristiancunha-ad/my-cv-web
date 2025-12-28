/**
 * CRISTIAN GARCÍA - CV PROFESIONAL
 * Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavbar();
    initTypingEffect();
    initParticles();
    initCounters();
    initSkillBars();
    initScrollAnimations();
    initMobileMenu();
    initDynamicDates();
});

/**
 * Dynamic Date Calculations
 * Automatically updates work duration at MartiMotos
 */
function initDynamicDates() {
    // MartiMotos start date: November 1, 2025
    const martiMotosStart = new Date(2025, 10, 1); // Month is 0-indexed (10 = November)
    const now = new Date();

    // Calculate months difference (counting current month as complete)
    let months = (now.getFullYear() - martiMotosStart.getFullYear()) * 12;
    months += now.getMonth() - martiMotosStart.getMonth();

    // Add 1 to count the current month as in progress
    months += 1;

    // Ensure at least 1 month
    months = Math.max(1, months);

    // Format the duration text
    let durationText;
    if (months < 12) {
        durationText = months === 1 ? '1 mes' : `${months} meses`;
    } else {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        if (remainingMonths === 0) {
            durationText = years === 1 ? '1 año' : `${years} años`;
        } else {
            durationText = `${years} año${years > 1 ? 's' : ''} y ${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`;
        }
    }

    // Update the MartiMotos duration element
    const durationElement = document.getElementById('martimotos-duration');
    if (durationElement) {
        durationElement.textContent = durationText;
    }

    // Calculate total experience
    // R&C Associats: 3 months (2024)
    // Andorra Telecom: 12 months (2024-2025)
    // MartiMotos: dynamic months
    const totalMonths = 3 + 12 + months;
    const totalYears = (totalMonths / 12).toFixed(1);

    // Update experience counter
    const experienceCounter = document.getElementById('experience-years');
    if (experienceCounter) {
        experienceCounter.textContent = totalYears;
    }
}

/**
 * Navbar Scroll Effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.getElementById('nav-menu').classList.remove('active');
            }
        });
    });
}

/**
 * Typing Effect
 */
function initTypingEffect() {
    const typingElement = document.getElementById('typing');
    const phrases = [
        'Desarrollador Web',
        'Especialista en Automatización',
        'Solucionador de Problemas',
        'Apasionado por la Tecnología'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

/**
 * Particle Background
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

/**
 * Animated Counters
 */
function initCounters() {
    // Only select counters that have data-count attribute
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const speed = 200;

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-count');
        const increment = target / speed;
        let current = 0;

        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    };

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

/**
 * Skill Bars Animation
 */
function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.querySelector('.skill-progress');
                const level = entry.target.getAttribute('data-level');
                setTimeout(() => {
                    progress.style.width = level + '%';
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillItems.forEach(item => observer.observe(item));
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.section-header, .about-content, .about-image, .timeline-item, ' +
        '.skill-category, .project-card, .education-item, .cert-item, ' +
        '.contact-method, .cta-card'
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-section', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

/**
 * Active Section Highlight
 */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, { passive: true });
