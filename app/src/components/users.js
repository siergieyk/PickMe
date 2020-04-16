import React, { Component } from 'react';


class Users extends Component {

  state = {
    users: [],
    user: {
      first: 'Clark',
      last: 'Kent',
      email: 'super@outlook.com'
    }
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers = _ => {
    fetch('http://localhost:4000/user')
    .then(response => response.json())
    .then(response => this.setState({ users: response.data}))
    .catch(err => console.log(err))
  }

  renderUser = ({ id, first, last, email}) => <div key={id}>{first} | {last} | {email}</div>

  addUser = _ => {
    const { user } = this.state
    fetch(`http://localhost:4000/user/add?first=${user.nome}&last=${user.last}&email=${user.email}`)
    .then(this.getUsers)
    .catch( err => console.log(err))
  }

  render() {
    const { users, user } = this.state
    return (
      <div className="App">
        {users.map(this.renderUser)}

        <div>
          <input
            value={user.first}
            onChange={e => this.setState({ user: {...user, first:e.target.value}})} />
            <input
            value={user.last}
            onChange={e => this.setState({ user: {...user, last:e.target.value}})} />
            <input
            value={user.email}
            onChange={e => this.setState({ user: {...user, email:e.target.value}})} />
            <button onClick={this.addUser}>Add User</button>
        </div>
      </div>
    );
  }
}

export default Users;
