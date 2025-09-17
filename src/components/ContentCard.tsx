import React from 'react';

interface ContentCardProps {
  title: string;
  content: string;
  index: number;
  loading?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  content, 
  index, 
  loading = false 
}) => {
  if (loading) {
    return (
      <div className="card animate-pulse">
        <div className="h-4 bg-secondary-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-secondary-200 rounded"></div>
          <div className="h-3 bg-secondary-200 rounded w-5/6"></div>
          <div className="h-3 bg-secondary-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="card hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-secondary-900">
          {title}
        </h3>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
          #{index + 1}
        </span>
      </div>
      <p className="text-secondary-700 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default ContentCard;
