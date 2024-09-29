import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const { register } = useContext(UserContext); // Usar la función register del contexto

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }
    register(email, password); // Usar la función de registro del contexto
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
