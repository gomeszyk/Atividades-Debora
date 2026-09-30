import face from '../assets/img/face.png'
import whats from '../assets/img/whats.png'
import insta from '../assets/img/insta.png'
import Styles from './css/footer.module.css'


function Footer() {
    return(
        <footer>
                <h2>Nossa Loja - Instrumentos Musicais</h2>
                <p>Rua Tito, 54 - Lapa</p>
                <p>São Paulo - Brasil</p>
                <div className={Styles.icones_footer}>
                    <a href="#"><img src={face} alt="Facebook"></img></a>
                    <a href="#"><img src={whats} alt="Whatsapp"></img></a>
                    <a href="#"><img src={insta} alt="Instagram"></img></a>
                </div>
            </footer>
    )
}

export default Footer