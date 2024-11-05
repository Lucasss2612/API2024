import React from 'react';

function VendorDashboard() {
  return (
    <div className="container">
      <h2>Dashboard del Vendedor</h2>
      <p>Bienvenido a tu panel de control. Aquí puedes gestionar tus videojuegos, ver estadísticas y realizar otras acciones.</p>
      <div className="dashboard-section">
        <h3>Estadísticas de tus Videojuegos</h3>
        {/* Ejemplo de estructura para estadísticas */}
        <div className="card">
          <h4>Nombre del Juego</h4>
          <p>Visualizaciones: 1234</p>
          <p>Compras: 100</p>
          <p>En wishlist: 50</p>
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
