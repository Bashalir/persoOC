import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='general-container'>
      <div className='home-container'>
        <Link to="/1-CV/"><button className="pierre-button-home pierre-button-cv">PIERRE</button></Link>
        <Link to="/2-Bank/"><button className="pierre-button-home pierre-button-bank">BANK</button></Link>
        <Link to="/3-Shop/"><button className="pierre-button-home pierre-button-shop">SHOP</button></Link>
        <Link to="/4-Wikitime/"><button className="pierre-button-home pierre-button-wikitime">WIKITIME</button></Link>
      </div>
    </div>
  );
}

export default Home;
