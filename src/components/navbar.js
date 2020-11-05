import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


function Navbar() {
    return (
      
      <nav>
        <h2></h2>
  
  <ul>
    <li>
    <Link to='/home'>
          <span>Inicio</span>
      </Link>
    </li>
    <li>
      <Link to={"/incluide"}>
          Adicionar
      </Link>
     </li>
    <li>
    <Link to='/edit'>
          Editar
      </Link>
      </li>
    <li>
    <Link to='./delete'>
          Excluir
      </Link>
      </li>
    <li>
    <Link to='./paises'>
          paises
      </Link>
    </li>
  </ul>
 
</nav>


    );
  };

  export default Navbar;