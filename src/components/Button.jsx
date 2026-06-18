import styles from './Button.module.css'
import { useState } from 'react'
import { navBtns } from './btnManager';

export function Button(props) {
    return(
        <>
            <button className={
                `${props.clicked ? styles.active : ''}
                ${props.home == 'home-nav' ? styles.navLinks : ''} 
                ${props.home == 'nav-action' ? styles.actionBtn : ''} 
                ${props.home == 'landing-action' ? styles.landingActionBtn : ''} 
                ${props.home == 'nav' ? styles.navBtn : ''} 
                ${props.home == 'card' ? styles.cardBtn : ''}
                ${props.theme == 'light' ? styles.light : ''}`
            }
                onClick={(e) => props.clickHandler(e)}
            >{`${props.name}`}</button>
        </>
    )
}