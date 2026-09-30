import Styles from './css/miolo3.module.css'
function Miolo3() {
    return (
        <section className={Styles.miolo3}>

            <div className={Styles.mapa}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6152.199393752634!2d-46.69505038992766!3d-23.528198738469072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1790738938310!5m2!1spt-BR!2sbr"allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>

            <div className={Styles.endereco}>
                <h1 className={Styles.enderecoh1}>
                    Nossa Loja - Instrumentos Musicais
                </h1>

                <p className={Styles.enderecoText}> 
                    Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do
                        século XIX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradavel
                        para toda a família!
                </p>
            </div>
        </section>
    )
}

export default Miolo3