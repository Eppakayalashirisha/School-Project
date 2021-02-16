import React from 'react'
import Hero from './HomePage/Hero'
import './Main.css'
import Content from './HomePage/content'

const Main = () => {
    return (

        <div className="siri-main-content">
            <div className="siri-main-area">
                <main className="siri-main-site">
                    <Hero />
                    <Content />
                </main>
            </div>
        </div>

    )
}

export default Main
