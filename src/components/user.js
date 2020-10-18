
import React, { Component } from 'react'
import Design from '../../src/design.css'

class User extends React.Component {


  render() {
    const {name, email, pic, country, city} = this.props;
    return (
      <div className='Card'>
        <div className='CardTop'>
          <img src={pic} />
        </div>
        <div className='CardBottom'>
          <h3>{name}</h3>
          <h5> {city}, {country}</h5>
          <h5>{email}</h5>
        </div>
      </div>
    );
  }
}
export default User;