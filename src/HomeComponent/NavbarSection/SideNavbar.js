import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SideNavbar.css'
import Dropdown from './Dropdown'

const SideNavbar = ({ isOpen, toggle }) => {

    const [onClick, setOnClick] = useState(false);
    const click = () => setOnClick(!onClick);

    const [dropdown, setDropdown] = useState(false)
    const onMouseClick = () => {
        click()
        setDropdown(!dropdown)
    };



    return (
        <>
            <div className={isOpen ? 'siri-mobile-menu-wrap menu-open' : 'siri-mobile-menu-wrap'} >
                <div className="menu-action-bar">
                    <div className="close-menu" onClick={toggle}>
                        <span className="menu-text"></span>
                        <span className="menu-icon"> </span>
                    </div>
                </div>
                <ul className="siri-main-menu">
                    <li className="menu-item" >
                        <Link to="/" className="menu-links ">Portfolio</Link></li>
                    <li className='menu-item' >
                        <Link to="/" className="menu-links " >
                            Services</Link><span className='mb-toggle' onClick={onMouseClick}><i className={onClick ? 'fas fa-chevron-up' : ' fas fa-chevron-down'} /></span>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="menu-item" >
                        <Link to="/" className="menu-links ">About Us</Link></li>
                    <li className="menu-item" >
                        <Link to="/" className="menu-links ">Blog</Link></li>
                </ul>
                <div className="contact-button-wrap">
                    <ul id="menu-header-left-1" className="contact-menu">
                        <li className="menu-item"><Link to="/" className="btn btn-primary arrow">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="call-us-wrap">
                    <div className="widget_text widget webalive-mobile-widget widget_custom_html">
                        <div className="textwidget custom-html-widget">
                            <div className="call-us">Call Us Now</div>
                            <Link className="call-number" to="tel:1300 797 471">1300 797 471</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SideNavbar;
