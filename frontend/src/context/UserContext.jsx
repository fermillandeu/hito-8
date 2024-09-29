import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [email, setEmail] = useState(null);

  // Manejo de login
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem('token', data.token);
        alert("Autenticación exitosa");
      } else {
        alert(data.error || "Error en autenticación");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Manejo de registro
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem('token', data.token);
        alert("Registro exitoso");
      } else {
        alert(data.error || "Error en registro");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    alert("Sesión cerrada");
  };

  // Obtener perfil del usuario
  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.email) {
        setEmail(data.email);
      } else {
        alert("No se pudo obtener el perfil");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
