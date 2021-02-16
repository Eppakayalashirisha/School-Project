import React from 'react'
import TopText from './ContentsData/TopText'
import './content.css'
import ShowMobile from './ContentsData/ShowMobile'
import SideScrollNumber from './ContentsData/SideScrollNumber'
import SchoolData from './ContentsData/SchoolData'
import RelatedArticle from './ContentsData/RelatedArticle'


const Content = () => {
    return (
        <section className="blog-content">
            <div className="blog-section">
                <div className="blog-details-content">
                    <ShowMobile />
                    <SideScrollNumber />
                    <div className="blog-wrapper">
                        <div className="text-area">
                            <TopText />
                            <SchoolData />
                        </div>
                    </div>
                    <RelatedArticle />
                </div>
            </div>
        </section>


    )
}


export default Content
