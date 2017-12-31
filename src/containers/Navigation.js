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
          <br></br>
          <NavItem>
            <NavLink to='/trails' style={{ textDecoration: 'none', color: 'gray' }} onClick={this.toggle}>&nbsp; Trails &nbsp;</NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink to='/addicks' style={{ textDecoration: 'none', color: 'gray' }} onClick={this.toggle}>&nbsp; Addicks Trails &nbsp;</NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink to='/barker' style={{ textDecoration: 'none', color: 'gray' }} onClick={this.toggle}>&nbsp; Barker Trails &nbsp;</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
