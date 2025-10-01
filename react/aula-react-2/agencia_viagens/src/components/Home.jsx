import React from "react";
import Style from './css/Home.module.css'
import Img from '../assets/images/mala-marrom.png'

export default function Home() {
    return(

        <section className={Style.fundo_home}>
            <img src={Img} className={Style.mala} alt="mala de viagens" />

            <div className={Style.conteudo}>
                <h1>Encontre aqui a viagem de seus sonhos</h1>

                <p>Transforme seus sonhos em realidade! Explore destinos paradisíacos, conheça novas culturas e crie memórias inesquecíveis. Nossa plataforma oferece as melhores opções de pacotes turísticos, com preços acessíveis e atendimento personalizado para tornar sua viagem perfeita do início ao fim.</p>
            </div>
        </section>

    )
}