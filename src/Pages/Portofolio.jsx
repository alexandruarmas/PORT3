import { useEffect, useState, useCallback, memo } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes, BookOpenCheck, Globe } from "lucide-react";
import TechStackIcon from "../components/icons";
import { techStack } from '../components/techStackData';
import Certificate from "../components/Certificate";

// Separate ShowMore/ShowLess button component - optimized for Apple HIG
const ToggleButton = memo(({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-4 py-2
      text-slate-100 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-[#2C2C2E]/90 
      hover:bg-[#3A3A3C]/90
      rounded-full
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-xl
      group
      relative
      overflow-hidden
      shadow-sm
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "Show Less" : "Show More"}
      <svg
        className={`w-4 h-4 transition-transform duration-300 ${
          isShowingMore ? "rotate-180" : ""
        }`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 9L12 16L5 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/10" />
  </button>
));

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingMore: PropTypes.bool.isRequired
};

ToggleButton.displayName = 'ToggleButton';

// Section header component
const SectionHeader = memo(({ title, subtitle }) => (
  <div className="text-center mb-12" data-aos="fade-up" data-aos-offset="200">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f7] mb-4 tracking-tight">
      {title}
    </h2>
    <div className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      {subtitle}
    </div>
  </div>
));

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired
};

SectionHeader.displayName = 'SectionHeader';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className="overflow-hidden"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, m: 0 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Tech Stack Card Component
const TechStackCard = memo(({ icon, name }) => {
  const needsLightBg = ["nextjs", "express", "github", "vercel"].includes(
    icon.split("/").pop().replace(".svg", "")
  );

  return (
    <div 
      className="group flex flex-col items-center justify-center transition-all duration-300 gap-2"
      role="listitem"
    >
      <div className="p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex items-center justify-center relative group-hover:scale-105">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img 
          src={icon} 
          alt={`${name} icon`}
          className={`
            relative w-10 h-10 object-contain
            transition-all duration-300
            ${needsLightBg ? 'brightness-200' : ''}
          `}
          loading="lazy"
        />
      </div>
      <span className="text-slate-300 font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
});

TechStackCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

TechStackCard.displayName = 'TechStackCard';

// Main Portfolio component
const Portfolio = () => {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(true);
  const [certificates, setCertificates] = useState([]);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [loading, setLoading] = useState(true);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 3 : 6;
  console.log("Window width:", window.innerWidth);
  console.log("Is mobile:", isMobile);

  // Fetch projects
  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Starting to fetch projects...");
      
      // Project list with MacBook simulator project
      const projectsList = [
        {
          id: "makbook-simulator",
          title: "MakBook Simulator",
          description: "A modern web application that simulates the macOS desktop experience, built with Next.js and React. Experience the sleek design and functionality of macOS right in your web browser.",
          tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Radix UI"],
          image: "/PORT3/makbookimage.png", 
          fallbackImage: "/PORT3/cherryos.jpg",
          github: "https://github.com/alexandruarmas/makbook-simulator",
          demo: "https://alexandruarmas.github.io/makbook-simulator/",
          date: "2023-04-02"
        }
      ];
      
      // Process and set projects
      setProjects(projectsList);
      console.log("Projects loaded:", projectsList.length);
      
      // Store in localStorage for project details page
      localStorage.setItem("projects", JSON.stringify(projectsList));
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  }, []);

  // Fetch certificates
  const fetchCertificates = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Starting to fetch certificates...");
      
      // Sample certificates list
      const certificatesList = [
        {
          id: "meta-frontend",
          title: "Meta Front-End Developer Professional Certificate",
          image: "./PORT3/certificates/meta-frontend.svg",
          date: "2024-01",
          issuer: "Meta",
          description: "Advanced front-end development certification covering React, responsive design, and modern web development practices."
        },
        {
          id: "meta-backend",
          title: "Meta Back-End Developer Professional Certificate",
          image: "./PORT3/certificates/meta-backend.svg",
          date: "2024-02",
          issuer: "Meta",
          description: "Comprehensive back-end development certification focusing on APIs, databases, and server-side programming."
        },
        {
          id: "google-ux",
          title: "Google UX Design Professional Certificate",
          image: "./PORT3/certificates/google-ux.svg",
          date: "2024-03",
          issuer: "Google",
          description: "Professional certification in user experience design, covering design thinking, wireframing, and prototyping."
        }
      ];
      
      console.log("Certificate list created:", certificatesList);
      
      // Set certificates
      setCertificates(certificatesList);
      console.log("Certificates state updated, current certificates:", certificatesList.length);
      
      setLoading(false);
      console.log("Loading state set to false");
    } catch (error) {
      console.error("Error in fetchCertificates:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Initialize AOS with more subtle animations following Apple HIG
    AOS.init({
      once: true,
      mirror: false,
      duration: 600,
      offset: 50,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom',
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    
    // Fetch data on component mount
    fetchProjects();
    fetchCertificates();
  }, [fetchProjects, fetchCertificates]);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Calculate visible projects and certificates
  const visibleProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  console.log("Total projects:", projects.length);
  console.log("Visible projects:", visibleProjects.length);
  console.log("Initial items:", initialItems);
  console.log("Show all projects:", showAllProjects);
  const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  // Toggle show more/less for projects and certificates
  const toggleShowMoreProjects = () => setShowAllProjects(!showAllProjects);
  const toggleShowMoreCertificates = () => {
    setShowAllCertificates(!showAllCertificates);
    setCertificates(prev => [...prev]); // Force re-render when toggling
  };

  // Projects Tab loading state component
  const LoadingProjects = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl bg-[#1C1C1E]/80 h-[250px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
               style={{ backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }}
          />
          <div className="p-4 space-y-4">
            <div className="h-6 bg-white/10 rounded-lg w-3/4" />
            <div className="h-4 bg-white/10 rounded-lg w-full" />
            <div className="h-4 bg-white/10 rounded-lg w-5/6" />
            <div className="mt-8 flex justify-between">
              <div className="h-8 bg-white/10 rounded-full w-24" />
              <div className="h-8 bg-white/10 rounded-full w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="Portfolio" className="bg-[#030014] pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Portfolio"
          subtitle={
            <div className="flex items-center justify-center gap-2">
              <BookOpenCheck className="w-14 h-14 text-[#7DF9FF] flex items-center justify-center gap-2" />
              Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
              <BookOpenCheck className="w-14 h-14 text-[#7DF9FF] flex items-center justify-center gap-2" />
            </div>
          }
        />
        
        {/* Material UI Tabs with improved accessibility */}
        <Box 
          sx={{ 
            width: "100%", 
            marginTop: 8,
            '& .MuiTabs-root': {
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }
          }} 
          role="navigation"
        >
          <AppBar 
            position="static" 
            sx={{ 
              backgroundColor: "transparent", 
              boxShadow: "none" 
            }} 
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="Portfolio categories"
              sx={{
                "& .MuiTab-root": {
                  color: "rgb(156 163 175)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#fff",
                    background: "rgba(255, 255, 255, 0.05)"
                  },
                },
                "& .Mui-selected": {
                  color: "#fff !important",
                  fontWeight: 600,
                },
                "& .MuiTabs-indicator": {
                  height: 2,
                  borderRadius: "2px",
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                },
              }}
            >
              <Tab
                label={
                  <div className="flex items-center gap-2">
                    <Boxes className="w-5 h-5" />
                    <span>Tech Stack</span>
                  </div>
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    <span>Portofolio</span>
                  </div>
                }
                {...a11yProps(1)}
              />
              <Tab
                label={
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Certificates</span>
                  </div>
                }
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          
          <TabPanel value={value} index={0}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-4 pb-8 px-3">
              {techStack.map((tech) => (
                <TechStackIcon 
                  key={tech.name}
                  TechStackIcon={tech.icon}
                  Language={tech.name}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="relative min-h-[calc(100vh-20rem)]">
              {loading ? (
                <LoadingProjects />
              ) : visibleProjects.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {visibleProjects.map((project, index) => (
                      <div
                        key={project.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                        data-aos-duration="500"
                        className="transition-transform duration-300 hover:translate-y-[-4px]"
                      >
                        <CardProject project={project} />
                      </div>
                    ))}
                  </div>
                  
                  {projects.length > initialItems && (
                    <div className="sticky bottom-0 flex justify-center mt-8 pb-4 bg-gradient-to-t from-[#030014] to-transparent">
                      <ToggleButton
                        onClick={toggleShowMoreProjects}
                        isShowingMore={showAllProjects}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="col-span-3 text-center py-12 text-gray-400">
                  <p className="mb-4">No projects found in the portfolio view. Please check back later.</p>
                  <a href="https://alexandruarmas.github.io/makbook-simulator/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-300">
                    <Globe className="w-4 h-4 mr-2" />
                    Check out the MakBook Simulator
                  </a>
                </div>
              )}
            </div>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[350px] rounded-xl bg-white/5 animate-pulse"
                    style={{
                      animationDuration: '1.5s',
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                ))
              ) : visibleCertificates.length > 0 ? (
                visibleCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    data-aos-duration="500"
                    className="transition-transform duration-300 hover:translate-y-[-4px]"
                  >
                    <Certificate certificate={certificate} />
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12 text-gray-400">
                  No certificates found. Please check back later.
                </div>
              )}
            </div>

            {!loading && certificates.length > initialItems && (
              <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-duration="400">
                <ToggleButton
                  onClick={toggleShowMoreCertificates}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>
        </Box>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

Portfolio.displayName = 'Portfolio';

export default memo(Portfolio);