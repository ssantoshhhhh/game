document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Message sent successfully!');
      contactForm.reset();
  });

  // Scroll animations
  const sections = document.querySelectorAll('section');
  const options = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });

  // Skill bars animation
  const skillBars = document.querySelectorAll('.skill-progress');
  window.addEventListener('scroll', () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      skillBars.forEach(skill => {
          const skillTop = skill.getBoundingClientRect().top;
          if(skillTop < triggerBottom) {
              skill.style.width = skill.getAttribute('style').split(':')[1];
          }
      });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });
});


// JavaScript to handle input focus and content
const inputFields = document.querySelectorAll('.input-container input, .input-container textarea');

inputFields.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('focus');
    });

    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.parentNode.classList.remove('focus');
        }
    });

    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.parentNode.classList.add('has-content');
        } else {
            this.parentNode.classList.remove('has-content');
        }
    });
});
