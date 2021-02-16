import React, { useState } from 'react';
import Navbar from '../HomeComponent/NavbarSection/Navbar'
import SideNavbar from '../HomeComponent/NavbarSection/SideNavbar'
import Main from '../HomeComponent/Main'
import Footer from '../HomeComponent/Footer/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
        ToggleSidebar()
    };
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const ToggleSidebar = () => {
        setShowSideDrawer(!showSideDrawer)

    }


    return (
        <>
            <SideNavbar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} showSideDrawer={showSideDrawer} />
            <Main />
            <Footer />

        </>





    )

}

export default Home
