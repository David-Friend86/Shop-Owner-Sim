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
  const [playerInfo, updateName] = useState(['Jeff',`Jeff's Master-crafts`])
  const [materials, updateMaterials]= useState([])
  const [shopInventory, updateInventory] = useState([])
  const [tools,updateTools]= useState([])

  function handleCrafting(recipe){
    for(let i=0; i<recipe.length; i++){
    console.log(`ID: ${recipe[i].id}, Amount: ${recipe[i].amount}`)
    }
  }

  function addItem(item){

  }

  function addMoney(amount){
    updateCash((cash)=>cash=cash+amount)
  }

  function subtractMoney(amount){
    updateCash((cash)=> cash= cash-amount)
  }

  function addToInventory(id){
    let copy = materials
    copy[id-1].quantity = copy[id-1].quantity+1;
    updateMaterials(copy)
    fetch(`http://localhost:3000/materials/${id}`,{
      method: 'PATCH',
      headers: {"Content-Type": "application/json",},
      body:JSON.stringify({
        quantity: materials[id-1].quantity
      })
    })
  }

  function buyItem(item){
    if(cash<item.price){
      alert("Not enough cash!")
    }
    else{
      subtractMoney(item.price)
      addToInventory(item.id)
    }
   
  }

  function buyTool(tool){
    if(tools[tool.id-1].owned ==true){
      alert(`You already own a ${tool.name}!`)
    }
    else if(cash<tool.price){
      alert("Not enough cash!")
    }
    else{
      let tc = tools
      tc[tool.id-1].owned = true
      updateTools(tc)
      subtractMoney(tool.price)
      fetch(`http://localhost:3000/tools/${tool.id}`,{
        method: 'PATCH',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
          owned : true
        })
      })
    }
  }
  
  useEffect(()=>{
    fetch('http://localhost:3000/materials')
      .then(r=>r.json())
      .then(d=> updateMaterials(d))
    
    fetch('http://localhost:3000/inventory')
    .then(r=> r.json())
    .then(d=> updateInventory(d))
    
    fetch('http://localhost:3000/tools')
    .then(r=> r.json())
    .then(d=> updateTools(d))
  
  },[])

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  return (
    <div>
      <h1>Shop-Owner Simulator</h1>
      <Cash cash={cash}/>
      
      <NavBar/>
      {playerInfo[0]==''?<Welcome/>:null}
      <Switch>
      <Route path="/creation-station">
        <HobbyStore buyItem={buyItem} inventory={hobbyInventory} />
      </Route>
      <Route path="/rockmans-tools">
        <HardwareStore inventory ={hardwareInventory} buyTool={buyTool} />
      </Route>
      <Route path="/gadget-garden">
        <ElectronicStore buyItem={buyItem} inventory={electronicsInventory} />
      </Route>
      <Route path="/">
        <Home inventory={shopInventory} storeName={playerInfo[1]} handleCrafting={handleCrafting}/>
      </Route>
    </Switch>

      
  </div>
  );
}

export default App;