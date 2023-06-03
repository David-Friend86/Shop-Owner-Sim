import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from './Welcome'
import NavBar from './NavBar'
import Cash from './Cash';

import './App.css';
import Home from './Home'
import HobbyStore from './HobbyStore';
import HardwareStore from './HardwareStore';
import ElectronicStore from './ElectronicStore';

function App() {
  const [cash, updateCash] =useState(0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  return (
    <div>
      <h1>Shop-Owner Simulator</h1>
      <Cash cash={cash}/>
      <NavBar/>
      <Welcome/>
    
      <Switch>
      <Route path="/creation-station">
        <HobbyStore />
      </Route>
      <Route path="/rockmans-tools">
        <HardwareStore />
      </Route>
      <Route path="/gadget-garden">
        <ElectronicStore />
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>

      
  </div>
  );
}

export default App;