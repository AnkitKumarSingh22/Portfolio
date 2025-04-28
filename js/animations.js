/**
 * Initializes animations for various elements
 */
export function initAnimations() {
  // Animation trigger for sections on scroll
  const animateSections = () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.85;
      
      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
        
        // Animate skill bars when their section becomes visible
        if (section.id === 'skills') {
          animateSkillBars();
        }
        
        // Animate contact items when their section becomes visible
        if (section.id === 'contact') {
          animateContactItems();
        }
        
        // Animate project cards when their section becomes visible
        if (section.id === 'projects') {
          animateProjectCards();
        }
        
        // Animate skill items when their section becomes visible
        if (section.id === 'skills') {
          animateSkillItems();
        }
      }
    });
  };
  
  // Animate skill bars
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const width = bar.parentElement.parentElement.querySelector('.skill-percentage').textContent;
      bar.style.width = width;
    });
  };
  
  // Animate contact items
  const animateContactItems = () => {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
      item.classList.add('visible');
    });
  };
  
  // Animate project cards
  const animateProjectCards = () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 100 * index);
    });
  };
  
  // Animate skill items
  const animateSkillItems = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.classList.add('visible');
    });
  };
  
  // Run animations on scroll
  window.addEventListener('scroll', animateSections);
  
  // Initial check for animations
  animateSections();
}