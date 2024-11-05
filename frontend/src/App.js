import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Importaciones de las páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GameDetailPage from './pages/GameDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import VendorDashboard from './pages/VendorDashboard';

import './css/styles.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/" component={LoginPage} exact />
          <Route path="/" component={RegisterPage} exact />
          <Route path="/" component={GameDetailPage} exact />
          <Route path="/" component={CheckoutPage} exact />
          <Route path="/" component={WishlistPage} exact />
          <Route path="/" component={VendorDashboard} exact />
          {/* Otras rutas pueden añadirse aquí */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
