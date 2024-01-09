import React from 'react';
import './styles/main.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './Layout/Layout.jsx';

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Characters from './pages/Characters';
import Comics from './pages/Comics';

const App =() => {
  return (
      <Layout>
    <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path="characters" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404! There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
