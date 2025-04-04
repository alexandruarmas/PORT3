import PropTypes from 'prop-types';

const SectionHeader = () => (
  <div className="text-center mb-12" data-aos="fade-up" data-aos-offset="200">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f7] mb-4 tracking-tight">
      My Services
    </h2>
    <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      I offer a range of services to help bring your digital vision to life
    </p>
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default SectionHeader; 