import React, { useState, useEffect } from 'react'
import './NavbarHead.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <div className="meNameDiv">
            <h2 className='MyNameDev'>Debabrata Giri</h2>
            <nav>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="list">
                        <a className="items" href="#AllAboutMe"><p>About Me</p></a>
                        <a className="items" href="#myProjectView"><p>Project</p></a>
                        <a className="items" href="#contactMePage"><p>contact us</p></a>
                        <a className="items" href="#TotalServices"><p>My services</p></a>
                    </ul>
                )}
                <button onClick={toggleNav} className="btn"><i className="fa-solid fa-bars fa-2x" /></button>
            </nav>
        </div>
    )
}