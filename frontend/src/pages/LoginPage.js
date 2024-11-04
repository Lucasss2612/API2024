// LoginPage.js
import React from 'react';

function LoginPage() {
  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" className="form-control" placeholder="Ingresa tu correo" />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" className="form-control" placeholder="Contraseña" />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
