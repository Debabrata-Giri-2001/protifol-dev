import React from 'react'
import './navBarStyle.css'

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="navList">
                <li className='home_View'><Link to='./'>Home</Link></li>
                <li className='work_view'><Link to='./worktogether'>Work Request➡️</Link></li>
            </div>
        </div>
    )
}

export default Navbar;
