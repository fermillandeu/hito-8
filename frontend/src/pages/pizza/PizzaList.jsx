import React, { useEffect, useState } from 'react';
import CardPizza from '../../components/cardpizza/CardPizza'; // Asegúrate de importar tu componente de tarjeta de pizza

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas') // Asegúrate de que esta URL sea correcta
      .then(response => {
        if (!response.ok) {
          throw new Error('No se puede cargar correctamente');
        }
        return response.json();
      })
      .then(data => setPizzas(data))
      .catch(error => {
        console.error('Error al cargar las pizzas', error);
        setError('Hubo un problema para cargar la información');
      });
  }, []);

  return (
    <div className="pizza-list">
      {error ? (
        <h3 style={{ color: 'red' }}>{error}</h3>
      ) : (
        <div className="card-container">
          {pizzas.map(pizza => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PizzaList;
