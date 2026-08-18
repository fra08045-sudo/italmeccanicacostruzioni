(function () {
    const viewportSwitcher = document.createElement('div');
    viewportSwitcher.className = 'viewport-switcher';

    const desktopBtn = document.createElement('button');
    desktopBtn.type = 'button';
    desktopBtn.className = 'viewport-btn is-active';
    desktopBtn.textContent = 'PC';

    const mobileBtn = document.createElement('button');
    mobileBtn.type = 'button';
    mobileBtn.className = 'viewport-btn';
    mobileBtn.textContent = 'Smartphone';

    viewportSwitcher.appendChild(desktopBtn);
    viewportSwitcher.appendChild(mobileBtn);
    document.body.appendChild(viewportSwitcher);

    function setViewportMode(mode) {
        const isMobile = mode === 'mobile';
        document.documentElement.classList.toggle('viewport-mobile', isMobile);
        desktopBtn.classList.toggle('is-active', !isMobile);
        mobileBtn.classList.toggle('is-active', isMobile);
            try {
                localStorage.setItem('viewport-mode', mode);
            } catch (e) {
                // localStorage may be unavailable in some contexts; fail silently
            }
        }

        desktopBtn.addEventListener('click', function () {
            setViewportMode('desktop');
        });

        mobileBtn.addEventListener('click', function () {
            setViewportMode('mobile');
        });

        // Restore last chosen viewport mode across pages (default to desktop)
        (function restoreViewport() {
            var saved = null;
            try { saved = localStorage.getItem('viewport-mode'); } catch (e) { saved = null; }
            if (saved === 'mobile' || saved === 'desktop') {
                setViewportMode(saved);
            } else {
                setViewportMode('desktop');
            }
        })();

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

    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mainNav = document.querySelector('.nav-menu');
    const actionMenu = document.querySelector('.nav-actions');

    function closeMobileMenu() {
        if (!navbar) return;
        navbar.classList.remove('nav-open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function toggleMobileMenu() {
        if (!navbar || !hamburger) return;
        const isOpen = navbar.classList.toggle('nav-open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
        if (isOpen) {
            const firstLink = (navLinks || mainNav)?.querySelector('a') || actionMenu?.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    }

    if (hamburger && navbar) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMobileMenu();
        });

        document.addEventListener('click', function (e) {
            const target = e.target;
            if (!navbar.classList.contains('nav-open')) return;
            if (target === hamburger) return;
            const overlayTarget = navLinks || mainNav || actionMenu;
            if (!overlayTarget || !overlayTarget.contains(target)) {
                closeMobileMenu();
            }
        });

        const mobileMenuLinks = (navLinks || mainNav || document).querySelectorAll ? (navLinks || mainNav || document).querySelectorAll('a') : [];
        mobileMenuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMobileMenu();
            });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navbar.classList.contains('nav-open')) {
                closeMobileMenu();
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }
})();