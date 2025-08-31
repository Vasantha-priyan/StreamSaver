// Platform details page functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get platform from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const platform = urlParams.get('platform') || 'netflix';

  // Platform data
  const platforms = {
    netflix: {
      name: 'Netflix',
      icon: 'fab fa-netflix',
      description: 'Stream thousands of movies and TV shows',
      monthlyPrice: 15.99,
      hourlyRate: 0.99,
      color: '#E50914',
    },
    hotstar: {
      name: 'Jio Hotstar',
      icon: 'fas fa-tv',
      description: 'Disney, Marvel, Star Wars, and sports content',
      monthlyPrice: 7.99,
      hourlyRate: 0.49,
      color: '#122C6E',
    },
    prime: {
      name: 'Amazon Prime Video',
      icon: 'fab fa-amazon',
      description: 'Movies, TV shows, and Amazon Originals',
      monthlyPrice: 8.99,
      hourlyRate: 0.59,
      color: '#00A8E1',
    },
    apple: {
      name: 'Apple TV+',
      icon: 'fab fa-apple',
      description: 'Apple Originals and exclusive content',
      monthlyPrice: 6.99,
      hourlyRate: 0.69,
      color: '#000000',
    },
    hbo: {
      name: 'HBO Max',
      icon: 'fas fa-film',
      description: 'HBO Originals, Warner Bros. movies, and more',
      monthlyPrice: 14.99,
      hourlyRate: 0.89,
      color: '#3D26CC',
    },
    hulu: {
      name: 'Hulu',
      icon: 'fas fa-tv',
      description: 'Current season TV, movies, and originals',
      monthlyPrice: 6.99,
      hourlyRate: 0.45,
      color: '#1CE783',
    },
  };

  // Set platform details
  const platformData = platforms[platform];
  if (platformData) {
    document.getElementById('platform-name').textContent = platformData.name;
    document.getElementById('platform-description').textContent =
      platformData.description;
    document.getElementById('platform-icon').className = platformData.icon;
    document.getElementById(
      'min-price'
    ).textContent = `$${platformData.hourlyRate.toFixed(2)}`;

    // Set platform color
    document.querySelector('.platform-logo-large').style.color =
      platformData.color;
    document.querySelector(
      '.platform-header'
    ).style.borderTop = `4px solid ${platformData.color}`;

    // Update pricing
    document.querySelector(
      '.original-pricing .price'
    ).textContent = `$${platformData.monthlyPrice.toFixed(2)}/month`;
  }

  // Duration buttons functionality
  const durationButtons = document.querySelectorAll('.duration-btn');
  const hourInput = document.getElementById('hours');
  const dayInput = document.getElementById('days');
  const weekInput = document.getElementById('weeks');

  durationButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      durationButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');

      // Get duration from data attributes
      const hours = this.getAttribute('data-hours');
      const days = this.getAttribute('data-days');

      if (hours) {
        hourInput.value = hours;
        dayInput.value = 0;
        weekInput.value = 0;
      } else if (days) {
        hourInput.value = 0;
        dayInput.value = days;
        weekInput.value = 0;
      }

      // Calculate price
      calculatePrice();
    });
  });

  // Input change events
  [hourInput, dayInput, weekInput].forEach(input => {
    input.addEventListener('input', calculatePrice);
  });

  // Calculate price function
  function calculatePrice() {
    const hours = parseInt(hourInput.value) || 0;
    const days = parseInt(dayInput.value) || 0;
    const weeks = parseInt(weekInput.value) || 0;

    const totalHours = hours + days * 24 + weeks * 168;

    if (totalHours > 0) {
      const price = totalHours * platformData.hourlyRate;
      const monthlyEquivalent = (price / platformData.monthlyPrice) * 100;
      const savings = 100 - monthlyEquivalent;

      document.getElementById(
        'calculated-price'
      ).textContent = `$${price.toFixed(2)}`;

      if (savings > 0) {
        document.getElementById(
          'savings'
        ).textContent = `You save ${savings.toFixed(
          0
        )}% compared to monthly subscription`;
        document.getElementById('savings').style.color = 'var(--success)';
      } else {
        document.getElementById(
          'savings'
        ).textContent = `For longer durations, consider a monthly subscription`;
        document.getElementById('savings').style.color = 'var(--warning)';
      }
    } else {
      document.getElementById('calculated-price').textContent = '$0.00';
      document.getElementById('savings').textContent =
        'Please select a duration';
      document.getElementById('savings').style.color = 'var(--gray)';
    }
  }

  // Initialize calculation
  calculatePrice();
});
