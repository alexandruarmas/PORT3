import { useState, useEffect, useCallback, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PropTypes from 'prop-types'

// Memoized Components
const StatusBadge = memo(() => (
  <div className="inline-block lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20">
        <span className="text-white sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-[#6366f1]" />
          Available for Work
        </span>
      </div>
    </div>
  </div>
));

StatusBadge.displayName = 'StatusBadge';

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="relative bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
          Full Stack
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </div>
));

MainTitle.displayName = 'MainTitle';

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-lg bg-[#6366f1]/5 text-sm text-white font-medium transition-colors hover:bg-[#6366f1]/10">
    {tech}
  </div>
));

TechStack.propTypes = {
  tech: PropTypes.string.isRequired
};

TechStack.displayName = 'TechStack';

const CTAButton = memo(({ text, icon: Icon }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (text === 'Projects') {
      window.open('https://github.com/alexandruarmas/', '_blank');
    } else if (text === 'Contact') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="group relative w-[160px] h-11 bg-[#6366f1] rounded-lg text-white font-medium text-sm transition-all duration-300 hover:bg-[#5457d6] active:bg-[#4547c2] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50"
    >
      <span className="absolute inset-0 flex items-center justify-center gap-2">
        <span>{text}</span>
        <Icon className={`w-4 h-4 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300`} />
      </span>
    </button>
  );
});

CTAButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired
};

CTAButton.displayName = 'CTAButton';

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3 rounded-lg bg-white/5 border border-white/10 transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50">
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
    </button>
  </a>
));

SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired
};

SocialLink.displayName = 'SocialLink';

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Modern Web Developer", "UI/UX Enthusiast", "React Expert"];
const TECH_STACK = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/mrarmas02" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/alexandruarmas/" },
  { 
    icon: ({ className }) => (
      <svg 
        viewBox="0 0 24 24" 
        className={className}
        aria-hidden="true"
      >
        <path 
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
    link: "https://x.com/mrarmas02" 
  }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
        mirror: true,
        offset: 100,
        duration: 800,
        easing: 'ease-in-out',
        anchorPlacement: 'top-bottom',
        disableMutationObserver: false,
        startEvent: 'DOMContentLoaded'
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  // Control component mounting state
  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect with useCallback
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  // Apply typing effect
  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  // Lottie configuration
  const lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    renderersettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: "w-full h-full scale-150 lg:scale-125"
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-delay="200">
              <div className="space-y-4 sm:space-y-6">
                <StatusBadge />
                <MainTitle />

                {/* Typing Effect */}
                <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800" data-aos-offset="150">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-offset="150"
                  data-aos-duration="1000">
                  Creating innovative, functional, and user-friendly websites for modern digital solutions.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="200" data-aos-offset="150">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="300" data-aos-offset="150">
                  <CTAButton text="Projects" icon={ExternalLink} />
                  <CTAButton text="Contact" icon={Mail} />
                </div>

                {/* Social Links */}
                <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="400" data-aos-offset="150">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Optimized Lottie Animation */}
            <div className="w-full py-[5%] sm:py-0 lg:w-1/2 h-auto lg:h-[650px] xl:h-[800px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="300"
              data-aos-easing="ease-out-cubic">
              <div className="relative w-full"
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div className="relative z-10 w-full bg-[#6366f1]/5 rounded-2xl p-10 transition-all duration-500"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-anchor-placement="center-bottom">
                  <DotLottieReact {...lottieOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoize the component for better performance
Home.displayName = 'Home';
export default memo(Home);