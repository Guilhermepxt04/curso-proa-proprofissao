import React from "react";
import Style from "./css/Caixa.module.css";


export default function Caixa({estilo, texto}){
    return(

        <div className={Style[estilo]}>
            <p>{texto}</p>
        </div>

    )
}