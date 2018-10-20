import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Header extends Component {

onLogin(){
  this.props.onLogin();
}

onLogout(){
  this.props.onLogout();
}



  render(){
    let page;
    if(this.props.accessToken){
      page=<NavItem class="login" onClick={this.onLogout.bind(this)} href='#'>Logout</NavItem>
    }
    else{
      page=<NavItem class="login" onClick={this.onLogin.bind(this)} href='#'>Login</NavItem>
    }
    return(
      <Navbar className="p-2 bg-light">
        <Navbar.Header>
          <Navbar.Brand id="heading">
            Github Finder
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {page}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
