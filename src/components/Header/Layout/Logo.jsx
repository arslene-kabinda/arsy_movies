import React from 'react'
import logo from '../../../assets/logo.png'
import {LogoStyle} from '../Style/LogoStyle' 

const Logo = () => {
    return (
        <LogoStyle>
           <img src={logo} alt="logoSite"/> 
        </LogoStyle>
    )
}

export default Logo
