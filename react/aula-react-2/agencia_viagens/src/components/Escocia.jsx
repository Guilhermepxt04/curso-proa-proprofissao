import React from "react";
import Style from "../components/css/Escocia.module.css"
import ComponenteProps from "./ComponenteProps";
import bandeiraEscocia from '../assets/images/bandeira-escocia.png'

export default function Escocia() {
    return(

        <section id="escocia" className={Style.fundo_escocia}>
                <h1>Venha conhecer a Escocia</h1>
                <ComponenteProps 
                    lugar="Escocia"
                    texto="A Escócia encanta com suas paisagens dramáticas, que combinam montanhas, lagos e castelos históricos. As Terras Altas revelam uma natureza selvagem e intocada, enquanto cidades como Edimburgo misturam charme medieval e cultura vibrante. O clima misterioso e as lendas celtas dão um toque mágico ao país, tornando cada canto digno de um conto."
                    bandeira={bandeiraEscocia} 
                    estilo="corpo_texto"
                    alt="Bandeira da Escocia"/>
        </section>

    )
}