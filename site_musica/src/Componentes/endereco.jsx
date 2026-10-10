import Styles from './css/endereco.module.css'
function Endereco() {  
    return (
       <section className={Styles.enderecoContainer}>

            <div className={Styles.mapa}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6152.199393752634!2d-46.69505038992766!3d-23.528198738469072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1790738938310!5m2!1spt-BR!2sbr"allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>

            <div className={Styles.endereco}>
                <h1 className={Styles.enderecoh1}>
                    Nossa Loja - Instrumentos Musicais
                </h1>

                <p className={Styles.enderecoText}>
                    Na Percusamba, cada canto da loja tem um ritmo diferente. Localizada na Rua Tito, 54, na Pompéia,
                    pertinho do Teatro Cacilda Becker, nossa loja é o ponto de encontro de quem ama samba e percussão.
                    Entre pandeiros, tamborins e surdos, você encontra instrumentos de qualidade, atendimento acolhedor
                    e um espaço feito para descobrir o som que combina com a sua história. Venha nos visitar e deixe
                    a música encontrar você!
                </p>
            </div>
        </section>
    )
}

export default Endereco