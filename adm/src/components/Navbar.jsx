//Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>      
      <Link to="/Admin">Administrador</Link> 
      <Link to="/Funcionario">Funcionario</Link>
      <Link to="/Ocoadm">Ocorrencia adm</Link>
      <Link to="/Ocosemadm">Ocorrencia sem adm Tabelinha</Link>           
      <Link to="/Samuel10">Listar Processos</Link>      
      <Link to="/Samuel12">Listar Ocorrências</Link>      
    </nav>
  );
}

export default Navbar;
