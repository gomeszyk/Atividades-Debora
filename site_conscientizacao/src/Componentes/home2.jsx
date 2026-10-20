import Styles from './css/home2.module.css'
import Seta from '../assets/img/seta.png'
function Home2() {
    return (
        <section className={Styles.home2}>
            <div className={Styles.home2text}>
                <h2 className={Styles.h2_home2}>
                    ESCOLHA POR  ONDE COMEÇAR
                </h2>

                <p className={Styles.p_home2}>
                    Cada tema tem sua própria página, com dados, história, sentimentos,
                    repertório e o que a lei garante.
                </p>
            </div>

            <div className={Styles.card}>


                <div className={Styles.card1}>
                    <p>
                        01
                    </p>

                    <h3>
                        RACISMO
                    </h3>

                    <p>
                        Da escravidão ao racismo estrutural:
                        entenda o que ainda pesa hoje.
                    </p>

                    <h4>
                        MARCO LEGAL
                    </h4>

                    <p>
                       Crime inafiançável e imprescritível pela Constituição de 1988. 
                    </p>

                    <a href="#">
                        Entrar <img src = {Seta}></img>
                    </a>

                </div>


            </div>


        </section>

    )

}

export default Home2