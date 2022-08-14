import React from 'react'
import { Nav, NavbarContainer, NavLogo} from './NavbarElements'

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
                        <NavLinks to='about'>
                            About
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar