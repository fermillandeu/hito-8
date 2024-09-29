import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cardpizza.css';

const CardPizza = ({ pizza, handleAddToCart }) => {
  return (
    <Card className="pizza-card"> {/* Asegúrate de que esta clase esté aquí */}
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>Precio: ${pizza.price}</Card.Text>
        <Link to={`/pizza/${pizza.id}`}>
          <Button variant="info">Ver Detalles</Button>
        </Link>
        <Button variant="primary" onClick={() => handleAddToCart(pizza)}>
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
