import Style from '../footer/Footer.module.css'
import whats from '../../assets/img/whats.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'

export default function Footer() {
    return (
        <footer>
        <div className={Style.footer_conteudo}>
            <h3>Nossa Loja - instrumentos Musicais</h3>
            <p>Rua Tito 54, lapa</p>
            <p>Sao Paulo - Brasil</p>
        </div>

        <div class='icones'>
            <img src={whats} alt="Ícone do WhatsApp" />
            <img src={insta} alt="Ícone do Instagram" />
            <img src={face} alt="Ícone do Facebook" />
        </div>
    </footer>
    )
}