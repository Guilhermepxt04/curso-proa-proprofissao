import React from "react";
import Style from "./css/Azul.module.css"
import Caixa from "./Caixa";

export default function Azul() {
    return(
        <section className={Style.fundo_azul}>
                    <Caixa 
                    estilo="caixa_branca"
                    texto="Branca" />
        
                    <Caixa 
                    estilo="caixa_branca"
                    texto="Branca" />

                    <Caixa 
                    estilo="caixa_branca"
                    texto="Branca" />

                    <Caixa 
                    estilo="caixa_branca"
                    texto="Branca" />
        </section>
    )
}