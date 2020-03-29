import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import {Link} from 'react-router-dom'

import './styles.css';

import HeroesIMG from '../../assets/heroes.png'
import LogoIMG from '../../assets/logo.svg'

export default function logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoIMG} alt="Be The Hero" />
                <form action="">
                    <h1>Faça seu Logon</h1>

                    <input type="text" placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color='#E02041' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={HeroesIMG} alt="Heroes" />
        </div>
    );
}