import React from 'react';
import Navigation from "../components/navigation/navContainer";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../routes/home";
import Category from '../routes/category';
import WriteReview from '../routes/review/WriteReview';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/category/:type/write_review" element={<WriteReview />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
