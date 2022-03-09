import React,  { useState } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox.jsx';
import SearchFood from './components/SearchFood';
import foods from './foods.json';
import FoodDay from './components/FoodDay';


function App() {
  const [showAddFood, setShowAddFood] = useState (false)

  // Estado inicial de la lista.
const  [listFoods, setFoods] = useState ( foods ) 
 // Servirá para renderizar una nueva lista, con el elemento añadido, SIN MODIFICAR LA ORIGINAL
  const [renderListFoods, setRenderFoods] = useState (listFoods)
 
  const [foodToList, setfoodToList] = useState ([])

  //Afegir food
  const addFood = (newFood) =>{
    setRenderFoods([...listFoods, newFood])
  }

  // Fer el filter
  const searchOneFood = (searchQuery) =>{
    
    const foodFilter = listFoods.filter((eachFood)=>{
      return eachFood.name.toLowerCase().startsWith(searchQuery)
    })
    
    setRenderFoods(foodFilter)
  }

  //Añadir food a la lista 
   const toDayFoods = (foodToDay) => {
    setfoodToList([...foodToList, foodToDay ])
   }

  return (
    
    <div className="App">
    
    <h1>IronNutri</h1>

    <SearchFood searchOneFood = {searchOneFood}/>

    <button onClick = {()=> setShowAddFood(!showAddFood)}>
    {showAddFood ? "Hidde" : "Add Food"}</button>
    { showAddFood && <AddFood addFood={addFood} />}

    

    {renderListFoods.map((eachFood, index)=>{
     
      return (
        
        <FoodBox eachFood={eachFood} key={index+eachFood} toDayFoods={toDayFoods} />

      )}
   )}

        <FoodDay foodToList= {foodToList} />

    </div>
  );
}

export default App;
