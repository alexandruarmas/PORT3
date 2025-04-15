// Path fixer for custom domain
(function() {
  // Function to intercept fetch requests
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    if (typeof url === 'string' && url.includes('/PORT3/')) {
      const newUrl = url.replace('/PORT3/', '/');
      console.log(`Redirecting fetch from ${url} to ${newUrl}`);
      return originalFetch(newUrl, options);
    }
    return originalFetch(url, options);
  };

  // Function to fix dynamically added images
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(node => {
          // Process element nodes with src attribute
          if (node.nodeType === 1 && node.src && typeof node.src === 'string' && node.src.includes('/PORT3/')) {
            const newSrc = node.src.replace('/PORT3/', '/');
            console.log(`Fixing image path: ${node.src} -> ${newSrc}`);
            node.src = newSrc;
          }
          
          // Process all images inside the added node
          if (node.querySelectorAll) {
            node.querySelectorAll('img[src*="/PORT3/"]').forEach(img => {
              const newSrc = img.src.replace('/PORT3/', '/');
              console.log(`Fixing image path: ${img.src} -> ${newSrc}`);
              img.src = newSrc;
            });
          }
        });
      }
    });
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Process any images that are already on the page
  document.querySelectorAll('img[src*="/PORT3/"]').forEach(img => {
    const newSrc = img.src.replace('/PORT3/', '/');
    console.log(`Fixing existing image path: ${img.src} -> ${newSrc}`);
    img.src = newSrc;
  });
  
  console.log('Path fixer installed successfully');
})(); 