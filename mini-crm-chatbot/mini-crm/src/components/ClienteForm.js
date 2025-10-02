import React, { useState } from 'react';

function ClienteForm({ addCliente }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre.trim() === '' || email.trim() === '') return;
    addCliente({ nombre, email });
    setNombre('');
    setEmail('');
  }

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: '1rem'}}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        style={{marginRight: '0.5rem'}}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{marginRight: '0.5rem'}}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ClienteForm;
