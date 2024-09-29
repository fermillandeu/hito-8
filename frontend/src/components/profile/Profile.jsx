import React from 'react';

const Profile = () => {
  const userEmail = "pizza@mamamia.com"; 

  const handleLogout = () => {
  
    alert("Sesión cerrada");
  };

  return (
    <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      <p>Email: {userEmail}</p>
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
