/* ==========================================
   CHITTER'S FRITTERS™
   APP.JS
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {

        mobileToggle.addEventListener('click', () => {

            mainNav.classList.toggle('show');

            if (mobileToggle.innerHTML === '☰') {
                mobileToggle.innerHTML = '✕';
            } else {
                mobileToggle.innerHTML = '☰';
            }

        });

    }

    /* ==========================
       CLOSE MENU AFTER CLICK
    ========================== */

    document.querySelectorAll('.main-nav a').forEach(link => {

        link.addEventListener('click', () => {

            if (mainNav) {
                mainNav.classList.remove('show');
            }

            if (mobileToggle) {
                mobileToggle.innerHTML = '☰';
            }

        });

    });

    /* ==========================
       SMOOTH SCROLLING
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

        if (window.scrollY > 40) {

            header.style.background =
                'rgba(8,28,44,.96)';

            header.style.boxShadow =
                '0 10px 30px rgba(0,0,0,.25)';

        } else {

            header.style.background =
                'rgba(13,43,69,.92)';

            header.style.boxShadow =
                '0 5px 20px rgba(0,0,0,.15)';

        }

    });

    /* ==========================
       ORDER CALCULATOR
    ========================== */

    const minusBtn =
        document.getElementById('minusBtn');

    const plusBtn =
        document.getElementById('plusBtn');

    const quantityInput =
        document.getElementById('quantity');

    const totalPrice =
        document.getElementById('totalPrice');

    const PRICE = 9.95;

    function updateTotal() {

        if (!quantityInput || !totalPrice) return;

        let qty =
            parseInt(quantityInput.value);

        if (isNaN(qty) || qty < 1) {
            qty = 1;
        }

        quantityInput.value = qty;

        const total =
            (qty * PRICE).toFixed(2);

        totalPrice.textContent =
            '$' + total;

    }

    if (minusBtn) {

        minusBtn.addEventListener('click', () => {

            let qty =
                parseInt(quantityInput.value);

            if (qty > 1) {

                quantityInput.value =
                    qty - 1;

                updateTotal();

            }

        });

    }

    if (plusBtn) {

        plusBtn.addEventListener('click', () => {

            let qty =
                parseInt(quantityInput.value);

            quantityInput.value =
                qty + 1;

            updateTotal();

        });

    }

    if (quantityInput) {

        quantityInput.addEventListener(
            'input',
            updateTotal
        );

    }

    updateTotal();

    /* ==========================
       ACTIVE NAVIGATION
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
       FADE-IN ANIMATIONS
    ========================== */

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            'animate'
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    document.querySelectorAll(
        '.product-card, .wholesale-card, .contact-card'
    ).forEach(el => {

        el.classList.add(
            'fade-start'
        );

        observer.observe(el);

    });

    /* ==========================
       CURRENT YEAR
    ========================== */

    const year =
        document.getElementById('year');

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

    /* ==========================
       STRIPE PLACEHOLDER
    ========================== */

    const stripeBtn =
        document.getElementById(
            'stripeCheckout'
        );

    if (stripeBtn) {

        stripeBtn.addEventListener(
            'click',
            () => {

                console.log(
                    'Stripe checkout clicked'
                );

            }
        );

    }

    /* ==========================
       CONSOLE MESSAGE
    ========================== */

    console.log(
        '🍋 Chitter\\'s Fritters Website Loaded'
    );

});
