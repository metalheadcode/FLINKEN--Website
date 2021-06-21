import React, { useContext, useState, useEffect } from "react";
import classes from "./Header.module.css";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { AppLogo } from "../../../components/Icons/Icons";
import Socials from "../Socials/Socials";
import { Input } from "antd";
import FlinkenContext from "../../../context/flinkenContext";
const { Search } = Input;

const Header = (props) => {
    const flinkenContext = useContext(FlinkenContext);

    useEffect(() => {
        flinkenContext.changeTheme(true);
    }, []);

    const { dark } = flinkenContext;
    return (
        <section className={`${classes.header} ${dark ? `dark ${classes.dark}` : ""}`}>
            <Navbar collapseOnSelect expand="lg" className="p-0">
                <div className={classes.wrapper}>
                    <Navbar.Brand href="/">
                        <AppLogo />
                    </Navbar.Brand>
                    <div className={classes.search}>
                        <Search onSearch={(value) => console.log(value)} style={{ width: 150 }} />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about-us">About</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                    <div className={classes.hiddenElements}>
                        <Form className="form">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                        <Socials />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default Header;
