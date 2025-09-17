import React from 'react';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Mobile Layout (default) - Full width for mobile */}
      <div className="block sm:hidden w-full">
        {children}
      </div>
      
      {/* Tablet Layout - Centered with max width */}
      <div className="hidden sm:block lg:hidden">
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
          {children}
        </div>
      </div>
      
      {/* Desktop Layout - Phone-like container */}
      <div className="hidden lg:block">
        <div className="max-w-sm mx-auto bg-white min-h-screen shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
