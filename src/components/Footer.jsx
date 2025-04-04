const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10">
      <div className="container mx-auto px-4">
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6" />
        <div className="text-center pb-4">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © {currentYear}{" "}
            <a href="/" className="hover:underline">
              Alexandru Armaș™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 