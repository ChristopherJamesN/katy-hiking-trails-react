import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    return (
      <Navbar color='light' light expand="md" className="sticky-top">
      <NavbarToggler onClick={this.toggle} />
      <NavbarBrand href="/">Home</NavbarBrand>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to='/trails' style={{ textDecoration: 'none' }}>&nbsp; Trails &nbsp;</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/addicks' style={{ textDecoration: 'none' }}>&nbsp; Addicks Trails &nbsp;</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/barker' style={{ textDecoration: 'none' }}>&nbsp; Barker Trails &nbsp;</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
