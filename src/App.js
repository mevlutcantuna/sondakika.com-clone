import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnaSayfa from "./Components/AnaSayfa";
import Koronavirüs from "./Components/Koronavirüs";
import Ekonomi from "./Components/Ekonomi";
import Spor from "./Components/Spor";
import Magazin from "./Components/Magazin";
import Dünya from "./Components/Dünya";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className='app__body'>
        <Route 
          path='/'
          exact
          component={AnaSayfa}
        />
        <Route 
          path='/koronavirüs'
          exact
          component={Koronavirüs}
        />
        <Route 
          path='/ekonomi'
          exact
          component={Ekonomi}
        />
        <Route 
          path='/spor'
          exact
          component={Spor}
        />
        <Route 
          path='/magazin'
          exact
          component={Magazin}
        />
        <Route 
          path='/dünya'
          exact
          component={Dünya}
        />
        </div>
      </div>
    </Router>
  );
}

export default App;
