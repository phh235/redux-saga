import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import Product from './pages/Product';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

