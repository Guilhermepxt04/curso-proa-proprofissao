import React from "react";
import Style from "./css/Amarelo.module.css"
import Caixa from "./Caixa";

export default function Amarelo() {
    return(
        <section className={Style.fundo_amarelo}>
            <Caixa 
            estilo="caixa_azul"
            texto="Azul Escuro"/>

            <Caixa 
            estilo="caixa_verde"
            texto="Verde"/>

            
        </section>
    )
}