/**
 * LUCKY NAGAR PORTFOLIO ACTIONS
 * Pure ES6+ Client-Side JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // 2. Initialize Typed.js Tagline Typing
    if (typeof Typed !== 'undefined') {
        new Typed('.dynamic-typing-text', {
            strings: [
                'BTech IT Student',
                'Aspiring Software Engineer',
                'Full-Stack Developer',
                'Problem Solver'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // 3. Navbar Shrink on Scroll
    const navbar = document.getElementById('mainNavbar');
    const handleNavbarShrink = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    };
    window.addEventListener('scroll', handleNavbarShrink);
    handleNavbarShrink(); // Run on load to set initial state if page is already scrolled

    // 4. Counter Animation for Achievements
    const counters = document.querySelectorAll('.counter');
    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                
                // Set speed based on target value
                const increment = target / 60; // Animate over roughly 60 frames

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Use Intersection Observer to trigger counting only when achievements are visible
    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection && counters.length > 0) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observerInstance.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.2
        });
        observer.observe(achievementsSection);
    }

    // 5. Close Mobile Nav Drawer on Link Click (Bootstrap navbar drawer cleanup)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if navbar menu is in mobile view/expanded
            if (!navCollapse || !navCollapse.classList.contains('show')) return;

            // Guard in case Bootstrap failed to load
            if (window.bootstrap && bootstrap.Collapse) {
                const bootstrapCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bootstrapCollapse) bootstrapCollapse.hide();
            }
        });
    });

    // 6. Fade Out Preloader (with DOMContentLoaded + hard timeout)
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const hidePreloader = () => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.visibility = 'hidden';
            }, 500);
        };

        // Fast path: as soon as DOM is ready
        window.addEventListener('DOMContentLoaded', hidePreloader, { once: true });

        // Keep existing load handler
        window.addEventListener('load', hidePreloader, { once: true });

        // Hard-stop to guarantee render even if some asset never finishes
        setTimeout(hidePreloader, 3500);
    }

});

