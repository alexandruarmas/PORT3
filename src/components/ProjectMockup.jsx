import PropTypes from 'prop-types';
import { useState } from 'react';

const ProjectMockup = ({ projectImages, title }) => {
  const [activeView, setActiveView] = useState('desktop'); // desktop, mobile, or tablet

  const renderMockup = () => {
    const imageUrl = projectImages[activeView] || projectImages.desktop; // fallback to desktop if view not available

    // Device frame styles based on viewport
    const deviceFrames = {
      desktop: (
        <div className="relative w-full max-w-[800px] mx-auto">
          {/* Desktop frame - special aspect ratio for MakBook */}
          <div className={`relative ${title.includes("MakBook") ? 'aspect-[4/3]' : 'aspect-[16/9]'} bg-[#1a1a2e] rounded-lg overflow-hidden border-4 border-[#252540] shadow-xl ${title.includes("MakBook") ? 'p-0' : ''}`}>
            {/* Browser header - hide for MakBook */}
            {!title.includes("MakBook") && (
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#252540] flex items-center justify-between px-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* URL bar */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-5 bg-[#1a1a2e] rounded-full flex items-center justify-center">
                  <div className="text-gray-400 text-xs">app.example.com</div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-sm bg-[#1a1a2e]"></div>
                  <div className="w-4 h-4 rounded-sm bg-[#1a1a2e]"></div>
                </div>
              </div>
            )}
            
            {/* Content area with app-like UI */}
            <div className={`${title.includes("MakBook") ? 'absolute inset-0' : 'absolute top-8 left-0 right-0 bottom-0'} flex flex-col p-0`}>
              {/* Determine the interface based on project title */}
              {title.includes("MakBook") ? (
                <div className="w-full h-full relative bg-black">
                  <img 
                    src={imageUrl} 
                    alt="MakBook Simulator" 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              ) : title.includes("E-Commerce Dashboard") ? (
                <div className="w-full h-full bg-[#0f172a] flex flex-col">
                  {/* Dashboard header */}
                  <div className="h-12 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between px-4">
                    <div className="text-white font-semibold">Dashboard</div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#334155]"></div>
                      <div className="w-8 h-8 rounded-full bg-[#0ea5e9]"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="flex-1 flex p-4 gap-4">
                    {/* Sidebar */}
                    <div className="w-1/5 bg-[#1e293b] rounded-lg p-3 flex flex-col gap-2">
                      <div className="w-full h-8 bg-[#2563eb] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                    </div>
                    
                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-4">
                      {/* Stats */}
                      <div className="flex gap-4 h-24">
                        <div className="flex-1 bg-[#1e293b] rounded-lg"></div>
                        <div className="flex-1 bg-[#1e293b] rounded-lg"></div>
                        <div className="flex-1 bg-[#1e293b] rounded-lg"></div>
                      </div>
                      
                      {/* Chart */}
                      <div className="flex-1 bg-[#1e293b] rounded-lg p-4">
                        <div className="w-full h-6 bg-[#334155] rounded-md mb-4 w-1/4"></div>
                        <div className="flex justify-between h-[calc(100%-2rem)] items-end px-4">
                          <div className="w-[5%] h-[30%] bg-[#3b82f6] rounded-t-md"></div>
                          <div className="w-[5%] h-[45%] bg-[#3b82f6] rounded-t-md"></div>
                          <div className="w-[5%] h-[60%] bg-[#3b82f6] rounded-t-md"></div>
                          <div className="w-[5%] h-[40%] bg-[#3b82f6] rounded-t-md"></div>
                          <div className="w-[5%] h-[75%] bg-[#3b82f6] rounded-t-md"></div>
                          <div className="w-[5%] h-[55%] bg-[#3b82f6] rounded-t-md"></div>
                          <div className="w-[5%] h-[65%] bg-[#3b82f6] rounded-t-md"></div>
                          <div className="w-[5%] h-[80%] bg-[#3b82f6] rounded-t-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : title.includes("AI Content") ? (
                <div className="w-full h-full bg-[#0f172a] flex flex-col">
                  {/* AI app header */}
                  <div className="h-12 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between px-4">
                    <div className="text-white font-semibold">Content Generator</div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#334155]"></div>
                    </div>
                  </div>
                  
                  {/* AI app content */}
                  <div className="flex-1 flex p-4 gap-4">
                    {/* Sidebar */}
                    <div className="w-1/4 bg-[#1e293b] rounded-lg p-3 flex flex-col gap-2">
                      <div className="w-full h-8 bg-[#8b5cf6] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                      <div className="w-full h-24 mt-auto bg-[#334155] rounded-md"></div>
                    </div>
                    
                    {/* Editor area */}
                    <div className="flex-1 flex flex-col gap-4 bg-[#1e293b] rounded-lg p-4">
                      <div className="flex gap-2">
                        <div className="flex-1 h-10 bg-[#334155] rounded-md"></div>
                        <div className="w-24 h-10 bg-[#8b5cf6] rounded-md"></div>
                      </div>
                      <div className="flex-1 bg-[#0f172a] rounded-lg p-3">
                        <div className="w-full h-4 bg-[#334155] rounded-md mb-2"></div>
                        <div className="w-[80%] h-4 bg-[#334155] rounded-md mb-2"></div>
                        <div className="w-[60%] h-4 bg-[#334155] rounded-md mb-2"></div>
                        <div className="w-[70%] h-4 bg-[#334155] rounded-md mb-2"></div>
                        <div className="w-[40%] h-4 bg-[#334155] rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : title.includes("Fitness") ? (
                <div className="w-full h-full bg-[#0f172a] flex flex-col">
                  {/* Fitness app header */}
                  <div className="h-12 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between px-4">
                    <div className="text-white font-semibold">Fitness Tracker</div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#334155]"></div>
                    </div>
                  </div>
                  
                  {/* Fitness app content */}
                  <div className="flex-1 flex p-4 gap-4">
                    {/* Navigation */}
                    <div className="w-1/5 bg-[#1e293b] rounded-lg p-3 flex flex-col gap-2">
                      <div className="w-full h-8 bg-[#10b981] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                    </div>
                    
                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-4">
                      {/* Stats boxes */}
                      <div className="flex gap-4 h-28">
                        <div className="flex-1 bg-[#1e293b] rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#10b981]"></div>
                        </div>
                        <div className="flex-1 bg-[#1e293b] rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#f59e0b]"></div>
                        </div>
                        <div className="flex-1 bg-[#1e293b] rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#3b82f6]"></div>
                        </div>
                      </div>
                      
                      {/* Progress chart */}
                      <div className="flex-1 bg-[#1e293b] rounded-lg p-4">
                        <div className="w-full h-6 bg-[#334155] rounded-md mb-4 w-1/3"></div>
                        <div className="w-full h-[calc(100%-2rem)] flex items-center">
                          <div className="h-[70%] w-full flex items-end justify-around">
                            <div className="h-[40%] w-[10%] bg-[#10b981] rounded-t-md"></div>
                            <div className="h-[60%] w-[10%] bg-[#10b981] rounded-t-md"></div>
                            <div className="h-[75%] w-[10%] bg-[#10b981] rounded-t-md"></div>
                            <div className="h-[55%] w-[10%] bg-[#10b981] rounded-t-md"></div>
                            <div className="h-[80%] w-[10%] bg-[#10b981] rounded-t-md"></div>
                            <div className="h-[90%] w-[10%] bg-[#10b981] rounded-t-md"></div>
                            <div className="h-[65%] w-[10%] bg-[#10b981] rounded-t-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : title.includes("Smart Home") ? (
                <div className="w-full h-full bg-[#0f172a] flex flex-col">
                  {/* Smart home app header */}
                  <div className="h-12 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between px-4">
                    <div className="text-white font-semibold">Smart Home Control</div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#334155]"></div>
                    </div>
                  </div>
                  
                  {/* Smart home content */}
                  <div className="flex-1 grid grid-cols-3 gap-4 p-4">
                    <div className="bg-[#1e293b] rounded-lg p-3 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#3b82f6] mb-3 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#93c5fd]"></div>
                      </div>
                      <div className="w-16 h-4 bg-[#334155] rounded-md"></div>
                    </div>
                    <div className="bg-[#1e293b] rounded-lg p-3 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#334155] mb-3 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#4b5563]"></div>
                      </div>
                      <div className="w-16 h-4 bg-[#334155] rounded-md"></div>
                    </div>
                    <div className="bg-[#1e293b] rounded-lg p-3 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#334155] mb-3 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#4b5563]"></div>
                      </div>
                      <div className="w-16 h-4 bg-[#334155] rounded-md"></div>
                    </div>
                    <div className="bg-[#1e293b] rounded-lg p-3 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#334155] mb-3 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#4b5563]"></div>
                      </div>
                      <div className="w-16 h-4 bg-[#334155] rounded-md"></div>
                    </div>
                    <div className="bg-[#1e293b] rounded-lg p-3 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#f59e0b] mb-3 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#fcd34d]"></div>
                      </div>
                      <div className="w-16 h-4 bg-[#334155] rounded-md"></div>
                    </div>
                    <div className="bg-[#1e293b] rounded-lg p-3 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#334155] mb-3 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#4b5563]"></div>
                      </div>
                      <div className="w-16 h-4 bg-[#334155] rounded-md"></div>
                    </div>
                  </div>
                </div>
              ) : title.includes("Recipe") ? (
                <div className="w-full h-full bg-[#0f172a] flex flex-col">
                  {/* Recipe app header */}
                  <div className="h-12 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between px-4">
                    <div className="text-white font-semibold">Recipe Platform</div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#334155]"></div>
                    </div>
                  </div>
                  
                  {/* Recipe app content */}
                  <div className="flex-1 flex p-4 gap-4">
                    <div className="w-1/4 bg-[#1e293b] rounded-lg p-3 flex flex-col gap-2">
                      <div className="w-full h-8 bg-[#ef4444] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                      <div className="w-full h-8 bg-[#334155] rounded-md"></div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="bg-[#1e293b] rounded-lg overflow-hidden">
                        <div className="h-24 bg-[#ef4444]"></div>
                        <div className="p-3">
                          <div className="w-2/3 h-4 bg-[#334155] rounded-md mb-2"></div>
                          <div className="w-1/2 h-3 bg-[#334155] rounded-md"></div>
                        </div>
                      </div>
                      <div className="bg-[#1e293b] rounded-lg overflow-hidden">
                        <div className="h-24 bg-[#3b82f6]"></div>
                        <div className="p-3">
                          <div className="w-2/3 h-4 bg-[#334155] rounded-md mb-2"></div>
                          <div className="w-1/2 h-3 bg-[#334155] rounded-md"></div>
                        </div>
                      </div>
                      <div className="bg-[#1e293b] rounded-lg overflow-hidden">
                        <div className="h-24 bg-[#8b5cf6]"></div>
                        <div className="p-3">
                          <div className="w-2/3 h-4 bg-[#334155] rounded-md mb-2"></div>
                          <div className="w-1/2 h-3 bg-[#334155] rounded-md"></div>
                        </div>
                      </div>
                      <div className="bg-[#1e293b] rounded-lg overflow-hidden">
                        <div className="h-24 bg-[#10b981]"></div>
                        <div className="p-3">
                          <div className="w-2/3 h-4 bg-[#334155] rounded-md mb-2"></div>
                          <div className="w-1/2 h-3 bg-[#334155] rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : title.includes("Whiteboard") ? (
                <div className="w-full h-full bg-[#f8fafc] flex flex-col">
                  {/* Whiteboard app header */}
                  <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
                    <div className="text-gray-800 font-semibold">Collaborative Whiteboard</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500"></div>
                      <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                  
                  {/* Whiteboard tools */}
                  <div className="h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
                    <div className="w-8 h-8 rounded bg-gray-100"></div>
                    <div className="w-8 h-8 rounded bg-gray-100"></div>
                    <div className="w-8 h-8 rounded bg-gray-100"></div>
                    <div className="w-8 h-8 rounded bg-gray-100"></div>
                    <div className="w-8 h-8 rounded bg-gray-100"></div>
                    <div className="w-8 h-8 rounded bg-blue-500"></div>
                  </div>
                  
                  {/* Whiteboard content */}
                  <div className="flex-1 bg-gray-50 p-6">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-100 rounded-md shadow-md"></div>
                    <div className="absolute top-[40%] left-[30%] w-40 h-24 bg-blue-100 rounded-md shadow-md"></div>
                    <div className="absolute top-[60%] left-[60%] w-36 h-20 bg-pink-100 rounded-md shadow-md"></div>
                    <div className="absolute top-[30%] left-[60%] transform rotate-12 w-48 h-2 bg-black"></div>
                    <div className="absolute top-[45%] left-[40%] transform -rotate-12 w-32 h-2 bg-black"></div>
                  </div>
                </div>
              ) : title.includes("MakBook") ? (
                <div className="w-full h-full relative bg-black">
                  <img 
                    src={imageUrl} 
                    alt="MakBook Simulator" 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              ) : (
                // Default UI mockup
                <div className="w-full h-full bg-[#0f172a] flex items-center justify-center">
                  <img 
                    src={imageUrl} 
                    alt={title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Desktop stand - different style for MakBook */}
          {title.includes("MakBook") ? (
            <>
              <div className="h-4 w-28 bg-gradient-to-b from-[#333] to-[#222] mx-auto -mt-1 rounded-b-lg"></div>
              <div className="h-1 w-48 bg-[#111] mx-auto rounded-full shadow-lg"></div>
            </>
          ) : (
            <>
              <div className="h-12 w-24 bg-gradient-to-b from-[#252540] to-[#1a1a2e] mx-auto -mt-1 rounded-b-lg"></div>
              <div className="h-3 w-40 bg-[#252540] mx-auto rounded-full shadow-lg"></div>
            </>
          )}
        </div>
      ),
      tablet: (
        <div className="relative w-full max-w-[500px] mx-auto">
          {/* Tablet frame */}
          <div className="relative aspect-[4/3] bg-[#1a1a2e] rounded-2xl overflow-hidden border-[10px] border-[#252540] shadow-xl">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-[#333]"></div>
            {title.includes("MakBook") ? (
              <div className="absolute inset-0 bg-black">
                <img 
                  src={imageUrl} 
                  alt={`${title} tablet view`}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            ) : (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-2">
                <img 
                  src={imageUrl} 
                  alt={`${title} tablet view`}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            )}
          </div>
        </div>
      ),
      mobile: (
        <div className="relative w-full max-w-[280px] mx-auto">
          {/* Mobile frame */}
          <div className="relative aspect-[9/16] bg-[#1a1a2e] rounded-[32px] overflow-hidden border-[12px] border-[#252540] shadow-xl">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 rounded-full bg-[#252540]"></div>
            {title.includes("MakBook") ? (
              <div className="absolute inset-0 bg-black">
                <img 
                  src={imageUrl} 
                  alt={`${title} mobile view`}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            ) : (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <img 
                  src={imageUrl} 
                  alt={`${title} mobile view`}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            )}
          </div>
          {/* Home button */}
          <div className="w-12 h-12 rounded-full bg-[#252540] mx-auto mt-3 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-[#333]"></div>
          </div>
        </div>
      )
    };

    return deviceFrames[activeView];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveView('desktop')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeView === 'desktop' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Desktop
        </button>
        <button
          onClick={() => setActiveView('tablet')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeView === 'tablet' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Tablet
        </button>
        <button
          onClick={() => setActiveView('mobile')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeView === 'mobile' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Mobile
        </button>
      </div>
      <div className="flex justify-center items-center min-h-[400px] py-4">
        {renderMockup()}
      </div>
    </div>
  );
};

ProjectMockup.propTypes = {
  projectImages: PropTypes.shape({
    desktop: PropTypes.string.isRequired,
    mobile: PropTypes.string,
    tablet: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectMockup; 