import React, { useState } from 'react';
import { menuItems } from './MenuItems'
import { Link } from 'react-router-dom';
import './Dropdown.css'

const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <ul className={click ? 'sub-menu clicked ' : 'sub-menu '}
                onClick={handleClick}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index} className="menu-item" >
                            <Link className="dropdown-link" to={item.path}
                                onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
export default Dropdown
