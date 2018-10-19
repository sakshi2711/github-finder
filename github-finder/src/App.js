import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Components/Header'
import Github from './Github';
import Auth0Lock from 'auth0-lock';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    idToken:'',
    profile:{}
  };
}

  static defaultProps={
    clientID:'eQdt49um3SF9rZgPfe3qr0goosqfK7EC',
    domain:'sakshi2711.auth0.com'
  }

  componentWillMount(){
    this.lock=new Auth0Lock(this.props.clientID, this.props.domain);
    // Listening for the authenticated event
    this.lock.on("authenticated", function(authResult) {
      console.log(authResult);

  });
  }
  showLock(){
    this.lock.show();
  }

render() {
    return (
      <div className="App">
        <Header onLogin={this.showLock.bind(this)}
          />
        <Github/>

      </div>
    );
  }
}

export default App;
