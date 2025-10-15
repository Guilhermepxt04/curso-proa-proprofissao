import Style from '../header/Header.module.css'

export default function header() {
    return (

        <header className={Style.header}>
            <nav>
                <a href="#hero">Quem Somos</a>
                <a href="#produtos">Instrumentos</a>
                <a href="#endereco">Endereço</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>

    )

}