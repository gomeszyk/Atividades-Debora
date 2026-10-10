import Styles from './css/header.module.css'
import header from '../assets/img/header.png'
function Header() {
    return (
        <header>
            <div className={Styles.header_menu}>
                <div className={Styles.nav_menu}>
                    <a href='/'>Home</a>
                    <a href='/sobrenos'>Quem Somos</a>
                    <a href='/instrumentos'>Instrumentos</a>
                    <a href='/endereco'>Endereço</a>
                    <a href='/contato'>Contatos</a>
                </div>
            </div>
        </header>

    )

}

export default Header