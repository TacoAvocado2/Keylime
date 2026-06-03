/* ==========================================
   CHITTER'S FRITTERS
   APP.JS
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.querySelector('.main-nav');

    if (mobileToggle && nav) {

        mobileToggle.addEventListener('click', () => {

            nav.classList.toggle('show');

            if (mobileToggle.innerHTML === '☰') {
                mobileToggle.innerHTML = '✕';
            } else {
                mobileToggle.innerHTML = '☰';
            }

        });

    }

    /* ==========================
       CLOSE MENU WHEN LINK CLICKED
    ========================== */

    document.querySelectorAll('.main-nav a').forEach(link => {

        link.addEventListener('click', () => {

            if (nav) {
                nav.classList.remove('show');
            }

            if (mobileToggle) {
                mobileToggle.innerHTML = '☰';
            }

        });

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            const target =
                document.querySelector(
                    this.getAttribute('href')
                );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        });

    });

    /* ==========================
       HEADER SCROLL EFFECT
    ========================== */

    const header =
        document.querySelector('.site-header');

    window.addEventListener('scroll', () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add('scrolled');

        } else {

            header.classList.remove('scrolled');

        }

    });

    /* ==========================
       FADE-IN ANIMATIONS
    ========================== */

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('animate');

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    const animatedItems = document.querySelectorAll(
        '.product-card, .wholesale-card, .story-highlight, .contact-card'
    );

    animatedItems.forEach(item => {

        item.classList.add('fade-start');

        observer.observe(item);

    });

    /* ==========================
       ACTIVE NAVIGATION LINK
    ========================== */

    const sections =
        document.querySelectorAll('section');

    const navLinks =
        document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute('id');

            }

        });

        navLinks.forEach(link => {

            link.classList.remove('active');

            if (
                link.getAttribute('href') ===
                '#' + current
            ) {

                link.classList.add('active');

            }

        });

    });

    /* ==========================
       HERO CARD FLOAT
    ========================== */

    const heroCard =
        document.querySelector('.hero-card');

    if (heroCard) {

        let position = 0;
        let direction = 1;

        setInterval(() => {

            position += 0.25 * direction;

            if (position > 10) {
                direction = -1;
            }

            if (position < -10) {
                direction = 1;
            }

            heroCard.style.transform =
                `translateY(${position}px)`;

        }, 25);

    }

    /* ==========================
       PARALLAX HERO
    ========================== */

    const hero =
        document.querySelector('.hero');

    window.addEventListener('scroll', () => {

        if (!hero) return;

        const offset =
            window.pageYOffset;

        hero.style.backgroundPositionY =
            `${offset * 0.4}px`;

    });

    /* ==========================
       CURRENT YEAR
    ========================== */

    const yearSpan =
        document.getElementById('year');

    if (yearSpan) {

        yearSpan.textContent =
            new Date().getFullYear();

    }

    /* ==========================
       CONSOLE MESSAGE
    ========================== */

    console.log(
        '🍋 Chitter\'s Fritters Loaded Successfully'
    );

});
