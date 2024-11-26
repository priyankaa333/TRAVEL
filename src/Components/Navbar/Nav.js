import React, { useRef } from 'react'
import navCSS from './../Navbar/Nav.module.css'
import {Link} from 'react-router-dom'
const Nav = () => {
  const menu=useRef();

  const MenuHandler = () =>{
    menu.current.classList.toggle(navCSS.activeMenu)//interact with class name
  }

  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="/">Travelia</a>
      </div>

      <ul ref={menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/tours">Tours</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className={navCSS.nav_btns}>
        <div className={navCSS.shopig_user}>
          <i className='ri-phone-line'></i>
          <p>+1 25-2589-1254</p>
        </div>
        <i className='ri-menu-2-line' onClick={MenuHandler} id={navCSS.bars}></i>
      </div>
    </div>
  )
}

export default Nav