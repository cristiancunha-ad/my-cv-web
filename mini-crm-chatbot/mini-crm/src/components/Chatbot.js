import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola, ¿en qué puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if(input.trim() === '') return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'Estoy procesando tu mensaje...' }]);
    }, 500);
  }

  return (
    <div className="chatbot">
      <h2>Chatbot</h2>
      <div style={{flexGrow: 1, overflowY: 'auto', marginBottom: '1rem'}}>
        {messages.map((msg, index) => (
          <div key={index} style={{textAlign: msg.from === 'bot' ? 'left' : 'right', margin: '0.3rem 0'}}>
            <span style={{background: msg.from === 'bot' ? '#2563eb' : '#00f5d4', padding: '0.3rem 0.6rem', borderRadius: '0.5rem', display: 'inline-block'}}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{display: 'flex', gap: '0.5rem'}}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} style={{flexGrow: 1, padding: '0.4rem', borderRadius: '0.4rem', border: '1px solid #00f5d4', background: '#1a1a2e', color: '#fff'}} />
        <button onClick={sendMessage} style={{padding: '0.4rem 0.8rem', borderRadius: '0.4rem', border: 'none', background: '#00f5d4', color: '#0f0f1a'}}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;
