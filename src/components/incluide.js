import React, {useState} from 'react'
import './incluide.css'

export default function Incluide(){
    const [nome, setNome]  = useState("");
    const [sigla, setSigla]  = useState("");

    
    return(
        <div className="incluir" >
            <h2 className="incluirTitulo" >Incluir</h2>
            <label>   
          Nome
        </label>
        <input
        className='nomePais'
            type="text"
            name="nome"
            onChange={e => setNome(e.target.value)}
            placeholder="Nome do pais"
            value={nome}
          ></input>

        <label>   
          Sigla
        </label>
        <input
        className='sigla'
            type="text"
            name="nome"
            onChange={e => setSigla(e.target.value)
            }
            placeholder="Nome do pais"
            maxLength='2'
            value={sigla}
          ></input>
          <button type='submit' className='adicionar' >Adicionar
          </button>
        </div>
    )
}