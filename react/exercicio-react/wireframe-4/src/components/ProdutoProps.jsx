import Style from '../components/ProdutosProps.module.css'
import img from '../assets/img/guitarrinha.jpg'


export default function ProdutosProps() {
    return (
            <div className={Style.card}>
                <img src={img} alt="guitarrinha" />
                <h1>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</h1>
                <p> R$ 989,50</p>
            </div>

    )
}