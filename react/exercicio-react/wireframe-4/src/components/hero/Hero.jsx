import Style from '../hero/Hero.module.css'
import img from '../../assets/img/loja.jpg'


export default function Hero() {
    return (
        <section id="hero" className={Style.hero_style}>
            <div class="conteudo">
                <h1>Nossa loja - Instrumentos musicais</h1>

                <p>Se você é um amante de música, está em busca de um novo instrumento musical e não abre mão da
                    qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado,
                    piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos
                    instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e
                    os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha
                    em mãos instrumentos de ponta!</p>
            </div>

            <img src={img} alt="imagem da nossa loja, com varios instrumentos pendurados" />
        </section>
    )
}