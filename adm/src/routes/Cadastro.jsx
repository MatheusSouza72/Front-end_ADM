//Cadastro.jsx
import React, { useState } from 'react';
import './cadastro.css';

const Cadastro = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [position, setPosition] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de cadastro
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Birth Date:', birthDate);
    console.log('Position:', position);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="cadastro-container">
    <h1>Cadastrar Novo ADM</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h2>Cadastro</h2>
          <label htmlFor="fullName">Nome Completo:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Data de Nascimento:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Cargo:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Login:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <a className="submit-link" href="http://localhost:5173/Admin">Cadastrar</a>
        </div>
      </form>
    </div>   
  );
};

export default Cadastro;
