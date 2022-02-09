import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import './App.css';

import HatsPage from './pages/hatspage.component';

const TopicTest =(props) => {
  console.log(props)
  return (
    <div>
      <h1>TOPIC DETAIL TEST</h1>
    </div>
  );
}

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/hats/*" element={<TopicTest />} />
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Error 404 not found</p>
              </main>
            }
        />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
