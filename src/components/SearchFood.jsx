import React from 'react'
import { useState } from "react"

function SearchFood(props) {
  // Estados del search
  
  const [search, setSearch] = useState ("")
 
  const handleSearch = (event) =>{
   
    //modificar el estado del search con la información del imput
    setSearch(event.target.value)

    //esta info se envia a través del argumento de la función que proviene del props. 
    props.searchOneFood(event.target.value)
  }
    return (
    <div>
        <input type="text" name="search" value={search} onChange ={handleSearch}/>
   
    </div>
  )
}

export default SearchFood