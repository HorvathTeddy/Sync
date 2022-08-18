import React, { useState } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements' 

const Sidebar = ({isOpen, toggle}) => {
    const [hover, setHover] = useState(false)
    const mouseEnter = () => {
        setHover(true)
    }
    const mouseLeave = () => {
        setHover(false)
    }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='mission'>
                    Mission
                </SidebarLink>
                <SidebarLink to='services'>
                    Services
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin' style={{color: hover ? '#FF5349' : "white", background: 'black', border: '1px solid white', borderRadius: '10px'}} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    Sign in
                </SidebarRoute>
                
                <SidebarRoute to='/createaccount'>
                    Create account
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar