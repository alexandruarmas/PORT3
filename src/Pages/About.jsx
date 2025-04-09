import { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck, Rocket, Coffee, SquareTerminal, Bug } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import PropTypes from 'prop-types'
import profileImage from '../assets/profile.jpg'

// Memoized Components
const Header = memo(() => (
  <div className="text-center mb-12" data-aos="fade-up" data-aos-offset="200">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f7] mb-4 tracking-tight">
      About Me
    </h2>
    <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-2">
      <Sparkles className="w-5 h-5 text-[#7DF9FF] flex items-center justify-center gap-2" />
      Crafting exceptional digital experiences
      <Sparkles className="w-5 h-5 text-[#7DF9FF] flex items-center justify-center gap-2" />
    </p>
  </div>
));

Header.displayName = 'Header';

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          
          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          
          <img 
            src={profileImage}
            alt="Profile" 
            className="w-full h-full object-cover transform scale-105 transition-transform duration-700 group-hover:scale-110" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
));

ProfileImage.displayName = 'ProfileImage';

const SectionTitle = memo(({ title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
    <div className="bg-[#0066cc] p-2 rounded-lg">
      <Icon className="w-5 h-5 text-[#f5f5f7]" />
    </div>
    <h3 className="text-xl font-medium text-[#f5f5f7]">{title}</h3>
  </div>
));

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired
};

SectionTitle.displayName = 'SectionTitle';

const InfoItem = memo(({ icon: Icon, title, value, delay = 0 }) => (
  <div 
    className="flex items-center gap-4 mb-4" 
    data-aos="fade-up" 
    data-aos-delay={delay}
  >
    <div className="bg-[#1c1c1e] p-3 rounded-lg">
      <Icon className="w-5 h-5 text-[#0066cc]" />
    </div>
    <div>
      <h4 className="text-[#86868b] text-sm font-medium">{title}</h4>
      <p className="text-[#f5f5f7] text-base">{value}</p>
    </div>
  </div>
));

InfoItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  delay: PropTypes.number
};

InfoItem.displayName = 'InfoItem';

const ServiceCard = memo(({ title, description, icon: Icon, isFeatured = false }) => (
  <div 
    className={`group relative p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/30 backdrop-blur-sm ${
      isFeatured ? "bg-gradient-to-b from-indigo-900/20 to-purple-900/20" : "bg-white/5"
    }`}
    data-aos="fade-up"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className={`p-3 w-14 h-14 mb-5 flex items-center justify-center rounded-xl ${
        isFeatured 
          ? "bg-gradient-to-r from-indigo-500 to-purple-600" 
          : "bg-white/10"
      }`}>
        <Icon className={`w-6 h-6 ${isFeatured ? "text-white" : "text-indigo-400"}`} />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
));

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isFeatured: PropTypes.bool
};

ServiceCard.displayName = 'ServiceCard';

const AboutPage = () => {
  // Basic information data
  const basicInfo = useMemo(() => [
    { icon: UserCheck, title: "Full Name", value: "Alexandru Armaș" },
    { icon: Coffee, title: "Age", value: "33 Years" },
    { icon: Globe, title: "Location", value: "Romania, Timișoara" },
    { icon: Rocket, title: "Experience", value: "3+ Years" }
  ], []);

  // Services data
  const services = useMemo(() => [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, performant websites and web applications using modern frameworks and technologies.",
      isFeatured: true
    },
    {
      icon: Globe,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with a focus on accessibility and user experience.",
      isFeatured: false
    },
    {
      icon: FileText,
      title: "Social Media & Marketing",
      description: "Developing compelling digital content that engages audiences and drives conversions.",
      isFeatured: false
    },
    {
      icon: Award,
      title: "Technical Consultation",
      description: "Providing expert advice on technology stack selection and implementation strategies.",
      isFeatured: false
    }
  ], []);

  // Initialize AOS animation library
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
        mirror: true,
        offset: 0,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  return (
    <section id="About" className="min-h-screen bg-[#030014] py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        
        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Profile image */}
          <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-offset="300">
            <ProfileImage />
          </div>
          
          {/* Right column - About content */}
          <div className="space-y-8 order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-offset="300">
            <div data-aos="fade-up" data-aos-offset="200">
              <SectionTitle title="Hello,I&apos;m Alexandru Armaș" icon={UserCheck} />
              <p className="text-gray-300 leading-relaxed mb-4">
                A full-stack developer who loves turning ideas into seamless digital experiences. I thrive on solving complex problems and crafting applications that feel smooth, intuitive, and enjoyable to use.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                With a solid grasp of both frontend and backend technologies, I build solutions that are not just functional but also thoughtfully designed. For me, it&apos;s all about creating software that makes life easier and more enjoyable for people.
              </p>
              <p className="text-gray-300 leading-relaxed">
               Let&apos;s build something great together!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {basicInfo.map((item, index) => (
                <InfoItem 
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  delay={index * 100}
                />
              ))}
            </div>

            <div data-aos="fade-up">
              <span 
                className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors cursor-pointer"
              >
                LET&apos;S WORK TOGETHER
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
        
        {/* Services section */}
        <div className="mt-24" data-aos="fade-up" data-aos-offset="250">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-offset="200">
            <h2 className="text-3xl font-semibold text-[#f5f5f7] mb-4 tracking-tight">
              My Services
            </h2>
            <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed flex items-top justify-top gap-2">
              <SquareTerminal className="w-5 h-5 text-[#7DF9FF] flex items-center justify-center gap-2" />
                I offer a range of services to help bring your digital vision to life 
              <Bug className="w-5 h-5 text-[#7DF9FF] flex items-center justify-center gap-2" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                isFeatured={service.isFeatured}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                data-aos-offset="200"
                data-aos-duration="1000"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPage.displayName = 'AboutPage';

export default memo(AboutPage);