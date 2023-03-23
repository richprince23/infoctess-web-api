import './App.css';
import React from 'react';
import Login from './screens/login';

function loginUser (credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function App() {
  
  
  return (
    <div className="App">
      <Login/> 
    </div>
  );
}

export default App;
