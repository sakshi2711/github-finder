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
    accessToken:'',
    profile:{}
  };
}

  static defaultProps={
    clientID:'eQdt49um3SF9rZgPfe3qr0goosqfK7EC',
    domain:'sakshi2711.auth0.com'
  }

  componentWillMount(){
    this.lock=new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on("authenticated", (authResult)=>{
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }
        this.setProfile(authResult.accessToken, profile);
      });
    });
    this.getProfile();
  }

  setProfile(accessToken, profile){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('acessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile(){
    if(localStorage.getItem('accessToken')!=null){
      this.setState({
        accessToken:localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      },()=>{
        console.log(this.state);
      });
    }
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      accessToken:'',
      profile:''
    },()=>{
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    })
  }

render() {
  let islog;
  if(localStorage.accessToken){
    islog= <Github/>
  }
  else {
    islog= "Please login to view Github Finder";
  }
    return (
      <div className="App">
        <Header
           lock={this.lock}
           accessToken={localStorage.accessToken}
           onLogout={this.logout.bind(this)}
           onLogin={this.showLock.bind(this)}
          />
        {islog}


      </div>
    );
  }
}

export default App;
