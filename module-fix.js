// Fix for dynamic module imports
(function() {
  const originalImport = window.import;
  window.import = function(moduleId) {
    if (typeof moduleId === 'string' && moduleId.includes('/PORT3/')) {
      const newModuleId = moduleId.replace('/PORT3/', '/');
      console.log(`Redirecting module import from ${moduleId} to ${newModuleId}`);
      return originalImport(newModuleId);
    }
    return originalImport(moduleId);
  };
  console.log('Module import fix installed');
})(); 