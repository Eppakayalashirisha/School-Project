import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="Hero-head-section">
            <div className="hero-section">
                <Link to="/" className="back-btn">Blog</Link>
                <div className="row">
                    <div className="col-md-6">
                        <div className="Hero-thumb">
                            <img className="lazyloaded" src="https://33t2km132djh3q21qa47elmw-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Best-school-websites-725x412.jpg" alt="15 Best School Website Designs" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="Hero-top-wrap">
                            <div className="Hero-category">
                                <span>Web Design</span>
                            </div>
                            <div className="Hero-top-inner-wrap">
                                <div className="Hero-heading">
                                    <h1>15 Best School Website Designs</h1>
                                </div>
                                <div className="Hero-meta">
                                    <span className="date">October 31, 2019, </span>
                                    <span className="read-span"> 9 Mins Read. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default Hero
