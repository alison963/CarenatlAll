import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import AddCar from './pages/products/AddCar';

const root = ReactDOM.createRoot(document.getElementById('root')); //rendering App
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/createItem' element={<AddCar />}></Route>

    </Routes>

  </BrowserRouter>
);
