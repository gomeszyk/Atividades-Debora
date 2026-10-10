import Styles from './css/sobrenos.module.css'
import Roda from '../assets/img/sobrenos.png'
function Sobrenos(){
    return (
        <section className={Styles.sobrenos}>
            <div className={Styles.sobrenos_text}>
                <h1>Percusamba - Quem Somos?</h1>
                <p>A Percusamba nasceu da paixão pelo samba e pela força de cada batida. Somos uma loja especializada em instrumentos de percussão, com produtos de qualidade para iniciantes, músicos e ritmistas. Aqui, cada cliente encontra o instrumento ideal para expressar sua criatividade.</p>
                <p>Em parceria com a Contemporânea, oferecemos instrumentos com ótima sonoridade, resistência e acabamento impecável. Mais do que vender, queremos ajudar você a encontrar seu ritmo e manter viva a energia, a cultura e a emoção da música brasileira.</p>
            </div>

            <div className={Styles.sobrenos_img}>
                <img src={Roda}></img>
            </div>
        </section>
    )
}

export default Sobrenos;