import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Header extends Component {
onLogin(){
  this.props.onLogin();
}



  render(){
    return(
      <Navbar className="bg-light">
        <Navbar.Header>
          <Navbar.Brand>
            Github Finder
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={this.onLogin.bind(this)} href='#'>Login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
