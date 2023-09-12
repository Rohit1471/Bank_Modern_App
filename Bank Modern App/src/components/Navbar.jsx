import React, { useEffect } from 'react'
import { useState } from 'react'
import {close, logo, menu } from '../assets';
import { navLinks } from '../constants';

function Navbar() {

  let [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    function DisplayNav(){
      if(this.window.outerWidth<=767){
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove('flex');
        navbar.classList.add('none');
      }
    }
    window.addEventListener('resize', DisplayNav)
    window.addEventListener('load', DisplayNav)
  })

  return (
    <section className="header ptb35">
      <div className="header_outer relative">
        <div className="wrapper">
          <div className="header_inner">
            <nav className='flex space_between'>
              <div className="logo mw118">
                <img src={logo} alt="hookbank" />
              </div>
              <ul className={`navbar flex align_center gap20 space_between mw420 t3s`}>
                {navLinks.map((nav, index) => (
                  <li key={nav.id}>
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className='none toggle_ham'>
                  <img src={toggle ? close : menu} alt="menu" 
                  onClick={() => {
                    setToggle((prev) => !prev);
                    let navbar = document.querySelector('.navbar');
                    navbar.classList.toggle('flex');
                    navbar.classList.toggle('none');
                    }} 
                  />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar