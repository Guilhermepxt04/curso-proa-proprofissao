import React from "react";
import Imagem from '../assets/img/camera.jpg'
import Style from './Camera.module.css'

export default function Camera() {
    return(
        <div className={Style.camera}>
            <img src={Imagem} alt="" />
        </div>
    )
}