import React, { Component } from 'react';
// import Header from './Components/Header';


class Search extends Component {

  // searchProfile(){
  //   this.props.searchProfile();
  // }

  submit(event){
    event.preventDefault();
    let value=this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value='';

  }

  render(){
    return(
      <div className="search-box">
        <form onSubmit={this.submit.bind(this)}>
          <label>
            <input type="search" ref="username" placeholder="Type a username and hit Enter"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;