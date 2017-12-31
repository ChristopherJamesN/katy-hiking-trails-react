import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavLink, NavbarBrand } from 'reactstrap';

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
            <NavLink href='/trails'>Trails</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/addicks'>Addicks Trails</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/barker'>Barker Trails</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
