import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


import './App.css';


// const TopicTest =(props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>TOPIC DETAIL TEST</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/" element={<ShopPage />} />
        {/* <Route path="/shop/hats/*" element={<TopicTest />} /> */}
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className='error404'>Error 404 not found</p>
              </main>
            }
        />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
