document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.edu-navbar__toggler');
    const navContainer = document.querySelector('.edu-nav-container');
    const navItems = document.querySelectorAll('.edu-nav__item');
    const subdropdowns = document.querySelectorAll('.edu-subdropdown');
    let isToggling = false;

    const isMobile = () => window.matchMedia('(max-width: 992px)').matches;

    if (!toggler || !navContainer) {
        console.warn('Navigation elements not found');
        return;
    }

    toggler.addEventListener('click', () => {
        if (isToggling) return;
        isToggling = true;
        toggler.parentElement.classList.toggle('edu-navbar__collapse--show');
        navContainer.classList.toggle('edu-nav-container--open');
        setTimeout(() => { isToggling = false; }, 500);
    });

    navItems.forEach(item => {
        const link = item.querySelector('.edu-nav__link');
        const dropdown = item.querySelector('.edu-dropdown');
        if (dropdown) {
            link.addEventListener('click', (e) => {
                if (isMobile()) {
                    e.preventDefault();
                    item.classList.toggle('edu-nav__item--open');
                    link.setAttribute('aria-expanded', item.classList.contains('edu-nav__item--open'));
                }
            });
            link.addEventListener('keydown', (e) => {
                if (isMobile() && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    item.classList.toggle('edu-nav__item--open');
                    link.setAttribute('aria-expanded', item.classList.contains('edu-nav__item--open'));
                }
            });
        }
    });

    subdropdowns.forEach(subdropdown => {
        const link = subdropdown.querySelector('.edu-dropdown__item');
        if (link) {
            link.addEventListener('click', (e) => {
                if (isMobile()) {
                    e.preventDefault();
                    subdropdown.classList.toggle('edu-subdropdown--open');
                    link.setAttribute('aria-expanded', subdropdown.classList.contains('edu-subdropdown--open'));
                }
            });
            link.addEventListener('keydown', (e) => {
                if (isMobile() && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    subdropdown.classList.toggle('edu-subdropdown--open');
                    link.setAttribute('aria-expanded', subdropdown.classList.contains('edu-subdropdown--open'));
                }
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (!toggler.contains(e.target) && !navContainer.contains(e.target) && isMobile() && !e.target.closest('.edu-apply')) {
            toggler.parentElement.classList.remove('edu-navbar__collapse--show');
            navContainer.classList.remove('edu-nav-container--open');
            navItems.forEach(item => item.classList.remove('edu-nav__item--open'));
            subdropdowns.forEach(subdropdown => subdropdown.classList.remove('edu-subdropdown--open'));
            document.querySelectorAll('[aria-expanded="true"]').forEach(el => el.setAttribute('aria-expanded', 'false'));
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    const showSpinner = (button, event) => {
        event.preventDefault();
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.style.display = 'none';
                const href = button.getAttribute('href');
                if (href) window.location.href = href;
            }, 2000);
        }
    };

    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', (e) => showSpinner(button, e));
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (!isMobile()) {
                navItems.forEach(item => item.classList.remove('edu-nav__item--open'));
                subdropdowns.forEach(subdropdown => subdropdown.classList.remove('edu-subdropdown--open'));
                document.querySelectorAll('[aria-expanded="true"]').forEach(el => el.setAttribute('aria-expanded', 'false'));
            }
        }, 100);
    });
});