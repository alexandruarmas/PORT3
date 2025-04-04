import { useState } from 'react';
import { Eye } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectCardModal = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        <Eye className="w-4 h-4 mr-1.5" />
        <span className="text-sm">Details</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-lg bg-gray-900 p-6 text-white shadow-lg animate-slide-up sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 rounded-md p-2 hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Eye className="h-5 w-5" />
            </button>
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <p className="mb-6 text-gray-400">{description}</p>
            <div className="flex justify-end">
              <button
                className="rounded-md bg-gray-800 px-4 py-2 font-medium hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProjectCardModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectCardModal;