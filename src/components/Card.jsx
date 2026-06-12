import { useState } from 'react'
import styles from './Card.module.css'
import { SaveBtn } from './SaveBtn.jsx';
import { Button } from './Button.jsx';

export function Card (props) {
    return(
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                    <div className={styles.logoHolder}>
                        <img src={props.logo} alt="" className={styles.image}/>
                    </div>
                    <SaveBtn />
                </div>
                <div className={styles.cardDetails}>
                    <div className={styles.companyDetails}>
                        <span className={styles.companyName}>{props.company_name}</span>
                        <span className={styles.postingDate}>{props.date_posted}</span>
                    </div>
                    <h2 className={styles.role}>{props.role}</h2>
                    <div className={styles.roleDetails}>
                        {Object.entries(props.additional_details).map(details => (
                            details[1] !== '' ? 
                            <div key={details[1]} className={styles.roleTag}>{details[1]}</div>
                            : null
                        ))}
                        {/* {props.additional_details.work_mode !== '' ? 
                            <div className={styles.roleTag}>{props.additional_details.work_mode}</div>
                            : null
                        }
                        {props.additional_details.level !== '' ? 
                            <div className={styles.roleTag}>{props.additional_details.level}</div>
                            : null
                        }
                        {props.additional_details.location !== '' ? 
                            <div className={styles.roleTag}>{props.additional_details.location}</div>
                            : null
                        } */}
                    </div>
                </div>
            </div>
            <div className={styles.cardFoot}>
                <div className={styles.jobDetails}>
                    <p className={styles.rate}>{props.rate}</p>
                    <p className={styles.location}>{props.city}</p>
                </div>
                {/* <button className={styles.apply}>Apply Now</button> */}
                {/* <Button home='card' name='View'/> */}
                <Button name='View'/>
            </div>
        </div>
    )
}