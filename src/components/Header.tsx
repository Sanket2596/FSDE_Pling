import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-white shadow-sm border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-secondary-900">{title}</h1>
              {subtitle && (
                <p className="mt-1 text-sm text-secondary-600">{subtitle}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn-secondary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5 5-5-5h5V7.5a7.5 7.5 0 1 1 15 0V17z" />
              </svg>
              Refresh
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
