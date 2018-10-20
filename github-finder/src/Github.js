import React, { Component } from 'react';
import Profile from './Components/Profile';
import Search from './Components/Search';

const API = 'https://api.github.com/users/';
class Github extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: 'sakshi2711',
      name: '',
      followers: '',
      following: '',
      avatar: '',
      location: '',
      repos: '',
      homeURL: '',
      notFound: ''
    };
  }

  getProfile(username){
    let loginURL = API + username;

    fetch(loginURL)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        username: data.login,
        name: data.name,
        followers: data.followers,
        following: data.following,
        avatar: data.avatar_url,
        location: data.location,
        repos: data.public_repos,
        homeURL: data.html_url,
        notFound: data.message
      })
    })
    .catch(err => console.log("There is some Problem, Please try later.") )
  }

  componentDidMount(){
    this.getProfile(this.state.username);
  }

  render(){
    return(
      <div>
        <section id='card'>
          <Search searchProfile={this.getProfile.bind(this)}/>
          <Profile userData={this.state}/>
        </section>
      </div>
    );
  }
}

export default Github;
