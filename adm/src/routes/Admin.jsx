import React from 'react';
import './Admin.css';

const Admin = () => {
  const adminInfo = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    birthDate: '1990-01-01',
    position: 'Administrator',
    username: 'johndoe'
  };

  return (
    <div className="admin-container">
      <a href="#" className="main-link">LOGOUT</a>
      <div className="admin-info">
        <h2>Informação Administrador</h2>
        <p><strong>Nome Completo:</strong> {adminInfo.fullName}</p>
        <p><strong>Email:</strong> {adminInfo.email}</p>
        <p><strong>Data de Nascimento:</strong> {adminInfo.birthDate}</p>
        <p><strong>Cargo:</strong> {adminInfo.position}</p>
        <p><strong>Login:</strong> {adminInfo.username}</p>
      </div>      
      <div className="button-grid">
        <a href="#" className="grid-link">Atribuir Ocorrência</a>
        <a href="#" className="grid-link">Atribuir Processos</a>
        <a href="#" className="grid-link">Listar Todas as Ocorrências</a>
        <a href="#" className="grid-link">Listar Todos Processos</a>
        <a href="#" className="grid-link">Listar Ocorrências por ID</a>
        <a href="#" className="grid-link">Listar Processos por ID</a>
        <a href="http://localhost:5173/Samuel7" className="grid-link">Listar Ocorrências sem Admin</a>
        <a href="http://localhost:5173/Samuel11" className="grid-link">Listar Processos do Admin</a>
      </div>
      <a href="http://localhost:5173/cadastro" className="main-link">Cadastrar Administrador</a>
    </div>
  );
};

export default Admin;
