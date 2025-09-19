import React from 'react';

interface SportCardProps {
  sport: {
    id: string;
    name: string;
    practices: number;
    image: string;
    price?: number;
    status?: 'available' | 'unavailable' | 'premium';
  };
  isSelected: boolean;
  onToggle: () => void;
}

const SportCard: React.FC<SportCardProps> = ({ sport, isSelected, onToggle }) => {
  return (
    <div 
      className="w-full cursor-pointer transition-all duration-200 hover:scale-[1.02] rounded-xl p-4 border-2"
      style={{
        background: isSelected ? '#F5BA41' : '#FFFFFF',
        border: isSelected ? '2px solid #E6B13B' : '1px solid #F7FAFC',
        boxShadow: '0px 0px 3.75px rgba(12, 26, 75, 0.05), 0px 3px 15px -1.5px rgba(50, 50, 71, 0.02)',
        borderRadius: '14px',
        minHeight: '110px'
      }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-4 flex-1">
          {/* Selection Indicator */}
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
            isSelected 
              ? 'border-blue-500 bg-blue-500' 
              : 'border-gray-300'
          }`}>
            {isSelected && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </div>
          
          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <h3 
              className="font-semibold text-lg mb-2"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
                color: isSelected ? '#FFFFFF' : '#39434F'
              }}
            >
              {sport.name}
            </h3>
            
            {/* Badge with Bullet and Text */}
            <div 
              className="inline-flex items-center px-2 py-1 rounded-lg border"
              style={{
                border: isSelected ? '1px solid #FFEEC6' : '1px solid #ECEFF2',
                backdropFilter: 'blur(2px)',
                borderRadius: '8px',
                background: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Bullet */}
              <div 
                className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                style={{
                  background: isSelected ? '#FFFFFF' : '#DCF0FF',
                  border: isSelected ? '0.5px solid #E6B13B' : '0.5px solid #1B85F3'
                }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full mx-auto mt-0.5"
                  style={{
                    background: isSelected ? '#E6B13B' : '#1B85F3'
                  }}
                ></div>
              </div>
              
              {/* Text */}
              <span 
                className="text-sm"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 500,
                  fontSize: '13px',
                  lineHeight: '18px',
                  color: isSelected ? '#FFFFFF' : '#808B9A'
                }}
              >
                {sport.practices} practices
              </span>
            </div>
          </div>
        </div>
        
        {/* Sport Icon */}
        <div className="flex-shrink-0 ml-4">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
            style={{
              background: '#D9D9D9',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background circles for depth effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: isSelected ? '#997628' : '#A0AEC0',
                opacity: isSelected ? 0.12 : 0.07,
                transform: 'scale(1.2)'
              }}
            ></div>
            <div 
              className="absolute inset-1 rounded-full"
              style={{
                background: isSelected ? '#997628' : '#606873',
                opacity: isSelected ? 0.1 : 0.04
              }}
            ></div>
            <div 
              className="absolute inset-2 rounded-full"
              style={{
                background: isSelected ? '#1B85F3' : '#202326',
                opacity: isSelected ? 0.02 : 0.02
              }}
            ></div>
            
            {/* Sport Icon */}
            <div className="relative z-10">
              {sport.image}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden pricing info - available but not displayed prominently */}
      {sport.price && (
        <div className="hidden" data-price={sport.price} data-status={sport.status}>
          Price: ${sport.price} | Status: {sport.status}
        </div>
      )}
    </div>
  );
};

export default SportCard;
