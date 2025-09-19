import React from 'react';

interface RunningActivityTrackingScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

const RunningActivityTrackingScreen: React.FC<RunningActivityTrackingScreenProps> = ({ onBack, onContinue }) => {
  return (
    <div 
      className="text-gray-900 flex flex-col mx-auto relative"
      style={{
        width: '375px',
        height: '812px',
        borderRadius: '26px',
        opacity: 1,
        background: '#FAFAFA',
        boxShadow: '0px 4px 20px rgba(114, 114, 114, 0.1)',
        overflow: 'hidden'
      }}
    >
      {/* Status Bar - Hidden on web */}
      <div className="hidden sm:flex justify-between items-center px-6 pt-3 pb-2 text-sm text-gray-600">
        <span className="font-medium">09:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBack}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <h1 className="text-lg font-semibold text-gray-900">Activity tracking</h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Running</span>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div 
        className="flex flex-col items-start"
        style={{
          width: '375px',
          height: '666px',
          gap: '24px',
          paddingRight: '24px',
          paddingBottom: '12px',
          paddingLeft: '24px',
          opacity: 1,
          overflow: 'hidden'
        }}
      >
        {/* Details Section */}
        <div 
          className="flex flex-col items-start"
          style={{
            width: '327px',
            height: '358px',
            gap: '12px'
          }}
        >
          {/* Text Section */}
          <div 
            className="flex flex-col items-start"
            style={{
              width: '327px',
              height: '30px',
              gap: '4px'
            }}
          >
            {/* Title */}
            <h2 
              className="font-bold"
              style={{
                width: '327px',
                height: '30px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '30px',
                color: '#39434F'
              }}
            >
              Enjoy your running routine
            </h2>

            {/* Calendar */}
            <div 
              className="flex items-center"
              style={{
                width: '194px',
                height: '20px',
                gap: '10px',
                marginBottom: '16px'
              }}
            >
              <div 
                className="flex items-center"
                style={{
                  width: '164px',
                  height: '20px',
                  gap: '6px',
                  opacity: 1
                }}
              >
                {/* Calendar Icon */}
                <div 
                  style={{
                    width: '20px',
                    height: '20px',
                    position: 'relative'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="12" rx="2" stroke="#A0AEC0" strokeWidth="1.5" fill="none"/>
                    <path d="M16 2v4M4 2v4M2 8h16" stroke="#A0AEC0" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span 
                  style={{
                    width: '138px',
                    height: '20px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                    verticalAlign: 'bottom',
                    color: '#606873',
                    opacity: 1
                  }}
                >
                  Today, 5 March 2023
                </span>
              </div>
              {/* Chevron Down */}
              <div 
                style={{
                  width: '20px',
                  height: '20px',
                  position: 'relative'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div 
            className="relative mb-4"
            style={{
              width: '327px',
              height: '282px',
              background: 'url("/map (2).png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid #ECEFF2',
              boxShadow: '0px 0px 5px 0px #0C1A4B0A, 0px 4px 20px -2px #32324705',
              borderRadius: '24px',
              opacity: 1,
              marginTop: '8px'
            }}
          >
            {/* Cut-out Rectangle */}
            <div 
              className="absolute"
              style={{
                width: '59.817073822021484px',
                height: '60px',
                left: '267.18px',
                top: '0px',
                opacity: 1,
                background: '#FAFAFA',
                borderRadius: '24px 24px 0px 0px'
              }}
            >
              {/* Fullscreen Button */}
              <button 
                className="absolute flex items-center justify-center"
                style={{
                  width: '38px',
                  height: '38px',
                  left: '11px',
                  top: '11px',
                  background: '#2A3240',
                  borderRadius: '14px'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3h4v2H5v2H3V3zM13 3h4v4h-2V5h-2V3zM3 13v4h4v-2H5v-2H3zM15 13h2v2h2v2h-4v-4z" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
            </div>


            {/* User Pin */}
            <div 
              className="absolute"
              style={{
                width: '51.31px',
                height: '72.68px',
                left: '59px',
                top: '0px'
              }}
            >
              <div 
                className="absolute"
                style={{
                  width: '51.31px',
                  height: '72.68px',
                  background: 'linear-gradient(360deg, rgba(255, 255, 255, 0.9) -0.44%, rgba(242, 247, 253, 0) 44.97%), rgba(255, 255, 255, 0.6)',
                  borderRadius: '50% 50% 50% 0'
                }}
              >
                <div 
                  className="absolute flex items-center justify-center"
                  style={{
                    width: '38.48px',
                    height: '38.48px',
                    left: '6.41px',
                    top: '7.48px',
                    background: '#FFFFFF',
                    boxShadow: '0px 6.41317px 10.6886px rgba(45, 45, 45, 0.16)',
                    borderRadius: '21.3772px'
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Your habits section */}
        <div 
          className="flex flex-col items-start"
          style={{
            width: '327px',
            height: '272px',
            gap: '16px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Section Header */}
          <div 
            className="flex items-center"
            style={{
              width: '327px',
              height: '26px',
              gap: '6px'
            }}
          >
            <div 
              className="flex items-center"
              style={{
                width: '251px',
                height: '26px'
              }}
            >
              <div 
                className="flex items-center"
                style={{
                  width: '87px',
                  height: '26px',
                  gap: '6px'
                }}
              >
                <h3 
                  className="font-bold"
                  style={{
                    width: '87px',
                    height: '26px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '26px',
                    color: '#39434F'
                  }}
                >
                  Your habits
                </h3>
              </div>
            </div>
            <div 
              className="flex items-center"
              style={{
                width: '70px',
                height: '26px'
              }}
            >
              <button 
                className="flex items-center"
                style={{
                  width: '70px',
                  height: '20px',
                  gap: '6px',
                  borderRadius: '14px'
                }}
              >
                <span 
                  style={{
                    width: '44px',
                    height: '20px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#1B85F3'
                  }}
                >
                  See all
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#1B85F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Cards - Horizontal Scroll */}
          <div 
            className="flex items-start overflow-x-auto scrollbar-hide"
            style={{
              width: '327px',
              height: '230px',
              gap: '16px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              position: 'relative'
            }}
          >
            {/* Calories Burn Card - Selected */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '135px',
                height: '230px',
                background: '#1B85F3',
                boxShadow: '0px 0px 5px rgba(12, 26, 75, 0.04), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)',
                borderRadius: '16px',
                padding: '12px',
                gap: '5px'
              }}
            >
              {/* Text + Toggle */}
              <div 
                className="flex flex-col justify-center items-start"
                style={{
                  width: '111px',
                  height: '58px',
                  gap: '6px'
                }}
              >
                {/* Icon */}
                <div 
                  className="flex items-start"
                  style={{
                    width: '32px',
                    height: '32px',
                    gap: '10px'
                  }}
                >
                  <div 
                    className="flex items-start"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '6px',
                      gap: '10px'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
                <span 
                  style={{
                    width: '90px',
                    height: '20px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#FFFFFF'
                  }}
                >
                  Calories Burn
                </span>
              </div>

              {/* Graphic */}
              <div 
                className="relative"
                style={{
                  width: '111px',
                  height: '108px'
                }}
              >
                {/* Background gradient */}
                <div 
                  className="absolute"
                  style={{
                    width: '135.5px',
                    height: '114.5px',
                    left: '-12px',
                    top: '16px',
                    background: 'linear-gradient(180deg, rgba(18, 104, 204, 0.5) 10.48%, rgba(27, 133, 243, 0) 102.18%)'
                  }}
                ></div>
              </div>

              {/* Value */}
              <div 
                className="flex items-end"
                style={{
                  width: '74px',
                  height: '30px',
                  gap: '5px'
                }}
              >
                <span 
                  style={{
                    width: '35px',
                    height: '30px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#FFFFFF'
                  }}
                >
                  310
                </span>
                <span 
                  style={{
                    width: '34px',
                    height: '26px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#FFFFFF'
                  }}
                >
                  kcal
                </span>
              </div>
            </div>

            {/* Heart Rate Card - Unselected */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '135px',
                height: '230px',
                background: '#FFFFFF',
                boxShadow: '0px 0px 5px rgba(12, 26, 75, 0.04), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)',
                borderRadius: '16px',
                padding: '12px',
                gap: '5px'
              }}
            >
              {/* Text + Toggle */}
              <div 
                className="flex flex-col justify-center items-start"
                style={{
                  width: '111px',
                  height: '60px',
                  gap: '8px'
                }}
              >
                {/* Icon */}
                <div 
                  className="flex items-start"
                  style={{
                    width: '32px',
                    height: '32px',
                    gap: '10px'
                  }}
                >
                  <div 
                    className="flex items-start"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(32, 35, 38, 0.09)',
                      borderRadius: '6px',
                      padding: '6px',
                      gap: '10px'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L10 18l5.682-5.318a4.5 4.5 0 00-6.364-6.364L10 5.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
                <span 
                  style={{
                    width: '72px',
                    height: '20px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#808B9A'
                  }}
                >
                  Heart Rate
                </span>
              </div>

              {/* Graphic */}
              <div 
                className="relative"
                style={{
                  width: '111px',
                  height: '106px'
                }}
              >
                {/* Background gradient */}
                <div 
                  className="absolute"
                  style={{
                    width: '135.5px',
                    height: '118.5px',
                    left: '-12px',
                    top: '16px',
                    background: 'linear-gradient(180deg, #ECEFF2 10.13%, rgba(247, 250, 252, 0) 98.73%)'
                  }}
                ></div>
              </div>

              {/* Value */}
              <div 
                className="flex items-end"
                style={{
                  width: '67px',
                  height: '30px',
                  gap: '5px'
                }}
              >
                <span 
                  style={{
                    width: '25px',
                    height: '30px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#39434F'
                  }}
                >
                  98
                </span>
                <span 
                  style={{
                    width: '37px',
                    height: '25px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#B3BECD'
                  }}
                >
                  bpm
                </span>
              </div>
            </div>

            {/* Steps Card - Unselected */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '135px',
                height: '230px',
                background: '#FFFFFF',
                boxShadow: '0px 0px 5px rgba(12, 26, 75, 0.04), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)',
                borderRadius: '16px',
                padding: '12px',
                gap: '5px'
              }}
            >
              {/* Text + Toggle */}
              <div 
                className="flex flex-col justify-center items-start"
                style={{
                  width: '111px',
                  height: '60px',
                  gap: '8px'
                }}
              >
                {/* Icon */}
                <div 
                  className="flex items-start"
                  style={{
                    width: '32px',
                    height: '32px',
                    gap: '10px'
                  }}
                >
                  <div 
                    className="flex items-start"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(32, 35, 38, 0.09)',
                      borderRadius: '6px',
                      padding: '6px',
                      gap: '10px'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3.36 2.3C3.36 2.3 8.33 9.2 8.33 9.2" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                      <path d="M8.33 35.42C8.33 35.42 14.58 22.92 14.58 22.92" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                      <path d="M18.23 17.71L23.44 20.31" stroke="#808B9A" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <span 
                  style={{
                    width: '40px',
                    height: '20px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#808B9A'
                  }}
                >
                  Steps
                </span>
              </div>

              {/* Graphic */}
              <div 
                className="relative"
                style={{
                  width: '111px',
                  height: '106px'
                }}
              >
                {/* Background gradient */}
                <div 
                  className="absolute"
                  style={{
                    width: '135.5px',
                    height: '118.5px',
                    left: '-12px',
                    top: '16px',
                    background: 'linear-gradient(180deg, #ECEFF2 10.13%, rgba(247, 250, 252, 0) 98.73%)'
                  }}
                ></div>
              </div>

              {/* Value */}
              <div 
                className="flex items-end"
                style={{
                  width: '101px',
                  height: '30px',
                  gap: '5px'
                }}
              >
                <span 
                  style={{
                    width: '58px',
                    height: '30px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#39434F'
                  }}
                >
                  2.50
                </span>
                <span 
                  style={{
                    width: '38px',
                    height: '25px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#B3BECD'
                  }}
                >
                  km
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timer Card - Overlay on Map */}
      <div 
        className="absolute flex items-center bg-white rounded-2xl shadow-sm cursor-pointer"
        style={{
          width: '303px',
          height: '78px',
          background: '#FFFFFFE5',
          boxShadow: '0px 0px 5px 0px #0C1A4B0A, 0px 4px 20px -2px #32324705',
          backdropFilter: 'blur(5px)',
          borderRadius: '16px',
          paddingTop: '14px',
          paddingRight: '4px',
          paddingBottom: '14px',
          paddingLeft: '12px',
          gap: '10px',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 1,
          zIndex: 10,
          transition: 'all 0ms ease-in-out'
        }}
        onClick={() => {
          // Navigate to "Running - Map - Zoom in"
          console.log('Navigate to Running - Map - Zoom in');
        }}
      >
        {/* Content */}
        <div 
          className="flex justify-between items-center"
          style={{
            width: '275px',
            height: '50px',
            gap: '30px'
          }}
        >
          {/* Details */}
          <div 
            className="flex items-center"
            style={{
              width: '233px',
              height: '50px',
              gap: '8px'
            }}
          >
            {/* Map Overview Icon */}
            <div 
              style={{
                width: '32px',
                height: '50px',
                position: 'relative'
              }}
            >
              <svg width="32" height="50" viewBox="0 0 32 50" fill="none">
                {/* Map lines */}
                <path d="M9.32 0.44L9.32 25.84" stroke="#B4DC8A" strokeWidth="1.5" opacity="0.3" transform="rotate(2.56 9.32 13.14)"/>
                <path d="M9.31 4L28.66 18.52" stroke="#B4DC8A" strokeWidth="1.5" opacity="0.3" transform="rotate(-15 19.485 11.26)"/>
                <path d="M1.76 22.56L12.03 46.66" stroke="#82C43C" strokeWidth="1.61867" transform="rotate(-15 6.895 34.61)"/>
                {/* Bullet point */}
                <circle cx="5.94" cy="15.85" r="5.26" fill="#E6F3D8" stroke="#82C43C" strokeWidth="1"/>
                <circle cx="5.94" cy="15.85" r="2.835" fill="#82C43C"/>
              </svg>
            </div>

            {/* Details Text */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '193px',
                height: '50px',
                gap: '2px'
              }}
            >
              {/* Title + Icon */}
              <div 
                className="flex items-center"
                style={{
                  width: '85px',
                  height: '18px',
                  gap: '4px'
                }}
              >
                {/* Timer Icon */}
                <div 
                  style={{
                    width: '16px',
                    height: '16px',
                    position: 'relative'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#606873" strokeWidth="1.5" fill="none"/>
                    <path d="M8 4v4l2 2" stroke="#606873" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span 
                  style={{
                    width: '65px',
                    height: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '13px',
                    lineHeight: '18px',
                    color: '#808B9A'
                  }}
                >
                  Today Run
                </span>
              </div>

              {/* Timer */}
              <div 
                className="flex items-end"
                style={{
                  width: '193px',
                  height: '30px',
                  gap: '10px'
                }}
              >
                {/* Distance */}
                <div 
                  className="flex items-end"
                  style={{
                    width: '65px',
                    height: '30px',
                    gap: '4px'
                  }}
                >
                  <span 
                    style={{
                      width: '43px',
                      height: '30px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '30px',
                      color: '#39434F'
                    }}
                  >
                    10.4
                  </span>
                  <span 
                    style={{
                      width: '18px',
                      height: '24px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#808B9A'
                    }}
                  >
                    km
                  </span>
                </div>

                {/* Divider */}
                <div 
                  style={{
                    width: '16px',
                    height: '0px',
                    border: '1px solid #D9DFE6',
                    transform: 'rotate(90deg)'
                  }}
                ></div>

                {/* Time */}
                <div 
                  className="flex items-end"
                  style={{
                    width: '108px',
                    height: '30px',
                    gap: '4px'
                  }}
                >
                  <span 
                    style={{
                      width: '77px',
                      height: '30px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '30px',
                      color: '#39434F'
                    }}
                  >
                    2:23:45
                  </span>
                  <span 
                    style={{
                      width: '27px',
                      height: '24px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#808B9A'
                    }}
                  >
                    hrs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Button */}
          <button 
            className="flex items-center justify-center"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '14px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="#808B9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Home Indicator - Hidden on web */}
      <div className="hidden sm:flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default RunningActivityTrackingScreen;
