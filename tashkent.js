document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.edu-navbar__toggler');
    const navContainer = document.querySelector('.edu-nav-container');
    const navItems = document.querySelectorAll('.edu-nav__item');
    const subdropdowns = document.querySelectorAll('.edu-subdropdown');

    // Toggle mobile menu
    toggler.addEventListener('click', () => {
        toggler.parentElement.classList.toggle('edu-navbar__collapse--show');
        navContainer.classList.toggle('edu-nav-container--open');
    });

    // Handle dropdowns on mobile
    navItems.forEach(item => {
        const link = item.querySelector('.edu-nav__link');
        const dropdown = item.querySelector('.edu-dropdown');
        if (dropdown) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    item.classList.toggle('edu-nav__item--open');
                }
            });
        }
    });

    // Handle subdropdowns on mobile
    subdropdowns.forEach(subdropdown => {
        const link = subdropdown.querySelector('.edu-dropdown__item');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                subdropdown.classList.toggle('edu-subdropdown--open');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggler.contains(e.target) && !navContainer.contains(e.target) && window.innerWidth <= 992) {
            toggler.parentElement.classList.remove('edu-navbar__collapse--show');
            navContainer.classList.remove('edu-nav-container--open');
            navItems.forEach(item => item.classList.remove('edu-nav__item--open'));
            subdropdowns.forEach(subdropdown => subdropdown.classList.remove('edu-subdropdown--open'));
        }
    });
});