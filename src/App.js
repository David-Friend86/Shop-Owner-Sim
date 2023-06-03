import React, {useEffect, useState} from 'react';
import {Route, Switch } from "react-router-dom";
import Welcome from './Welcome'
import NavBar from './NavBar'
import Cash from './Cash';

import './App.css';
import Home from './Home'
import HobbyStore from './HobbyStore';
import HardwareStore from './HardwareStore';
import ElectronicStore from './ElectronicStore';

import hobbyInventory from './hobbyInventory';


function App() {
  const [cash, updateCash] =useState(0)
  const [userName, updateName] = useState('Jeff')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  return (
    <div>
      <h1>Shop-Owner Simulator</h1>
      <Cash cash={cash}/>
      <NavBar/>
      {userName==''?<Welcome/>:null}
      <Switch>
      <Route path="/creation-station">
        <HobbyStore inventory={hobbyInventory} />
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