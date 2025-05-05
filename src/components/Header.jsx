import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../styles/header.css'
import { NavLink } from 'react-router-dom'
export function Header() {
    return (
        <Navbar data-bs-theme="light" className='border-bottom'>
            <Container>
                <Navbar.Brand href="#home" className="logo sectionTitle">رواد الغناء العربى</Navbar.Brand>
                <Nav>
                    <NavLink className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'} to="/">الرئيسيه</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'} to="/articles">المدونه</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'} to="/pioneers">الرواد</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'} to="/contact-us">اتصل بنا</NavLink>
                </Nav>
                <div></div>
                {/* <i className="bi bi-search"></i> */}

            </Container>
        </Navbar>
    )
}
