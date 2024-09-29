import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from '../src/components/profile/Profile';  
import Cart from './pages/cart/Cart';
import Pizza from './pages/pizza/Pizza';
import PizzaList from './pages/pizza/PizzaList'; // Importa tu nuevo componente
import Navbar from './components/navbar/Navbar';
import ProtectedRoute from './ProtectedRoute'; 

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pizza" element={<PizzaList />} /> {/* Nueva ruta para listar pizzas */}
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />  
        </Route>
      </Routes>
    </>
  );
}

export default App;
