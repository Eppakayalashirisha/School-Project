import React from 'react';
import { Link } from "react-router-dom"
import './Button.css'


export const Button = () => {
    return (
        <>
            <ul className="siri-header-left-menu">
                <li className="menu-item ">
                    <Link to="/" className="menu-links btn btn-primary arrow">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}



