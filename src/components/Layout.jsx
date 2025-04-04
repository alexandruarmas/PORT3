import { memo } from 'react';
import PropTypes from 'prop-types';
import AnimatedBackground from './AnimatedBackground';

const Layout = memo(({ children }) => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.displayName = 'Layout';

export default Layout; 