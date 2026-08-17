document.addEventListener('DOMContentLoaded', function () {
    // Create modal elements
    let modalOverlay = document.createElement('div');
    modalOverlay.className = 'pm-modal-overlay';
    modalOverlay.style.display = 'none';

    let modalContent = document.createElement('div');
    modalContent.className = 'pm-modal-content';

    let modalImg = document.createElement('img');
    modalImg.className = 'pm-modal-img';
    modalImg.alt = 'Progetto';

    let modalClose = document.createElement('button');
    modalClose.className = 'pm-modal-close';
    modalClose.innerHTML = '&times;';

    modalContent.appendChild(modalClose);
    modalContent.appendChild(modalImg);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Open modal when clicking view-project
    function openModal(imgSrc, alt) {
        modalImg.src = imgSrc;
        modalImg.alt = alt || 'Progetto';
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.style.display = 'none';
        modalImg.src = '';
        document.body.style.overflow = '';
    }

    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay || e.target === modalClose) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') closeModal();
    });

    const viewButtons = document.querySelectorAll('.view-project');
    viewButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const img = btn.getAttribute('data-img');
            // fallback: try to find image inside same card
            let src = img;
            if (!src) {
                const card = btn.closest('.portfolio-item');
                if (card) {
                    const imgEl = card.querySelector('.portfolio-image img');
                    if (imgEl) src = imgEl.src;
                }
            }
            if (src) openModal(src, btn.closest('.portfolio-item')?.querySelector('h3')?.innerText);
        });
    });

    // HAMBURGER MENU TOGGLE (mobile)
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navbar && navLinks) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            const opened = navbar.classList.toggle('nav-open');
            hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
            // prevent body scroll when menu is open
            document.body.style.overflow = opened ? 'hidden' : '';
        });

        // close menu when clicking outside of the nav-links or hamburger
        document.addEventListener('click', function (e) {
            if (navbar.classList.contains('nav-open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navbar.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // close menu when a link is tapped (keeps default navigation)
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (navbar.classList.contains('nav-open')) {
                    navbar.classList.remove('nav-open');
                    hamburger.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        });

        // support Escape key to close
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navbar.classList.contains('nav-open')) {
                navbar.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

});