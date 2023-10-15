import React, { Component } from 'react';

class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data, loading: false });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>User Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
