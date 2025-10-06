import React from "react";
import Style from "../components/css/GrandCanyon.module.css"
import ComponenteProps from "./ComponenteProps";
import bandeiraEUA from '../assets/images/bandeira-eua.jpg'

export default function Escocia() {
    return(

        <section className={Style.fundo_gran}>
                <h1>Venha conhecer o Gran Canyon!</h1>
                <ComponenteProps 
                lugar="Grand Canyon"
                texto="O Grand Canyon é uma das maravilhas naturais mais espetaculares do mundo, esculpida pelo Rio Colorado ao longo de milhões de anos. Suas imponentes camadas de rocha revelam uma história geológica profunda e colorida, que se estende por quase 2 bilhões de anos. Localizado no Arizona, EUA, o cânion atrai milhões de visitantes anualmente com suas vistas panorâmicas de tirar o fôlego. O parque oferece oportunidades para caminhadas, passeios de helicóptero e rafting, permitindo explorar sua vasta beleza e escala. É um testemunho impressionante do poder da erosão e da persistência da natureza."
                bandeira={bandeiraEUA}
                estilo="corpo_texto"
                alt="Bandeira do EUA"/>
        </section>

    )
}