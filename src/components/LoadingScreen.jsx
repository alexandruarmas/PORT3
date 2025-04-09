import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, User } from 'lucide-react';
import PropTypes from 'prop-types';

// Loading progress indicator that transforms into icons
const LoadingIcon = ({ Icon, index, progress, isComplete }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: progress >= (index + 1) * 0.33 ? [0, 1.2, 1] : 0,
        opacity: progress >= (index + 1) * 0.33 ? 1 : 0
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative group transition-all duration-500 hover:scale-110">
        <div className="absolute -inset-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#141432]/80 backdrop-blur-sm rounded-full border border-white/10 shadow-lg overflow-hidden">
          {!isComplete ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                  style={{ 
                    height: `${Math.min(100, progress * 100 / ((index + 1) * 0.33))}%`,
                    transition: 'height 0.3s ease-out'
                  }}
                ></div>
              </div>
              <div className="absolute inset-2 rounded-full border border-white/10"></div>
            </div>
          ) : null}
          <Icon className={`w-8 h-8 text-white relative z-10 ${!isComplete ? 'opacity-50' : ''}`} strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  );
};

LoadingIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  index: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired
};

// Animated gradient background
const GradientBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute -inset-10 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -inset-20 bg-gradient-to-l from-[#6366f1]/5 to-[#a855f7]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '750ms' }}></div>
    <div className="absolute right-[10%] top-[20%] w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
    <div className="absolute left-[10%] bottom-[20%] w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
  </div>
);

// Tunnel effect component
const TunnelEffect = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Tunnel effect parameters
    let time = 0;
    const speed = 0.1;
    const segments = 50;
    const segmentLength = 20;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw tunnel segments
      for (let i = segments; i > 0; i--) {
        const distance = i * segmentLength;
        const angle = time * speed * (i / 10);
        
        // Calculate segment position
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        // Draw segment
        ctx.beginPath();
        ctx.arc(x, y, distance * 0.1, 0, Math.PI * 2);
        
        // Create gradient for each segment
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, distance * 0.1);
        gradient.addColorStop(0, `rgba(99, 102, 241, ${0.8 - (i / segments) * 0.7})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, ${0.1 - (i / segments) * 0.1})`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add motion blur effect
        ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';
        ctx.shadowBlur = 30;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Add connecting lines
        if (i < segments) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          const nextX = centerX + Math.cos(angle + speed) * ((i + 1) * segmentLength);
          const nextY = centerY + Math.sin(angle + speed) * ((i + 1) * segmentLength);
          ctx.lineTo(nextX, nextY);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.3 - (i / segments) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
      
      time += 1;
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

// Particle effect component
const ParticleEffect = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = this.getRandomColor();
      }
      
      getRandomColor() {
        const colors = [
          'rgba(99, 102, 241, 0.8)',  // Indigo
          'rgba(168, 85, 247, 0.8)',   // Purple
          'rgba(255, 255, 255, 0.3)',  // White
          'rgba(99, 102, 241, 0.4)',   // Light indigo
          'rgba(168, 85, 247, 0.4)'    // Light purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX * 0.2;
        this.y += this.speedY * 0.2;
        
        if (this.size > 0.2) this.size -= 0.01;
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Array to store particles
    const particles = [];
    const particleCount = Math.min(100, window.innerWidth / 10);
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Connect particles within a certain distance
      const connectParticles = () => {
        const maxDistance = 150;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              const opacity = 1 - (distance / maxDistance);
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.3})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      };
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 0.01;
        if (newProgress >= 1) {
          clearInterval(interval);
          setIsLoadingComplete(true);
          
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 200);
          }, 1000);
          
          return 1;
        }
        return newProgress;
      });
    }, 40);
    
    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: [1, 1.2, 0],
            rotate: [0, 5, 0],
            filter: "blur(30px)",
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              scale: {
                times: [0, 0.5, 1],
                duration: 0.8
              },
              rotate: {
                times: [0, 0.5, 1],
                duration: 0.8
              }
            }
          }}
        >
          <TunnelEffect />
          <GradientBackground />
          <ParticleEffect />
          
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
            {/* Welcome Text */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1,
                y: 0
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold perspective-text">
                <motion.div 
                  className="mb-2 animate-float"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-glow with-text-shadow">
                    Alexandru Armaș
                  </span>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span className="inline-block px-2 bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#6366f1] animate-gradient with-text-shadow">
                    Developer
                  </span>{' '}
                  <span className="inline-block px-2 bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#a855f7] animate-gradient with-text-shadow">
                    Portfolio
                  </span>
                </motion.div>
              </h1>
            </motion.div>
            
            {/* Icons */}
            <motion.div 
              className="flex justify-center gap-8 sm:gap-12 md:gap-16 mb-16 relative"
              initial={{ opacity: 1 }}
              animate={{ 
                y: isLoadingComplete ? -20 : 0,
                opacity: isLoadingComplete ? 0 : 1
              }}
              transition={{ duration: 0.8 }}
            >
              {[Code2, User, Github].map((Icon, index) => (
                <LoadingIcon 
                  key={index}
                  Icon={Icon}
                  index={index}
                  progress={progress}
                  isComplete={isLoadingComplete}
                />
              ))}
            </motion.div>

            {/* Loading Progress */}
            <motion.div 
              className="absolute bottom-10 left-0 right-0 flex justify-center items-center"
              animate={{ opacity: isLoadingComplete ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="relative h-0.5 w-60 bg-white/10 rounded-full overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoadingComplete ? 0 : 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
                  style={{ width: `${progress * 100}%` }}
                ></motion.div>
              </motion.div>
              <motion.div 
                className="ml-4 text-sm text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoadingComplete ? 0 : 1 }}
              >
                {Math.round(progress * 100)}%
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func
};

// Add keyframes and styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0% { transform: translateY(0px) translateX(0px); }
      50% { transform: translateY(-20px) translateX(10px); }
      100% { transform: translateY(0px) translateX(0px); }
    }
    
    @keyframes textGlow {
      0% { text-shadow: 0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(168, 85, 247, 0.3); }
      50% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.8), 0 0 30px rgba(168, 85, 247, 0.5); }
      100% { text-shadow: 0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(168, 85, 247, 0.3); }
    }
    
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .animate-float {
      animation: float 12s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: textGlow 3s ease-in-out infinite;
    }
    
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradientFlow 8s ease infinite;
    }
    
    .perspective-text {
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    
    .with-text-shadow {
      text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  `;
  document.head.appendChild(style);
}

export default LoadingScreen; 