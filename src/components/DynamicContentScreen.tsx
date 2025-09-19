import React, { useState } from 'react';
import { useBaconIpsum } from '../hooks/useBaconIpsum';
import DynamicContentCard from './DynamicContentCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface DynamicContentScreenProps {
  onBack: () => void;
}

interface DynamicItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  status: 'available' | 'unavailable' | 'premium';
  category: string;
}

const DynamicContentScreen: React.FC<DynamicContentScreenProps> = ({ onBack }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { content, loading, error, refetch } = useBaconIpsum(8, 'all-meat');

  // Transform Bacon Ipsum content into dynamic items
  const dynamicItems: DynamicItem[] = content.map((paragraph, index) => {
    const words = paragraph.split(' ').slice(0, 3);
    const name = words.join(' ').replace(/[^\w\s]/g, '').trim();
    
    const categories = ['Fitness', 'Wellness', 'Sports', 'Health', 'Training', 'Nutrition', 'Lifestyle', 'Recovery'];
    const emojis = ['💪', '🏃‍♂️', '🧘‍♀️', '🥗', '🏋️‍♂️', '🚴‍♂️', '🏊‍♂️', '🎯'];
    const statuses: ('available' | 'unavailable' | 'premium')[] = ['available', 'unavailable', 'premium'];
    
    return {
      id: `item-${index}`,
      name: name || `Dynamic Item ${index + 1}`,
      description: paragraph.substring(0, 100) + '...',
      image: emojis[index % emojis.length],
      price: Math.floor(Math.random() * 200) + 50,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      category: categories[index % categories.length]
    };
  });

  const handleItemToggle = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleContinue = () => {
    console.log('Selected items:', selectedItems);
    // Handle continue logic here
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col w-full">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-2 text-sm text-gray-900">
        <span className="font-medium">09:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-3">
          <h1 className="text-lg font-semibold text-gray-900">Dynamic Content</h1>
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            API Powered
          </div>
        </div>
        
        <button 
          onClick={refetch}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Refresh content"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6">
        {/* Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dynamic Content from API</h2>
          <p className="text-gray-600 text-sm">
            Content fetched from Bacon Ipsum API with dynamic pricing and status
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-gray-600">Loading dynamic content...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-6">
            <ErrorMessage 
              message={error} 
              onRetry={refetch}
            />
          </div>
        )}

        {/* Dynamic Content Cards */}
        {!loading && !error && (
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4 pb-4">
              {dynamicItems.map((item) => (
                <DynamicContentCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  status={item.status}
                  category={item.category}
                  onSelect={handleItemToggle}
                  isSelected={selectedItems.includes(item.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Selection Summary */}
        {selectedItems.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
            </p>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-8 pt-4">
        <button
          onClick={handleContinue}
          disabled={selectedItems.length === 0}
          className="w-full bg-accent-blue hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-button transition-colors duration-200"
        >
          Continue with {selectedItems.length} selected items
        </button>
      </div>
    </div>
  );
};

export default DynamicContentScreen;
