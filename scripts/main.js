// Main initialization script
document.addEventListener('DOMContentLoaded', function () {
  console.log('StreamSaver website loaded successfully');

  // Add event listeners to "Add to Dashboard" buttons
  const addButtons = document.querySelectorAll('.action-btn');
  addButtons.forEach(button => {
    button.addEventListener('click', function () {
      const service =
        this.closest('tr').querySelector('td:first-child').textContent;
      alert(`Added ${service} to your dashboard!`);
    });
  });

  // Initialize platform cards with specific colors
  const platformCards = document.querySelectorAll('.platform-card');
  platformCards.forEach(card => {
    const platform = card.getAttribute('data-platform');

    switch (platform) {
      case 'netflix':
        card.style.borderTop = '4px solid #E50914';
        card.querySelector('.platform-logo').style.color = '#E50914';
        break;
      case 'hotstar':
        card.style.borderTop = '4px solid #122C6E';
        card.querySelector('.platform-logo').style.color = '#122C6E';
        break;
      case 'prime':
        card.style.borderTop = '4px solid #00A8E1';
        card.querySelector('.platform-logo').style.color = '#00A8E1';
        break;
      case 'apple':
        card.style.borderTop = '4px solid #000000';
        card.querySelector('.platform-logo').style.color = '#000000';
        break;
      case 'hbo':
        card.style.borderTop = '4px solid #3D26CC';
        card.querySelector('.platform-logo').style.color = '#3D26CC';
        break;
      case 'hulu':
        card.style.borderTop = '4px solid #1CE783';
        card.querySelector('.platform-logo').style.color = '#1CE783';
        break;
    }
  });
});
