import { useEffect, memo } from "react";
import SocialLinks from "../components/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Send, MapPin, Phone, PhoneCall, PhoneForwarded, Mail, Github } from "lucide-react";
import PropTypes from 'prop-types';

// Contact info item component
const ContactInfoItem = memo(({ icon: Icon, title, value, href, delay = 0 }) => (
  <div 
    className="flex gap-4 items-center group" 
    data-aos="fade-up" 
    data-aos-delay={delay}
  >
    <div className="h-10 w-10 rounded-full bg-[#6366f1]/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#6366f1]/30">
      <Icon className="h-5 w-5 text-[#6366f1]" />
    </div>
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      {href ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white font-medium hover:text-[#6366f1] transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-white font-medium">{value}</p>
      )}
    </div>
  </div>
));

ContactInfoItem.displayName = 'ContactInfoItem';

// Add PropTypes for ContactInfoItem
ContactInfoItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
  delay: PropTypes.number
};

// Section header component
const SectionHeader = memo(({ title, subtitle }) => (
  <div className="text-center mb-6" data-aos="fade-up" data-aos-offset="100">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f7] mb-2 tracking-tight">
      {title}
    </h2>
    <div className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      {subtitle}
    </div>
  </div>
));

SectionHeader.displayName = 'SectionHeader';

// Add PropTypes for SectionHeader
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired
};

// Main contact page component
const ContactPage = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  // Contact information data
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alexandruarmas02@gmail.com",
      href: "mailto:alexandruarmas02@gmail.com",
      delay: 100
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+40 (726) 018-217",
      href: "tel:+40726018217",
      delay: 200
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Timișoara, Romania",
      href: null,
      delay: 300
    }
  ];

  return (
    <section id="Contact" className="bg-[#030014] pt-20"> {/* pt-20 controls the spacing/position of the Get in Touch section - increase for more space from Portfolio section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-10">
        <SectionHeader
          title="Get in Touch"
          subtitle={
            <div className="flex items-top justify-top gap-2">
              <PhoneForwarded className="w-8 h-8 text-[#7DF9FF] flex items-top justify-center gap-2" />
              Have a question or want to work together? Connect with me via email or social media.
              <PhoneCall className="w-8 h-8 text-[#7DF9FF] flex items-center justify-center gap-2" />
            </div>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-4">
          {/* Contact Information */}
          <div 
            data-aos="fade-right" 
            data-aos-duration="1000"
            data-aos-offset="200"
            className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-lg border border-white/10 shadow-xl"
          >
            <div className="p-8 flex flex-col">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#6366f1]/20 flex items-center justify-center">
                  <Send className="h-5 w-5 text-[#6366f1]" />
                </div>
                <h3 className="text-2xl font-medium text-white">Connect With Me</h3>
              </div>
              
              <p className="text-gray-400 mb-8">
                Reach out via email or social media for faster responses or to see more of my work and updates.
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map(item => (
                  <ContactInfoItem 
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                    href={item.href}
                    delay={item.delay}
                  />
                ))}
              </div>
              
              <div 
                className="mt-auto" 
                data-aos="fade-up" 
                data-aos-delay="400"
                data-aos-offset="150"
              >
                <p className="text-gray-400 mb-4">Find me on social media</p>
                <SocialLinks />
              </div>
            </div>
          </div>
          
          {/* Contact Form or CTA */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="1000"
            data-aos-offset="200"
            className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-lg border border-white/10 shadow-xl p-8 flex flex-col justify-center"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium text-white mb-2">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-400">
                Currently available for freelance projects and collaborations
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:alexandruarmas02@gmail.com"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                         bg-white/10 border border-white/10
                         overflow-hidden font-medium transition-all duration-300 
                         hover:shadow-lg hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Animated hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                              opacity-0 group-hover:opacity-20 transition-opacity duration-300
                              animate-gradient-xy"></div>
                
                {/* Content */}
                <Mail className="relative z-10 w-5 h-5 text-white" />
                <span className="relative z-10 text-white">Send Email</span>
                <ExternalLink className="relative z-10 w-4 h-4 text-white 
                                      transform group-hover:rotate-45 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://github.com/mrarmas02"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                         bg-white/10 border border-white/10
                         overflow-hidden font-medium transition-all duration-300 
                         hover:shadow-lg hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* Animated hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                              opacity-0 group-hover:opacity-20 transition-opacity duration-300
                              animate-gradient-xy"></div>
                
                {/* Content */}
                <Github className="relative z-10 w-5 h-5 text-white" />
                <span className="relative z-10 text-white">View Github</span>
                <ExternalLink className="relative z-10 w-4 h-4 text-white 
                                      transform group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
            
            <div 
              className="mt-12 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-gray-400 mb-4">Looking for my resume?</p>
              <a 
                href="/Alexandru_Armas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                         bg-white/10 border border-white/10
                         overflow-hidden font-medium transition-all duration-300 
                         hover:shadow-lg hover:scale-[1.02]"
              >
                {/* Animated hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                              opacity-0 group-hover:opacity-20 transition-opacity duration-300
                              animate-gradient-xy"></div>
                
                {/* Content */}
                <span className="relative z-10 text-white">Download Resume</span>
                <ExternalLink className="relative z-10 w-4 h-4 text-white 
                                      transform group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactPage.displayName = 'ContactPage';

export default memo(ContactPage);
