import React from "react";
import { AppLogo } from "../Icons/Icons";
import { Navbar, Nav } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <>
            <div className={classes.headerWrapper}>
                <Navbar className={classes.customHeader}>
                    <Nav>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                    </Nav>
                    <Navbar.Brand className={classes.logo}>
                        <Nav.Link href="/">
                            <AppLogo size={{ width: "20", height: "24" }} />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
};

export default Header;
