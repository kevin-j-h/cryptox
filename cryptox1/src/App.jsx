import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home';
import Wallet from './pages/wallet';
import Transactions from './pages/transactions';
import Watchlist from './pages/watchlist';
import LoginPage from './pages/login';
import Navbar from './components/Navbar';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<LoginPage setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/home"
          element={authenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/wallet"
          element={authenticated ? <Wallet /> : <Navigate to="/" />}
        />
        <Route
          path="/transactions"
          element={authenticated ? <Transactions /> : <Navigate to="/" />}
        />
        <Route
          path="/watchlist"
          element={authenticated ? <Watchlist /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

