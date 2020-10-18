import React from 'react';
import User from '../src/components/user'
import Design from '../src/design.css'
import FetchUser from './components/fetchUser'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false
    }
  }
  
  gettingUser = res => {
    const users = [...this.state.users, res.results[0]];
    this.setState({users});
  }
  
  
  componentDidMount = () => {    
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        this.setState({
          users: data.results,
          isLoading: true
        });
    }); 
  }

  render() {
    console.log("this.state.users", )
    return (
      <div className='App'>
        <main className='cardList'>
          {this.state.users &&
            this.state.users
            .map((user, index) => (
              <User 
                key={index}
                name={user.name.first}
                email={user.email}
                pic={ user.picture && user.picture.medium}
                country= {user.location.country}
                city= {user.location.city}
              />
            ))
          }
          { this.state.isLoading &&
            <FetchUser gettingUser={this.gettingUser} />
          }
        </main> 
      </div>
    );
  }
}
export default App;