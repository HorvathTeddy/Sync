import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
//import Login from '../auth/Login/Login'
//import SignUp from '../auth/SignUp/SignUp'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    Sync
                </NavLogo>
                <MobileIcon onClick={toggleHome}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='mission' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Mission
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Discover
                        </NavLinks>
                    </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/login' style={{background: 'black', border: '#fff solid 1px', borderRadius: '5px', marginRight: '6px'}}>
                                Sign in
                            </NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to='/register' >Create account</NavBtnLink>
                        </NavBtn> 
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar