import Style from '../contato/Contato.module.css'
import whats from '../../assets/img/whats.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'


export default function Contato() {
    return (
        <section id="contato" className={Style.contato_style}>

            <div className={Style.conteudo_form}>
                <form action="">

                    <div>
                        <label for="nome">Entre com o seu nome:</label>
                        <input type="text" id="nome" placeholder="Digite seu nome aqui" required />
                    </div>

                    <div>
                        <label for="email">Entre com o seu e-mail:</label>
                        <input type="email" id="email" placeholder="Digite seu email aqui" required />
                    </div>

                    <label for="pedido">Faça seu pedido por aqui:</label>
                    <textarea name="pedido" id="pedido"></textarea>

                    <button type="submit">Enviar</button>

                </form>
            </div>

            <div className={Style.social}>
                <div className={Style.redes_sociais}>
                    <h2>Acesse também nossas redes sociais:</h2>
                    <div class='icones'>
                        <img src={whats} alt="Ícone do WhatsApp" />
                        <img src={insta} alt="Ícone do Instagram" />
                        <img src={face} alt="Ícone do Facebook" />
                    </div>
                </div>
            </div>

        </section>
    )
}