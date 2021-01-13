import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/esm/Nav'
import './NavbarComponent.scss';
import { NavLink } from 'react-router-dom'

const NavbarComponent: React.FC = () => {

  return (
    <Navbar expand="lg" variant="dark" className="flex-column bgSet">
      <Navbar.Brand>Convertor</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column">
          <NavLink exact to="/" className="nav-link">Главная</NavLink>
          <NavLink to="/about" className="nav-link">Используемые Технологии</NavLink>
          <NavLink to="/historical-rate" className="nav-link">Курс по выбранному году</NavLink>
          <a href="http://exchangeratesapi.io/" className="nav-link">Используемое API</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
