import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/users').then((res) => {
      if (!res) {
        throw new Error("Network Error");
      }
      return res.json();
    }).then((data) => {
      setUsers(data);
    })
  }, [])

  return (
    <>
      {users.map((user) => (
        <div className='user-info' key={user.id}>
          <h1>Name: {user.name}</h1>
          <h3>Email: {user.email}</h3>
        </div>
      ))}
    </>
  );
  

}



export default App;