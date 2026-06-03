/* ==========================================
   CHITTER'S FRITTERS
   PREMIUM WEBSITE SCRIPT
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.querySelector('.main-nav');

    if (mobileToggle && nav) {

        mobileToggle.addEventListener('click', () => {

            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '80px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.padding = '20px';
                nav.style.background = 'rgba(13,43,69,.97)';
                nav.style.gap = '20px';
                nav.style.zIndex = '999';
            }

        });

    }

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            const target = document.querySelector(
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
       HEADER EFFECT
    ========================== */

    const header =
        document.querySelector('.site-header');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 80) {

            header.style.background =
                'rgba(8,28,44,.95)';

            header.style.boxShadow =
                '0 10px 30px rgba(0,0,0,.25)';

        } else {

            header.style.background =
                'rgba(13,43,69,.85)';

            header.style.boxShadow =
                'none';

        }

    });

    /* ==========================
       FADE IN ANIMATION
    ========================== */

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = '1';

                    entry.target.style.transform =
                        'translateY(0px)';

                }

            });

        }, {
            threshold: 0.15
        });

    const animatedElements =
        document.querySelectorAll(
            '.product-card, .wholesale-card, .story-highlight, .contact-card'
        );

    animatedElements.forEach(el => {

        el.style.opacity = '0';

        el.style.transform =
            'translateY(30px)';

        el.style.transition =
            'all .7s ease';

        observer.observe(el);

    });

    /* ==========================
       HERO FLOAT EFFECT
    ========================== */

    const heroCard =
        document.querySelector('.hero-card');

    if (heroCard) {

        let direction = 1;

        setInterval(() => {

            const current =
                parseFloat(
                    heroCard.dataset.float || 0
                );

            let next =
                current + (0.5 * direction);

            if (next >= 8) {
                direction = -1;
            }

            if (next <= -8) {
                direction = 1;
            }

            heroCard.style.transform =
                `translateY(${next}px)`;

            heroCard.dataset.float = next;

        }, 50);

    }

    /* ==========================
       ACTIVE NAV LINK
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
       CONSOLE MESSAGE
    ========================== */

    console.log(
        '🍋 Chitter\'s Fritters Premium Website Loaded'
    );

});
