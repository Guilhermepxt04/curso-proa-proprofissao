import React from "react";
import Style from '../components/css/ComponenteProps.module.css'

export default function ComponenteProps({lugar,texto,bandeira, estilo, alt}){
    return(

        <div className={Style[estilo]}>
            <h2> Venha conhecer esse lugar incrível {lugar}!!</h2>
            <p>{texto}</p>
            <img src={bandeira} alt={alt}  className={Style.imagem_props}/>
        </div>

    )
}