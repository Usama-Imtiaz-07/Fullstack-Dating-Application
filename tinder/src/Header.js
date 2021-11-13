import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="Header">
            <IconButton>
                <PersonIcon fontSize="large" className="Header__icon" />
            </IconButton>
            <img className="Header__logo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder__logo" />
            <IconButton>
                <ForumIcon fontSize="large" className="Header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
