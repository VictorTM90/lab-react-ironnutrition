import React from 'react'

function FoodDay(props) {
    console.log(props.foodToList)
    const total = props.foodToList.reduce((acc, eachFood)=>{
      return acc + (eachFood.quantity * eachFood.calories)
    }, 0)
    return (
    
    <div>
    <h3>FoodDay</h3>
    {props.foodToList.map((eachFood) => {
        const { name, quantity, calories } = eachFood
        return <p>{name}: {quantity} : {quantity * calories} </p>
      })}

      <p> {total} cal</p>
    
    </div>
  )
}

export default FoodDay