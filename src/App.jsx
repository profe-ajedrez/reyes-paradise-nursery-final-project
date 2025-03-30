
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import About from './AboutUs';

function App() {
  
  const [productList, setShowProductList] = useState(false);

  const getStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${productList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Serenity meets Green</p>
         
          <button className="get-started-button" onClick={getStarted}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <About/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${productList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



