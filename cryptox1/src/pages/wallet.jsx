import React from 'react';
// import Navbar from './components/navbar';

function Wallet() {
  return (
    <div>
    {/* <Navbar /> */}
    <section className="wallet">
        <h2>Your Wallet</h2>
        <div className="wallet-info">
          <p><strong>Balance:</strong> 0.00 BTC</p>
          <p><strong>Address:</strong> Your Wallet Address</p>
        </div>
        <div className="wallet-actions">
          <a href="#" className="cta-button">Send BTC</a>
          <a href="#" className="cta-button">Receive BTC</a>
        </div>
        <br></br>
        <a href="#" className="view-button">View</a>
      </section>
      </div>
  );
}

export default Wallet;

