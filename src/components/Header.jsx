import React from 'react'
import Lottie from 'lottie-react';
import devAnimation from '../animation/Animation - 1734029503992.json'
const Header = ({toggleLanguage,language}) => {
  return (
    <>
     <div id="header">
     <div>
<ul onClick={toggleLanguage} id="left-navbar">
 
<li className='navbar-icon-list-fac'><a href='https://www.facebook.com/share/15mFZRgk52/?mibextid=wwXIfr' target='_blank'><i className="fa-brands fa-square-facebook" style = {{color:"#12424c",fontSize:"30px",cursor:"pointer"}}></i></a></li>
<li className='navbar-icon-list-ins'><a href='https://www.instagram.com/qasralbaron.cafe/profilecard/?igsh=OXVxZ3p5aW45MWwy' target='_blank'><i className="fa-brands fa-square-instagram" style = {{color:"#12424c",fontSize:"30px",cursor:"pointer",margin:"0 0 0 20px" ,}}></i></a></li>
    
</ul>
</div>
<div>
<ul className='dev-Animation'>
<Lottie loop={true}
            animationData={devAnimation} style={{width:"85px",height:"85px"}} />
</ul>
</div>
{/* <a href="#"><img src="src/images/logo.png" className="logo" alt=""/></a> */}
<div>
<ul className='lang' onClick={toggleLanguage} id="right-navbar">
  <li style={{ cursor: "pointer", whiteSpace: "pre-line", textAlign: "center",fontFamily:"system-ui",    textShadow: '#b8d7f1 1px 1px 5px' }}>{language === "ar" ? "eng"  : "عربي"}</li>
  
</ul>
</div>

    </div>
    </>
  )
}

export default Header