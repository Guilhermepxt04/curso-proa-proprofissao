import React from "react";
import Style from "../components/css/Muralha.module.css"
import ComponenteProps from "./ComponenteProps";
import bandeiraChina from "../assets/images/bandeira-china.png"

export default function Escocia() {
    return(

        <section id="china" className={Style.fundo_muralha}>
                <h1>Venha conhecer a Muralha da China!</h1>
                <ComponenteProps 
                lugar="Muralha da China"
                texto="A Grande Muralha da China é, na verdade, um complexo sistema de fortificações construído ao longo de séculos, sendo a maior estrutura feita pelo homem no planeta. Sua construção começou por volta do século VII a.C., com o objetivo principal de proteger os estados e impérios chineses contra invasões de tribos nômades do norte. Embora grande parte do que se vê hoje remonte à Dinastia Ming (1368-1644), a muralha estende-se por milhares de quilômetros, atravessando montanhas e desertos. É um símbolo icônico da história chinesa e um Patrimônio Mundial da UNESCO, sendo um dos destinos turísticos mais visitados do mundo."
                bandeira={bandeiraChina}
                estilo="corpo_texto"
                alt="Bandeira da china"/>
        </section>

    )
}