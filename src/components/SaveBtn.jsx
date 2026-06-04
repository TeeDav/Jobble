import { useState } from 'react'
import styles from './Card.module.css'

export function SaveBtn() {
    const [saved, setSaved] = useState(false)
    const [saveState, setSaveState] = useState('save')
    
    // function saveJob() {
    //     const saveJobBtn = document.getElementById('saveJob');
    //     if(saved == true) {
    //         saveJobBtn.classList.add('saved')
    //     }
    // }

    return (
        <button
            id='saveJob' 
            className={`${styles.saveBtn} ${saved ? styles.saved : ''}`}
            onClick={() => setSaved(!saved)}
        >
            {saved ? 'saved' : 'save'}
        </button>
    )
}