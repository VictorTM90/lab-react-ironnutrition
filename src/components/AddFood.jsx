import React from 'react';
import { useState } from 'react';

function AddFood(props) {
  
//*Estados a controlar 
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [imagen, setimagen] = useState('');
  
  //* Función para actualizar la lista de productos
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFood({ name, calories, imagen });
  };

//* Funciones para añadir el valor del input al nuevo estado 

  const handleAddName = (event) => {
      console.log(event)
      setName(event.target.value);}
  const handleAddCalories = (event) => setCalories(event.target.value);
  const handleAddImagen = (event) => setimagen(event.target.value);


  return (
    <div>
     
      {/* form debe llevar un submit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre :</label>
        <input type="text" name="name" value={name} onChange={handleAddName} />

        <label htmlFor="calories"> Calorias: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleAddCalories} min={0}
        />

        <br />

        <label htmlFor="imagen">Imagen: </label>
        <input
          type="text"
          name="imagen"
          src={imagen}
          alt="Algo ha fallado. La imagen no carga"
          onChange={handleAddImagen}
        />
        
        <button>Add food</button>
      </form>
    </div>
  );
}

export default AddFood;
