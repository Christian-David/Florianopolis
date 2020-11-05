import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import './home.css'

function Home() {
    return (
      <div>
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



      </div>


    );
  };

  export default Home;