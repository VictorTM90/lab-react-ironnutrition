import React from 'react';
import {useState} from "react"

function FoodBox(props) {
  
    const { name, calories, image,  } = props.eachFood
    const [ quantity, setQuantity ] = useState(0)
    
    const handleList = (event) =>{
      setQuantity(event.target.value)
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      props.toDayFoods({name, calories, quantity})
    }

    return (
    <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} width="100px" alt={name}/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong> <br />
            <small>{calories} cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <form onSubmit={handleSubmit} >
          <div className="control">
            <input className="input" type="number" name="quantity" value={quantity} onChange = {handleList}/>
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
          </form>
        </div>
      </div>
    </article>
  </div>
  )
}

export default FoodBox