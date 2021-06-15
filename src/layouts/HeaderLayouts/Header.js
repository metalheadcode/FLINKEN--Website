import React, { useState } from "react"
import { AppLogo } from "../../components/Icons/Icons"
import { NavbarBrand, Collapse } from "reactstrap"
import BaseSwitch from "../../components/Base-Switcher/Base-Switcher"
import Nav from "reactstrap/lib/Nav"
import Navbar from "reactstrap/lib/Navbar"
import NavItem from "reactstrap/lib/NavItem"
import NavLink from "reactstrap/lib/NavLink"

const Header = ({ props }) => {
  const [darkValue, setDarkValue] = useState(true)

  const isOpen = false
  return (
    <Navbar color="transparent" expand="md">
      <NavbarBrand href="/">
        <AppLogo />
      </NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Testimonial
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <BaseSwitch />
    </Navbar>
  )
}

export default Header
