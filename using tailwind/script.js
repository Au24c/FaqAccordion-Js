document.querySelectorAll('[data-accordion-target]').forEach((button) => {
  const targetSelector = button.getAttribute('data-accordion-target');
  const targetEl = document.querySelector(targetSelector);

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Collapse all other panels
    document.querySelectorAll('.accordion-content').forEach((el) => {
      el.classList.remove('accordion-open');
    });

    // Set aria-expanded to false for all buttons
    document.querySelectorAll('[data-accordion-target]').forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });

    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');

      // Force reflow and apply accordion-open with a slight delay
      // to allow transition animation
      requestAnimationFrame(() => {
        // Trigger reflow
        targetEl.offsetHeight;
        targetEl.classList.add('accordion-open');
      });
    } else {
      button.setAttribute('aria-expanded', 'false');
      targetEl.classList.remove('accordion-open');
    }
  });
});
