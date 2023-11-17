import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Crypto Wallet</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

