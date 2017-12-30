import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav>
        <li>
          <NavLink to='/' style={{ textDecoration: 'none' }}>&nbsp; Home &nbsp;</NavLink>
        </li>
        <NavItem>
          <NavLink to='/trails' style={{ textDecoration: 'none' }}>&nbsp; Trails &nbsp;</NavLink>
        </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
