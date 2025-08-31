// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const themeLabels = document.querySelectorAll('.theme-label');

  // Check for saved theme preference or respect OS preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.checked = true;
    updateThemeLabels('dark');
  } else {
    updateThemeLabels('light');
  }

  // Add event listener to theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        updateThemeLabels('dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        updateThemeLabels('light');
      }
    });
  }

  // Update theme labels for better visibility
  function updateThemeLabels(theme) {
    themeLabels.forEach(label => {
      if (theme === 'dark') {
        if (label.textContent === 'Dark') {
          label.style.fontWeight = 'bold';
          label.style.color = 'var(--primary)';
        } else {
          label.style.fontWeight = 'normal';
          label.style.color = 'var(--gray)';
        }
      } else {
        if (label.textContent === 'Light') {
          label.style.fontWeight = 'bold';
          label.style.color = 'var(--primary)';
        } else {
          label.style.fontWeight = 'normal';
          label.style.color = 'var(--gray)';
        }
      }
    });
  }
});
