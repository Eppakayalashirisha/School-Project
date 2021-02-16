import React from 'react'
import { toptexts } from '../../data'


const TopText = () => {
    return (
        <>
            <p>School websites are crucial for creating a good first impression.
            Before sending their children to a school, most parents are likely
            to take a look at the school’s website, so the primary goal of the
            site would be to convince these visitors.
            </p>
            <p>That being said, your school website also needs to be
            informative and helpful for your current students.
            </p>
            <div className="content-block">
                <p><strong>Here are some key elements that your school
                    website must have:</strong></p>
                <ul>
                    {toptexts.map((item, index) => {
                        return (
                            <li key={index}  >

                                {item.title}

                            </li>
                        );
                    })}
                </ul>
            </div>
            <p>Remember that being informative is essential, but having
            an aesthetic design is equally important. To help you
            make up your mind, here are 15 school website for your
            design inspiration.
            </p>
        </>
    )
}



export default TopText
