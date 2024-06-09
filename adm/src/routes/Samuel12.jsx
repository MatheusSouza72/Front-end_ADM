import React from 'react';
import './Samuel12.css';

const Samuel12 = () => {
  return (
    <div className="table-container">
      <div className="t">
        <h1>Listar Occorrências Com Admin</h1>
      </div>
      <div className="pq">
        <div className="p">          
          <p>Login: M5678</p>
          <p>Cargo: Administrador Master</p>
          <p>Nome: Samuel Ruan</p>
          <p>Data de Nascimento: 2006-02-01</p>
          <p>Telefone: (81) 9 8513-3376</p>
          <p>Email: usuario@provedor.com</p>
        </div>
        <div className="q">
          <p>Codigo:</p>
          <p>Nome Solicitante:</p>
          <p>Contato:</p>
          <p>Descrição:</p>
          <p>Data de Abertura:</p>
          <p>Data de Fechamento:</p>
          <p>Descrição:</p>
          <p>Observação:</p>
          <p>Login Admin:</p>
          <p>Status:</p>
        </div>
      </div>
      <div className="btn-container">
        <button>Editar</button>
        <button>Salvar</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Samuel12;
