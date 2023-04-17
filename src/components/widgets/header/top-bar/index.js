import React from "react";

// Legacy Imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopBar = ()=> {
    return(
        <React.Fragment>
            <Navbar bg="transparent" expand="lg">
                <Container className="mt-2">
                    <Navbar.Brand>
                        <h1 className="brand-typography-main">
                            Travel
                            <span className="brand-typography-sub px-2">Guide</span>
                        </h1>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="collapse-navbar-nav" />
                    <Navbar.Collapse id="collapse-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link className="font-weight-bold text-white">Home</Nav.Link>
                            <NavDropdown 
                                title={<span className="font-weight-bold text-white">Packages</span>}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item>Honeymoon Packages</NavDropdown.Item>
                                <NavDropdown.Item>All India Tour</NavDropdown.Item>
                                <NavDropdown.Item>Adventure Trips</NavDropdown.Item>
                                <NavDropdown.Item>Family Tours</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Customize your trip</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="font-weight-bold text-white">Transport</Nav.Link>
                            <Nav.Link className="font-weight-bold text-white">Hotels</Nav.Link>
                            <Nav.Link className="font-weight-bold text-white">Blog</Nav.Link>
                            <Nav.Link className="font-weight-bold text-white">Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default TopBar;