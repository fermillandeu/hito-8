import React, { useEffect, useState, useContext } from 'react';
import Header from "../../components/header/Header";
import CardPizza from '../../components/cardpizza/CardPizza';
import CartContext from '../../context/CartContext';
import './home.css'; // Asegúrate de importar el CSS

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const { setCart } = useContext(CartContext); 

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
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

  const handleAddToCart = (pizza) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const pizzaInCart = savedCart.find(p => p.id === pizza.id);

    if (pizzaInCart) {
      const updatedCart = savedCart.map(p =>
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart); 
    } else {
      const updatedCart = [...savedCart, { ...pizza, count: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart); 
    }
  };

  return (
    <>
      <div className="home-container">
        <Header />
        {error ? (
          <h3 className="error-message">{error}</h3>
        ) : (
          <div className="card-container"> {/* Contenedor para las tarjetas */}
            {pizzas.map(pizza => (
              <CardPizza 
                key={pizza.id} 
                pizza={pizza} 
                handleAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
