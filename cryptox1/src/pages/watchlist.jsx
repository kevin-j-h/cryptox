import React from 'react';
// import Navbar from './components/navbar';
import './pages.css';

function Watchlist() {
  return (
    <div>
    {/* <Navbar /> */}
    <section className="watchlist">
        <h2>Your Watchlist</h2>
        <h4>watchlist1</h4>
        <h4>watchlist2</h4>
        <h4>watchlist3</h4>
        <h4>watchlist4</h4>
        <h4>watchlist5</h4>
        <br></br>
        <a href="#" className="view-button">View</a>
      </section>
      </div>
  );
}

export default Watchlist;