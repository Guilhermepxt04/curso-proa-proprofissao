import Style from '../produtos/Produtos.module.css'
import ProdutoProps from '../ProdutoProps'

export default function Produtos() {

    return (
        <section id='produtos' className={Style.produtos_style}>
            <ProdutoProps />
            <ProdutoProps />
            <ProdutoProps />
            <ProdutoProps />
        </section>
    )
}