function showSpinner(button, event) {
    event.preventDefault();
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
        const href = button.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.edu-navbar__toggler');
    const navContainer = document.querySelector('.edu-nav-container');
    const navClose = document.querySelector('.edu-nav-close');
    const nav = document.querySelector('.edu-nav');

    toggler.addEventListener('click', () => {
        nav.classList.toggle('edu-nav--open');
    });

    navClose.addEventListener('click', () => {
        nav.classList.remove('edu-nav--open');
    });

    const navItemsWithDropdown = document.querySelectorAll('.edu-nav__item:has(.edu-dropdown)');
    navItemsWithDropdown.forEach(item => {
        const link = item.querySelector('.edu-nav__link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 576) {
                e.preventDefault();
                item.classList.toggle('edu-nav__item--open');
            }
        });
    });

    const subDropdowns = document.querySelectorAll('.edu-subdropdown');
    subDropdowns.forEach(sub => {
        const link = sub.querySelector('.edu-dropdown__item');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 576) {
                e.preventDefault();
                sub.classList.toggle('edu-subdropdown--open');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.edu-navbar__toggler');
    const closeBtn = document.querySelector('.edu-nav-close');
    const navbar = document.querySelector('.edu-navbar');
    const navItems = document.querySelectorAll('.edu-nav__item');

    // Toggle mobile menu
    toggler.addEventListener('click', function() {
        navbar.classList.add('edu-nav--open');
        document.body.style.overflow = 'hidden';
        toggler.style.display = 'none';
        closeBtn.style.display = 'flex';
    });

    // Close mobile menu
    closeBtn.addEventListener('click', function() {
        navbar.classList.remove('edu-nav--open');
        document.body.style.overflow = '';
        toggler.style.display = 'block';
        closeBtn.style.display = 'none';
        // Close all dropdowns when closing menu
        navItems.forEach(item => {
            item.classList.remove('edu-nav__item--open');
            const subdropdowns = item.querySelectorAll('.edu-subdropdown');
            subdropdowns.forEach(sub => sub.classList.remove('edu-subdropdown--open'));
        });
    });

    // Handle dropdown toggles on mobile
    navItems.forEach(item => {
        const link = item.querySelector('.edu-nav__link');
        const dropdown = item.querySelector('.edu-dropdown');
        
        if (dropdown) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 576) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('edu-nav__item--open');
                            const subdropdowns = otherItem.querySelectorAll('.edu-subdropdown');
                            subdropdowns.forEach(sub => sub.classList.remove('edu-subdropdown--open'));
                        }
                    });
                    
                    item.classList.toggle('edu-nav__item--open');
                }
            });
        }

        // Handle subdropdown toggles
        const subdropdowns = item.querySelectorAll('.edu-subdropdown');
        subdropdowns.forEach(sub => {
            const subLink = sub.querySelector('.edu-dropdown__item');
            const subMenu = sub.querySelector('.edu-subdropdown__menu');
            
            if (subMenu) {
                subLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 576) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Close other subdropdowns
                        subdropdowns.forEach(otherSub => {
                            if (otherSub !== sub) {
                                otherSub.classList.remove('edu-subdropdown--open');
                            }
                        });
                        
                        sub.classList.toggle('edu-subdropdown--open');
                    }
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbar.classList.contains('edu-nav--open') && 
            !e.target.closest('.edu-nav-container') && 
            !e.target.closest('.edu-navbar__toggler')) {
            navbar.classList.remove('edu-nav--open');
            document.body.style.overflow = '';
            toggler.style.display = 'block';
            closeBtn.style.display = 'none';
            // Close all dropdowns
            navItems.forEach(item => {
                item.classList.remove('edu-nav__item--open');
                const subdropdowns = item.querySelectorAll('.edu-subdropdown');
                subdropdowns.forEach(sub => sub.classList.remove('edu-subdropdown--open'));
            });
        }
    });
});

function showSpinner(button, event) {
    event.preventDefault();
    
    // Show the loading overlay
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex';
    
    // Simulate loading for 2 seconds
    setTimeout(() => {
        // Hide the loading overlay
        overlay.style.display = 'none';
        
        // Navigate to the appropriate page
        const href = button.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    }, 2000);
}