import styles from './Nav.module.css'
import { Header } from './Header'
import { Button } from './Button'
import { SearchBar } from './SearchBar'
import { Children, useState } from 'react'

export function Nav() {
    const parent = 'nav'
    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState(true)

    function setNavBtns() {
        //change navBtns
        //console.log(navBtns)
        //navBtns.btnArr.find((btnName == _name))
    }


    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Header />
                <SearchBar />
                <div className={styles.btnWrapper}>
                    <Button name='All' home={parent} clicked={true} clickHandler={setNavBtns}/>
                    <Button name='Remote' home={parent} clicked={false} clickHandler={setNavBtns}/>
                    <Button name='On-site' home={parent} clicked={false} clickHandler={setNavBtns}/>
                    <Button name='Contract' home={parent} clicked={false} clickHandler={setNavBtns}/>
                </div>
            </div>
            <div className={styles.profile}>
                <Button name='Login' theme='light'/>
                <Button name='Sign-up' theme='dark'/>
            </div>
            <img className={styles.hamburger} src={`src/assets/icon-hamburger.svg`} />
        </div>
    )
}