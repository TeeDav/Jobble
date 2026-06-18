import styles from './Landingpage.module.css'
import { Button } from './Button'

export function Landingpage() {
    return(
        <section className={styles.container}>
            <section className={styles.landing}>
                {/* <h1 className={styles.maincopy}>The AI agent that searches the entire job-verse 
                <br/>to find the perfect role<br/>for you</h1> */}
                <h1 className={styles.maincopy}>Navigate the entire <span className={styles.emphasis}></span>job-verse <br/>without <span className={styles.lighter}>switching tabs</span></h1>
                {/* <h1 className={styles.maincopy}>You don't have to <span className={styles.emphasis}>switch <br/>tabs</span> anymore</h1> */}
                {/* <h1 className={styles.maincopy}>Access the entire job-verse<br/>without switching tabs</h1> */}
                {/* <p className={styles.microcopy}>Get access to an AI agent that finds the perfect role for you</p> */}
                <p className={styles.microcopy}>Jobble unlocks the possibilities of agentic job search<br/>in your browser</p>
                
                <div className={styles.ctaWrapper}>
                    <Button name='Join Wait List' home='landing-action'/>
                    <Button name='Explore Demo' home='landing-action' theme='light'/>
                </div>
            </section>
            
        </section>
    )
}