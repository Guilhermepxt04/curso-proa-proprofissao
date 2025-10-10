import {Link} from 'react-router-dom'
import React from "react";
import Style from "./css/Header.module.css"
import Lupa from "../assets/images/lupa.png"
import Logo from "../assets/images/viagens.png"

export default function Header() {

    return(

        <header>
            <img src={Logo} className={Style.logo}  alt="logo" />

            <nav className={Style.menu}>
                <Link to="/">Home</Link>
                <Link to="/Escocia">Escocia</Link>
                <Link to="/GrandCanyon">Grand Canyon</Link>
                <Link to="/MuralhaChina">Muralhas da China</Link>
                <Link to="/Aruba">Aruba</Link>
            </nav>

            <div className={Style.busca}>
                <input type="search" placeholder="busca" />
            </div>
            
            <img src={Lupa} className={Style.lupa} alt="pesquisa" />
        </header>

    )

}