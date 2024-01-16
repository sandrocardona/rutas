import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Reservas from './Componentes/Reservas';
import Administracion from './Componentes/Administracion';
import Usuario from './Componentes/Usuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="Reservas" element={<Reservas />}></Route>
        <Route path="Administracion" element={<Administracion />}></Route>
        <Route path="Usuario" element={<Usuario />}></Route>
        <Route path="*" element={<h2>No hay nada aqui</h2>} ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
