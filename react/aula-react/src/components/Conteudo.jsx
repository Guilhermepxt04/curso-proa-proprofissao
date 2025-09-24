import styles from './Conteudo.module.css'
import imagem from '../assets/img/sonic-devil.gif'

function Conteudo() {
    return(

        <section id="conteudo">
            
            <h2 className={styles.titulo_conteudo}>Gif Top</h2>
            <img src={imagem} alt="" />

        </section>

    )
}

export default Conteudo