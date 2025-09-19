import React from 'react';

interface RunningMapZoomScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

const RunningMapZoomScreen: React.FC<RunningMapZoomScreenProps> = ({ onBack, onContinue }) => {
  return (
    <div 
      className="text-gray-900 flex flex-col mx-auto relative"
      style={{
        width: '375px',
        height: '812px',
        background: '#FAFAFA',
        boxShadow: '0px 4px 20px rgba(114, 114, 114, 0.1)',
        borderRadius: '26px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Status Bar + Nav Header */}
      <div 
        className="flex flex-col items-start"
        style={{
          width: '375px',
          height: '124px',
          background: '#FAFAFA',
          isolation: 'isolate',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          opacity: 1
        }}
      >
        {/* Status Bar / iOS iPhone — with phone notch */}
        <div 
          className="relative"
          style={{
            width: '375px',
            height: '44px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
            zIndex: 1
          }}
        >
          {/* Status Icons */}
          <div 
            className="absolute flex flex-row items-center"
            style={{
              width: '66.5px',
              height: '12px',
              right: '12.5px',
              top: '16px',
              gap: '5px'
            }}
          >
            {/* Network Signal */}
            <div 
              className="flex flex-row items-end"
              style={{
                width: '16.5px',
                height: '11px',
                gap: '1.5px'
              }}
            >
              <div style={{ width: '3px', height: '4px', background: '#101113' }}></div>
              <div style={{ width: '3px', height: '6px', background: '#101113' }}></div>
              <div style={{ width: '3px', height: '8px', background: '#101113' }}></div>
              <div style={{ width: '3px', height: '11px', background: 'rgba(16, 17, 19, 0.2)' }}></div>
            </div>

            {/* Wi-Fi */}
            <div 
              className="relative"
              style={{
                width: '15px',
                height: '11px',
                background: '#101113'
              }}
            >
              <div 
                className="absolute"
                style={{
                  width: '15px',
                  right: '30px',
                  top: '4.17%',
                  bottom: '56.18%',
                  background: '#000000'
                }}
              ></div>
              <div 
                className="absolute"
                style={{
                  width: '9.77px',
                  right: '32.61px',
                  top: '35.88%',
                  bottom: '33.74%',
                  background: '#000000'
                }}
              ></div>
              <div 
                className="absolute"
                style={{
                  width: '4.54px',
                  right: '35.23px',
                  top: '67.62%',
                  bottom: '4.17%',
                  background: '#000000'
                }}
              ></div>
            </div>

            {/* Battery */}
            <div 
              className="relative"
              style={{
                width: '25px',
                height: '12px'
              }}
            >
              <div 
                className="absolute"
                style={{
                  left: '0px',
                  right: '2.39px',
                  top: '0%',
                  bottom: '0%',
                  border: '1px solid rgba(16, 17, 19, 0.6)',
                  borderRadius: '2.66667px'
                }}
              ></div>
              <div 
                className="absolute"
                style={{
                  width: '1.36px',
                  right: '0px',
                  top: '32.35%',
                  bottom: '32.35%',
                  background: 'rgba(16, 17, 19, 0.6)'
                }}
              ></div>
              <div 
                className="absolute"
                style={{
                  left: '2.06px',
                  right: '4.45px',
                  top: '17.65%',
                  bottom: '17.65%',
                  background: '#101113',
                  borderRadius: '1.33333px'
                }}
              ></div>
            </div>
          </div>

          {/* Time */}
          <div 
            className="absolute flex flex-row justify-center items-center"
            style={{
              width: '75px',
              height: '18px',
              left: '10px',
              top: '13px',
              gap: '10px'
            }}
          >
            <span 
              style={{
                width: '42px',
                height: '18px',
                fontFamily: 'SF Pro Text',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '18px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                letterSpacing: '-0.17px',
                color: '#101113'
              }}
            >
              09:41
            </span>
          </div>

          {/* Notch */}
          <div 
            className="absolute"
            style={{
              width: '150px',
              height: '31px',
              left: '112px',
              top: '-2px',
              background: '#101113'
            }}
          ></div>
        </div>

        {/* Navigation Header + Divider */}
        <div 
          className="flex flex-col items-center"
          style={{
            width: '375px',
            height: '80px',
            padding: '12px 24px',
            gap: '12px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
            zIndex: 0
          }}
        >
          {/* Content */}
          <div 
            className="flex flex-row items-center"
            style={{
              width: '327px',
              height: '56px',
              gap: '10px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0
            }}
          >
            {/* Left Icon */}
            <div 
              className="flex flex-row justify-center items-center"
              style={{
                width: '20px',
                height: '22px',
                borderRadius: '14px',
                padding: '9px 0px',
                gap: '6px',
                flex: 'none',
                order: 0,
                flexGrow: 0
              }}
            >
              <button 
                onClick={onBack}
                className="flex items-center justify-center"
                style={{
                  width: '20px',
                  height: '20px'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#808B9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Line Divider */}
            <div 
              className="flex flex-row items-start"
              style={{
                width: '0px',
                height: '56px',
                transform: 'rotate(-180deg)',
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0
              }}
            >
              <div 
                style={{
                  width: '56px',
                  height: '0px',
                  border: '1px solid #ECEFF2',
                  transform: 'rotate(-90deg)',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              ></div>
            </div>

            {/* Map Overview */}
            <div 
              className="relative"
              style={{
                width: '47px',
                height: '56px',
                flex: 'none',
                order: 2,
                alignSelf: 'stretch',
                flexGrow: 0
              }}
            >
              {/* Vector 19 */}
              <div 
                className="absolute"
                style={{
                  width: '1.85px',
                  height: '29.29px',
                  left: '16.25px',
                  top: '4.55px',
                  opacity: 0.3,
                  border: '2px solid #B4DC8A',
                  transform: 'rotate(17.56deg)'
                }}
              ></div>

              {/* Vector 20 */}
              <div 
                className="absolute"
                style={{
                  width: '23px',
                  height: '20px',
                  left: '20.5px',
                  top: '10px',
                  opacity: 0.3,
                  border: '2px solid #B4DC8A'
                }}
              ></div>

              {/* Vector 18 */}
              <div 
                className="absolute"
                style={{
                  width: '13px',
                  height: '28px',
                  left: '6px',
                  top: '29px',
                  border: '2px solid #82C43C'
                }}
              ></div>

              {/* Tag Components/Bullets */}
              <div 
                className="absolute flex flex-row items-start"
                style={{
                  width: '13px',
                  height: '13px',
                  left: '12.5px',
                  top: '23px',
                  padding: '3px',
                  gap: '10px',
                  background: '#E6F3D8',
                  border: '1px solid #82C43C',
                  borderRadius: '100px'
                }}
              >
                <div 
                  style={{
                    width: '7px',
                    height: '7px',
                    background: '#82C43C',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                ></div>
              </div>
            </div>

            {/* Text */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '230px',
                height: '56px',
                flex: 'none',
                order: 3,
                flexGrow: 1
              }}
            >
              {/* My Route */}
              <div 
                style={{
                  width: '54px',
                  height: '16px',
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '16px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  color: '#808B9A',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0
                }}
              >
                My Route
              </div>

              {/* Running to Hyde Park */}
              <div 
                style={{
                  width: '165px',
                  height: '24px',
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '24px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  color: '#39434F',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0
                }}
              >
                Running to Hyde Park
              </div>

              {/* Frame 740 */}
              <div 
                className="flex flex-row items-center"
                style={{
                  width: '122px',
                  height: '16px',
                  gap: '8px',
                  flex: 'none',
                  order: 2,
                  flexGrow: 0
                }}
              >
                {/* Frame 741 */}
                <div 
                  className="flex flex-row items-center"
                  style={{
                    width: '55px',
                    height: '16px',
                    gap: '4px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  {/* Clock Icon */}
                  <div 
                    className="relative"
                    style={{
                      width: '16px',
                      height: '16px',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#B3BECD" strokeWidth="1"/>
                      <path d="M8 4v4l3 3" stroke="#B3BECD" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Mon 5 */}
                  <div 
                    style={{
                      width: '35px',
                      height: '16px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '16px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      color: '#808B9A',
                      flex: 'none',
                      order: 1,
                      flexGrow: 0
                    }}
                  >
                    Mon 5
                  </div>
                </div>

                {/* Line Divider */}
                <div 
                  style={{
                    width: '12px',
                    height: '0px',
                    border: '1px solid #D9DFE6',
                    transform: 'rotate(90deg)',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0
                  }}
                ></div>

                {/* 11:00 AM */}
                <div 
                  style={{
                    width: '51px',
                    height: '16px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '16px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    color: '#808B9A',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0
                  }}
                >
                  11:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div 
        className="relative"
        style={{
          width: '375px',
          height: '650px',
          flex: 'none',
          order: 1,
          flexGrow: 1,
          opacity: 1
        }}
      >
        {/* Map Background */}
        <div 
          className="absolute"
          style={{
            width: '375px',
            height: '650px',
            left: '0px',
            top: '0px',
            background: 'url("/map (2).png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Activity Cards Overlay - Bottom of Map */}
        <div 
          className="absolute flex flex-row items-start"
          style={{
            width: '327px',
            height: '155px',
            left: '24px',
            top: '495px',
            padding: '0px',
            gap: '16px'
          }}
        >
          {/* Card Vertical - Switch (Calories) */}
          <div 
            className="flex flex-row items-start"
            style={{
              width: '99.67px',
              height: '155px',
              gap: '16px',
              flex: 'none',
              order: 0,
              flexGrow: 1
            }}
          >
            <div 
              className="flex flex-col justify-between items-start"
              style={{
                width: '99.67px',
                height: '155px',
                padding: '13px',
                gap: '5px',
                background: '#1B85F3',
                boxShadow: '0px 0px 5px rgba(12, 26, 75, 0.04), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)',
                borderRadius: '16px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 1
              }}
            >
              {/* Photo + Toggle */}
              <div 
                className="flex flex-row items-start"
                style={{
                  margin: '0 auto',
                  width: '73.67px',
                  height: '76px',
                  padding: '0px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                <div 
                  className="relative"
                  style={{
                    width: '73.67px',
                    height: '76px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 1
                  }}
                >
                  {/* Deco Ellipse */}
                  <div 
                    className="absolute"
                    style={{
                      width: '131px',
                      height: '131px',
                      left: '-57px',
                      top: '-55px'
                    }}
                  >
                    <div 
                      className="absolute"
                      style={{
                        width: '131px',
                        height: '131px',
                        left: '0px',
                        top: '0px',
                        background: '#F7FAFC',
                        opacity: 0.07
                      }}
                    ></div>
                    <div 
                      className="absolute"
                      style={{
                        width: '112.55px',
                        height: '112.55px',
                        left: '9.23px',
                        top: '9.23px',
                        background: '#FFFFFF',
                        opacity: 0.04
                      }}
                    ></div>
                    <div 
                      className="absolute"
                      style={{
                        width: '86.72px',
                        height: '86.72px',
                        left: '22.14px',
                        top: '22.14px',
                        background: '#FFFFFF',
                        opacity: 0.08
                      }}
                    ></div>
                  </div>

                  {/* Flame Icon */}
                  <div 
                    className="absolute"
                    style={{
                      width: '30px',
                      height: '30px',
                      left: '-2px',
                      top: '1px'
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 5C15 5 12 8 12 12C12 15.3137 14.6863 18 18 18C21.3137 18 24 15.3137 24 12C24 8 21 5 15 5Z" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text + Toggle */}
              <div 
                className="flex flex-row items-center"
                style={{
                  margin: '0 auto',
                  width: '73.67px',
                  height: '50px',
                  gap: '8px',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                <div 
                  className="flex flex-col items-start"
                  style={{
                    width: '73.67px',
                    height: '50px',
                    padding: '0px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 1
                  }}
                >
                  {/* Title */}
                  <div 
                    style={{
                      width: '73.67px',
                      height: '30px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '30px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      color: '#FFFFFF',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    310
                  </div>

                  {/* Subtitle */}
                  <div 
                    style={{
                      width: '73.67px',
                      height: '20px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      color: '#FFFFFF',
                      flex: 'none',
                      order: 1,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    Calories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Vertical - Switch (Heart Rate) */}
          <div 
            className="flex flex-row items-start"
            style={{
              width: '99.67px',
              height: '155px',
              gap: '16px',
              flex: 'none',
              order: 1,
              flexGrow: 1
            }}
          >
            <div 
              className="flex flex-col justify-between items-start"
              style={{
                width: '99.67px',
                height: '155px',
                padding: '13px',
                gap: '5px',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0px 0px 5px rgba(12, 26, 75, 0.04), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)',
                backdropFilter: 'blur(5px)',
                borderRadius: '16px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 1
              }}
            >
              {/* Photo + Toggle */}
              <div 
                className="flex flex-row items-start"
                style={{
                  margin: '0 auto',
                  width: '73.67px',
                  height: '76px',
                  padding: '0px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                <div 
                  className="relative"
                  style={{
                    width: '73.67px',
                    height: '76px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 1
                  }}
                >
                  {/* Deco Ellipse */}
                  <div 
                    className="absolute"
                    style={{
                      width: '131px',
                      height: '131px',
                      left: '-57px',
                      top: '-55px'
                    }}
                  >
                    <div 
                      className="absolute"
                      style={{
                        width: '131px',
                        height: '131px',
                        left: '0px',
                        top: '0px',
                        background: '#A0AEC0',
                        opacity: 0.07
                      }}
                    ></div>
                    <div 
                      className="absolute"
                      style={{
                        width: '112.55px',
                        height: '112.55px',
                        left: '9.23px',
                        top: '9.23px',
                        background: '#606873',
                        opacity: 0.04
                      }}
                    ></div>
                    <div 
                      className="absolute"
                      style={{
                        width: '86.72px',
                        height: '86.72px',
                        left: '22.14px',
                        top: '22.14px',
                        background: '#202326',
                        opacity: 0.02
                      }}
                    ></div>
                  </div>

                  {/* Heartbeat Icon */}
                  <div 
                    className="absolute"
                    style={{
                      width: '30px',
                      height: '30px',
                      left: '-2px',
                      top: '1px'
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 8C15 8 12 11 12 15C12 18.3137 14.6863 21 18 21C21.3137 21 24 18.3137 24 15C24 11 21 8 15 8Z" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                      <path d="M12 15L15 12L18 15L21 12" stroke="#808B9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text + Toggle */}
              <div 
                className="flex flex-row items-center"
                style={{
                  margin: '0 auto',
                  width: '73.67px',
                  height: '50px',
                  gap: '8px',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                <div 
                  className="flex flex-col items-start"
                  style={{
                    width: '73.67px',
                    height: '50px',
                    padding: '0px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 1
                  }}
                >
                  {/* Title */}
                  <div 
                    style={{
                      width: '73.67px',
                      height: '30px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '30px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      color: '#39434F',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    98
                  </div>

                  {/* Subtitle */}
                  <div 
                    style={{
                      width: '73.67px',
                      height: '20px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      color: '#808B9A',
                      flex: 'none',
                      order: 1,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    Heart Rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Vertical - Switch (Steps) */}
          <div 
            className="flex flex-row items-start"
            style={{
              width: '99.67px',
              height: '155px',
              gap: '16px',
              flex: 'none',
              order: 2,
              flexGrow: 1
            }}
          >
            <div 
              className="flex flex-col justify-between items-start"
              style={{
                width: '99.67px',
                height: '155px',
                padding: '13px',
                gap: '5px',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0px 0px 5px rgba(12, 26, 75, 0.04), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)',
                backdropFilter: 'blur(5px)',
                borderRadius: '16px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 1
              }}
            >
              {/* Photo + Toggle */}
              <div 
                className="flex flex-row items-start"
                style={{
                  margin: '0 auto',
                  width: '73.67px',
                  height: '76px',
                  padding: '0px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                <div 
                  className="relative"
                  style={{
                    width: '73.67px',
                    height: '76px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 1
                  }}
                >
                  {/* Deco Ellipse */}
                  <div 
                    className="absolute"
                    style={{
                      width: '131px',
                      height: '131px',
                      left: '-57px',
                      top: '-55px'
                    }}
                  >
                    <div 
                      className="absolute"
                      style={{
                        width: '131px',
                        height: '131px',
                        left: '0px',
                        top: '0px',
                        background: '#A0AEC0',
                        opacity: 0.07
                      }}
                    ></div>
                    <div 
                      className="absolute"
                      style={{
                        width: '112.55px',
                        height: '112.55px',
                        left: '9.23px',
                        top: '9.23px',
                        background: '#606873',
                        opacity: 0.04
                      }}
                    ></div>
                    <div 
                      className="absolute"
                      style={{
                        width: '86.72px',
                        height: '86.72px',
                        left: '22.14px',
                        top: '22.14px',
                        background: '#202326',
                        opacity: 0.02
                      }}
                    ></div>
                  </div>

                  {/* Step Icon */}
                  <div 
                    className="absolute"
                    style={{
                      width: '30px',
                      height: '30px',
                      left: '-2px',
                      top: '1px'
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M8 20C8 20 10 18 12 20C14 22 16 20 18 22C20 24 22 22 24 24" stroke="#808B9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 12C10 12 12 10 14 12C16 14 18 12 20 14" stroke="#808B9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text + Toggle */}
              <div 
                className="flex flex-row items-center"
                style={{
                  margin: '0 auto',
                  width: '73.67px',
                  height: '50px',
                  gap: '8px',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                <div 
                  className="flex flex-col items-start"
                  style={{
                    width: '73.67px',
                    height: '50px',
                    padding: '0px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 1
                  }}
                >
                  {/* Title */}
                  <div 
                    style={{
                      width: '73.67px',
                      height: '30px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '30px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      color: '#39434F',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    2.123
                  </div>

                  {/* Subtitle */}
                  <div 
                    style={{
                      width: '73.67px',
                      height: '20px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      color: '#808B9A',
                      flex: 'none',
                      order: 1,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    Steps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button frame */}
      <div 
        className="flex flex-col items-start"
        style={{
          width: '375px',
          height: '38px',
          padding: '4px 24px 0px',
          gap: '2px',
          flex: 'none',
          order: 2,
          flexGrow: 0
        }}
      >
        {/* Home Indicator */}
        <div 
          className="relative"
          style={{
            width: '327px',
            height: '34px',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0
          }}
        >
          <div 
            className="absolute"
            style={{
              width: '134px',
              height: '5px',
              left: 'calc(50% - 134px/2 + 0.5px)',
              bottom: '8px',
              background: '#212134',
              borderRadius: '100px'
            }}
          ></div>
        </div>
      </div>

      {/* Timer Card - Bottom Overlay */}
      <div 
        className="absolute flex items-center justify-between bg-white rounded-2xl shadow-sm"
        style={{
          width: '343px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 0px 5px rgba(12, 26, 75, 0.04), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)',
          backdropFilter: 'blur(5px)',
          borderRadius: '16px',
          padding: '12px 16px',
          bottom: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30
        }}
      >
        {/* Left Section - Timer Info */}
        <div className="flex items-center space-x-3">
          {/* Timer Icon */}
          <div className="flex items-center space-x-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
              <path d="M8 4v4l3 3" stroke="#808B9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#808B9A'
              }}
            >
              Timer
            </span>
          </div>

          {/* Timer Display */}
          <div 
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '24px',
              color: '#39434F'
            }}
          >
            32 : 12 : 21
          </div>
        </div>

        {/* Right Section - Distance and Pause Button */}
        <div className="flex items-center space-x-3">
          {/* Distance */}
          <div className="flex items-center space-x-1">
            <span 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#808B9A'
              }}
            >
              2,7 km
            </span>
            {/* Up arrow icon */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 2L10 6L6 10M2 6H10" stroke="#82C43C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Pause Button */}
          <button 
            className="flex items-center justify-center bg-blue-500 rounded-lg"
            style={{
              width: '32px',
              height: '32px',
              background: '#1B85F3',
              borderRadius: '8px'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 2H5V10H3V2Z" fill="white"/>
              <path d="M7 2H9V10H7V2Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RunningMapZoomScreen;
