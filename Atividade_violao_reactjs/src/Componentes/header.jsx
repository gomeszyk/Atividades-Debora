import Styles from './css/header.module.css'
import guitarras_header from '../assets/img/guitarras_header.jpg'

function Header() {

    return(
        <header className={Styles.header_menu}>
                <nav className={Styles.nav_menu}>
                    <a href="#">Home</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Instrumento</a>
                    <a href="#">Endereço</a>
                    <a href="#">Contatos</a>
                </nav>
                <div className="fundo"></div>
            </header>

    )

}

export default Header 