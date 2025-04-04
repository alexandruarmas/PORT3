import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, 
  Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";
import PropTypes from 'prop-types';
import ProjectMockup from './ProjectMockup';

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
        {feature}
      </span>
    </li>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.string.isRequired
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
          <Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-blue-200">{techStackCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Technologies Used</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
          <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-purple-200">{featuresCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Key Features</div>
        </div>
      </div>
    </div>
  );
};

ProjectStats.propTypes = {
  project: PropTypes.shape({
    TechStack: PropTypes.array,
    Features: PropTypes.array
  })
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Project detail loading - ID:", id);
    
    try {
      const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
      console.log("Stored projects:", storedProjects);
      
      const selectedProject = storedProjects.find((p) => String(p.id) === id);
      console.log("Selected project:", selectedProject);
      
      if (selectedProject) {
        // Add project-specific enhancements based on title
        let enhancedFeatures = [];
        
        if (selectedProject.title === "E-Commerce Dashboard") {
          enhancedFeatures = [
            "Real-time sales analytics with dynamic chart visualization",
            "Inventory management system with low stock alerts",
            "Customer segmentation and behavior analysis",
            "Advanced order processing with multi-stage workflow",
            "Sales forecasting using historical data trends",
            "Responsive admin interface with dark/light mode",
            "Performance metrics and KPI tracking",
            "Customizable dashboard widgets and layouts",
            "Secure authentication with role-based permissions",
            "Export reports in multiple formats (PDF, CSV, Excel)"
          ];
        } 
        else if (selectedProject.title === "AI Content Generator") {
          enhancedFeatures = [
            "Integration with OpenAI's GPT-4 API for content generation",
            "User-friendly editor with formatting and styling options",
            "Content templates for blog posts, social media, and marketing copy",
            "History tracking and version control for generated content",
            "Tone and style customization options",
            "Multilingual content generation support",
            "SEO optimization suggestions for generated content",
            "Personal content library with tagging and search",
            "Team collaboration features with shared workspaces",
            "Usage analytics and content performance metrics"
          ];
        }
        else if (selectedProject.title === "Fitness Tracker App") {
          enhancedFeatures = [
            "Personalized workout plan creation and tracking",
            "Nutrition logging with calorie and macro counting",
            "Progress visualization with interactive charts",
            "Exercise library with video demonstrations",
            "Fitness goal setting and milestone tracking",
            "Social sharing and community challenges",
            "Integration with popular fitness wearables",
            "Body measurement and weight tracking",
            "Workout reminders and scheduled notifications",
            "Offline mode for tracking without internet connection"
          ];
        }
        else if (selectedProject.title === "Smart Home Control Panel") {
          enhancedFeatures = [
            "Unified control interface for multiple smart home ecosystems",
            "Voice command integration with natural language processing",
            "Customizable automation rules and scenes",
            "Energy consumption monitoring and optimization suggestions",
            "Detailed device status and health monitoring",
            "Secure remote access from anywhere",
            "Real-time notifications for important events",
            "User activity logs and access control",
            "Integration with Google Home, Alexa, and HomeKit",
            "Dynamic floor plan visualization for device locations"
          ];
        }
        else if (selectedProject.title === "Recipe Sharing Platform") {
          enhancedFeatures = [
            "Ingredient-based recipe search and filtering",
            "Nutritional analysis and dietary information for recipes",
            "User profiles with favorite recipes and cooking history",
            "Social features including comments, ratings, and sharing",
            "Personalized recipe recommendations based on preferences",
            "Meal planning and grocery list generation",
            "Step-by-step cooking instructions with timer integration",
            "Recipe scaling for different serving sizes",
            "Cooking time and difficulty level indicators",
            "Collection and cookbook creation capabilities"
          ];
        }
        else if (selectedProject.title === "Collaborative Whiteboard App") {
          enhancedFeatures = [
            "Real-time multi-user collaboration with cursor tracking",
            "Rich drawing tools including shapes, text, and freehand",
            "Sticky notes and comment functionality",
            "Document and image uploads with annotation",
            "Infinite canvas with zoom and pan capabilities",
            "Session recording and playback for later review",
            "Template library for common diagrams and layouts",
            "Version history and change tracking",
            "Export options in multiple formats (PNG, PDF, SVG)",
            "Secure project sharing with permission controls"
          ];
        }
        else if (selectedProject.title === "MakBook Simulator") {
          enhancedFeatures = [
            "Authentic macOS-like desktop environment with interactive elements",
            "Modern and responsive UI using Tailwind CSS",
            "Light/dark mode support for comfortable viewing",
            "Beautiful animations and transitions for a realistic experience",
            "Interactive desktop applications and dock",
            "Finder file browser simulation",
            "System preferences and control center",
            "Performance optimized for various browsers and devices",
            "Built with TypeScript for type safety and reliability",
            "Modular React component architecture"
          ];
        }
        else {
          enhancedFeatures = [];
        }
        
        const enhancedProject = {
          ...selectedProject,
          Title: selectedProject.title,
          Description: selectedProject.description,
          Link: selectedProject.demo,
          Github: selectedProject.github,
          TechStack: selectedProject.tags || [],
          Features: enhancedFeatures,
          mockupImages: selectedProject.title === "MakBook Simulator" 
            ? {
                desktop: selectedProject.image || selectedProject.fallbackImage,
                mobile: selectedProject.image || selectedProject.fallbackImage,
                tablet: selectedProject.image || selectedProject.fallbackImage
              }
            : {
                desktop: selectedProject.image || selectedProject.fallbackImage || "https://placehold.co/800x450/1a1a2e/FFFFFF?text=" + encodeURIComponent(selectedProject.title),
                mobile: "https://placehold.co/400x800/1a1a2e/FFFFFF?text=" + encodeURIComponent(selectedProject.title + " Mobile"),
                tablet: "https://placehold.co/600x800/1a1a2e/FFFFFF?text=" + encodeURIComponent(selectedProject.title + " Tablet")
              }
        };
        console.log("Enhanced project:", enhancedProject);
        setProject(enhancedProject);
      } else {
        console.error("Project not found with ID:", id);
        // Redirect back to projects page after a short delay
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Error loading project details:", error);
      // Redirect back to projects page after a short delay
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
      {/* Background animations remain unchanged */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
              <span>Projects</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white/90 truncate">{project.Title}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  {project.Title}
                </h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                  {project.Description}
                </p>
              </div>

              <ProjectStats project={project} />

              <div className="flex flex-wrap gap-3 md:gap-4">
                {/* Live Demo Button */}
                <a 
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
                >
                  <Globe className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                
                {/* GitHub Button */}
                <a 
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-medium border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  Technologies Used
                </h3>
                {project.TechStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.TechStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm md:text-base text-gray-400 opacity-50">No technologies added.</p>
                )}
              </div>
            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              <ProjectMockup 
                projectImages={project.mockupImages}
                title={project.Title}
              />

              {/* Fitur Utama */}
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <div className="flex items-center gap-2 md:gap-3">
                  <Star className="text-purple-400 w-4 h-4 md:w-5 md:h-5" />
                  <h3 className="text-lg md:text-xl font-semibold text-white/90">Key Features</h3>
                </div>
                
                {project.Features && project.Features.length > 0 ? (
                  <ul className="space-y-2">
                    {project.Features.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm md:text-base text-gray-400 opacity-50">No features added.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
