import Styles from './css/home.module.css'
import pandeiro from '../assets/img/fundo_home.png'
function Home() {
    return (
        <section className={Styles.home}>
            <div className={Styles.home_text}>
                <h1>O samba é nossa Raíz</h1>
                <div className="home_text">
                    <p>O meu lugar</p>
                    <p>É caminho de Ogum e Iansã</p>
                    <p>Lá tem samba até de manhã</p>
                    <p>Uma ginga em cada andar</p>
                    <p>O meu lugar</p>
                    <p>É cercado de luta e suor</p>
                    <p>Esperança num mundo melhor</p>
                </div>
            </div>

            <div className={Styles.home_img}>
                <img src={pandeiro}></img>
            </div>

        </section>
    )
}

export default Home;