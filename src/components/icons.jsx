import PropTypes from 'prop-types';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group rounded-xl transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-1 cursor-pointer">
      <div className="relative py-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className={`relative h-12 w-12 md:h-14 md:w-14 transform transition-transform duration-300 ${Language === "GitHub" ? "bg-white rounded-full p-1" : ""}`}
        />
      </div>
      <span className="text-slate-300 font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-300 pb-1">
        {Language}
      </span>
    </div>
  );
};

TechStackIcon.propTypes = {
  TechStackIcon: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired
};

export default TechStackIcon; 