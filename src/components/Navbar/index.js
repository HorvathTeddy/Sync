import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Sync
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='mission'>
                            Mission
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to='/login'>Log in</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to='/signup'>Sign up</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar