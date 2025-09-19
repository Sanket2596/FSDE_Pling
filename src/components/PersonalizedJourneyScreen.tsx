import React, { useState } from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import RunningDetailScreen from './RunningDetailScreen';
import RunningActivityTrackingScreen from './RunningActivityTrackingScreen';

interface PersonalizedJourneyScreenProps {
  onContinue: () => void;
  onBack: () => void;
  onShowDynamicContent?: () => void;
}

const PersonalizedJourneyScreen: React.FC<PersonalizedJourneyScreenProps> = ({
  onContinue,
  onBack,
  onShowDynamicContent
}) => {
  const { userProfile, loading, error, refetch } = useUserProfile();
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [showRunningScreen, setShowRunningScreen] = useState<boolean>(false);
  const [showRunningTrackingScreen, setShowRunningTrackingScreen] = useState<boolean>(false);
  const [showMetricsView, setShowMetricsView] = useState<boolean>(false);

  const handleRunningClick = () => {
    setSelectedActivity('running');
    setShowRunningScreen(true);
  };

  const handleDailyReportsClick = () => {
    setShowRunningTrackingScreen(true);
  };

  const handleOtherActivityClick = (activity: string) => {
    setSelectedActivity(activity);
    setShowMetricsView(true);
  };

  const handleBackFromRunning = () => {
    setShowRunningScreen(false);
    setShowMetricsView(false);
  };

  const handleStartRunning = () => {
    setShowRunningTrackingScreen(true);
  };

  const handleBackFromTracking = () => {
    setShowRunningTrackingScreen(false);
  };

  if (showRunningTrackingScreen) {
    return <RunningActivityTrackingScreen onBack={handleBackFromTracking} onContinue={onContinue} />;
  }

  if (showRunningScreen) {
    return <RunningDetailScreen onBack={handleBackFromRunning} onContinue={onContinue} onStartRunning={handleStartRunning} onDailyReports={handleDailyReportsClick} />;
  }

  return (
    <div 
      className="text-gray-900 flex flex-col mx-auto relative"
      style={{
        width: '375px',
        height: '812px',
        background: '#FAFAFA',
        boxShadow: '0px 4px 20px rgba(114, 114, 114, 0.1)',
        borderRadius: '26px'
      }}
    >
          {/* Status Bar */}
      <div 
        className="flex justify-between items-center"
        style={{
          padding: '12px 24px 0px 24px',
          width: '375px',
          height: '44px'
        }}
      >
        <span 
          style={{
            fontFamily: 'SF Pro Text',
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '18px',
            color: '#101113'
          }}
        >
          09:41
        </span>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
            </div>
          </div>

      {/* Navigation Header + Divider */}
      <div 
        className="flex items-center justify-between"
        style={{
          width: '375px',
          height: '68px',
          gap: '12px',
          paddingTop: '12px',
          paddingRight: '24px',
          paddingLeft: '24px',
          paddingBottom: '0px'
        }}
      >
        {/* Left Side - Profile Picture and Greeting */}
            <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div 
            className="rounded-full"
            style={{
              width: '48px',
              height: '48px',
              border: '1px solid #E5E7EB',
              background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 48\'%3E%3Ccircle cx=\'24\' cy=\'24\' r=\'24\' fill=\'%23E5E7EB\'/%3E%3Ctext x=\'24\' y=\'30\' text-anchor=\'middle\' font-size=\'20\' fill=\'%236B7280\'%3E👤%3C/text%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
              
              {/* Greeting Text */}
              <div>
            <p 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#6B7280',
                margin: '0px'
              }}
            >
              Hello,
            </p>
            <h1 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#111827',
                margin: '0px'
              }}
            >
              Thomas
                </h1>
              </div>
            </div>

            {/* Right Side - Navigation Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Separator */}
          <div 
            style={{
              width: '1px',
              height: '24px',
              background: '#D1D5DB'
            }}
          ></div>
              
              {/* Menu Icon */}
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

      {/* Divider */}
      <div 
        style={{
          width: '375px',
          height: '1px',
          background: '#E5E7EB',
          margin: '0px 0px 12px 0px'
        }}
      ></div>

      {/* Main Content */}
      <div 
        className="flex flex-col"
        style={{
          width: '375px',
          height: '666px',
          gap: '24px',
          paddingTop: '12px',
          paddingRight: '24px',
          paddingBottom: '12px',
          paddingLeft: '24px'
        }}
      >
        {/* Main Feature Card */}
        <div 
          className="flex flex-row justify-between items-center"
          style={{
            padding: '20px',
            width: '327px',
            height: '120px',
            background: '#1B85F3',
            borderRadius: '16px',
            boxShadow: '0px 4px 20px rgba(27, 133, 243, 0.2)'
          }}
        >
          {/* Text Content */}
          <div 
            className="flex flex-col items-start"
            style={{
              gap: '8px',
              width: '180px'
            }}
          >
            {/* Title */}
            <h2 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '28px',
                color: '#FFFFFF',
                margin: '0px'
              }}
            >
              Create your Custom Workout Plan
            </h2>
            
            {/* Subtitle */}
            <p 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#E3F2FD',
                margin: '0px'
              }}
            >
              Training&Nutrition
            </p>
          </div>

          {/* Image */}
          <div 
            style={{
              width: '80px',
              height: '80px',
              background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 80 80\'%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'35\' fill=\'%23FFFFFF\' fill-opacity=\'0.1\'/%3E%3Ctext x=\'40\' y=\'50\' text-anchor=\'middle\' font-size=\'40\' fill=\'%23FFFFFF\'%3E🧘‍♀️%3C/text%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px'
            }}
          ></div>
        </div>

        {/* What are you up to today? Section */}
        <div 
          className="flex flex-col items-start"
          style={{
            gap: '16px',
            width: '327px'
          }}
        >
          {/* Section Title */}
          <h3 
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '24px',
              color: '#39434F',
              margin: '0px'
            }}
          >
            What are you up to today?
          </h3>

          {/* Activity Cards */}
          <div 
            className="flex flex-row items-start"
            style={{
              gap: '12px',
              width: '327px'
            }}
          >
            {/* Running Card */}
            <div 
              className="flex flex-col items-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={handleRunningClick}
              style={{
                padding: '16px 12px',
                gap: '8px',
                width: '75px',
                height: '85px',
                background: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
            >
              {/* Running Icon */}
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13.5 2C13.5 2.82843 12.8284 3.5 12 3.5C11.1716 3.5 10.5 2.82843 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2Z" fill="#808B9A"/>
                  <path d="M9 8L12 6L15 8L18 6L21 8" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                  <path d="M12 11L15 9L18 11" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                  <path d="M18 8L20 6" stroke="#808B9A" strokeWidth="1.5"/>
                  <path d="M20 6L22 4" stroke="#808B9A" strokeWidth="1.5"/>
                </svg>
              </div>
              
              {/* Label */}
              <span 
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#606873',
                  textAlign: 'center'
                }}
              >
                Running
              </span>
            </div>

            {/* Cycling Card */}
            <div 
              className="flex flex-col items-center"
              style={{
                padding: '16px 12px',
                gap: '8px',
                width: '75px',
                height: '85px',
                background: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
            >
              {/* Cycling Icon */}
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="6" cy="18" r="3" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                  <circle cx="18" cy="18" r="3" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                  <path d="M9 18L15 18" stroke="#808B9A" strokeWidth="1.5"/>
                  <path d="M12 6L15 18" stroke="#808B9A" strokeWidth="1.5"/>
                  <path d="M12 6L6 12" stroke="#808B9A" strokeWidth="1.5"/>
                </svg>
              </div>
              
              {/* Label */}
              <span 
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#606873',
                  textAlign: 'center'
                }}
              >
                Cycling
              </span>
            </div>

            {/* Yoga Card */}
            <div 
              className="flex flex-col items-center"
              style={{
                padding: '16px 12px',
                gap: '8px',
                width: '75px',
                height: '85px',
                background: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
            >
              {/* Yoga Icon */}
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L15 8L12 13L9 8Z" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                  <path d="M9 8L15 8" stroke="#808B9A" strokeWidth="1.5"/>
                  <path d="M12 13L12 20" stroke="#808B9A" strokeWidth="1.5"/>
                </svg>
          </div>
              
              {/* Label */}
              <span 
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#606873',
                  textAlign: 'center'
                }}
              >
                Yoga
              </span>
            </div>

            {/* Hiking Card */}
            <div 
              className="flex flex-col items-center"
              style={{
                padding: '16px 12px',
                gap: '8px',
                width: '75px',
                height: '85px',
                background: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
            >
              {/* Hiking Icon */}
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20L8 12L12 16L16 8L21 20" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                </svg>
          </div>
              
              {/* Label */}
              <span 
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#606873',
                  textAlign: 'center'
                }}
              >
                Hiking
              </span>
            </div>
          </div>
        </div>

        {/* Your habits Section */}
        <div 
          className="flex flex-col items-start"
          style={{
            gap: '16px',
            width: '327px'
          }}
        >
          {/* Section Title */}
          <h3 
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '24px',
              color: '#39434F',
              margin: '0px'
            }}
          >
            Your habits
          </h3>

          {/* Habits Cards */}
          <div 
            className="flex flex-row items-start"
            style={{
              gap: '16px',
              width: '327px'
            }}
          >
            {/* Goals Card */}
            <div 
              className="flex flex-col items-center"
              style={{
                padding: '20px 16px',
                gap: '16px',
                width: '155px',
                height: '140px',
                background: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
            >
              {/* Target Illustration */}
              <div 
                style={{
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, #FC5A5A 0%, #973636 50%, #FFFFFF 100%)',
                    borderRadius: '50%',
                    border: '2px solid #FFEADB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div 
                    style={{
                      width: '20px',
                      height: '20px',
                      background: '#FFC542',
                      borderRadius: '50%'
                    }}
                  ></div>
                </div>
              </div>

              {/* Text Content */}
              <div 
                className="flex flex-col items-center"
                style={{
                  gap: '4px',
                  width: '100%'
                }}
              >
                <h4 
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#39434F',
                    margin: '0px',
                    textAlign: 'center'
                  }}
                >
                  Goals
                </h4>
                <p 
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#808B9A',
                    margin: '0px',
                    textAlign: 'center'
                  }}
                >
                  73% achieved
                </p>
                    </div>
                  </div>

                  {/* Nutrition Card */}
            <div 
              className="flex flex-col items-center"
              style={{
                padding: '20px 16px',
                gap: '16px',
                width: '155px',
                height: '140px',
                background: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
            >
              {/* Avocado Illustration */}
              <div 
                style={{
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#5B892A',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    position: 'relative'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      width: '16px',
                      height: '16px',
                      background: '#C98C39',
                      borderRadius: '50%',
                      top: '12px',
                      left: '12px'
                    }}
                  ></div>
                    </div>
                  </div>

              {/* Text Content */}
              <div 
                className="flex flex-col items-center"
                style={{
                  gap: '4px',
                  width: '100%'
                }}
              >
                <h4 
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#39434F',
                    margin: '0px',
                    textAlign: 'center'
                  }}
                >
                  Nutrition
                </h4>
                <p 
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#808B9A',
                    margin: '0px',
                    textAlign: 'center'
                  }}
                >
                  3 hours of fasting
                </p>
                      </div>
                    </div>
                  </div>

                  {/* Daily Reports Card */}
                  <div 
            className="flex flex-row items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleDailyReportsClick}
            style={{
              padding: '20px',
              width: '327px',
              height: '80px',
              background: '#FFFFFF',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px'
            }}
          >
            {/* Text Content */}
            <div 
              className="flex flex-col items-start"
              style={{
                gap: '4px',
                width: '200px'
              }}
            >
              <h4 
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#39434F',
                  margin: '0px'
                }}
              >
                Daily Reports
              </h4>
              <p 
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#808B9A',
                  margin: '0px'
                }}
              >
                All your details in a single place.
              </p>
                    </div>

            {/* Arrow Button */}
            <button 
              style={{
                width: '40px',
                height: '40px',
                background: '#FFFFFF',
                border: '1px solid #1B85F3',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 14L11 10L7 6" stroke="#1B85F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
      </div>

      {/* Home Indicator - Hidden on web */}
      <div className="hidden sm:flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default PersonalizedJourneyScreen;