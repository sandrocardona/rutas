import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>{" - "}
          <Link to="/Reservas">Reservas</Link>{" - "}
          <Link to="/Administracion">Administracion</Link>{" - "}
          <Link to="/Usuario">Usuario</Link>
        </nav>
        <Outlet></Outlet>
      </header>
    </div>
  );
}

export default App;
