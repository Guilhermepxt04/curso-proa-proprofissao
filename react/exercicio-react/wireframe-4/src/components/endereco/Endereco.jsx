import Style from '../endereco/Endereco.module.css'

export default function Endereco() {

    return (

         <section id="endereco" className={Style.endereco_style}>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.5320543772682!2d-46.692768710589604!3d-23.527890391687922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1760047797454!5m2!1spt-BR!2sbr"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>


            <div class="conteudo">
                <h2>Nossa loja - Instrumentos musicais</h2>

                <p>Está atuada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século
                    XIX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradavel para toda a
                    familia!</p>
            </div>

        </section>

    )

}