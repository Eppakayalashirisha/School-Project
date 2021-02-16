import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';






const Navbar = ({ toggle, showSideDrawer }) => {

    const [hover, setHover] = useState(false);
    const handleHoverEnter = () => setHover(!hover)
    const handleHoverLeave = () => setHover(false)
    const [dropdown, setDropdown] = useState(false)
    const onMouseEnter = () => {
        handleHoverEnter()
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        handleHoverLeave()
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    const [navbar, setNavbar] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 120) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }

    }
    window.addEventListener('scroll', changeNav)



    return (


        <div className={navbar ? "siri-navbar active show " : "siri-navbar   show "}>

            < nav className={showSideDrawer ? "siri-navbar mb-5 hide " : "siri-navbar mb-5 show "}>
                <div className="navcontainer">
                    <div className="siri-menu-wrap">
                        <div className="siri-brand-wrap">
                            <Link to="/" className="siri-navbar-brand"  >SIRI</Link>
                            <div className="siri-navbar-toggler" onClick={toggle}>
                                <span className='menu-text' ></span>
                            </div>
                        </div>
                        <ul className='siri-main-menu'>
                            <li className='menu-item' >
                                <Link to="/" className="menu-links">Portfolio</Link>
                            </li>
                            <li className='menu-item' onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave} >
                                <Link to="/" className="menu-links " >
                                    Services<i className={hover ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} /></Link>
                                {dropdown && <Dropdown />}
                            </li>
                            <li className='menu-item'>
                                <Link to="/" className="menu-links">About Us</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/" className="menu-links" >Blog</Link>
                            </li>
                        </ul>
                        <Button />
                    </div>
                </div>
            </nav>
        </div >

    )
}

export default Navbar
