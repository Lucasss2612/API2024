import React from 'react';

function RegisterPage() {
  return (
    <div className="container">
      <h2>Registrarse</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username">Nombre de Usuario</label>
          <input type="text" id="username" className="form-control" placeholder="Ingresa tu nombre de usuario" />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" className="form-control" placeholder="Ingresa tu correo" />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" className="form-control" placeholder="Contraseña" />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;
