import React from 'react'
import picture from '../assets/Oval.png'
const Header = () => {
    return (
        <div className="header">
        <div className="header-input"><span><i className="fas fa-search"></i></span><input type="search" className="" name="" placeholder="Search for Author" /></div>
        <div className="header-img"><img src={picture} alt="" /></div>
      </div>
    )
}

export default Header
