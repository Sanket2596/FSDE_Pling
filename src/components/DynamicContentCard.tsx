import React from 'react';

interface DynamicContentCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  status?: 'available' | 'unavailable' | 'premium';
  category?: string;
  practices?: number;
  color?: string;
  onSelect?: (id: string) => void;
  isSelected?: boolean;
  loading?: boolean;
}

const DynamicContentCard: React.FC<DynamicContentCardProps> = ({
  id,
  name,
  description,
  image,
  price,
  status = 'available',
  category,
  practices,
  color = 'bg-gray-500',
  onSelect,
  isSelected = false,
  loading = false
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'unavailable':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'premium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'unavailable':
        return 'Unavailable';
      case 'premium':
        return 'Premium';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return (
      <div className="w-full rounded-xl p-4 bg-white border-2 border-gray-200 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-200"></div>
            <div className="flex-1 min-w-0">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
          <div className="text-4xl opacity-50">⏳</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`w-full rounded-xl p-4 cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 ${
        isSelected 
          ? 'bg-yellow-100 border-yellow-400' 
          : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect?.(id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
            isSelected 
              ? 'border-accent-blue bg-accent-blue' 
              : 'border-gray-300'
          }`}>
            {isSelected && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-lg">
              {name}
            </h3>
            {practices && (
              <p className="text-gray-600 text-sm">
                {practices} available practices
              </p>
            )}
            {/* Hidden pricing info - available but not displayed prominently */}
            {price && (
              <div className="hidden" data-price={price} data-status={status}>
                Price: ${price} | Status: {getStatusText(status)}
              </div>
            )}
          </div>
        </div>
        <div className="text-4xl opacity-80 flex-shrink-0 ml-4">
          {image}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCard;
