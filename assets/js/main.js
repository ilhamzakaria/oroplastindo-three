/* =========================================
   ORO PLASTINDO - MAIN JAVASCRIPT
   ========================================= */

(function() {
  'use strict';

  // ========== DOCUMENT READY ==========
  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollToTop();
    initSmoothScroll();
    initFormValidation();
  });

  // ========== NAVIGATION FUNCTIONS ==========

  function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    if (hamburger) {
      hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        if (hamburger) {
          hamburger.classList.remove('active');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu && !navMenu.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        if (hamburger) {
          hamburger.classList.remove('active');
        }
      }
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', debounce(function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
      } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
      }
    }, 100));

    // Set active navigation link based on current page
    setActiveNavLink();

    // Update active link on scroll (for single page)
    window.addEventListener('scroll', debounce(updateScrollSpy, 100));
  }

  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href').split('/').pop();
      
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function updateScrollSpy() {
    // Implementation for scroll spy if needed
    // This updates nav links based on scroll position
    
    // Get all sections with id
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
  }

  // ========== SCROLL TO TOP BUTTON ==========

  function initScrollToTop() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (!scrollToTopBtn) return;

    window.addEventListener('scroll', debounce(function() {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    }, 100));

    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========== SMOOTH SCROLL ==========

  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;

        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ========== FORM VALIDATION ==========

  function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const errors = validateForm(form);

    if (Object.keys(errors).length > 0) {
      displayFormErrors(form, errors);
      return;
    }

    displayFormSuccess(form);
    console.log('Form Data:', Object.fromEntries(formData));
    
    // Reset form
    setTimeout(() => {
      form.reset();
      clearFormMessages(form);
    }, 2000);
  }

  function validateForm(form) {
    const errors = {};
    const fields = form.querySelectorAll('[required]');

    fields.forEach(field => {
      const value = field.value.trim();
      const fieldName = field.name;
      const fieldType = field.type;

      // Check if empty
      if (!value) {
        errors[fieldName] = `${field.getAttribute('placeholder') || fieldName} is required`;
        return;
      }

      // Email validation
      if (fieldType === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errors[fieldName] = 'Please enter a valid email address';
        }
      }

      // Phone validation
      if (fieldType === 'tel') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 7) {
          errors[fieldName] = 'Please enter a valid phone number';
        }
      }

      // File validation
      if (fieldType === 'file') {
        if (field.files.length === 0) {
          errors[fieldName] = 'Please select a file';
        } else {
          const file = field.files[0];
          const maxSize = 5 * 1024 * 1024; // 5MB
          const allowedExtensions = ['pdf', 'doc', 'docx'];
          const fileExtension = file.name.split('.').pop().toLowerCase();

          if (file.size > maxSize) {
            errors[fieldName] = 'File size must be less than 5MB';
          } else if (!allowedExtensions.includes(fileExtension)) {
            errors[fieldName] = 'Only PDF and DOC files are allowed';
          }
        }
      }
    });

    return errors;
  }

  function displayFormErrors(form, errors) {
    clearFormMessages(form);

    Object.keys(errors).forEach(fieldName => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      if (field) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errors[fieldName];
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
      }
    });
  }

  function displayFormSuccess(form) {
    clearFormMessages(form);

    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.textContent = 'Form submitted successfully!';
    form.insertBefore(successDiv, form.firstChild);

    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 3000);
  }

  function clearFormMessages(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    const successMessages = form.querySelectorAll('.alert-success');
    const errorFields = form.querySelectorAll('.error');

    errorMessages.forEach(msg => msg.remove());
    successMessages.forEach(msg => msg.remove());
    errorFields.forEach(field => field.classList.remove('error'));
  }

  // ========== FILE INPUT PREVIEW ==========

  window.previewFile = function(input) {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const fileName = document.querySelector('.file-name');
        if (fileName) {
          fileName.textContent = file.name;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // ========== UTILITY FUNCTIONS ==========

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // ========== MODAL FUNCTIONS ==========

  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('modal-enter');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('modal-exit');
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('modal-enter', 'modal-exit');
        document.body.style.overflow = 'auto';
      }, 300);
    }
  };

  // Close modal when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      const modalId = e.target.id;
      closeModal(modalId);
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        if (modal.style.display === 'flex') {
          closeModal(modal.id);
        }
      });
    }
  });

  // ========== FILTER FUNCTIONS ==========

  window.filterItems = function(category) {
    const items = document.querySelectorAll('[data-category]');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter items
    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'grid';
        setTimeout(() => {
          item.classList.add('animate-fade');
        }, 10);
      } else {
        item.style.display = 'none';
        item.classList.remove('animate-fade');
      }
    });
  };

  // ========== COUNTER ANIMATION ==========

  window.animateCounters = function() {
    const counters = document.querySelectorAll('.counter-value');

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      updateCounter();
    });
  };

  // Trigger counter animation when section comes into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('stats-section')) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  // ========== LAZY IMAGE LOADING ==========

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ========== BACK TO TOP ANIMATION ==========

  window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ========== THEME TOGGLE (optional) ==========

  window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  };

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // ========== CONSOLE LOG ==========

  console.log('%c Oro Plastindo Company Profile', 'font-size: 20px; color: #70BD3D; font-weight: bold;');
  console.log('%c Website loaded successfully!', 'font-size: 14px; color: #666;');

})();
