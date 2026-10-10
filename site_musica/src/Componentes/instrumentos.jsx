import Styles from './css/instrumentos.module.css'
import tantan from '../assets/img/tantan.png'
import pandeiro from '../assets/img/pandeiro2.png'
import surdo from '../assets/img/surdo.png'
import repique from '../assets/img/repique.png'
function Instrumentos(){
    return(
       <section className={Styles.instrumentos}>
            <div className={Styles.instrumentos_img}>
                <img src={tantan}></img>
                 <h3 className={Styles.instrumentos_text}> 
                    <p>TANTAN REBOLO CONTEMPORÂNEA </p>
                    <p> 6Ocm BRANCO CÔNICO</p>
                    <p> ALUMINIO</p>
                    </h3> 
                 
                <p className={Styles.instrumentos_text2}>
                    R$ 856,90
                </p>
            </div>
            <div className={Styles.instrumentos_img}>
                <img src={pandeiro}></img>
                 <h3 className={Styles.instrumentos_text}> 
                    <p>PANDEIRO CONTEMPORÂNEA</p>
                    <p>11" FORMICA BLACK CAFÉ</p>
                    <p>PRO</p>  
                    </h3> 
                 
                <p className={Styles.instrumentos_text2}>
                    R$ 750,90
                </p>
            </div>
            <div className={Styles.instrumentos_img}>
                <img src={surdo}></img>
                 <h3 className={Styles.instrumentos_text}> 
                    <p>SURDO CONTEMPORÂNEA 18</p>
                    <p>55cm PRETO COM TRIPÉ</p>
                    <p>ALUMINIO</p> 
                    </h3> 
                 
                <p className={Styles.instrumentos_text2}>
                    R$ 1528,00
                </p>
            </div>
            <div className={Styles.instrumentos_img}>
                <img src={repique}></img>
                 <h3 className={Styles.instrumentos_text}> 
                    <p>REPIQUE DE MÃO CONTEMPORÂNEA</p>
                    <p>30cm PRETO CRISTAL</p>
                    <p>ALUMINIO</p>
                    </h3> 
                 
                <p className={Styles.instrumentos_text2}>
                    R$ 627,00
                </p>
            </div>
            

            
       </section>
    )


}

export default Instrumentos