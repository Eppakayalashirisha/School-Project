import React from 'react'
import { Link } from "react-router-dom"
import { schooldatas } from '../../data'


const SchoolData = () => {
    return (
        <>
            {schooldatas.map((item, index) => {
                return (
                    < div key={index}  >
                        <h3>{item.id}. {item.schoolName}</h3>
                        <p>{item.website}
                            <Link to={item.linkAddress}> {item.link}</Link></p>
                        <figure className={item.className}>
                            <img src={item.image} alt={item.alt} />
                        </figure>
                        <p>{item.ptext1}
                            <Link to={item.plink}>{item.plinktext}</Link> {item.plink12}</p>
                        <p><strong>{item.ptext2}</strong></p>
                        <ul>
                            <li>{item.list1}<Link to={item.list1link}>{item.list1linktext}</Link> {item.list1text}</li>
                            <li>{item.list2}</li>
                            <li>{item.list3}</li>

                        </ul>
                    </div>
                );
            })
            }


        </>
    )
}


export default SchoolData
