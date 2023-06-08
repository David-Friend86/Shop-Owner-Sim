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
import hardwareInventory from './hardwareInventory';
import electronicsInventory from './electronicsInventory';


function App() {
  const [cash, updateCash] =useState(100)
  const [userName, updateName] = useState('Jeff')
  
  function addMoney(amount){
    updateCash((cash)=>cash=cash+amount)
  }

  function subtractMoney(amount){
    updateCash((cash)=> cash= cash-amount)
  }

  /*TO DO:

  Make item page 
    Edit items to have descriptions
  Make buyItem function

  
  */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  return (
    <div>
      <h1>Shop-Owner Simulator</h1>
      <Cash cash={cash}/>
      <NavBar/>
      {userName==''?<Welcome/>:null}
      <Switch>
      <Route path="/creation-station">
        <HobbyStore subtractMoney={subtractMoney} inventory={hobbyInventory} />
      </Route>
      <Route path="/rockmans-tools">
        <HardwareStore inventory ={hardwareInventory} />
      </Route>
      <Route path="/gadget-garden">
        <ElectronicStore inventory={electronicsInventory} />
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>

      
  </div>
  );
}

export default App;