import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          {/* Otras rutas pueden añadirse aquí */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
