import React, { useState } from "react";
import {apiRequest} from "../../service/api";
import './login.css'
import { useHistory } from "react-router-dom";


export default function Login() {
  const [username, setUsername]  = useState("");
  const [password, setPassword]  = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const authHandler = async () => {
    try {
      const userData = await apiRequest(
        `http://localhost:8090/usuario/autenticar?login=${username}&senha=${password}`,
        "post",
        { }
        
      );
      console.log(userData);
      const token = userData.token;
      const administrador = userData.administrador;
      const autenticado = userData.autenticado;
      const login = userData.login;
      const nome = userData.nome;
      
      console.log(token);
      console.log(administrador);
      console.log(autenticado);
      console.log(login);
      console.log(nome);


      localStorage.setItem('token',token);
      localStorage.setItem('administrador',administrador);
      localStorage.setItem('autenticado',autenticado);
      localStorage.setItem('login',login);
      localStorage.setItem('nome',nome);

      if(userData.autenticado){
        return (
            history.push('/home') 
        )
      }else{
        return (
          history.push('/')
        )
      }
      
    } catch (error) {
      setError(error.message);
    }
    
    
  };



  return (
    <div className='container' >

    <form className="form" onSubmit={e => { e.preventDefault(); authHandler();}}>
      
        <label>   
          Username
        </label>
        <input
        className='username'
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="tu nombre"
            value={username}
          ></input>
      
      
        <label>
          Password
          </label>
          <input
          className='password'
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="tu contraseña"
            value={password}
          ></input>
        <button type='submit' className='login' >Login</button>
      
    </form>
    </div>
  );
}
