import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import { colDatas, links, menuItems } from './FooterData'
import { showmobiles } from '../data'


const Footer = () => {
    return (
        <footer className="webalive-footer">

            <div className="footer-section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-top-tag-line">
                            <p><span>Got a project that you would like to discuss?</span>
                                <Link to="https://www.webalive.com.au/contact-us/" className="  btn-underline-white"> Contact Us</Link></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <Link className="footer-logo" to="https://www.webalive.com.au/" >
                            SIRI

                        </Link>
                        <div id="text-2" className="widget webalive-footer-widget widget_text">
                            <div className="textwidget">
                                <p>Copyright © 2020 WebAlive</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-4">
                        <div className="widget webalive-footer-widget widget_nav_menu">
                            <h4 className="widget-title">Services</h4>
                            <div className="menu-footer-menu-services-container">
                                <ul className="menu" >
                                    {menuItems.map((item, index) => {
                                        return (

                                            <li className="menu-item" key={index}>
                                                <Link to={item.path}>{item.title}</Link>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {colDatas.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-4" key={index}>
                                <div className="webalive-footer-widget ">
                                    <h4 className="widget-title">{item.h4}</h4>
                                    <div className="textwidget custom-html-widget">{item.div1} <br />
                                        {item.div2}<br /> <br />
                                        <Link to={item.link2}>{item.link}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="footer-section">
                <div className="copyright-footer">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="widget webalive-copyright-widget widget_nav_menu">
                                <div className="menu-copyright-footer-menu-container">
                                    <ul id="menu-copyright-footer-menu" className="menu" >
                                        {links.map((item, index) => {
                                            return (

                                                <li className="menu-item " key={index}>
                                                    <Link to={item.href}>{item.name}</Link>
                                                </li>

                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="custom_html-5" className="widget_text widget webalive-copyright-widget widget_custom_html">
                                <div className="textwidget custom-html-widget">
                                    <div className="social">
                                        <ul >
                                            {showmobiles.map((item, index) => {
                                                return (


                                                    <li key={index}><Link to={item.href} >
                                                        <i className={item.iclass}></i>
                                                    </Link>
                                                    </li>

                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bact-to-top-wrap text-right">
                <a href="#top" id="js-scroll-to-top">Back</a>
            </div>
        </footer >
    )
}

export default Footer;
