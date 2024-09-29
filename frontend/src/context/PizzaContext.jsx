import React, { createContext, useContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]); 
  const [error, setError] = useState(null); 
  
  const fetchPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas'); 
      const data = await response.json();
      setPizzas(data);
      console.log("Pizzas loaded:", data);
    } catch (error) {
      setError("Error al cargar las pizzas");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []); 
  const addPizza = (pizza) => {
    setPizzas((prevPizzas) => [...prevPizzas, pizza]);
  };

  const removePizza = (pizzaId) => {
    setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza.id !== pizzaId));
  };

  return (
    <PizzaContext.Provider value={{ pizzas, addPizza, removePizza, error }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);

export default PizzaContext;
