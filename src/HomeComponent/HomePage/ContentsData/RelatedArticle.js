import React from 'react'
import { Link } from 'react-router-dom'
import './RelatedArticle.css'
import { Relatedarticles } from '../../data'


const RelatedArticle = () => {
    return (
        <section className="related-posts">
            <h2>Related Articles</h2>
            <div className="row">
                {Relatedarticles.map((item, index) => {
                    return (
                        <div key={index} className="col-md-6">
                            <div className="blog-thumble">
                                <div className="thumb-img">
                                    <Link to={item.link}>
                                        <img alt={item.alt} className=" lazyloaded" src={item.image} />

                                    </Link>
                                </div>
                                <div className="thumb-content">
                                    <h3>
                                        <Link to={item.link}>
                                            {item.alt}
                                        </Link>
                                    </h3>
                                    <Link to={item.link} className="readmore">Read more</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}



            </div>
        </section>
    )
}



export default RelatedArticle
