const cards = document.querySelectorAll('.item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // 👈 這行是關鍵
      }
    });
  }, {
    threshold: 0.2
  });
  

  cards.forEach(card => observer.observe(card));