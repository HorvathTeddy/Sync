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
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar