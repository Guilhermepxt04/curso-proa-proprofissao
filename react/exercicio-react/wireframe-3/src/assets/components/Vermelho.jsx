import React from "react";
import Style from "./css/Vermelho.module.css";
import Caixa from "./Caixa";

export default function Vermelho() {
    return(
        <section className={Style.fundo_vermelho}>
            <Caixa 
            estilo="caixa_rosa"
            texto="Rosa" />

            <Caixa 
            estilo="caixa_rosa"
            texto="Rosa" />
        </section>
    )
}