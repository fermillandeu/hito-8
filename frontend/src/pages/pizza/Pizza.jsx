import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams(); // Obtiene el id de la pizza desde la URL
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar la pizza');
        }
        return response.json();
      })
      .then(data => setPizza(data))
      .catch(error => setError('Hubo un problema para cargar la información'));
  }, [id]);

  if (error) return <h3 style={{ color: 'red' }}>{error}</h3>;

  return (
    <div>
      {pizza ? (
        <>
          <h1>{pizza.name}</h1>
          <img src={pizza.img} alt={pizza.name} />
          <p>{pizza.description}</p>
          <p>Precio: ${pizza.price}</p>
        </>
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
};

export default Pizza;
