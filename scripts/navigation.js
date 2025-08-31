// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const buttons = document.querySelectorAll('.btn[data-page]');

  // Function to change page
  function changePage(targetPage) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });

    // Show target page
    const pageElement = document.getElementById(targetPage);
    if (pageElement) {
      pageElement.classList.add('active');

      // Scroll to top
      window.scrollTo(0, 0);
    }

    // Update active nav link
    navLinks.forEach(link => {
      link.style.fontWeight = 'normal';
      if (link.getAttribute('data-page') === targetPage) {
        link.style.fontWeight = 'bold';
      }
    });
  }

  // Add click event to navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetPage = this.getAttribute('data-page');
      changePage(targetPage);
    });
  });

  // Add click event to buttons with data-page attribute
  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const targetPage = this.getAttribute('data-page');
      changePage(targetPage);
    });
  });

  // Initialize active page based on URL hash or default to home
  const activePage = window.location.hash.substring(1) || 'home';
  changePage(activePage);
});
