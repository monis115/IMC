// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation Trigger
const sections = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
const options = {
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Button Hover Animation
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mousedown', function () {
        this.style.transform = 'translateY(2px)';
    });
    button.addEventListener('mouseup', function () {
        this.style.transform = 'translateY(-3px)';
    });
});



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
        document.body.style.overflow = navContainer.classList.contains('edu-nav-container--open') ? 'hidden' : '';
        setTimeout(() => { isToggling = false; }, 500);
    });

    navItems.forEach(item => {
        const link = item.querySelector('.edu-nav__link');
        const dropdown = item.querySelector('.edu-dropdown');
        if (dropdown) {
            link.addEventListener('click', (e) => {
                if (isMobile()) {
                    e.preventDefault();
                    e.stopPropagation();
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('edu-nav__item--open');
                            otherItem.querySelectorAll('.edu-subdropdown').forEach(sub => sub.classList.remove('edu-subdropdown--open'));
                        }
                    });
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
                    e.stopPropagation();
                    subdropdown.parentElement.querySelectorAll('.edu-subdropdown').forEach(otherSub => {
                        if (otherSub !== subdropdown) {
                            otherSub.classList.remove('edu-subdropdown--open');
                        }
                    });
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
            document.body.style.overflow = '';
            navItems.forEach(item => {
                item.classList.remove('edu-nav__item--open');
                item.querySelectorAll('.edu-subdropdown').forEach(sub => sub.classList.remove('edu-subdropdown--open'));
            });
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
            }, 1500);
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
                navItems.forEach(item => {
                    item.classList.remove('edu-nav__item--open');
                    item.querySelectorAll('.edu-subdropdown').forEach(sub => sub.classList.remove('edu-subdropdown--open'));
                });
                document.querySelectorAll('[aria-expanded="true"]').forEach(el => el.setAttribute('aria-expanded', 'false'));
                document.body.style.overflow = '';
                toggler.parentElement.classList.remove('edu-navbar__collapse--show');
                navContainer.classList.remove('edu-nav-container--open');
            }
        }, 100);
    });
});