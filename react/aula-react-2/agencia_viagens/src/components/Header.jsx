import React from "react";
import Style from "./css/Header.module.css"
import Lupa from "../assets/images/lupa.png"
import Logo from "../assets/images/viagens.png"

export default function Header() {

    return(

        <header>
            <img src={Logo} className={Style.logo}  alt="logo" />

            <nav className={Style.menu}>
                <a href="#home">Home</a>
                <a href="#escocia">Escocia</a>
                <a href="#gran">Grand Canyon</a>
                <a href="#china">Muralhas da China</a>
                <a href="#aruba">Aruba</a>
            </nav>

            <div className={Style.busca}>
                <input type="search" placeholder="busca" />
            </div>
            
            <img src={Lupa} className={Style.lupa} alt="pesquisa" />
        </header>

    )

}