import styles from './Card.module.css'
import { cardDetails } from '../data/card-data.js'
import { Card } from "./Card.jsx"

export function CardWrapper() {
    return(
        <div className={styles.cardHolder}>
            {/* <Card role={'Graphic Designer'}/> */}
            {cardDetails.map((card) => (
                <Card 
                    key={card.job_id}
                    company_name={card.company_name}
                    date_posted={card.date_posted}
                    role={card.role}
                    additional_details={card.additional_details}
                    rate={card.rate}
                    city={card.city}
                />
            ))}
        </div>
    )
}