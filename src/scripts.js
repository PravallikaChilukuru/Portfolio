document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.navbar nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideUp 1s ease forwards';
        entry.target.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.style.opacity = 0;
    observer.observe(section);
  });

  
  console.log("🚀 Welcome to Raja Rajeswari Naga Pravallika Chilukuru's Portfolio!");

  
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  
  toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });

  
  const typedTextElement = document.getElementById('typed-text');
  if (typedTextElement) {
    new Typed('#typed-text', {
      strings: ["Pravallika here!"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      });
  }

  
  const skillCategoryHeaders = document.querySelectorAll('.skill-category-header');
  skillCategoryHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
      e.preventDefault();
      const card = header.closest('.skill-category-card');
      
    
      if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
      } else {
        document.querySelectorAll('.skill-category-card.expanded').forEach(c => {
          if (c !== card) {
            c.classList.remove('expanded');
          }
        });
        card.classList.add('expanded');
      }
    });
  });

  
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach(item => {
    item.addEventListener('click', function() {
      const role = this.getAttribute('data-role');
      
      experienceItems.forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.experience-detail-content').forEach(detail => {
        detail.classList.remove('active');
      });
      
      
      this.classList.add('active');
      document.querySelector(`[data-role="${role}"].experience-detail-content`).classList.add('active');
    });
  });
});


function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(function() {
  
    const originalText = button.innerHTML;
    button.innerHTML = '<span>✓</span> Copied!';
    button.style.background = 'var(--accent-color)';
    button.style.color = 'white';
    
   
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = '✓ Copied to clipboard!';
    document.body.appendChild(notification);
    
    setTimeout(function() {
      button.innerHTML = originalText;
      button.style.background = '';
      button.style.color = '';
      notification.remove();
    }, 3000);
  }).catch(function(err) {
    console.error('Failed to copy: ', err);
  });
}
