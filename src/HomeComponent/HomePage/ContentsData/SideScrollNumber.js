import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showmobiles } from '../../data'
import './SideScrollNumber.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SideScrollNumber = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(Math.round(scrolled))
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])
    return (
        <div className={scrollTop > 10 ? "webalive-post-sharer-aside affix" : "webalive-post-sharer-aside "} >
            <div className="webalive-post-sharer">
                <span className="share-title">SHARE</span>
                <ul className="post-sharer">
                    {showmobiles.map((item, index) => {
                        return (
                            <li key={index} >
                                <Link className={item.className} to={item.href}>

                                    <i className={item.iclass}></i>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="scroll-progress-wrap" >
                <div id="circ"  >
                    <CircularProgressbar
                        value={scrollTop}
                        text={`${scrollTop}%`}
                        strokeWidth={9}
                        styles={{
                            // Customize the root svg element

                            // Customize the path, i.e. the "completed progress"
                            path: {
                                // Path color
                                stroke: "#000",
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Customize transition animation
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                // Rotate the path
                                transform: 'rotate(0turn)',
                                transformOrigin: 'center center',
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                                // Trail color
                                stroke: '#d6d6d6',
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Rotate the trail
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            // Customize the text
                            text: {
                                // Text color
                                fill: '#404040',
                                // Text size
                                fontSize: '1.4rem',
                                fontWeight: '400',

                            },
                            // Customize background - only used when the `background` prop is true
                            background: {
                                fill: '#3e98c7',
                            },
                        }}
                    />

                </div>
            </div>
        </div >
    )
}



export default SideScrollNumber
