import React, { useState, useEffect } from 'react';
import ClienteForm from './ClienteForm';

function CRMData() {
  const [clientes, setClientes] = useState([]);

  // Cargar clientes de localStorage
  useEffect(() => {
    const stored = localStorage.getItem('clientes');
    if(stored) setClientes(JSON.parse(stored));
  }, []);

  // Guardar clientes en localStorage
  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }, [clientes]);

  const addCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  }

  const removeCliente = (index) => {
    const newClientes = [...clientes];
    newClientes.splice(index, 1);
    setClientes(newClientes);
  }

  return (
    <div className="crm-data">
      <h2>Clientes</h2>
      <ClienteForm addCliente={addCliente} />
      <ul>
        {clientes.map((cliente, i) => (
          <li key={i} style={{marginBottom: '0.5rem'}}>
            {cliente.nombre} - {cliente.email}
            <button onClick={() => removeCliente(i)} style={{marginLeft: '0.5rem'}}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CRMData;
