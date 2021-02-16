import React from 'react'
import { showmobiles } from '../../data'
import './ShowMobile.css'
import { Link } from 'react-router-dom'



const ShowMobile = () => {
    return (
        <div className="do-show-mobile">
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
        </div>
    )
}


export default ShowMobile
