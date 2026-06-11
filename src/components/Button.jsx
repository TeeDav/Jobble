import styles from './Button.module.css'
import { useState } from 'react'
import { navBtns } from './btnManager';

export function Button(props) {
    return(
        <>
            <button className={
                `${props.clicked ? styles.active : ''} 
                ${props.home == 'nav' ? styles.navBtn : ''} 
                ${props.home == 'card' ? styles.cardBtn : ''}
                ${props.theme == 'light' ? styles.light : ''}`
            }
                onClick={(e) => clickHandler(e)}
            >{`${props.name}`}</button>
        </>
    )
}