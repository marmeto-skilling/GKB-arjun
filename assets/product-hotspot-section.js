document.addEventListener('DOMContentLoaded', function() {
    const hotspots = document.querySelectorAll('.hotspot');
  
    hotspots.forEach(hotspot => {
      hotspot.addEventListener('mouseenter', function() {
        // Show the tooltip when hovering over the hotspot
        const tooltip = this.querySelector('.hotspot__tooltip');
        tooltip.style.display = 'block';
      });
  
      hotspot.addEventListener('mouseleave', function() {
        // Hide the tooltip when not hovering
        const tooltip = this.querySelector('.hotspot__tooltip');
        tooltip.style.display = 'none';
      });
    });
  });
  