// src/App.js
import React, { useState } from 'react';
import Login from './components/login';
import Ventas from './components/ventas';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? <Ventas /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
