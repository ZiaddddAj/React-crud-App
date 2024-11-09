import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './comp/navbar';
import Home from './comp/home';
import FormCrud from './comp/FormCrud';
import View from './comp/View';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/:id" element={<FormCrud />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;