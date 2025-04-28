// Import modules
import { initThemeToggle } from './theme.js';
import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initAnimations } from './animations.js';
import { initContactForm } from './contact.js';

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme toggle functionality
  initThemeToggle();
  
  // Initialize navigation functionality
  initNavigation();
  
  // Initialize projects section
  initProjects();
  
  // Initialize animations
  initAnimations();
  
  // Initialize contact form
  initContactForm();
});