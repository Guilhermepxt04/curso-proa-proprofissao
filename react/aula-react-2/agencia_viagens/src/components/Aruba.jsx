import React from "react";
import Style from "../components/css/Aruba.module.css"
import ComponenteProps from "./ComponenteProps";
import bandeiraAruba from "../assets/images/bandeira-aruba.png"

export default function Escocia() {
    return(

        <section id="aruba" className={Style.fundo_aruba}>
                <h1>Venha conhecer a Aruba!</h1>
                <ComponenteProps 
                lugar="aruba"
                texto="Aruba é uma ilha paradisíaca do sul do Caribe, conhecida por suas praias de areias brancas imaculadas e águas azul-turquesa cristalinas, como Palm Beach e Eagle Beach. Localizada fora do cinturão de furacões, o clima é ensolarado e seco o ano todo, garantindo dias perfeitos para o sol. Além do relaxamento à beira-mar, a ilha, parte do Reino dos Países Baixos, oferece uma rica cultura influenciada por europeus e caribenhos, perceptível na arquitetura colorida de sua capital, Oranjestad. É um destino popular para esportes aquáticos, especialmente mergulho e windsurfing, graças aos seus ventos constantes."
                bandeira={bandeiraAruba}
                estilo="corpo_texto"
                alt="Bandeira da Aruba"/>
        </section>

    )
}