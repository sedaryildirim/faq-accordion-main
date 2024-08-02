document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('details');
  
    details.forEach(detail => {
      const summary = detail.querySelector('summary');
      const icon = summary.querySelector('.icon-toggle');
  
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          icon.src = './assets/images/icon-minus.svg';
        } else {
          icon.src = './assets/images/icon-plus.svg';
        }
      });
    });
  });