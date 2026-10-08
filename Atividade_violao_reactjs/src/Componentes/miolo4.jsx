import Styles from './css/miolo4.module.css'
import face from '../assets/img/face.png'
import whats from '../assets/img/whats.png'
import insta from '../assets/img/insta.png'
function Miolo4() {
    return (
        <section className={Styles.miolo4} >
            <div className={Styles.formulario}>
                <label for="nome">Entre com o seu nome:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome aqui:"></input>

                    <label for="email">Entre com o seu e-mail:</label>
                    <input type="email" id="email" placeholder="Digite seu email aqui:"></input>

                    <textarea placeholder="Faça seu pedido por aqui:"></textarea>

                    <button type="submit">Enviar</button>
            </div>

            <div className={Styles.redes}>
                    <h2>Acesse também nossas redes socias:</h2>
                    <div className={Styles.icones}>
                        <a href="#"><img src = {face} alt="WhatsApp"></img></a>
                        <a href="#"><img src= {whats} alt="Instagram"></img></a>
                        <a href="#"><img src= {insta} alt="Facebook"></img></a>
                    </div>
                </div>
        </section>


    )
}

export default Miolo4