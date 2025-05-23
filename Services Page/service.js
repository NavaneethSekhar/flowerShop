document.addEventListener('DOMContentLoaded', () => {
  const navigateBtns = document.querySelectorAll('.navigate-btn');
  const modal = document.getElementById('popupModal');
  const closeBtn = document.querySelector('.close-btn');
  const popupTitle = document.getElementById('popupTitle');
  const popupDesc = document.getElementById('popupDesc');

  const serviceDetails = {
    decor1: {
      title: 'Wedding Decor',
      desc: 'From floral arches to centerpieces, we specialize in creating magical settings for your big day.'
    },
    decor2: {
      title: 'Event Styling',
      desc: 'Transform any event space into a floral fantasy. Perfect for birthdays, baby showers, and more.'
    },
    decor3: {
      title: 'Seasonal Bouquets',
      desc: 'Celebrate each season with handpicked flowers delivered in beautifully wrapped bundles.'
    }
  };

  navigateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.dataset.service;
      const data = serviceDetails[service];
      popupTitle.textContent = data.title;
      popupDesc.textContent = data.desc;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
