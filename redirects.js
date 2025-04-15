// Script to handle redirects from old paths to new ones
document.addEventListener('DOMContentLoaded', function() {
  // Patch for tech stack icons
  const handleMissingIcons = () => {
    // Check all images on the page
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Check if the image failed to load
      img.addEventListener('error', function() {
        const src = this.src;
        // If it's an icon from the /PORT3/ path, try to fix it
        if (src.includes('/PORT3/icons/')) {
          // Replace /PORT3/ with /
          const newSrc = src.replace('/PORT3/icons/', '/icons/');
          console.log(`Fixing icon path: ${src} -> ${newSrc}`);
          this.src = newSrc;
        }
      });
    });
  };

  // Run immediately and also after a short delay to catch dynamically added images
  handleMissingIcons();
  setTimeout(handleMissingIcons, 1000);
  setTimeout(handleMissingIcons, 3000);
}); 