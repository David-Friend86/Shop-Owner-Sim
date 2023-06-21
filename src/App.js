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
import MyMaterials from './MyMaterials';

function App() {
  const [cash, updateCash] =useState(100)
  const [playerInfo, updateName] = useState(['Jeff',`Jeff's Master-crafts`])
  const [materials, updateMaterials]= useState([])
  const [tools,updateTools]= useState([])
  const [shopInventory, updateInventory] = useState([])

  function handleErrors(res){
    if(!res.ok){
      throw Error(res.statusText)
    }
  }

  function addMoney(amount){
    const temp = cash + amount
    updateCash(temp)
    fetch('http://localhost:3000/playerInfo',{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        cash: temp
      })
    })
    .then(handleErrors)
    .then(r=> console.log('error'))
    .catch(e=> console.log(e))
  }

  function subtractMoney(amount){
    const temp = cash-amount
    updateCash(temp)  
    fetch('http://localhost:3000/playerInfo',{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        cash: temp
      })
    })
    .then(handleErrors)
    .then(r=> console.log('error'))
    .catch(e=> console.log(e))
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
    .then(handleErrors)
    .then(r=> console.log('error'))
    .catch(e=> console.log(e))
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

  function removeMaterials(id, amount){
    let copy = materials
    copy[id-1].quantity = copy[id-1].quantity-amount;
    updateMaterials(copy)
    fetch(`http://localhost:3000/materials/${id}`,{
      method: 'PATCH',
      headers: {"Content-Type": "application/json",},
      body:JSON.stringify({
        quantity: materials[id-1].quantity
      })
    })
  }

  function handleCrafting(item){
    if(tools[item.reqTool[0]-1].owned ==false){
      alert(`You don't have a ${tools[item.reqTool[0]-1].name} to make this item!`)
    }
    for(let i=0; i<item.recipe.length; i++){
      if(materials[item.recipe[i].id-1].quantity < item.recipe[i].amount){
        alert(`You don't have enough ${materials[item.recipe[i].id-1].name} to make this item!`)
        return 1
      }
    }
    item.recipe.forEach(element => {
      removeMaterials(element.id, element.amount)
    });
   addToStore(item)
  }

  function addToStore(item){
    let sc = shopInventory
    sc[item.id-1].amount = sc[item.id-1].amount+1
   
    updateInventory((shopInventory)=> shopInventory=sc)

    fetch(`http://localhost:3000/inventory/${item.id}`,{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        amount:sc[item.id-1].amount
      })

    })
  }

  function removeFromStore(item){
    let sc = shopInventory
    sc[item.id-1].amount = sc[item.id-1].amount-1
   
    updateInventory((shopInventory)=> shopInventory=sc)

    fetch(`http://localhost:3000/inventory/${item.id}`,{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        amount:sc[item.id-1].amount
      })

    })
  }

  function sellItem(inventory){
    const sellable = inventory.filter((item)=>
      item.amount >0
    )
    const sold = sellable[Math.floor(Math.random() * sellable.length)]
    addMoney(sold.sellPrice)
    removeFromStore(sold)
    console.log(`Someone bought a ${sold.name}`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      sellItem(shopInventory)
    }, 10000);
    return () => clearInterval(interval);
  }, [shopInventory]);

  

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

    fetch('http://localhost:3000/playerInfo')
    .then(r=> r.json())
    .then(d=> updateCash(d.cash))
  },[])

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Shop-Owner Simulator</h1>
      <Cash cash={cash}/>
      <NavBar storeName={playerInfo[1]}/>
      {playerInfo[0]==''?<Welcome/>:null}
      <MyMaterials materials={materials} tools={tools}/>

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