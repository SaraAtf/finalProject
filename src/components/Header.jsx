import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../styles/header.css'
import { NavLink } from 'react-router-dom'

export function Header() {
    const [ expanded, setExpanded ] = useState( false );

    return (
        <Navbar
            data-bs-theme="light"
            className='border-bottom'
            expand="lg"
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand href="/" className="logo sectionTitle">رواد الغناء العربى</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded( expanded ? false : true )}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink
                            className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'}
                            to="/"
                            onClick={() => setExpanded( false )}
                        >
                            الرئيسيه
                        </NavLink>
                        <NavLink
                            className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'}
                            to="/articles"
                            onClick={() => setExpanded( false )}
                        >
                            المدونه
                        </NavLink>
                        <NavLink
                            className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'}
                            to="/pioneers"
                            onClick={() => setExpanded( false )}
                        >
                            الرواد
                        </NavLink>
                        <NavLink
                            className={( { isActive } ) => isActive ? 'nav-link isActive' : 'nav-link'}
                            to="/contact-us"
                            onClick={() => setExpanded( false )}
                        >
                            اتصل بنا
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
