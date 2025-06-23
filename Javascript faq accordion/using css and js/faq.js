  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
      // Close all other items
      items.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });