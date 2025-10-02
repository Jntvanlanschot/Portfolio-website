/**
 * Silty Pleasure - Interactive Website JavaScript
 * Handles theme toggle, smooth scrolling, reveal animations, FAQ accordions, and interactions
 */

// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector('.theme-toggle');
    this.themeIcon = document.querySelector('.theme-icon');
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    
    this.init();
  }
  
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  
  getStoredTheme() {
    return localStorage.getItem('theme');
  }
  
  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.updateIcon();
  }
  
  updateIcon() {
    if (!this.themeIcon) return;
    
    if (this.currentTheme === 'dark') {
      this.themeIcon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      `;
    } else {
      this.themeIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      `;
    }
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  
  init() {
    this.setTheme(this.currentTheme);
    
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'light' : 'dark');
      }
    });
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.header = document.querySelector('.header');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.menuToggle = document.querySelector('.menu-toggle');
    this.navMenu = document.querySelector('.nav__list');
    
    this.init();
  }
  
  init() {
    this.handleScroll();
    this.handleActiveLinks();
    this.handleMobileMenu();
    
    window.addEventListener('scroll', throttle(this.handleScroll.bind(this), 100));
    window.addEventListener('resize', debounce(this.handleResize.bind(this), 250));
  }
  
  handleScroll() {
    const scrollY = window.scrollY;
    
    if (this.header) {
      this.header.style.background = scrollY > 50 
        ? 'rgba(var(--bg), 0.95)' 
        : 'rgba(var(--bg), 0.8';
    }
    
    this.handleActiveLinks();
  }
  
  handleActiveLinks() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + this.header.offsetHeight + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        this.setActiveLink(sectionId);
      }
    });
  }
  
  setActiveLink(sectionId) {
    this.navLinks.forEach(link => {
      const linkHref = link.getAttribute('href').substring(1);
      link.classList.toggle('active', linkHref === sectionId);
    });
  }
  
  handleMobileMenu() {
    if (!this.menuToggle || !this.navMenu) return;
    
    this.menuToggle.addEventListener('click', () => {
      const isOpen = this.navMenu.classList.contains('nav__menu--open');
      
      if (isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.header.contains(e.target) && this.navMenu.classList.contains('nav__menu--open')) {
        this.closeMenu();
      }
    });
    
    // Close menu when clicking nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }
  
  openMenu() {
    this.navMenu.classList.add('nav__menu--open');
    this.menuToggle.classList.add('menu-toggle--open');
    document.body.style.overflow = 'hidden';
  }
  
  closeMenu() {
    this.navMenu.classList.remove('nav__menu--open');
    this.menuToggle.classList.remove('menu-toggle--open');
    document.body.style.overflow = '';
  }
  
  handleResize() {
    if (window.innerWidth > 767) {
      this.closeMenu();
    }
  }
}

// Animation Manager
class AnimationManager {
  constructor() {
    this.observers = new Map();
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }
  
  init() {
    this.setupRevealAnimations();
    this.setupParallaxEffects();
    this.setupCardHovers();
    
    if (this.reducedMotion) {
      this.disableAnimations();
    }
  }
  
  setupRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.reducedMotion) {
            entry.target.style.transitionDelay = `${Math.random() * 0.3}s`;
          }
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }
  
  setupParallaxEffects() {
    if (this.reducedMotion) return;
    
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    const parallaxObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.initParallax(entry.target);
        }
      });
    });
    
    parallaxElements.forEach(element => {
      parallaxObserver.observe(element);
    });
  }
  
  initParallax(element) {
    const speed = element.dataset.parallax || 0.5;
    
    const handleParallax = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      element.style.transform = `translateY(${rate}px)`;
    };
    
    window.addEventListener('scroll', throttle(handleParallax, 16));
  }
  
  setupCardHovers() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      if (this.reducedMotion) return;
      
      card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
      });
    });
  }
  
  disableAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// FAQ Manager
class FAQManager {
  constructor() {
    this.faqItems = document.querySelectorAll('.faq__item');
    this.init();
  }
  
  init() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq__question');
      
      if (question) {
        question.addEventListener('click', () => {
          this.toggleFAQ(item);
        });
        
        // Handle keyboard navigation
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleFAQ(item);
          }
        });
      }
    });
  }
  
  toggleFAQ(item) {
    const isOpen = item.getAttribute('aria-expanded') === 'true';
    const question = item.querySelector('.faq__question');
    
    // Close all other FAQ items
    this.faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.setAttribute('aria-expanded', 'false');
        otherItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      }
    });
    
    // Toggle current item
    const newState = !isOpen;
    item.setAttribute('aria-expanded', newState);
    question.setAttribute('aria-expanded', newState);
  }
}

// Smooth Scrolling Manager
class SmoothScrollManager {
  constructor() {
    this.init();
  }
  
  init() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.handleAnchorClick(e, link);
      });
    });
  }
  
  handleAnchorClick(e, link) {
    const href = link.getAttribute('href');
    
    if (href === '#' || href === '') return;
    
    const target = document.querySelector(href);
    
    if (!target) return;
    
    e.preventDefault();
    
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
    const targetPosition = target.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Utility Functions
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

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

// Image Loading Helper
class ImageLoader {
  constructor() {
    this.images = document.querySelectorAll('img[loading="lazy"]');
    this.init();
  }
  
  init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            imageObserver.unobserve(entry.target);
          }
        });
      });
      
      this.images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      this.images.forEach(img => this.loadImage(img));
    }
  }
  
  loadImage(img) {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
    
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    
    img.addEventListener('error', () => {
      img.classList.add('error');
      // Could add a fallback image here
    });
  }
}

// Performance Optimizations
class PerformanceOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    this.preloadCriticalResources();
    this.setupPrefetching();
    this.optimizeAnimations();
  }
  
  preloadCriticalResources() {
    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS) {
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet';
      };
    }
  }
  
  setupPrefetching() {
    // Prefetch likely next pages on hover
    const prefetchLinks = document.querySelectorAll('a[href^="/"]');
    
    prefetchLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        this.prefetchPage(link.href);
      });
    });
  }
  
  prefetchPage(url) {
    if (document.querySelector(`link[href="${url}"]`)) return;
    
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }
  
  optimizeAnimations() {
    // Check if device is low-end
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      document.documentElement.classList.add('reduced-animations');
    }
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize managers
  new ThemeManager();
  new NavigationManager();
  new AnimationManager();
  new FAQManager();
  new SmoothScrollManager();
  new ImageLoader();
  new PerformanceOptimizer();
  
  // Add loaded class to body for CSS transitions
  document.body.classList.add('loaded');
  
  // Log initialization
  console.log('🚀 Silty Pleasure website initialized successfully');
});

// Add additional CSS for mobile menu
const mobileMenuCSS = `
@media (max-width: 767px) {
  .nav__list {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .nav__list.nav__menu--open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .menu-toggle--open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .menu-toggle--open span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle--open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuCSS;
document.head.appendChild(styleSheet);
