import React from 'react'

const Text = ({ language }) => {
  return (
    <>
      <div style={{ marginBottom: '20px' }} className='head'>
        <div className='head-name' style={{ width: "55%" }}>
          <h3 style={{ }}>
            {language === "en" 
              ? "We make your sweet dreams come true"
              : "نحن نجعل أحلامك الجميلة تتحقق"
            }
          </h3>
        </div>
        <div className='time'>
          <img style={{ width: '20px', height: '20px', marginRight: '12px' , marginBottom: '5px',borderRadius:"10px",marginLeft:"5px"}} src='src/images/clock.webp' alt="clock" />
          <p style={{ }}>
            {language === "en" 
              ? "8:00 AM - 1:00 AM"
              : "8:00 صباحاً - 1:00 صباحاً"
            }
          </p>
        </div>
      </div>
    </>
  );
};

export default Text