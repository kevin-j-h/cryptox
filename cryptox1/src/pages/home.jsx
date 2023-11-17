import React from 'react';
// import Navbar from './components/navbar';

function Home() {
  return (
    <div>
      <header>
          <div className="logo">
            <h1>Crypto Wallet</h1>
            {/* <Navbar /> */}
          </div>
      </header>


      <section className="hero">
        <h2>Welcome Leo</h2>
        <p>Your secure Cryptocurrency Wallet Is Active.</p>
        <br></br>
        <a href="#" className="cta-button">WALLET ID</a>
      </section>

      

      <section className="search">
        <h2>Search for Cryptocurrencies</h2>
        <form className="search-form">
          <input type="text" placeholder="Enter cryptocurrency name or symbol" />
          <button type="submit">Search</button>
        </form>
        <br></br>
        <a href="#" className="view-button">View</a>
      </section>

      <section className="buy-sell">
        <h2>Buy/Sell Cryptocurrencies</h2>
        <h4>btc</h4>
        <h4>eth</h4>
        <h4>dodge</h4>
        <br></br>
        <a href="#" className="view-button">View</a>
      </section>

      <footer>
        <p>Crypto Wallet</p>
      </footer>
    </div>
  );
}

export default Home;

