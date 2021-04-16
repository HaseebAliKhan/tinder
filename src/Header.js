import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import logo from './useItems/Tinder_(app)-Flame-Logo.wine.png'
import './Header.css'
import ForumIcon from "@material-ui/icons/Forum"


function Header() {
    return (
        <div className='header'>
             <IconButton>
                <PersonIcon fontSize='large' className="header_icon" />
            </IconButton>

        <img src={logo} className="header_logo" alt="logo" />
        <IconButton>
        <ForumIcon/>
        </IconButton>
        </div>
    )
}

export default Header
