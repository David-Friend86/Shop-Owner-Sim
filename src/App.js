import React, {Fragment, useEffect, useState} from 'react';
import {Route, Switch } from "react-router-dom";
import Welcome from './Welcome'
import NavBar from './NavBar'
import Cash from './Cash';

import './App.css';
import Home from './Home'
import HobbyStore from './HobbyStore';
import HardwareStore from './HardwareStore';
import ElectronicStore from './ElectronicStore';
import MyMaterials from './MyMaterials';
import ChatContainer from './ChatContainer';

import hobbyInventory from './hobbyInventory';
import hardwareInventory from './hardwareInventory';
import electronicsInventory from './electronicsInventory';
import names from './nameArray';


function App() {
  const [cash, updateCash] =useState(100)
  const [playerInfo, updateInfo] = useState('')
  const [materials, updateMaterials]= useState([])
  const [tools,updateTools]= useState([])
  const [shopInventory, updateInventory] = useState([])
  const [chat, updateChat] = useState([])

  function handleErrors(res){
    if(!res.ok){
      throw Error(res.statusText)
    }
  }

  function handleSubmit(event,shop){
    event.preventDefault()
    updateInfo(shop)
    fetch('http://localhost:3000/playerInfo/',{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        storeName: shop
      })
    })
    .then(handleErrors)
    .catch(e=> console.log(e))
  }

  function addMoney(amount){
    const temp = cash + amount
    updateCash((cash) => cash=temp)
    fetch('http://localhost:3000/playerInfo/',{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        cash: temp
      })
    })
    .then(handleErrors)
    .catch(e=> console.log(e))
  }

  function subtractMoney(amount){
    const temp = cash-amount
    updateCash((cash)=> cash=temp)  
    fetch('http://localhost:3000/playerInfo/',{
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        cash: temp
      })
    })
    .then(handleErrors)
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
    updateInventory(sc)
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
    if(sold == undefined){
      return 0;
    }
    else{
    addMoney(sold.sellPrice)
    removeFromStore(sold)
    notifyMessage(sold)
    }
    
  }


  function notifyMessage(item){
    const cc = chat
    cc.push(`${names[Math.floor(Math.random() * names.length)]} just bought a ${item.name}!`)
    updateChat((chat)=> chat=cc)
  }


  useEffect(() => {
    const interval = setInterval(() => {
      sellItem(shopInventory)
    }, 10000);
    return () => clearInterval(interval);
  }, [shopInventory, cash]);

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
    .then(d=> {
      updateInfo(d.storeName)
      updateCash(d.cash)})
  },[])

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Shop-Owner Simulator</h1>
      {playerInfo==""?<Welcome handleSubmit={handleSubmit}/>:
      <Fragment>
      <Cash cash={cash}/>
      <h3>broke? click this---{'>'}<button onClick={()=>addMoney(1)}>+$1.00</button> </h3>
      <ChatContainer messages={chat}/>
      <NavBar storeName={playerInfo}/>
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
        <Home inventory={shopInventory} storeName={playerInfo} handleCrafting={handleCrafting}/>
      </Route>
    </Switch> 
    </Fragment> 
      }
  </div>
  );
}

export default App;