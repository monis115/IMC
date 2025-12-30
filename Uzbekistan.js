document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.edu-navbar__toggler');
    const closeBtn = document.querySelector('.edu-nav-close');
    const navbar = document.querySelector('.edu-navbar');
    const navItems = document.querySelectorAll('.edu-nav__item');
    const searchInput = document.querySelector('#searchInput');
    const universityCards = document.querySelectorAll('.university-card');

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
        navItems.forEach(item => {
            item.classList.remove('edu-nav__item--open');
            const subdropdowns = item.querySelectorAll('.edu-subdropdown');
            subdropdowns.forEach(sub => sub.classList.remove('edu-subdropdown--open'));
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        universityCards.forEach(card => {
            const universityName = card.querySelector('h2').textContent.toLowerCase();
            const city = card.dataset.city.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();
            
            if (universityName.includes(searchTerm) || 
                city.includes(searchTerm) || 
                description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Mobile menu functionality
    navItems.forEach(item => {
        const link = item.querySelector('.edu-nav__link');
        const dropdown = item.querySelector('.edu-dropdown');
        
        if (dropdown) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 576) {
                    e.preventDefault();
                    e.stopPropagation();
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

        const subdropdowns = item.querySelectorAll('.edu-subdropdown');
        subdropdowns.forEach(sub => {
            const subLink = sub.querySelector('.edu-dropdown__item');
            const subMenu = sub.querySelector('.edu-subdropdown__menu');
            
            if (subMenu) {
                subLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 576) {
                        e.preventDefault();
                        e.stopPropagation();
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
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
        const href = button.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    }, 2000);
}
