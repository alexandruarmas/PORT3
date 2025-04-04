import { Link } from 'react-router-dom';
import { Eye, Globe } from 'lucide-react';
import PropTypes from 'prop-types';

const CardProject = ({ project }) => {
  return (
    <div className="group relative w-full h-full">
      <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1E]/80 backdrop-blur-xl border border-[#38383A]/80 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#48484A]/80 hover:translate-y-[-4px] hover:scale-[1.01] h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/5 via-[#5E5CE6]/5 to-[#FF2D55]/5 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={project.image || project.fallbackImage || "https://placehold.co/600x400/252550/FFFFFF?text=Project+Preview"} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = project.fallbackImage || "https://placehold.co/600x400/252550/FFFFFF?text=Project+Preview";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        </div>
    
        <div className="relative p-5 z-10 flex-grow flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags && project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-[#2C2C2E] text-gray-300 transition-all duration-300 group-hover:bg-[#3A3A3C] group-hover:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-6 flex items-center justify-center gap-3">
            {project.id && (
              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full bg-[#0A84FF] hover:bg-[#409CFF] text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none shadow-sm hover:shadow-[0_0_10px_rgba(10,132,255,0.5)]"
              >
                <Eye className="w-4 h-4 mr-1.5" />
                <span className="text-xs font-medium">Details</span>
              </Link>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full bg-[#34C759]/90 hover:bg-[#34C759] text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none shadow-sm hover:shadow-[0_0_10px_rgba(52,199,89,0.5)]"
              >
                <Globe className="w-4 h-4 mr-1.5" />
                <span className="text-xs font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
CardProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    demo: PropTypes.string,
    github: PropTypes.string,
    image: PropTypes.string,
    fallbackImage: PropTypes.string,
    mockupImage: PropTypes.string
  }).isRequired
};

export default CardProject;