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
});