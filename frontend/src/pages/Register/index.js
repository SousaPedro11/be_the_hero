import React from 'react';


import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import LogoIMG from '../../assets/logo.svg'

import "./styles.css"

export default function Regster() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoIMG} alt="Logo" />
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color='#E02041' />
                        Não tenho cadastro
                    </Link>
                </section>
                <form action="">
                    <input type="text" placeholder="Nome da ONG" />
                    <input type="text" placeholder="e-mail" />
                    <input type="text" placeholder="Whatsapp" />

                    <div className="input-group">
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}