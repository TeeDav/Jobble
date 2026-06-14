import styles from './Card.module.css'
import { Card } from "./Card.jsx"
import { useState } from 'react'

export function CardWrapper(props) {
    return(
        <div className={styles.cardSection}>
            <div className={styles.cardHolder}>
                {props.jobs.map((job) => (
                    <Card 
                        logo={job.logo}
                        key={job.job_id}
                        company_name={job.company_name}
                        date_posted={job.date_posted}
                        role={job.role}
                        additional_details={job.additional_details}
                        rate={job.rate}
                        city={job.city}
                    />
                ))}
            </div>
        </div>
    )
}