// ===== UTILITY FUNCTIONS =====
function addSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// ===== MOBILE NAV TOGGLE =====
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
  // Close when clicking outside
  document.addEventListener('click', function closeNav(e) {
    if (!navLinks.contains(e.target) && !document.querySelector('.hamburger').contains(e.target)) {
      navLinks.classList.remove('open');
      document.removeEventListener('click', closeNav);
    }
  });
}

// ===== MENU FILTER (INDEX HOME PAGE - STATIC PREVIEW) =====
function filterMenu(button) {
  const category = button.dataset.cat;
  const cards = document.querySelectorAll('#menuGrid .menu-card');
  const tabs = document.querySelectorAll('.menu-tabs .tab');

  // Update cards
  cards.forEach(card => {
    card.classList.toggle('hidden', card.dataset.cat !== category);
  });

  // Update active tab only
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  button.classList.add('active');
}

// ===== DISH IMAGES (VISUAL ENHANCEMENT - OPTIONAL) =====
function initDishImages() {
  const dishImages = document.querySelectorAll('.dish-image');
  // Simple emoji fallback already in HTML, skip advanced logic for static page
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  addSmoothScroll();
  
  // Menu tabs on home preview
  const menuTabs = document.querySelector('.menu-tabs');
  const indexMenuGrid = document.getElementById('menuGrid');
  if (menuTabs && indexMenuGrid) {
    menuTabs.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => filterMenu(tab));
    });
  }
  
  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
});

