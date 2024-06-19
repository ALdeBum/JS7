document.querySelectorAll('.header').forEach(header => {
  header.addEventListener('click', function() {
      
      document.querySelectorAll('.content').forEach(content => {
          content.style.display = 'none';
      });
      
      const content = this.nextElementSibling;
      if (content) {
          content.style.display = 'block';
      }
  });
});
