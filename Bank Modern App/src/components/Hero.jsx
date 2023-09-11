import React from 'react'
import { airbnb, discount, robot } from '../assets'

function Hero() {
  return (
    <section className="hero section_space">
    <div className="hero_outer">
      <div className="wrapper">
        <div className="hero_inner flex align_center space_between">
          <div className="left">
            <div className="discount_line flex align_center gap10">
              <div className="discount_img w100">
                <img src={discount} alt="Discount" />
              </div>
              <div className='flex'>
                <p>20% <span className='secondary_color'>DISCOUNT FOR</span> 1 MONTH <span className='secondary_color'> ACCOUNT</span></p>
              </div>
            </div>
            <div className="hero_heading_container relative w100 mw670">
              <div className="hero_heading">
                <h1> The Next <br /> <span className='transparent_text'>Generation</span> <br /> Payment Method. </h1>
              </div>
              <div className="circle flex align_center justify_center absolute t0 r0">
                <p>Get 
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <g id="Arrow - Up">
                    <path id="Stroke 1" d="M4.98978 15.2615C4.75588 14.9828 4.76972 14.5786 5.00787 14.3167L5.07837 14.2489L16.0903 5.00887C16.3943 4.75371 16.8477 4.79338 17.1029 5.09746C17.3368 5.37621 17.3229 5.78038 17.0848 6.04234L17.0143 6.11006L6.00238 15.3501C5.69829 15.6053 5.24494 15.5656 4.98978 15.2615Z" fill="white"/>
                    <path id="Stroke 3" d="M8.33877 5.57975C7.94325 5.546 7.64998 5.19801 7.68372 4.8025C7.7144 4.44294 8.00478 4.16787 8.35448 4.14619L8.46097 4.14745L16.6132 4.843C16.9739 4.87376 17.2493 5.16571 17.2697 5.51648L17.268 5.62327L16.538 13.7732C16.5026 14.1686 16.1534 14.4604 15.758 14.425C15.3986 14.3928 15.1247 14.1012 15.1045 13.7514L15.1062 13.645L15.7714 6.21386L8.33877 5.57975Z" fill="white"/>
                    </g>
                    </svg>
                  </span> 
                  Started
                </p>
              </div>
            </div>
            <div className="description w100 mw470">
              <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>
          </div>
          <div className="right">
            <div className="right_img w100 mw670">
              <img src={robot} alt="robot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Hero