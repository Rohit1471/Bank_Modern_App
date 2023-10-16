import React, { useState } from 'react'
import { navLinks } from '../constants'
import { images } from '../assets'
import '../../tailwindOutput/output.css'
import '../../tailwind.config'

function Header() {

  let [toggle, settoggle] = useState(true);

  return (
    <section className="header py-[100px]">
      <div className="header_outer">
        <div className="wrapper">
          <div className="header_inner flex justify-between items-center relative">
            <div className="logo_container flex items-center gap-[10px]">  
              <div className="logo w-full max-w-[50px] h-auto">
                <img src={images.logo} alt="logo" />
              </div>
              <div className="company_name">
                <h4>Your Cloud</h4>
                <p>Creating Future</p>
              </div>
            </div>
            <div className="nav_container">
              <nav>
                <ul className={`links_collection text-white flex items-center gap-[40px] sts:flex-col sts:absolute sts:top-[50%] sts:left-[50%] sts:translate-x-[-50%] sts:pt-[40px] ${toggle ? 'sts:hidden' :'sts:flex'}`}>
                  {navLinks.map((links, index) => (
                    <li key={links.id} >
                      <a href={`#${links.id}`}>
                        {links.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className={`ham transition ease-in-out delay-150 h-[25px] w-[30px] hidden sts:flex flex-col justify-between items-center`}  onClick={() => settoggle(!toggle)}>
                  <div className={`line bg-white h-[3px] w-full line1 ${toggle ? 'block' : 'origin-right rotate-[-45deg]'}`}></div>
                  <div className={`line bg-white h-[3px] w-full line2 ${toggle ? 'block' : 'hidden'}`}></div>
                  <div className={`line bg-white h-[3px] w-full line3 ${toggle ? 'block' : 'origin-right rotate-[45deg]'}`}></div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header