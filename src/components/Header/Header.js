import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
                <Nav className="me-auto my-2 my-lg-0">
                <Stack direction="horizontal" gap={5}>
                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/meals"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Meals
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        About
                    </NavLink>
                    </Stack>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;