import React, { Component } from 'react'

export default class newUser extends Component {

  fetchNewUser = e => {
    const API = 'https://randomuser.me/api/?results=5';
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.props.gettingUser(data);
    }); 
  }
  render() {
    return (
      <div>
        <button 
          className='newUserButton'
          onClick={this.fetchNewUser}
        >See More
        </button>
      </div>
    )
  }
}
