import PropTypes from 'prop-types';

const TechStackIcon = ({ TechStackIcon: Icon, Language }) => {
  return (
    <div className="group p-5 rounded-2xl bg-[#1C1C1E]/80 hover:bg-[#2C2C2E]/90 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-[1.03] cursor-pointer shadow-lg hover:shadow-xl backdrop-blur-sm">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] rounded-full opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
        <img 
          src={Icon} 
          alt={`${Language} icon`} 
          className="relative h-14 w-14 md:h-16 md:w-16 transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <span className="text-[#E5E5EA] font-medium text-sm md:text-base tracking-tight group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

// Add PropTypes validation
TechStackIcon.propTypes = {
  TechStackIcon: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired
};

export default TechStackIcon; 