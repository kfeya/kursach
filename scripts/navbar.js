document.addEventListener('DOMContentLoaded', () => {
  const navCheck = document.getElementById('nav-check');
  const navLinks = document.querySelectorAll('nav ul li a');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  function hideMenu() {
      if (navCheck.checked) {
          navCheck.checked = false; 
      }
  }

  navLinks.forEach(link => {
      link.addEventListener('click', hideMenu);
  });

  document.addEventListener('click', (event) => {
      const isClickInsideNavbar = nav.contains(event.target) || hamburger.contains(event.target);
      if (!isClickInsideNavbar && navCheck.checked) {
          hideMenu();
      }
  });
});
