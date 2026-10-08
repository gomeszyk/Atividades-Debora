import Styles from './css/miolo1.module.css'
import loja from '../assets/img/loja.jpg'
function Miolo1() {

    return (
        <section className={Styles.miolo1}>
            <div className={Styles.vermelho}>
                <h1 className={Styles.vermelhoTexth1}>Nossa Loja - Instrumentos Musicais</h1>
                <p className={Styles.vermelhoText}>
                    Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da
                    qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como:
                    teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão sopro e muito mais!
                    Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus
                    favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções
                    disponíveis e tenha em mãos instrumentos de ponta!</p>
            </div>

            <div className={Styles.imagem}>
                <img src={loja}></img>
            </div>


        </section>
    )

}

  export default Miolo1