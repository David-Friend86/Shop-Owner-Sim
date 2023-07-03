import React,{Fragment, useState} from "react";


function AddItem({materials, tools, addNewItem}){
    
    const temp =[{ id: 0, name:null}, ...materials]
    const numArr = [1,2,3,4,5,6,7,8,9,10]
    const zArr = [0, ...numArr]

    const [itemName, updateItemName] = useState('')
    const [itemImage, updateItemImage] = useState('')
    const [requiredTool, updateRequiredTool] = useState([])
     
    const [recipeItemOne, updateRecipeOne] = useState([2,'http://fantasylife.info/projects/main/upload/items_crop/materials/image-53.jpg'])
    const [R1A, UR1A] = useState(1)
    const [recipeItemTwo, updateRecipeTwo] = useState([])
    const [R2A, UR2A] = useState(0)
    const [recipeItemThree, updateRecipeThree] = useState([])
    const [R3A, UR3A] = useState(0)

    const[itemPrice, updateItemPrice] = useState(0)

    
    
      function handleNewInventory(event,itemName,itemImage,requiredTool,recipeItemOne,recipeItemTwo,recipeItemThree, itemPrice, R1A,R2A,R3A){
        event.preventDefault()
        if(itemName=== ''){
          alert('Item needs a name')
        }
        if(itemImage === ''){
          alert('Item needs an image')
        }
        else {
            console.log(recipeItemOne)
          const itemObj =  {
            name: itemName,
            image: itemImage,
            "amount": 0,
            sellPrice: itemPrice,
            reqTool:[requiredTool[0],requiredTool[1]],
            recipe: [
              { 
                id: parseInt(recipeItemOne[0]),
                amount:R1A,
                image: recipeItemOne[1]
              },
              {
                id: parseInt(recipeItemTwo[0]),
                amount:R2A,
                image: recipeItemTwo[1]
              },
              {
                id:parseInt(recipeItemThree[0]),
                amount: R3A,
                image:recipeItemThree[1]
              },
            ]
          }
          addNewItem(itemObj)
        }
    
      }

      function calcPrice(){

      }
   

    return(
        <div style={{ display: "grid", justifyItems:'center', justifyContent:'center'}}>
            <form  onSubmit={(event)=>handleNewInventory(event,itemName,itemImage,requiredTool,recipeItemOne,recipeItemTwo,recipeItemThree,itemPrice, R1A, R2A, R3A)}>
                <label>
                    Item name:
                    <input type="text" placeholder="Cup holder, wooden plate, etc..." onChange={(e)=>updateItemName(e.target.value)}></input>
                </label>
                <br/>
                <label>
                    Item image:
                    <input type="text" onChange={(e)=> updateItemImage(e.target.value)}></input>
                </label>
                <br/>
                <label>
                    Required Tool:
                    <select onChange={(e)=> updateRequiredTool(e.target.value.split(','))}>
                        {tools.map((tool)=>
                            <option key={tool.id} value ={[tool.id,tool.image]}>{tool.name}</option>
                        )}
                    </select>
                </label>
                <br/>
                <label>
                    Recipe:
                    <label>
                    <br/>
                        Item 1:
                        <select onChange={(e)=>updateRecipeOne(e.target.value.split(','))}>
                            {materials.map((material)=>
                                <option key={material.id} value={[material.id, material.image]}>{material.name}</option>
                            )}
                        </select>
                        <label>
                             Amount: <select onChange={(e)=> UR1A(e.target.value)}>{numArr.map((num)=> <option key={num} value={num}>{num}</option>)}</select>
                        </label>
                    </label>
                    <br/>
                    <label>
                        Item 2:
                        <select onChange={(e)=> updateRecipeTwo(e.target.value.split(','))}>
                            {temp.map((material)=>
                                <option key={material.id} value={[material.id, material.image]}>{material.name}</option>
                            )}
                        </select>
                        <label>
                             Amount: <select onChange={(e)=> UR2A(e.target.value)}>{zArr.map((num)=> <option key={num} value={num}>{num}</option>)}</select>
                        </label>
                    </label>
                    <br/>
                    <label>
                        Item 3:
                        <select onChange={(e)=> updateRecipeThree(e.target.value.split(','))}>
                            {temp.map((material)=>
                                <option key={material.id} value={[material.id, material.image]}>{material.name}</option>
                            )}
                        </select>
                        <label>
                             Amount: <select onChange={(e)=> UR3A(e.target.value)}>{zArr.map((num)=> <option key={num} value={num}>{num}</option>)}</select>
                        </label>
                    </label>
                </label>
                <button type="submit">Add New Item</button>
            </form>
            <h2>This item will be worth:{itemPrice}</h2>
            </div>
    )
}


export default AddItem