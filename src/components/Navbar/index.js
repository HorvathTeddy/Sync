import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'

function Navbar() {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Sync
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>s
                            About Sync
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='login'>
                            Log in
                        </NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign in</NavBtnLink>
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