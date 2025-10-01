import React from "react";
import Style from './css/Footer.module.css'
import Instagram from '../assets/images/insta.jfif'
import Facebook from '../assets/images/face.jfif'
import Tiktok from '../assets/images/tiktok.png'
import Whats from '../assets/images/whtas.png'

export default function Footer() {
    return(
        <footer>
            <p>Siga-nos em nossas redes sociais</p>

            <div className={Style.redes_sociais}>
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
                <img src={Tiktok} alt="Tiktok" />
                <img src={Whats} alt="Whatsapp" />
            </div>

            <p>Telefone: 11 99999-9999</p>
        </footer>
    )
}