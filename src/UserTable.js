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
      console.log('Data from API:', data);
      if (typeof data === 'object' && data !== null) {
        this.setState({ users: [data], loading: false });
      } else {
        console.error('Data is not in the expected format:', data);
      }
    })
    .catch(error => console.error('Error:', error));
}


render() {
    const { users, loading } = this.state;
  
    return (
      <div>
        <h2>User Table</h2>
        {loading && <div>Loading...</div>}
        {users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Profile</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={user.image} alt="Profile" style={{ width: '50px' }} />
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.domain}</td>
                  <td>{user.ip}</td>
                  <td>{user.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  
}

export default UserTable;
